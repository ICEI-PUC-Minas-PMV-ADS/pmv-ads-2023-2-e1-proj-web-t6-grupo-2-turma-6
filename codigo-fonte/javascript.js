let startStop = document.getElementById('startStop');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

let timer = false;

startStop.addEventListener('click', function () {
    timer = !timer;

    if(timer) {
        focusTime();
    }
});


function focusTime() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        document.getElementById('hours').innerHTML = hrString;
        document.getElementById('mins').innerHTML = minString;
        document.getElementById('secs').innerHTML = secString;
        setTimeout(focusTime, 10);
    }
}
