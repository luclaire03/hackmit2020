let standInterval = 30; // in minutes
let lastStand = new Date().getTime();
let sinceStand = 0;     // time since last standing break, in minutes

let updateStandTimer = setInterval(function() {
    let now = new Date().getTime();
    sinceStand = Math.round((now - lastStand) / (1000 * 60));
    document.getElementById('timertext').innerHTML = sinceStand + ' minutes since last standup break';
    if (sinceStand >= standInterval) {
        showStandReminder()
    }
}, 1000*60);

function showStandReminder() {
    // TODO: display the popup
}

function setStand() {
    /// idk yet bro
    document.getElementById('standtext').style.display = 'block';
    document.getElementById('countdown').style.display = 'block';
}

function setSleep() {
    /// also dk yet
    document.getElementById('sleeptext').style.display = 'block';
}
