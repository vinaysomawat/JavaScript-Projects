const timeMap = {
    current: 'just now',
    minute: 'a minute ago',
    hour: 'an hour ago',
    month: 'a month ago',
    year: 'a year ago'
}

function triggerLastSeen(timeInSeconds) {
    let lastSeen = new Date().getTime() - timeInSeconds*1000;

    document.getElementById('last-seen').innerHTML = 'last seen '+ timeMap[getLastSeenMapValue(timeInSeconds)];
    document.getElementById('last-seen-time').innerHTML = new Date(lastSeen);
}

function getLastSeenMapValue(difference) {
    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    var secondsDifference = Math.floor(difference/1000);

    console.log(daysDifference/365, daysDifference, hoursDifference, minutesDifference, secondsDifference);

    if(Math.floor(daysDifference/365)>0) return 'year';
    else if(Math.floor(daysDifference/30)>0) return 'month';
    else if (hoursDifference>0) return 'hour';
    else if (minutesDifference>0) return 'minute';
    else if (secondsDifference>0) return 'second';
};

function triggerRandomLastSeen() {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    let randomDate = Math.floor(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    console.log(new Date(randomDate));
    let timeInSeconds = new Date().getTime() - randomDate;


    document.getElementById('last-seen').innerHTML = 'last seen '+ timeMap[getLastSeenMapValue(timeInSeconds)]; 
}