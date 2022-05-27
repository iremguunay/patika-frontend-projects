let getName = prompt("İsminiz nedir?")
let myName = document.querySelector('#myName')
let myClock = document.querySelector('#myClock')

if(getName.length > 3) {
    myName.innerHTML = getName
} else {
    console.log("Geçerli bir isim giriniz.")
}

function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let session = "AM";

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let dayNames = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", 
							"Thursday", "Friday", "Saturday");

    let time = `${h} : ${m} : ${s} ${session} - ${dayNames[date.getDay()]}`

    myClock.innerHTML = time

    setTimeout(showTime, 1000)
}


showTime();





