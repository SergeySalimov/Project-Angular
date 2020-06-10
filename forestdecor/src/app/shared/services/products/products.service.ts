import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductPlacer } from '../../models/productsPlacer';
import { environment } from '../../../../environments/environment';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { PhotoUrl } from '../../models/photo-url.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Show } from '../../models/showInCatalog';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products: Product[];
  private accumulator: Product[];
  private photoUrls: PhotoUrl[];
  private productsPlacer: ProductPlacer[] = [];
  private _uploadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _showInCatalog: BehaviorSubject<Show | null> = new BehaviorSubject<Show | null>(null);

  constructor(private http: HttpClient, private auth: AuthService, private storage: AngularFireStorage) {
    this.auth.autoLogin();
    this.auth.getAdminsFromServer().pipe(take(1)).subscribe(() => {});
    this.getProductsFromServer().pipe(take(1)).subscribe(() => {
      this.getPhotosFromServer().pipe(take(1)).subscribe((data: PhotoUrl[]) => {
        this.photoUrls = data;
        this.addPhotoUrlsToProducts(data);
      });
    });
  }

  get products() {
    return [...this._products];
  }

  get uploadProgress(): Observable<number> {
    return this._uploadProgress.asObservable();
  }

  get showInCatalog(): Observable<Show | null> {
    return this._showInCatalog.asObservable();
  }

  setModalStatus(status: Show | null) {
    this._showInCatalog.next(status);
  }

  // Server block
  getPhotosFromServer(): Observable<PhotoUrl[]> {
    return this.http.get<PhotoUrl[]>(`${environment.firebase.databaseURL}/photos.json`).pipe(
      map(data => {
        const photoUrl: PhotoUrl[] = [];
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            const [fakeCopy, urlArr] = [data[key], []];
            for (let key2 in fakeCopy) {
              if (fakeCopy.hasOwnProperty(key2)) {
                urlArr.push(...fakeCopy[key2])
              }
            }
            photoUrl.push({urlName: key, urlList: [...new Set(urlArr)]});
          }
        }
        return photoUrl;
      }),
    )
  }

  getProductsFromServer(): Observable<Product[]> {
    // const headers: HttpHeaders = new HttpHeaders({[environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.get<Product[]>(`${environment.firebase.databaseURL}/products.json`).pipe(
      tap((prd: Product[]) => this._products = [...prd]),
      tap(() => this.createAllUrls()),
    );
  }

  uploadFile(file, folder: string) {
    const filePath = `/${folder}/${file.name}`;
    const ref: AngularFireStorageReference = this.storage.ref(filePath);
    const task: AngularFireUploadTask = ref.put(file);
    task.percentageChanges().subscribe(number => this._uploadProgress.next(number));
    task.then((data) => {
      const filePath = `/${folder}/${data.metadata.name}`;
      this.storage.ref(filePath).getDownloadURL().pipe(
        tap(() => setTimeout(() => {this._uploadProgress.next(0)}, 2000)),
        switchMap((url: string) => this.sendPhotoUrlToServer(folder, [url])),
      )
        .subscribe(data => {
          this.getPhotosFromServer().pipe(take(1)).subscribe((data: PhotoUrl[]) => {
            this.photoUrls = data;
            this.addPhotoUrlsToProducts(data);
          });
        });
    });
  }

  updatePhotoUrl(folder, newestData) {
    return this.deletePhotoFromServer(folder).pipe(
      switchMap(() => this.sendPhotoUrlToServer(folder, newestData))
    );
  }

  sendPhotoUrlToServer(folder: string, data) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token', [environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.post<string[]>(`${environment.firebase.databaseURL}/photos/${folder}.json`, data, {headers});
  }

  deletePhotoFromServer(folder: string) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token', [environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.delete<string[]>(`${environment.firebase.databaseURL}/photos/${folder}.json`, {headers});
  }

  //Calculations
  addPhotoUrlsToProducts(photosUrls: PhotoUrl[]) {
    this.productsPlacer.forEach((item: ProductPlacer) => {
      const photoUrls: PhotoUrl = photosUrls.filter((url: PhotoUrl) => url.urlName === item.urlName)[0];
      if (!!photoUrls) {
        item.content[0].photos = [];
        item.content[0].photos.push(photoUrls);
      }
    });
  }

  getProductUrlInfo(url): ProductPlacer {
    return this.productsPlacer.filter(item => item.urlName === url)[0];
  }

  createAllUrls() {
    this.createPlacingProduct('all', 'весь каталог');
    this.createUrlsInformation();
  }

  createUrlsInformation(data: Product[] = this._products, parents: string[] = []): void {
    for (const item of data) {
      if (item.children) {
        this.createPlacingProduct(item.urlName, item.name, [...parents]);
        parents.push(item.urlName);
        this.createUrlsInformation(item.children, [...parents]);
        parents.pop();
      } else {
        this.createPlacingProduct(item.urlName, item.name, [...parents]);
      }
    }
  }

  createPlacingProduct(urlName: string, name: string, parents: string[] = []): void {
    const content: Product[] = this.getAllElements(urlName);
    // this.prdTemp = {name, urlName, content, parents};
    this.productsPlacer.push({urlName, name, content, parents});
  }

  getAllElements(forUrl: string): Product[] {
    return this.initProducts(this._products, forUrl);
  }

  initProducts(data: Product[], url = 'all'): Product[] {
    this.accumulator = [];
    url === 'all' ? this.parsingProducts(data) : this.findUrlContent(data, url);
    return this.accumulator;
  }

  findUrlContent(data: Product[], url: string): void {
    for (const item of data) {
      if (item.children) {
        if (item.urlName === url) {
          this.initProducts(item.children);
          break;
        }
        this.findUrlContent(item.children, url);
      } else {
        if (item.urlName === url) {
          this.accumulator.push(item);
          break;
        }
      }
    }
  }

  parsingProducts(data: Product[]): void {
    for (const item of data) {
      item.children ? this.parsingProducts(item.children) : this.accumulator.push(item);
    }
  }
}
