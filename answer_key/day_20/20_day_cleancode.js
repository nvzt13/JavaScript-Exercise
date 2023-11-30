


function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
  
    // Saat, dakika ve saniyeyi iki basamaklı olarak göstermek için sıfır ekleyin
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    // Saat formatını belirleyin
    var timeFormat = "AM";
    if (hours > 12) {
      hours -= 12;
      timeFormat = "PM";
    }
  
    // Saati bir değişkene atayın
    var time = hours + ":" + minutes + ":" + seconds + " " + timeFormat;
  
    // HTML sayfasındaki saat elementinin içeriğini güncelleyin
    document.getElementById("clock").innerHTML = time;
  
    // Her saniye fonksiyonu tekrar çağırın
    setTimeout(showTime, 1000);
  
    const clock =document.querySelector('#clock')
  
    if(seconds % 2===0){
      clock.style.backgroundColor='red'
    }
    else{    clock.style.backgroundColor='green'
  }
  }
  
  // Fonksiyonu ilk kez çağırın
  
  showTime();
  

 