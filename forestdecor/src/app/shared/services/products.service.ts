import { Injectable } from '@angular/core';
import { ProductLink } from "../models/product-link.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // MOK data now => then will be from server
  private _products: ProductLink[] = [
    {
      "id": "1",
      "name": "Плоды",
      "transName": "plody",
      "subItems": true,
      "content": [
        {
          "id": "1-1",
          "name": "Шишки",
          "transName": "shishki",
          "subItems": false,
          "content": [
            {
              "header": "Шишки ольхи",
              "description": "Lorem ipsum",
              "img": "/assets/images/cones-of-alder.jpg",
              "photos": [],
              "uniqueId": "1-1"
            },
            {
              "header": "Шишки еловые",
              "description": "Lorem ipsum",
              "img": "/assets/images/fir-cones.jpg",
              "photos": [],
              "uniqueId": "1-2"
            },
            {
              "header": "Шишки сосновые",
              "description": "Lorem ipsum",
              "img": "/assets/images/pine-cones.jpg",
              "photos": [],
              "uniqueId": "1-3"
            },
            {
              "header": "Шишки хмеля",
              "description": "Lorem ipsum",
              "img": "/assets/images/hop-cones.jpg",
              "photos": [],
              "uniqueId": "1-4"
            }
          ]
        },
        {
          "id": "1-2",
          "name": "Желуди",
          "transName": "zheludi",
          "subItems": false,
          "content": [
            {
              "header": "Желуди",
              "description": "Lorem ipsum",
              "img": "/assets/images/zhyoludi.jpg",
              "photos": [],
              "uniqueId": "1-5"
            }
          ]
        },
        {
          "id": "1-3",
          "name": "Каштаны",
          "transName": "kashtany",
          "subItems": false,
          "content": [
            {
              "header": "Каштаны",
              "description": "Lorem ipsum",
              "img": "/assets/images/cashtany.jpg",
              "photos": [],
              "uniqueId": "1-6"
            }
          ]
        },
        {
          "id": "1-4",
          "name": "Ягоды",
          "transName": "yagody",
          "subItems": false,
          "content": [
            {
              "header": "Ягоды черемухи",
              "description": "Lorem ipsum",
              "img": "/assets/images/cherjomuha.jpg",
              "photos": [],
              "uniqueId": "1-7"
            },
            {
              "header": "Ягоды бузины",
              "description": "Lorem ipsum",
              "img": "/assets/images/buzina.jpg",
              "photos": [],
              "uniqueId": "1-8"
            },
            {
              "header": "Ягоды можжевельника",
              "description": "Lorem ipsum",
              "img": "/assets/images/mozhzhevel.jpg",
              "photos": [],
              "uniqueId": "1-9"
            }
          ]
        }
      ]
    },
    {
      "id": "2",
      "name": "Травы",
      "transName": "travy",
      "subItems": false,
      "content": [
        {
          "header": "Шалфей",
          "description": "Lorem ipsum",
          "img": "/assets/images/shalfej.jpg",
          "photos": [],
          "uniqueId": "2-1"
        },
        {
          "header": "Мята",
          "description": "Lorem ipsum",
          "img": "/assets/images/mint.jpg",
          "photos": [],
          "uniqueId": "2-2"
        },
        {
          "header": "Душица",
          "description": "Lorem ipsum",
          "img": "/assets/images/dushitsa.jpg",
          "photos": [],
          "uniqueId": "2-3"
        },
        {
          "header": "Мелисcа",
          "description": "Lorem ipsum",
          "img": "/assets/images/melissa.jpg",
          "photos": [],
          "uniqueId": "2-4"
        },
        {
          "header": "Чистотел",
          "description": "Lorem ipsum",
          "img": "/assets/images/chistotel.jpg",
          "photos": [],
          "uniqueId": "2-5"
        },
        {
          "header": "Лаванда",
          "description": "Lorem ipsum",
          "img": "/assets/images/lavanda.jpg",
          "photos": [],
          "uniqueId": "2-6"
        },
        {
          "header": "Зверобой",
          "description": "Lorem ipsum",
          "img": "/assets/images/zveroboj.jpg",
          "photos": [],
          "uniqueId": "2-7"
        },
        {
          "header": "Полынь",
          "description": "Lorem ipsum",
          "img": "/assets/images/polyn.jpg",
          "photos": [],
          "uniqueId": "2-8"
        },
        {
          "header": "Тысячелистник",
          "description": "Lorem ipsum",
          "img": "/assets/images/tysiachelistnik.jpg",
          "photos": [],
          "uniqueId": "2-9"
        },
        {
          "header": "Пижма",
          "description": "Lorem ipsum",
          "img": "/assets/images/pizhma.jpg",
          "photos": [],
          "uniqueId": "2-10"
        },
        {
          "header": "Иван-Чай",
          "description": "Lorem ipsum",
          "img": "/assets/images/ivan.jpg",
          "photos": [],
          "uniqueId": "2-11"
        }
      ]
    },
    {
      "id": "3",
      "name": "Стружка декоративная древесная",
      "transName": "struzhka-dekorativnaya-drevesnaya",
      "subItems": false,
      "content": [
        {
          "header": "Стружка декоративная древесная липы",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-lipa.jpg",
          "photos": [],
          "uniqueId": "3-1"
        },
        {
          "header": "Стружка декоративная древесная осины",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-osina.jpg",
          "photos": [],
          "uniqueId": "3-2"
        },
        {
          "header": "Стружка декоративная древесная елки",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-elka.jpg",
          "photos": [],
          "uniqueId": "3-3"
        },
        {
          "header": "Стружка декоративная древесная ольхи",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-olha.jpg",
          "photos": [],
          "uniqueId": "3-4"
        },
        {
          "header": "Стружка декоративная древесная сосны",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-sosna.jpg",
          "photos": [],
          "uniqueId": "3-5"
        }
      ]
    },
    {
      "id": "4",
      "name": "Торцевые спилы дерева",
      "transName": "torcevye-spily-dereva",
      "subItems": false,
      "content": [
        {
          "header": "Торцевые спилы дуба",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-dub.jpg",
          "photos": [],
          "uniqueId": "4-1"
        },
        {
          "header": "Торцевые спилы ясеня",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-yasen.jpg",
          "photos": [],
          "uniqueId": "4-2"
        },
        {
          "header": "Торцевые спилы березы",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-bereza.jpg",
          "photos": [],
          "uniqueId": "4-3"
        },
        {
          "header": "Торцевые спилы акации",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-akacia.jpg",
          "photos": [],
          "uniqueId": "4-4"
        },
        {
          "header": "Торцевые спилы вяза",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-viaz.jpg",
          "photos": [],
          "uniqueId": "4-5"
        }
      ]
    },
    {
      "id": "5",
      "name": "Мох",
      "transName": "moh",
      "subItems": false,
      "content": [
        {
          "header": "Сфагнум",
          "description": "Lorem ipsum",
          "img": "/assets/images/sfagnum.jpg",
          "photos": [],
          "uniqueId": "5-1"
        },
        {
          "header": "Ягель",
          "description": "Lorem ipsum",
          "img": "/assets/images/yagel.jpg",
          "photos": [],
          "uniqueId": "5-2"
        }
      ]
    },
    {
      "id": "6",
      "name": "Грибы",
      "transName": "griby",
      "subItems": false,
      "content": [
        {
          "header": "Чага",
          "description": "Lorem ipsum",
          "img": "/assets/images/chaga.jpg",
          "photos": [],
          "uniqueId": "6-1"
        }
      ]
    },
    {
      "id": "7",
      "name": "Капы и сувели",
      "transName": "kapy-i-suveli",
      "subItems": false,
      "content": [
        {
          "header": "Капы",
          "description": "Lorem ipsum",
          "img": "/assets/images/kapa.jpg",
          "photos": [],
          "uniqueId": "7-1"
        },
        {
          "header": "Сувели",
          "description": "Lorem ipsum",
          "img": "/assets/images/suvel.jpg",
          "photos": [],
          "uniqueId": "7-2"
        }
      ]
    }
  ];

  constructor() { }





}
