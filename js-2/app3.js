function greet(language) {
    var Language = language.toLowerCase();
    var str = "";
    
    var obj = {english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    
    if (Language) {
        if (obj[Language]) {
            str += obj[language];  
        } else {
            str += obj['english'];
        }
    } else {
        str += obj['english'];
    }
    return str;
}





function greet(language) {
    var r = [
  'Vitejte',
  'Velkomst',
  'Welkom',
  'Tere tulemast',
  'Tervetuloa',
  'Welgekomen',
  'Bienvenue',
  'Willkommen',
  'Failte',
  'Benvenuto',
  'Gaidits',
  'Laukiamas',
  'Witamy',
  'Bienvenido',
  'Valkommen',
  'Croeso'];
    switch (language){
        case "czech":
            return r[0]
        case "danish":
            return r[1]
        case "dutch":
            return r[2]
        case "estonian":
            return r[3]
        case "finnish":
            return r[4]
        case "flemish":
            return r[5]
        case "french":
            return r[6]
        case "german":
            return r[7]
        case "irish":
            return r[8]
        case "italian":
            return r[9]
        case "latvian":
            return r[10]
        case "lithuanian":
            return r[11]
        case "polish":
            return r[12]
        case "spanish":
            return r[13]
        case "swedish":
            return r[14]
        case "welsh":
            return r[15]
        default:
            return 'Welcome'
    
    }
  }
