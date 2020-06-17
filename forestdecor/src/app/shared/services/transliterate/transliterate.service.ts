import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransliterateService {

  rusToUrl(rus: string): string {
    let str: string = '';
    if (!!rus) {
      const change = {
        "Ё": "YO",
        "Й": "YI",
        "Ц": "TS",
        "У": "U",
        "К": "K",
        "Е": "E",
        "Н": "N",
        "Г": "G",
        "Ш": "SH",
        "Щ": "SCH",
        "З": "Z",
        "Х": "H",
        "Ъ": "''",
        "ё": "yo",
        "й": "yi",
        "ц": "ts",
        "у": "u",
        "к": "k",
        "е": "e",
        "н": "n",
        "г": "g",
        "ш": "sh",
        "щ": "sch",
        "з": "z",
        "х": "h",
        "ъ": "''",
        "Ф": "F",
        "Ы": "Y",
        "В": "V",
        "А": "A",
        "П": "P",
        "Р": "R",
        "О": "O",
        "Л": "L",
        "Д": "D",
        "Ж": "ZH",
        "Э": "'E",
        "ф": "f",
        "ы": "y",
        "в": "v",
        "а": "a",
        "п": "p",
        "р": "r",
        "о": "o",
        "л": "l",
        "д": "d",
        "ж": "zh",
        "э": "'e",
        "Я": "YA",
        "Ч": "CH",
        "С": "S",
        "М": "M",
        "И": "I",
        "Т": "T",
        "Ь": "'",
        "Б": "B",
        "Ю": "YU",
        "я": "ya",
        "ч": "ch",
        "с": "s",
        "м": "m",
        "и": "i",
        "т": "t",
        "ь": "'",
        "б": "b",
        "ю": "yu",
        " ": "-"
      };
      str = rus.split('').map(char => change[char] || char).join('');
    }
    return str.toLowerCase();
  }

  urlToRus(url: string): string {
    let str = url;
    if (!!str) {
      // 3 to 1
      if (str.length >= 3) {
        const change3To1 = { "SCH": "Щ","sch": "щ", };
        for (let key in change3To1) { str.split(key).join(change3To1[key]); }
      }
      // 2 to 1
      if (str.length >=2) {
        // problem of Ъ need to check first
        str.split("''").join("ъ");
        const change2To1 = {
          "YO": "Ё",
          "yo": "ё",
          "TS": "Ц",
          "ts": "ц",
          "SH": "Ш",
          "sh": "ш",
          "CH": "Ч",
          "ch": "ч",
          "YA": "Я",
          "ya": "я",
          "YU": "Ю",
          "yu": "ю",
          "zh": "ж",
          "ZH": "Ж",
          "'E": "Э",
          "'e": "э",
          "YI": "Й",
          "yi": "й",
        };
        for (let key in change2To1) { str.split(key).join(change2To1[key]); }
      }
      // 1 to 1 ...the rest
      const change = {
        "U": "У",
        "K": "К",
        "E": "Е",
        "N": "Н",
        "G": "Г",
        "Z": "З",
        "H": "Х",
        "u": "у",
        "k": "к",
        "e": "е",
        "n": "н",
        "g": "г",
        "z": "з",
        "h": "х",
        "F": "Ф",
        "Y": "Ы",
        "V": "В",
        "A": "А",
        "P": "П",
        "R": "Р",
        "O": "О",
        "L": "Л",
        "D": "Д",
        "f": "ф",
        "y": "ы",
        "v": "в",
        "a": "а",
        "p": "п",
        "r": "р",
        "o": "о",
        "l": "л",
        "d": "д",
        "S": "С",
        "M": "М",
        "I": "И",
        "T": "Т",
        "B": "Б",
        "s": "с",
        "m": "м",
        "i": "и",
        "t": "т",
        "'": "ь",
        "b": "б",
        "-": " "
      };
      for (let key in change) { str.split(key).join(change[key]); }
    }
    return str;
  }
}
