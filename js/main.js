// Main Function 
const main = () => {

    // Getting The Current Time
    const getTime = () => {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let date = now.toLocaleDateString();
        
        let nowTime = `${hours}:${minutes}:${seconds}`;
       
        //Displaying Time
        const showTime = () => {
            const clock = document.querySelector('.clock');
            clock.textContent = nowTime;
        }

        //Displaying Date
        const showDate = () => {
          const dateelement = document.querySelector('.date');
          dateelement.textContent = date;
        }
        
        //Updating Time
        
        setInterval(()=>{
            showTime();
            showDate();
        },100)
    }   




    getTime();
} 




//Executing Main Function
main();