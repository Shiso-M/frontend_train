window.onload = function(){
    const countDown = document.getElementById('timer'); 
    const targetTime = new Date().getTime() + 300000; 

    function updateCountDown(){
        const now = new Date().getTime();
        const distance = targetTime - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countDown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if(distance < 0){
            clearInterval(interval);
            countDown.innerHTML = '<br>残念！ 剥奪です……';
        }
    }

    const interval = setInterval(updateCountDown, 1000);
    updateCountDown();

}
