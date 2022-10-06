function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      if (t.total <= 0) {
        document.getElementById("countdown").className = "hidden";
        document.getElementById("deadline-message").className = "visible";
        clearInterval(timeinterval);
        return true;
      }
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline = new Date(Date.parse(new Date()) + 5 * 1000);
  initializeClock("countdown", deadline);
  
  
  //транслитерация
  
  
  function ruToLat(event) {
    const ru = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
        'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
        'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
        'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
        'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
        'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
        'э': 'e',    'ю': 'yu',   'я': 'ya',
  
        'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
        'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
        'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
        'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
        'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
        'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
        'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya' 
    }
    let k = event.key;
    if (ru[k] != undefined){
      document.querySelector('.out-1').innerHTML += ru[k];
    }
  };
  
  document.querySelector('.i-1').onkeydown = ruToLat;
  
  //инн
  
  const words = [
    "10101200046789",
    "01502198500012",
    "01203199000798", 
    "01502198500012", 
    "23009199878945", 
    "11508199174125", 
    "00404199400025",
    "11405200299999", 
    "01307199900414"
  ];
  
  function checkINN(it) {
    let result = it.filter(item => item[0] === '0')
    return console.log(result);
  }
  
  
  checkINN(words)
  
  
  
  
  
  //валюта
  
  const accounts=[
    {AccountNo:"4894894894984",Currency:"KGS"},
    {AccountNo:"148964894898",Currency:"USD"},
    {AccountNo:"1561515610313",Currency:"RUB"},
    {AccountNo:"48974987894561465",Currency:"EUR"},
    {AccountNo:"1564848468",Currency:"KGS"},
    {AccountNo:"7894510215613215",Currency:"KZT"},
    {AccountNo:"489486486484948",Currency:"KGS"},
    {AccountNo:"7894510215613215",Currency:"CHY"},
  ];
  
  let newList = [] 
    for (const user of accounts) {
      if(user.Currency === 'KGS') newList.push(user)
    }
    console.log(newList);