// counter project 

(function(){ 
    let counterValue = 0; 
    const buttons = document.querySelectorAll('.counterBtn');
    const counter = document.getElementById('counter');

    buttons.forEach(function(btn) { 
        btn.addEventListener('click', function(event){ 
            //element that we clicked
            const value = event.target;
            console.log(value);
            //check whether element contains the class
            if(value.classList.contains('prevBtn')) { 
                counterValue --; 

            } else if(value.classList.contains('nextBtn')){ 
                counterValue++;
            }
            counter.textContent = counterValue;

            //change color: 
            if(counterValue === 0){
                counter.style.color = "#123456"
            } else if (counterValue < 0) { 
                counter.style.color = "#ff1700";

            }else if (counterValue > 0) { 
                counter.style.color = "#195612"
            }
        })
    });
    
})();