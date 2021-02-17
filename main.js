let hours = 0;
let minutes = 0;
let seconds = 0;

const tickCallBack = function tickCallBack(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
            if(hours === 24){hours = 0;}
        }
    }
    console.log(`${(isDoubleDigit(hours)) ? hours : '0'+hours}:${(isDoubleDigit(minutes)) ? minutes : '0'+minutes}:${(isDoubleDigit(seconds)) ? seconds : '0'+seconds}`);
}

function isDoubleDigit(time){
    return (time > 9) ? true : false;
}

const interval=  setInterval(tickCallBack,1000);