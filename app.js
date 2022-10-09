let btn = document.querySelector('#button');                                   // Targetting the right id
             
function changeColor(){                                                        // A function for getting the color hexcode 
    let value = '0123456789ABCDEF';                                            // Initializing the variable value
    let hash = '#';                                                           // Initializing the variable hash
    for(let i=0;i<6;i++){                                                     // For loop to iterate the hash variable 6 times to get hexcolor code like #000000
        hash = hash + value[Math.floor(Math.random() * 16)];                    
    }
    return hash;            
};

    function getColor() {                                                     // A funtion for dynamic changing the box color
        document.querySelector('#canvas').style.backgroundColor = changeColor();
      }
      
btn.addEventListener("click",getColor);                                        // Adding event listner 'click' to button 