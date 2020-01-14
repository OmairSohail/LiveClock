// Main Function 
const main = () => {

    // Getting The Current Time
    const getTime = () => {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        
        let nowTime = `${hours}:${minutes}:${seconds}`;
       
        //Displaying Time
        const showTime = () => {
            const clock = document.querySelector('.clock');
            clock.textContent = nowTime;
        }
        
        //Updating Time
        
        setInterval(()=>{
            showTime();
        },100)
    }   




    getTime();
} 




//Executing Main Function
main();