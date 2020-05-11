import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductPlacer } from '../../models/productsPlacer';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
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
              "description": "\tШишки ольхи разных размеров являются плодами. В зависимости от ее вида они бывают пленчатыми и кожистыми, а другие бескрылыми. Всю зиму шишки висят на ольхе закрытыми, открываясь только в марте и засеивая своими семенами почву.\n\t Урожай шишек можно собрать в конце осени и зимой, если ольха растет на приусадебном участке. При заготовке шишек их срезают садовыми ножницами. Шишки сушат при комнатной температуре. Высушенные плоды приобретают коричневый или бурый цвет. От них исходит легкий аромат. У них вяжущий вкус." +
                "  \n\t Существует загадка: «Какое дерево не относится к хвойным, но при этом имеет шишки?» Ответом на нее служит полное спокойного достоинства слово «ольха». Одно из 13 священных деревьев друидов, обладательница красноватой поделочной древесины и полезных веществ, ольха всегда пользовалась вниманием составителей заклинаний, столяров и врачей....\n\t",
              "img": "/assets/images/cones-of-alder.jpg",
              "photos": [],
            },
            {
              "name": "Шишки еловые",
              "urlName": "shishki-elovye",
              "description": "\tШишки ели продолговато-цилиндрические, заострённые, опадают по созревании семян целыми в первый год по опылении. Созревшие шишки висячие и сухие, длина их до 15 см, а диаметр 3—4 см. Шишки ели — длинные коричневатых оттенков, а шишки сосны удлиненно-яйцевидные, серого цвета. \n\tТак же еловые шишки имеют целебные свойства, их настой и отвар, ингаляции — применяют при заболевании верхних дыхательных путей и бронхиальной астмы. Еловые шишки богаты дубильными веществами и эфирными маслами. Они также содержат медь, марганец, алюминий, железо.",
              "img": "/assets/images/fir-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки сосновые",
              "urlName": "shishki-sosnovye",
              "description": "\tТрудно найти человека, который не знает, что на сосне растут шишки. Их величину можно сравнить с крупным грецким орехом. Если шишка старая, то она коричневого цвета. На ощупь деревянистая, а ее чешуйки рыхлые и топоращатся в разные стороны. \n\t Немногие знают, что в число самых древних деревьев входит сосна. Обыкновенная шишка с семечками внутри является соплодием вечнозеленого растения. Женские плоды сосны называются мегастробилы, мужские – микростробилы. В народной медицине используют сырье из соплодий хвойного дерева при низком гемоглобине, полиартрите, пневмонии, авитаминозе, острых респираторных заболеваниях. В пыльце шишки содержатся эфирное масло, каротин, аскорбиновые и смоляные кислоты. Благодаря их лечебным свойствам, плодам сосны посвящено большое количество лекарственных рецептов. ",
              "img": "/assets/images/pine-cones.jpg",
              "photos": [],
            },
            {
              "name": "Шишки хмеля",
              "urlName": "shishki-chmelya",
              "description": "\tПолезные свойства хмеля определяет состав его плодов. Собирают шишки в августе, пока они находятся с стадии созревания. Состав шишек пивного хмеля изучен достаточно хорошо. Основной интерес представляет «желтая пыльца», вырабатываемая железками на стенках плодов. Она называется лупулин, включает до семидесяти процентов смолистых веществ, до пяти процентов горечей и около двух процентов эфирного масла. \n\tВ состав лупулина входят органические кислоты, желтое красящее вещество, холин — натуральный стимулятор активности желчного пузыря. Масло из шишек хмеля богато эфирами, объем которых составляет до трех процентов, хмелевыми смолами, камедью и горькими веществами. В нем присутствуют кислоты, витамины А и РР, тиамин и холин, — биологически активный комплекс, применяемый производителями БАДов в основе пищевых добавок.",
              "img": "/assets/images/hop-cones.jpg",
              "photos": [],
            }
          ]
        },
        {
          "name": "Желуди",
          "urlName": "zheludi",
          "description": "\tДля желудей свойственно множество пищевых преимуществ, и их неспроста называют природной \"аптечкой\". Пожалуй каждый из нас хоть раз видел продолговатый плод, одетый в маленькую шапочку. Эти плоды были популярны как в СССР, так и пользуются спросом в настоящее время. В прошлом из них пекли хлеб, делали кофе и прочие кулинарные изыски. А сейчас их применяют не только в процессе приготовления различных блюд, но используют в медицинской сфере. \n\tЕсли говорить о полезных свойствах желудей, то их превиликое множество. Желуди обладают бактерицидным эффектом, и являются действенным средством для борьбы с опухолями. Плоды отлично снимают спазмы при месячных у представительниц слабого пола, а также помогают остановить обильное кровотечение. Настойки на основе желудей используют для очистки и укрепления желудка. \n\tЖелуди - отличное средство для лечения острых отравлений. Дубовые орешки полезны при варикозе. Настой на основе кипятка и дубовых шапочек станет отличным методом лечения панкреатита. Желуди лечат язвы груди и кровохарканье. Дубовые орешки - эффективный метод для лечения зубов и болезней ротовой полости. Плоды дуба полезны при хроническом колите. Желуди помогают людям страдающим от астмы, болезней сердечно-сосудистой системы и бронхита. Кроме того, дубовые орешки помогают повысить выносливость, укрепляют иммунную систему и улучшают общее состояние организма.",
          "img": "/assets/images/zhyoludi.jpg",
          "photos": [],
        },
        {
          "name": "Каштаны",
          "urlName": "kashtany",
          "description": "\tЛечебные свойства каштана обусловлены входящими в его состав биофлавоноидами. Эти вещества присутствуют в коре, листьях и в самих орехах. Людям, которые намерены использовать конский каштан в лечебных целях, полезно знать не только о противопоказаниях, но и о том, что растение эффективно в качестве сосудоукрепляющего, венотонизирующего и ангиопротекторного средства. \n\tПоскольку род Каштан включает в себя свыше 10 различных растений, то конский, по одной из версий, назвали так, чтобы выделить его как кормовой вид, выращиваемый для лечения лошадей. \n\tВ народе дерево прозвали каштаном за разительное сходство с плодами съедобного каштана, при чем найти отличия под силу лишь знатокам. Существует и другая версия, согласно которой растение называется так из-за наличия напоминающих лошадиную подкову рубцов на побегах после листопада. \n\tПлоды этого растения несъедобны, поэтому ответ на вопрос, можно ли есть каштан конский, резко отрицательный. Все его части содержат токсичное вещество эскулин. Поедание орехов может нанести организму непоправимый вред. Однако лошадиный каштан обладает и полезными свойствами, благодаря чему завоевал свое место в фармакопее. \n\tОн используется: \n- В качестве кровоостанавливающего, диуретического, ранозаживляющего, болеутоляющего, антиоксидантного средства; \n- При варикозном расширении вен, нарушенном водно-солевом балансе, для лечения отеков и воспалений; \n- Для снижения артериального давления и холестерина в крови; \n- Для нормализации кислотности желудочного сока. \n\tВ составе коры конского каштана большое количество витаминов С, В1, дубильных веществ, благодаря чему она часто используется как жаропонижающее и вяжущее средство. \n\tОчищенные плоды каштана, который еще называется лошадиным, имеют в своем составе крахмал и дубильные вещества, богаты кумаринами (эскулином, фраксином, эсцином). \n\tСвежие ядра используются при затяжной диарее, а жареные — в случае кровотечений. Засушенные плоды хороши при простуде в качестве мочегонного и потогонного средства.",
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
              "description": "\tЧеремуха является санитаром леса. И это не случайность. У цветков и листьев есть специальный аромат, поэтому и обладает фитонцидным свойством. Это и сделало дерево особенным, так как это наделило его способностью убивать насекомых и микробов. Дерево беспощадно даже для комаров и клещей. \n\tЧто касается ягод, то черемуха состоит из красящих, пектиновых, дубильных веществ, а также органических кислот и сахара. В плодах было обнаружено эфирное масло, фенокарбоновая кислота, смола, камедь, флавоноид, аскорбиновую кислоту и триметиламин. \n\tЧеремуха обладает антибактериальным и вяжущим свойством, поэтому считается довольно эффективным средством при диарее любого происхождения и иных кишечных инфекций. Для этого используются как свежие плоды, так и отвары или настои. \n\tНо не рекомендуется использовать плоды черемухи, из которых не извлечена косточка. Это связано с тем, что это может вызвать отравление. Нельзя также заваривать дробленые ягодки, ведь последствия будут такими же. \n\tАбсолютно все части черемухи содержат в себе алкалоиды – ядовитые вещества, поэтому их нельзя использовать в официальной медицине.",
              "img": "/assets/images/cherjomuha.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды бузины",
              "urlName": "yagody-buziny",
              "description": "\tС давних времен бузину используют как лекарственное средство в медицине, как декоративное растение в садах и как кулинарный ингредиент в блюдах. Ее используют даже как средство в борьбе с грызунами. \n\tЕще в Древнем Риме и Древней Греции растение выращивали для приготовления лекарств. Бузина почитается некоторыми народами как священное дерево, на основе ее плодов травники готовят целительные настойки и отвары. \n\tВ наши дни эти целебные снадобья многими позабыты и непопулярны, хотя бузину черную используют в фармакологии в качестве лекарственного сырья. В народе бузину называют бузовником, самбукой, пищальником или бузиновым цветом. \n\tСуществует версия происхождения ботанического названия растения. Согласно этой версии название связано с музыкальным инструментом под названием «самбука», что в переводе с латинского языка означает «красная краска». Самбуку изготавливали из древесины растения. \n\tЯгоды бузины черной востребованы благодаря богатству витаминного ассортимента. Плюс натуральные сахара, органические кислоты, рутин, дубильные вещества, каротин. Рутин обеспечивает тонус и эластичность капилляров. \n\tВкупе с остальными черная ягода имеет лечебное свойство восстанавливать качество крови, подавлять воспалительные процессы. \n\tТак, сок свежих спелых черных плодов испокон веков служил красителем тканей. Сегодня это натуральная подкраска напитков, включая алкогольные. ",
              "img": "/assets/images/buzina.jpg",
              "photos": [],
            },
            {
              "name": "Ягоды можжевельника",
              "urlName": "yagody-mozhzhevelnika",
              "description": "\tО полезных свойствах можжевельника было известно с давних времен. Практически все части данного растения характеризуются сильными терапевтическими свойствами. Данный продукт широко применяется в различных сферах.\n\tВ 2002 году за свои целебные свойства можжевельник был назван деревом года. Средства, приготовленные из плодов растения, тормозят воспалительные процессы, способствуют излечению ран, растворяют слизь, уменьшают боль, обладают антибактериальным, кроветворным, мочегонным, потогонным действием.\n\tЛечебные свойства ягод можжевельника и противопоказания, препятствующие употреблению плодов, напрямую связаны с многочисленными биоактивными компонентами, содержащимися в мякоти.\n\tЯгоды используют в виде сиропа, чая или настоя. Самое простой способ применения —  жевание сушеных плодов для нормализации пищеварения, устранения изжоги и дурного запаха изо рта. Чтобы вывести шлаки, шишки жуют, пока они не станут слегка сладковатыми на вкус, после чего проглатывают. Начинают с одной штуки и добавляют по одной каждый день, пока их количество не составит 15. Затем дозировку снижают в таком же порядке.\n\tМожжевеловый чай способствует пищеварению и диурезу, облегчает изжогу, повышает эффективность терапии ревматизма и подагры. Для приготовления напитка берут 1 ч. л. сушеных, растолченных плодов и заливают 250 мл кипятка. Емкость накрывают и оставляют на 5 мин. Пьют чай не подслащенным 3 раза в день по одной чашке.\n\tОднако не стоит испытывать судьбу самостоятельным лечением можжевеловым ягодами при наличии диагностированных острых и хронических заболеваний пищеварительной системы и почек. Даже при отсутствии противопоказаний курс приема не должен длиться больше двух месяцев.",
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
          "urlName": "duchica",
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
          "description": "«Божье дерево» – полынь – может как вылечить, так и отравить (некоторые виды полыни смертельно опасны для травоядных). Но люди так давно заинтересовались возможностями этого растения, что научились брать от полыни лучшее и лечить ею дыхательные пути, ЖКТ, кожные заболевания и т.д. А в последние годы научный интерес к активным веществам в составе этой травы только усиливается, что приводит к открытию новых, иногда неожиданных, свойств растения. Корень полыни используют как сырье для отвара, настаивают его на вине. Делают из корня вытяжку. Из полынной травы и листьев готовят отвары, напары. Свежую измельченную траву применяют в составе примочек, компрессов, сок полыни задействован в средствах для повышения аппетита. На основе полыни создают тинктуру. Спиртовой экстракт и эфирное масло полыни также широко используются в лечебном деле. Полынь входит в состав различных чаев и лекарственных сборов. В гомеопатии траву и корни полыни обыкновенной применяют при эпилепсии и гинекологических заболеваниях. Курение сигар из сухой травы полыни обыкновенной назначают при бронхиальной астме. В траве полыни горькой обнаруживают прохамазуленовые горечи (абсинтин, анабсинтин, артабсин), летучее масло абсинтола с содержанием туйола, туйона и других терпенов, смолистые вещества и небольшое количество дубильных веществ, яблочную и янтарную кислоты. Полынь горькая также улучшает пищеварение, оказывает легкий слабительный эффект и усиливает моторику желчных путей. В траве полыни обыкновенной, кроме перечисленных и характерных для корневой части веществ и горечей, также находят цимен, камфен, ядовитый туйон и эфир дегидромартикария. Этот вид полыни оказывает общеукрепляющее воздействие на организм человека. Применяется в практике обезболивания и ускорения процесса родов. В древности с помощью полынного напитка участники Олимпийских игр снимали мышечное и нервное напряжение. Современные народные целители успешно используют полынь в составе лекарственных снадобий.",
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

  private accumulator: Product[];
  private productsPlacer: ProductPlacer[] = [];

  constructor() {
    console.time('urlsCreate');
    this.createPlacingProduct('all', 'весь каталог');
    this.createUrlsInformation();
    console.timeEnd('urlsCreate');
  }

  getProductUrlInfo(url): ProductPlacer {
    return this.productsPlacer.filter(item => item.urlName === url)[0];
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

  get products() {
    return [...this._products];
  }
}
