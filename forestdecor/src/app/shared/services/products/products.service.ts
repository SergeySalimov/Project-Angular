import { Injectable, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { CatalogProductsComponent } from "../../../main/catalog/catalog-products/catalog-products.component";
import { CatalogSingleProductComponent } from "../../../main/catalog/catalog-single-product/catalog-single-product.component";

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{
  // MOK data now => then will be loaded from server
  private _products: Product[] = [
    {
      "id": "1",
      "name": "Плоды",
      "urlName": "plody",
      "children": [
        {
          "id": "1-1",
          "name": "Шишки",
          "urlName": "plody/shishki",
          "children": [
            {
              "name": "Шишки ольхи",
              "urlName": "plody/shishki/shishki-olkhi",
              "description": "Lorem ipsum",
              "img": "/assets/images/cones-of-alder.jpg",
              "photos": [],
            },
            {
              "name": "Шишки еловые",
              "urlName": "plody/shishki/shishki-elovye",
              "description": "Lorem ipsum",
              "img": "/assets/images/fir-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки сосновые",
              "urlName": "plody/shishki/shishki-sosnovye",
              "description": "Lorem ipsum",
              "img": "/assets/images/pine-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки хмеля",
              "urlName": "plody/shishki/shishki-chmelya",
              "description": "Lorem ipsum",
              "img": "/assets/images/hop-cones.jpg",
              "photos": [],
            }
          ]
        },
        {
          "name": "Желуди",
          "urlName": "plody/zheludi",
          "description": "Lorem ipsum",
          "img": "/assets/images/zhyoludi.jpg",
          "photos": [],
        },
        {
          "name": "Каштаны",
          "urlName": "plody/kashtany",
          "description": "Lorem ipsum",
          "img": "/assets/images/cashtany.jpg",
          "photos": [],
        },
        {
          "id": "1-4",
          "name": "Ягоды",
          "urlName": "plody/yagody",
          "children": [
            {
              "name": "Ягоды черемухи",
              "urlName": "plody/yagody/yagody-tcheryomuhi",
              "description": "Lorem ipsum",
              "img": "/assets/images/cherjomuha.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды бузины",
              "urlName": "plody/yagody/yagody-buziny",
              "description": "Lorem ipsum",
              "img": "/assets/images/buzina.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды можжевельника",
              "urlName": "plody/yagody/yagody-mozhzhevelnika",
              "description": "Lorem ipsum",
              "img": "/assets/images/mozhzhevel.jpg",
              "photos": [],
            }
          ]
        }
      ]
    },
    {
      "id": "2",
      "name": "Травы",
      "urlName": "travy",
      "children": [
        {
          "name": "Шалфей",
          "urlName": "travy/chalfei",
          "description": "Lorem ipsum",
          "img": "/assets/images/shalfej.jpg",
          "photos": [],
        },
        {
          "name": "Мята",
          "urlName": "travy/mayata",
          "description": "Lorem ipsum",
          "img": "/assets/images/mint.jpg",
          "photos": [],
        },
        {
          "name": "Душица",
          "urlName": "travy/duchica",
          "description": "Lorem ipsum",
          "img": "/assets/images/dushitsa.jpg",
          "photos": [],
        },
        {
          "name": "Мелисcа",
          "urlName": "travy/melissa",
          "description": "Lorem ipsum",
          "img": "/assets/images/melissa.jpg",
          "photos": [],
        },
        {
          "name": "Чистотел",
          "urlName": "travy/tchistotel",
          "description": "Lorem ipsum",
          "img": "/assets/images/chistotel.jpg",
          "photos": [],
        },
        {
          "name": "Лаванда",
          "urlName": "travy/lavanda",
          "description": "Lorem ipsum",
          "img": "/assets/images/lavanda.jpg",
          "photos": [],
        },
        {
          "name": "Зверобой",
          "urlName": "travy/zveroboi",
          "description": "Lorem ipsum",
          "img": "/assets/images/zveroboj.jpg",
          "photos": [],
        },
        {
          "name": "Полынь",
          "urlName": "travy/polyn",
          "description": "Lorem ipsum",
          "img": "/assets/images/polyn.jpg",
          "photos": [],
        },
        {
          "name": "Тысячелистник",
          "urlName": "travy/tysiyatchelistnik",
          "description": "Lorem ipsum",
          "img": "/assets/images/tysiachelistnik.jpg",
          "photos": [],
        },
        {
          "name": "Пижма",
          "urlName": "travy/pigma",
          "description": "Lorem ipsum",
          "img": "/assets/images/pizhma.jpg",
          "photos": [],
        },
        {
          "name": "Иван-Чай",
          "urlName": "travy/ivan-tchai",
          "description": "Lorem ipsum",
          "img": "/assets/images/ivan.jpg",
          "photos": [],
        }
      ]
    },
    {
      "id": "3",
      "name": "Стружка декоративная древесная",
      "urlName": "struzhka-dekorativnaya-drevesnaya",
      "children": [
        {
          "name": "Стружка липы",
          "urlName": "struzhka-dekorativnaya-drevesnaya/struzhka-lipy",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-lipa.jpg",
          "photos": [],
        },
        {
          "name": "Стружка осины",
          "urlName": "struzhka-dekorativnaya-drevesnaya/struzhka-osiny",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-osina.jpg",
          "photos": [],
        },
        {
          "name": "Стружка елки",
          "urlName": "struzhka-dekorativnaya-drevesnaya/struzhka-elki",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-elka.jpg",
          "photos": [],
        },
        {
          "name": "Стружка ольхи",
          "urlName": "struzhka-dekorativnaya-drevesnaya/struzhka-olhi",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-olha.jpg",
          "photos": [],
        },
        {
          "name": "Стружка сосны",
          "urlName": "struzhka-dekorativnaya-drevesnaya/struzhka-sosny",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-sosna.jpg",
          "photos": [],
        }
      ]
    },
    {
      "id": "4",
      "name": "Торцевые спилы дерева",
      "urlName": "torcevye-spily-dereva",
      "children": [
        {
          "name": "Спилы дуба",
          "urlName": "torcevye-spily-dereva/spily-duba",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-dub.jpg",
          "photos": [],
        },
        {
          "name": "Спилы ясеня",
          "urlName": "torcevye-spily-dereva/spily-yasenia",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-yasen.jpg",
          "photos": [],
        },
        {
          "name": "Спилы березы",
          "urlName": "torcevye-spily-dereva/spily-beriozy",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-bereza.jpg",
          "photos": [],
        },
        {
          "name": "Спилы акации",
          "urlName": "torcevye-spily-dereva/spily-akacii",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-akacia.jpg",
          "photos": [],
        },
        {
          "name": "Спилы вяза",
          "urlName": "torcevye-spily-dereva/spily-viaza",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-viaz.jpg",
          "photos": [],
        }
      ]
    },
    {
      "id": "5",
      "name": "Мох",
      "urlName": "moh",
      "children": [
        {
          "name": "Сфагнум",
          "urlName": "moh/sfagnum",
          "description": "Lorem ipsum",
          "img": "/assets/images/sfagnum.jpg",
          "photos": [],
        },
        {
          "name": "Ягель",
          "urlName": "moh/yagel",
          "description": "Lorem ipsum",
          "img": "/assets/images/yagel.jpg",
          "photos": [],
        }
      ]
    },
    {
      "id": "6",
      "name": "Чага",
      "urlName": "tchaga",
      "description": "Lorem ipsum",
      "img": "/assets/images/chaga.jpg",
      "photos": [],
    },
    {
      "id": "7",
      "name": "Капы и сувели",
      "urlName": "kapy-i-suveli",
      "children": [
        {
          "name": "Капы",
          "urlName": "kapy-i-suveli/kapy",
          "description": "Lorem ipsum",
          "img": "/assets/images/kapa.jpg",
          "photos": [],
        },
        {
          "name": "Сувели",
          "urlName": "kapy-i-suveli/suveli",
          "description": "Lorem ipsum",
          "img": "/assets/images/suvel.jpg",
          "photos": [],
        }
      ]
    }
  ];

  // activeEl: string = 'Плоды';
  activeEl: string;
  prevEl: string;

  // childrenRoutes: Route[] = [
  //   {path: 'plody', component: CatalogProductsComponent},
  //   {path: 'tchaga', component: CatalogSingleProductComponent},
  //   {path: 'plody/shishki/shishki-olkhi', component: CatalogSingleProductComponent},
  // ];

  constructor() {

  }

  ngOnInit(): void {
  }


  public setInactivePrevious(newEl: string, prodArr: Product[] = this._products) {
    console.log('new iteration');
    if (newEl !== this.prevEl) {
      this.activeEl = newEl;
      this.setInactive(newEl);
      this.prevEl = newEl;
    }
  }

  public setActive(newEl: string, prodArr: Product[] = this._products) {
    console.log('new iteration');
    if (newEl !== this.prevEl) {
      this.activeEl = newEl;
      this.parseArr(newEl);
      this.prevEl = newEl;
    }
  }

  private parseArr(newEl: string, prodArr: Product[] = this._products) {
    // for (const item of prodArr) {
    //   if (item.name === this.prevEl) {item.active = false}
    //   if (item.name === newEl) {item.active = true}
    //   if (item.children) {
    //     this.parseArr(newEl, item.children);
    //     if (item.name === this.prevEl) {item.active = false}
    //     if (item.name === newEl) {item.active = true}
    //   }
    // }
  }

  public setInactive(prev: string = this.prevEl, prodArr: Product[] = this._products) {
    // for (const item of prodArr) {
    //   if (prev === 'all') {item.active = false} else {
    //     if (item.name === prev) {item.active = false; break}
    //   }
    //   if (item.children) {
    //     this.setInactive(prev, item.children);
    //     if (prev === 'all') {item.active = false} else {
    //       if (item.name === prev) {item.active = false; break}
    //     }
    //   }
    // }
  }


  get products() {
    return [...this._products];
  }
}
