import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  // MOK data now => then will be loaded from server
  private _products: Product[] = [
    {
      "id": "1",
      "name": "Плоды",
      "urlName": "plody",
      "active": false,
      "children": [
        {
          "id": "1-1",
          "name": "Шишки",
          "urlName": "shishki",
          "active": false,
          "children": [
            {
              "name": "Шишки ольхи",
              "urlName": "shishki-olkhi",
              "active": false,
              "description": "Lorem ipsum",
              "img": "/assets/images/cones-of-alder.jpg",
              "photos": [],
            },
            {
              "name": "Шишки еловые",
              "urlName": "shishki-elovye",
              "active": false,
              "description": "Lorem ipsum",
              "img": "/assets/images/fir-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки сосновые",
              "urlName": "shishki-sosnovye",
              "active": false,
              "description": "Lorem ipsum",
              "img": "/assets/images/pine-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки хмеля",
              "urlName": "shishki-chmelya",
              "active": false,
              "description": "Lorem ipsum",
              "img": "/assets/images/hop-cones.jpg",
              "photos": [],
            }
          ]
        },
        {
          "name": "Желуди",
          "urlName": "zheludi",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/zhyoludi.jpg",
          "photos": [],
        },
        {
          "name": "Каштаны",
          "urlName": "kashtany",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/cashtany.jpg",
          "photos": [],
        },
        {
          "id": "1-4",
          "name": "Ягоды",
          "urlName": "yagody",
          "active": false,
          "children": [
            {
              "name": "Ягоды черемухи",
              "urlName": "yagody-tcheryomuhi",
              "active": false,
              "description": "Lorem ipsum",
              "img": "/assets/images/cherjomuha.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды бузины",
              "urlName": "yagody-buziny",
              "active": false,
              "description": "Lorem ipsum",
              "img": "/assets/images/buzina.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды можжевельника",
              "urlName": "yagody-mozhzhevelnika",
              "active": false,
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
      "active": false,
      "children": [
        {
          "name": "Шалфей",
          "urlName": "chalfei",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/shalfej.jpg",
          "photos": [],
        },
        {
          "name": "Мята",
          "urlName": "mayata",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/mint.jpg",
          "photos": [],
        },
        {
          "name": "Душица",
          "urlName": "duchica",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/dushitsa.jpg",
          "photos": [],
        },
        {
          "name": "Мелисcа",
          "urlName": "melissa",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/melissa.jpg",
          "photos": [],
        },
        {
          "name": "Чистотел",
          "urlName": "tchistotel",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/chistotel.jpg",
          "photos": [],
        },
        {
          "name": "Лаванда",
          "urlName": "lavanda",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/lavanda.jpg",
          "photos": [],
        },
        {
          "name": "Зверобой",
          "urlName": "zveroboi",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/zveroboj.jpg",
          "photos": [],
        },
        {
          "name": "Полынь",
          "urlName": "polyn",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/polyn.jpg",
          "photos": [],
        },
        {
          "name": "Тысячелистник",
          "urlName": "tysiyatchelistnik",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/tysiachelistnik.jpg",
          "photos": [],
        },
        {
          "name": "Пижма",
          "urlName": "pigma",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/pizhma.jpg",
          "photos": [],
        },
        {
          "name": "Иван-Чай",
          "urlName": "ivan-tchai",
          "active": false,
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
      "active": false,
      "children": [
        {
          "name": "Стружка липы",
          "urlName": "struzhka-lipy",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-lipa.jpg",
          "photos": [],
        },
        {
          "name": "Стружка осины",
          "urlName": "struzhka-osiny",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-osina.jpg",
          "photos": [],
        },
        {
          "name": "Стружка елки",
          "urlName": "struzhka-elki",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-elka.jpg",
          "photos": [],
        },
        {
          "name": "Стружка ольхи",
          "urlName": "struzhka-olhi",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-olha.jpg",
          "photos": [],
        },
        {
          "name": "Стружка сосны",
          "urlName": "struzhka-sosny",
          "active": false,
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
      "active": false,
      "children": [
        {
          "name": "Спилы дуба",
          "urlName": "spily-duba",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-dub.jpg",
          "photos": [],
        },
        {
          "name": "Спилы ясеня",
          "urlName": "spily-yasenia",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-yasen.jpg",
          "photos": [],
        },
        {
          "name": "Спилы березы",
          "urlName": "spily-beriozy",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-bereza.jpg",
          "photos": [],
        },
        {
          "name": "Спилы акации",
          "urlName": "spily-akacii",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-akacia.jpg",
          "photos": [],
        },
        {
          "name": "Спилы вяза",
          "urlName": "spily-viaza",
          "active": false,
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
      "active": false,
      "children": [
        {
          "name": "Сфагнум",
          "urlName": "sfagnum",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/sfagnum.jpg",
          "photos": [],
        },
        {
          "name": "Ягель",
          "urlName": "yagel",
          "active": false,
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
      "active": false,
      "description": "Lorem ipsum",
      "img": "/assets/images/chaga.jpg",
      "photos": [],
    },
    {
      "id": "7",
      "name": "Капы и сувели",
      "urlName": "kapy-i-suveli",
      "active": false,
      "children": [
        {
          "name": "Капы",
          "urlName": "kapy",
          "active": false,
          "description": "Lorem ipsum",
          "img": "/assets/images/kapa.jpg",
          "photos": [],
        },
        {
          "name": "Сувели",
          "urlName": "suveli",
          "active": false,
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

  constructor() {
    // this.setActive(this.activeEl);
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
    for (const item of prodArr) {
      if (item.name === this.prevEl) {item.active = false}
      if (item.name === newEl) {item.active = true}
      if (item.children) {
        this.parseArr(newEl, item.children);
        if (item.name === this.prevEl) {item.active = false}
        if (item.name === newEl) {item.active = true}
      }
    }
  }

  public setInactive(prev: string = this.prevEl, prodArr: Product[] = this._products) {
    for (const item of prodArr) {
      if (prev === 'all') {item.active = false} else {
        if (item.name === prev) {item.active = false; break}
      }
      if (item.children) {
        this.setInactive(prev, item.children);
        if (prev === 'all') {item.active = false} else {
          if (item.name === prev) {item.active = false; break}
        }
      }
    }
  }


  get products() {
    return this._products;
  }
}
