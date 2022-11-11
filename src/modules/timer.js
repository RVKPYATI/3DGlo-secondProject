const timer = (deadline) => {
    const timerDays = document.querySelector('#timer-days');
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');

    const formatter = new Intl.NumberFormat('ru', {style: "unit", unit: "day", unitDisplay: "long"});
   
    const getTimeRemaining = () => {

        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        if(dateStop < dateNow) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
        return { timeRemaining, days, hours, minutes, seconds };

    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        timerDays.textContent = getTime.days < 10 ? '0' + formatter.format(getTime.days) : formatter.format(getTime.days);
        timerHours.textContent = getTime.hours < 10 ? '0' + getTime.hours : getTime.hours;
        timerMinutes.textContent = getTime.minutes < 10 ? '0' + getTime.minutes : getTime.minutes;
        timerSeconds.textContent = getTime.seconds < 10 ? '0' + getTime.seconds : getTime.seconds;
        if (getTime.timeRemaining < 0) {
            clearInterval(startInterval);
        }

    };
    updateClock();
    const startInterval = setInterval(updateClock, 1000);

};

export default timer;