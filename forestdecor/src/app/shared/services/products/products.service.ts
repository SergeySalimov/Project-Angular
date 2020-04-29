import { Injectable, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
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
          "urlName": "shishki",
          "children": [
            {
              "name": "Шишки ольхи",
              "urlName": "shishki-olkhi",
              "description": "Шишки ольхи разных размеров являются плодами. В зависимости от ее вида они бывают пленчатыми и кожистыми, а другие бескрылыми. Всю зиму шишки висят на ольхе закрытыми, открываясь только в марте и засеивая своими семенами почву.\n Урожай шишек можно собрать в конце осени и зимой, если ольха растет на приусадебном участке. При заготовке шишек их срезают садовыми ножницами. Шишки сушат при комнатной температуре. Высушенные плоды приобретают коричневый или бурый цвет. От них исходит легкий аромат. У них вяжущий вкус." +
                "  \n Существует загадка: «Какое дерево не относится к хвойным, но при этом имеет шишки?» Ответом на нее служит полное спокойного достоинства слово «ольха». Одно из 13 священных деревьев друидов, обладательница красноватой поделочной древесины и полезных веществ, ольха всегда пользовалась вниманием составителей заклинаний, столяров и врачей....\n",
              "img": "/assets/images/cones-of-alder.jpg",
              "photos": [],
            },
            {
              "name": "Шишки еловые",
              "urlName": "shishki-elovye",
              "description": "Шишки ели продолговато-цилиндрические, заострённые, опадают по созревании семян целыми в первый год по опылении. Созревшие шишки висячие и сухие, длина их до 15 см, а диаметр 3—4 см. Шишки ели — длинные коричневатых оттенков, а шишки сосны удлиненно-яйцевидные, серого цвета. Так же еловые шишки имеют целебные свойства, их настой и отвар, ингаляции — применяют при заболевании верхних дыхательных путей и бронхиальной астмы. Еловые шишки богаты дубильными веществами и эфирными маслами. Они также содержат медь, марганец, алюминий, железо.",
              "img": "/assets/images/fir-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки сосновые",
              "urlName": "shishki-sosnovye",
              "description": "Трудно найти человека, который не знает, что на сосне растут шишки. Их величину можно сравнить с крупным грецким орехом. Если шишка старая, то она коричневого цвета. На ощупь деревянистая, а ее чешуйки рыхлые и топоращатся в разные стороны. \n Немногие знают, что в число самых древних деревьев входит сосна. Обыкновенная шишка с семечками внутри является соплодием вечнозеленого растения. Женские плоды сосны называются мегастробилы, мужские – микростробилы. В народной медицине используют сырье из соплодий хвойного дерева при низком гемоглобине, полиартрите, пневмонии, авитаминозе, острых респираторных заболеваниях. В пыльце шишки содержатся эфирное масло, каротин, аскорбиновые и смоляные кислоты. Благодаря их лечебным свойствам, плодам сосны посвящено большое количество лекарственных рецептов. ",
              "img": "/assets/images/pine-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки хмеля",
              "urlName": "shishki-chmelya",
              "description": "Полезные свойства хмеля определяет состав его плодов. Собирают шишки в августе, пока они находятся с стадии созревания. Состав шишек пивного хмеля изучен достаточно хорошо. Основной интерес представляет «желтая пыльца», вырабатываемая железками на стенках плодов. Она называется лупулин, включает до семидесяти процентов смолистых веществ, до пяти процентов горечей и около двух процентов эфирного масла. В состав лупулина входят органические кислоты, желтое красящее вещество, холин — натуральный стимулятор активности желчного пузыря. Масло из шишек хмеля богато эфирами, объем которых составляет до трех процентов, хмелевыми смолами, камедью и горькими веществами. В нем присутствуют кислоты, витамины А и РР, тиамин и холин, — биологически активный комплекс, применяемый производителями БАДов в основе пищевых добавок.",
              "img": "/assets/images/hop-cones.jpg",
              "photos": [],
            }
          ]
        },
        {
          "name": "Желуди",
          "urlName": "zheludi",
          "description": "Lorem ipsum",
          "img": "/assets/images/zhyoludi.jpg",
          "photos": [],
        },
        {
          "name": "Каштаны",
          "urlName": "kashtany",
          "description": "Lorem ipsum",
          "img": "/assets/images/cashtany.jpg",
          "photos": [],
        },
        {
          "id": "1-4",
          "name": "Ягоды",
          "urlName": "yagody",
          "children": [
            {
              "name": "Ягоды черемухи",
              "urlName": "yagody-tcheryomuhi",
              "description": "Lorem ipsum",
              "img": "/assets/images/cherjomuha.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды бузины",
              "urlName": "yagody-buziny",
              "description": "Lorem ipsum",
              "img": "/assets/images/buzina.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды можжевельника",
              "urlName": "yagody-mozhzhevelnika",
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
          "urlName": "chalfei",
          "description": "Lorem ipsum",
          "img": "/assets/images/shalfej.jpg",
          "photos": [],
        },
        {
          "name": "Мята",
          "urlName": "mayata",
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
          "urlName": "melissa",
          "description": "Lorem ipsum",
          "img": "/assets/images/melissa.jpg",
          "photos": [],
        },
        {
          "name": "Чистотел",
          "urlName": "tchistotel",
          "description": "Lorem ipsum",
          "img": "/assets/images/chistotel.jpg",
          "photos": [],
        },
        {
          "name": "Лаванда",
          "urlName": "lavanda",
          "description": "Lorem ipsum",
          "img": "/assets/images/lavanda.jpg",
          "photos": [],
        },
        {
          "name": "Зверобой",
          "urlName": "zveroboi",
          "description": "Lorem ipsum",
          "img": "/assets/images/zveroboj.jpg",
          "photos": [],
        },
        {
          "name": "Полынь",
          "urlName": "polyn",
          "description": "Lorem ipsum",
          "img": "/assets/images/polyn.jpg",
          "photos": [],
        },
        {
          "name": "Тысячелистник",
          "urlName": "tysiyatchelistnik",
          "description": "Lorem ipsum",
          "img": "/assets/images/tysiachelistnik.jpg",
          "photos": [],
        },
        {
          "name": "Пижма",
          "urlName": "pigma",
          "description": "Lorem ipsum",
          "img": "/assets/images/pizhma.jpg",
          "photos": [],
        },
        {
          "name": "Иван-Чай",
          "urlName": "ivan-tchai",
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
          "urlName": "struzhka-lipy",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-lipa.jpg",
          "photos": [],
        },
        {
          "name": "Стружка осины",
          "urlName": "struzhka-osiny",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-osina.jpg",
          "photos": [],
        },
        {
          "name": "Стружка елки",
          "urlName": "struzhka-elki",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-elka.jpg",
          "photos": [],
        },
        {
          "name": "Стружка ольхи",
          "urlName": "struzhka-olhi",
          "description": "Lorem ipsum",
          "img": "/assets/images/strugka-olha.jpg",
          "photos": [],
        },
        {
          "name": "Стружка сосны",
          "urlName": "struzhka-sosny",
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
          "urlName": "spily-duba",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-dub.jpg",
          "photos": [],
        },
        {
          "name": "Спилы ясеня",
          "urlName": "spily-yasenia",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-yasen.jpg",
          "photos": [],
        },
        {
          "name": "Спилы березы",
          "urlName": "spily-beriozy",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-bereza.jpg",
          "photos": [],
        },
        {
          "name": "Спилы акации",
          "urlName": "spily-akacii",
          "description": "Lorem ipsum",
          "img": "/assets/images/torc-akacia.jpg",
          "photos": [],
        },
        {
          "name": "Спилы вяза",
          "urlName": "spily-viaza",
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
          "urlName": "sfagnum",
          "description": "Lorem ipsum",
          "img": "/assets/images/sfagnum.jpg",
          "photos": [],
        },
        {
          "name": "Ягель",
          "urlName": "yagel",
          "description": "Lorem ipsum",
          "img": "/assets/images/yagel.jpg",
          "photos": ['1'],
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
          "urlName": "kapy",
          "description": "Lorem ipsum",
          "img": "/assets/images/kapa.jpg",
          "photos": ['1'],
        },
        {
          "name": "Сувели",
          "urlName": "suveli",
          "description": "Lorem ipsum",
          "img": "/assets/images/suvel.jpg",
          "photos": [],
        }
      ]
    }
  ];

  accumulator: Product[];

  constructor() {
  }

  ngOnInit(): void {
  }

  getAllElements(forUrl: string) {
    return this.initProducts(this._products, forUrl);
  }

  initProducts(data: Product[], url = 'all') {
    this.accumulator = [];
    url === 'all' ? this.parsingProducts(data) : this.findUrlContent(data, url);
    return this.accumulator;
  }

  findUrlContent(data: Product[], url: string) {
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

  parsingProducts(data: Product[],) {
    for (const item of data) {
      item.children ? this.parsingProducts(item.children) : this.accumulator.push(item);
    }
  }

  get products() {
    return [...this._products];
  }
}
