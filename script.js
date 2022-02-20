

let timeOut = 1;


/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
    if(timeOut >= 1){
        if(timeOut > -1){
            timeOut --;
        }
     }
    console.log(timeOut);
  
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1); 
    if(timeOut >= 1){
        if(timeOut > -1){
            timeOut --;
        }
     } 
    
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
    
}




/* Основная функция сладера */
function showSlides(n) {
    
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length ; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex  -1].className += " active";
}



setInterval(function() {
    if(timeOut == 1){
        plusSlide();
        //return;
        
    }else if(timeOut < 1){
        timeOut ++;
       // return;
    }
   console.log(timeOut);
  },2000);

  
