AOS.init();

const eventDate = new Date("Jul 23, 2023 19:00:00");
const eventTimeStamp = eventDate.getTime();

const countHours = setInterval(function(){
    const now = new Date();
    const eventTimeStampnow = now.getTime();

    const dateUntilEvent = eventTimeStamp - eventTimeStampnow;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;

    const daysUntilEvent = Math.floor(dateUntilEvent / (dayInMs));
    const hoursUntilEvent = Math.floor((dateUntilEvent % dayInMs)/ (hourInMs));
    const minutesUntilEvent = Math.floor((dateUntilEvent % hourInMs)/ minuteInMs);
    const secondsUntilEvent = Math.floor((dateUntilEvent % minuteInMs) /1000);

    document.getElementById('dayCounter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}`

    if (dateUntilEvent < 0) {
        clearInterval(countHours);
        document.getElementById('begin').innerHTML = `occured in`
        document.getElementById('dayCounter').innerHTML = `${eventDate}`
    }
},1000);