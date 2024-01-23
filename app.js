window.onload=()=>{
    function buildclock()
    {
        const date=new Date();
        console.log(date);
        
        
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();

        document.querySelector('#clock-hours').innerText=hours;
        document.querySelector('#clock-minutes').innerText=minutes;
        document.querySelector('#clock-seconds').innerText=seconds;

        setTimeout(buildclock,1000);
    }
    buildclock();
}