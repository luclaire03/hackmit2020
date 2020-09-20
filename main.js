let standInterval = 30; // in minutes
let lastStand = new Date().getTime();
let sinceStand = 0;     // time since last standing break, in minutes
let bedtime;
var reset = false;


let updateStandTimer = setInterval(function() {
    let now = new Date().getTime();
    if (reset) {
        lastStand  = now;
        reset = false;
    }
    sinceStand = Math.round((now - lastStand) / (1000 * 60));
    document.getElementById('timertext').innerHTML = sinceStand + ' minutes since last standup break';
    if (sinceStand >= standInterval) {
        showStandReminder()
    }
}, 1000*60);

function showStandReminder() {
    alert('break time! take a chance to move around.');
    reset = true;
}

function resetTime() {
    reset = true;
}

function setStand() {
    let input = document.getElementById('standInput').value;
    let standtext = document.getElementById('standtext');
    if (isNaN(input) || input <= 0) {
        standtext.innerHTML = 'invalid input';
    } else {
        standInterval = input.valueOf();
        standtext.innerHTML = 'you will be reminded to stand every ' + input + ' minutes';
    }
    standtext.style.display = 'block';
    document.getElementById('countdown').style.display = 'block';
}

function setSleep() {
    let input = document.getElementById('sleepInput').value;
    let hours = input.substring(0,2);
    let minutes = input.substring(3,5);
    bedtime = new Date();
    bedtime.setHours(hours);
    bedtime.setMinutes(minutes);
    let sleeptext = document.getElementById('sleeptext');
    sleeptext.style.display = 'block';
    sleeptext.innerHTML = 'you have set your bedtime to: ' + input;
}
