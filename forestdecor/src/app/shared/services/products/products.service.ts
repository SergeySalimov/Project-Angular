import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Show } from '../../models/showInCatalog';
import { Parent, Product } from '../../models/product';
import { UrlOfCatalog } from '../../models/url-of-catalog';
import { TreeData } from '../../models/tree-data.model';
import { ConsoleService } from '../../services/console/console.service';
import { MESSAGE } from '../console/response-messages-list';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _urlsOfCatalog: BehaviorSubject<UrlOfCatalog[]> = new BehaviorSubject<UrlOfCatalog[]>([]);
  private _treeData: BehaviorSubject<TreeData[]> = new BehaviorSubject<TreeData[]>([]);
  private _showInCatalog: BehaviorSubject<Show | null> = new BehaviorSubject<Show | null>(null);
  private _uploadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get urlsOfCatalog(): UrlOfCatalog[] {
    return this._urlsOfCatalog.value;
  }

  get treeData(): TreeData[] {
    return this._treeData.value;
  }

  get uploadProgress(): Observable<number> {
    return this._uploadProgress.asObservable();
  }

  get showInCatalog(): Observable<Show | null> {
    return this._showInCatalog.asObservable();
  }

  setShowInCatalog(status: Show | null) {
    this._showInCatalog.next(status);
  }

  constructor(private http: HttpClient,
              private auth: AuthService,
              private storage: AngularFireStorage,
              private console: ConsoleService) {
    this.auth.autoLogin();
    this.auth.getAdminsFromServer().pipe(take(1)).subscribe();
    this.getProductsFromServer().pipe(take(1)).subscribe();
  }

  // Server block
  getProductsFromServer(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.firebase.databaseURL}/catalogProducts.json`).pipe(
      map((data: any) => {
        const product: Product[] = [];
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            product.push({id: key, ...data[key]});
          }
        }
        return product;
      }),
      tap((products: Product[]) => this.createUrlsOfCatalog(products)),
      tap((products: Product[]) => this.createTreeDataForCatalogNavigation(products)),
    );
  }

  uploadFile(file, product: Product) {
    let folder = product.urlName;
    const filePath = `/${folder}/${file.name}`;
    const ref: AngularFireStorageReference = this.storage.ref(filePath);
    const task: AngularFireUploadTask = ref.put(file);
    task.percentageChanges().subscribe(number => this._uploadProgress.next(number));
    task.then((data) => {
      const filePath = `/${folder}/${data.metadata.name}`;
      this.storage.ref(filePath).getDownloadURL().pipe(
        map((url: string) => {
          !!product.photos ? product.photos.push(url) : product.photos = [url];
          return product;
        }),
        switchMap((prd: Product) => this.updateProductOnServer(prd)),
      )
        .subscribe(() => this._uploadProgress.next(0));
    });
  }

  updateProductOnServer(product: Product) {
    const headers: HttpHeaders = new HttpHeaders({
      [environment.NEED_TOKEN]: 'Add-my-token',
      [environment.GLOBAL_SPINNER]: 'spinnerNeeded'
    });
    return this.http.put(`${environment.firebase.databaseURL}/catalogProducts/${product.id}.json`, product, {headers});
  }

  deleteFile(downloadUrl: string) {
    return this.storage.storage.refFromURL(downloadUrl).delete();
  }

  deletePhotosInStorage(delArr: string[]) {
    delArr.forEach((url: string, i: number) => {
      this.deleteFile(url).catch(err => {
        this.console.showInfoMessage({...MESSAGE.FILE_DELETED_ERROR, title: err}, MESSAGE.FILE_DELETED_TIMER);
        throw new Error(err);
      })
        .finally(() => {
          if (delArr.length === i + 1) {
            this.console.showInfoMessage(MESSAGE.FILE_DELETED_SUCCESS, MESSAGE.FILE_DELETED_TIMER);
          }
        })
    })
  }

  //Calculations
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
          newTreeData[index].children.push({
            name: prd.parents[1].name,
            urlName: prd.parents[1].urlName,
            children: [treeDataElement]
          });
        } else {
          newTreeData[index].children[index2].children.push(treeDataElement);
        }
      }
    });
    this._treeData.next(newTreeData);
  }

}
