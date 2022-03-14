function current_time() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("main_time").innerText = time; 
    let t = setTimeout(function(){ current_time() }, 1000);
    //console.log(time);
}

  current_time();

var turned_on = true;
var _hidden = false;

function play_pause() {

    console.log("Clicked");

    var _button = document.getElementById("play_pause");

    if(turned_on == true) {
        _button.style.backgroundImage = "url('visual/images/play.png')";
        turned_on = false;
    } else {
        _button.style.backgroundImage = "url('visual/images/pause.png')";
        turned_on = true;
    }

    console.log(turned_on);
}

function close_div() {
    var _button = document.getElementById("music_div");
    var button_2 = document.getElementById("open_button");

    button_2.style.display = "block";
    _button.style.display = "none";
}

function open_div() {
    var _button = document.getElementById("music_div");
    var button_2 = document.getElementById("open_button");

    button_2.style.display = "none";
    _button.style.display = "block";
}