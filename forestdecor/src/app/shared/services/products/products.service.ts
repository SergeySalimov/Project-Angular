import { Injectable } from '@angular/core';
import { ProductPlacer } from '../../models/productsPlacer';
import { environment } from '../../../../environments/environment';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { PhotoUrl } from '../../models/photo-url.model';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Show } from '../../models/showInCatalog';
import { Parent, Product } from '../../models/product';
import { UrlOfCatalog } from '../../models/url-of-catalog';
import { TreeData } from '../../models/tree-data.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _urlsOfCatalog: BehaviorSubject<UrlOfCatalog[]> = new BehaviorSubject<UrlOfCatalog[]>([]);
  private _treeData: BehaviorSubject<TreeData[]> = new BehaviorSubject<TreeData[]>([]);

  get urlsOfCatalog(): UrlOfCatalog[] {
    return this._urlsOfCatalog.value;
  }

  get treeData(): TreeData[] {
    return this._treeData.value;
  }

  //ToDo rewrite
  private photoUrls: PhotoUrl[];
  private productsPlacer: ProductPlacer[] = [];
  private _uploadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private _showInCatalog: BehaviorSubject<Show | null> = new BehaviorSubject<Show | null>(null);

  constructor(private http: HttpClient, private auth: AuthService, private storage: AngularFireStorage) {
    this.auth.autoLogin();
    this.auth.getAdminsFromServer().pipe(take(1)).subscribe();
    this.getProductsFromServer().pipe(take(1)).subscribe((products: Product[]) => {
      this.createUrlsOfCatalog(products);
      this.createTreeDataForCatalogNavigation(products);
    });
    //old code
    // this.getProductsFromServer().pipe(take(1)).subscribe(() => this.updatePhotos());
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

  // Server block new
  getProductsFromServer(): Observable<Product[]> {
    // const headers: HttpHeaders = new HttpHeaders({[environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.get<Product[]>(`${environment.firebase.databaseURL}/catalogProducts.json`);
  }

  // old
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
        .subscribe(data => this.updatePhotos());
    });
  }

  updatePhotos() {
    this.getPhotosFromServer().pipe(take(1)).subscribe((data: PhotoUrl[]) => {
      this.photoUrls = data;
      this.addPhotoUrlsToProducts(data);
    });
  }

  updatePhotoUrlOnServer(folder, newestData: string[]) {
    return this.deletePhotoFromServer(folder).pipe(
      switchMap(() => this.sendPhotoUrlToServer(folder, newestData))
    );
  }

  sendPhotoUrlToServer(folder: string, data: string[]) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token', [environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.post<string[]>(`${environment.firebase.databaseURL}/photos/${folder}.json`, data, {headers});
  }

  deletePhotoFromServer(folder: string) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token', [environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.delete<string[]>(`${environment.firebase.databaseURL}/photos/${folder}.json`, {headers});
  }

  //Calculations new
  createUrlsOfCatalog(products: Product[]) {
    const newUrlsOfCatalog: UrlOfCatalog[] = [{urlName: 'all', name: 'весь каталог', parents: null, content: products}];
    products.forEach((product: Product) => {

      if (product.parents?.length > 0) {
        // create parent url of Catalog
        let parentsHistory: string[] | null = [];
        product.parents.forEach((parentUrl: Parent) => {
          let index = newUrlsOfCatalog.findIndex(item => item.urlName === parentUrl.urlName);
          if (index === -1) {
            // create new parent url
            newUrlsOfCatalog.push({
              urlName: parentUrl.urlName,
              name: parentUrl.name,
              parents: (parentsHistory.length > 1) ? [...parentsHistory] : null,
              content: [product]
            });
          } else {
            newUrlsOfCatalog[index].content.push(product);
          }
          parentsHistory.push(parentUrl.urlName);
        });
      }
      // create single product url of Catalog
      let parents: string[] | null = [];
      (!!product.parents && product.parents.length > 0) ?
        product.parents.forEach((item: Parent) => parents.push(item.urlName)) : parents = null;

      newUrlsOfCatalog.push({
        urlName: product.urlName,
        name: product.name,
        parents,
        content: [product]
      });
    });
    this._urlsOfCatalog.next(newUrlsOfCatalog);
  }

  getProductUrlInfo(url: string): UrlOfCatalog {
    return this.urlsOfCatalog.filter(item => item.urlName === url)[0];
  }

  createTreeDataForCatalogNavigation(products: Product[]) {
    const newTreeData: TreeData[] = [];
    products.forEach((prd: Product) => {
      const treeDataElement: TreeData = {name: prd.name, urlName: prd.urlName};
      if (!prd.parents || prd.parents.length === 0) {
        newTreeData.push(treeDataElement);
      } else if (prd.parents.length === 1) {
        let index: number = newTreeData.findIndex(item => item.urlName === prd.parents[0].urlName);
        if (index === -1) {
          newTreeData.push({name: prd.parents[0].name, urlName: prd.parents[0].urlName, children: [treeDataElement]});
        } else {
          newTreeData[index].children.push(treeDataElement);
        }
      } else {
        // 2 parents or more (more than 2 don`t work in my case)
        let index: number = newTreeData.findIndex(item => item.urlName === prd.parents[0].urlName);
        if (index === -1) {
          newTreeData.push({name: prd.parents[0].name, urlName: prd.parents[0].urlName, children: []});
          index = newTreeData.length - 1;
        }
        let index2: number = newTreeData[index].children.findIndex(item => item.urlName === prd.parents[1].urlName);
        if (index2 === -1) {
          newTreeData[index].children.push({name: prd.parents[1].name, urlName: prd.parents[1].urlName, children: [treeDataElement]});
        } else {
          newTreeData[index].children[index2].children.push(treeDataElement);
        }
      }
    });
    this._treeData.next(newTreeData);
  }

  // old
  addPhotoUrlsToProducts(photosUrls: PhotoUrl[]) {
    this.productsPlacer.forEach((item: ProductPlacer) => {
      const photoUrls: PhotoUrl = photosUrls.filter((url: PhotoUrl) => url.urlName === item.urlName)[0];
      if (!!photoUrls) {
        item.content[0].photos = [];
        item.content[0].photos.push(photoUrls);
      }
    });
  }

}
