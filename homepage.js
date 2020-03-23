$(function() {
  $('nav a').on('click', function(e) {
    console.log(this.hash);
    if(this.hash !== ''){
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },
      800);
    }
  });
  // $('.fade').addClass('active')
});

/* 1st slide */
function move1Appear1(){
    var introText1 = document.querySelector(".introtext1");
    var introPosition1 = introText1.getBoundingClientRect().top;
    var screenPosition1 = window.innerHeight;

    if(introPosition1 < screenPosition1){
        introText1.classList.add('intro-appear1');
    }
}
window.addEventListener('mousemove', move1Appear1);

function move6Appear1(){
    var introText6 = document.querySelector(".introtext6");
    var introPosition6 = introText6.getBoundingClientRect().top;
    var screenPosition6 = window.innerHeight;

    if(introPosition6 < screenPosition6){
        introText6.classList.add('intro-appear6');
    }
}
window.addEventListener('mousemove', move6Appear1);

function text2appear1(){
    var p1 = document.querySelector(".p1");
    var p1position = p1.getBoundingClientRect().top;
    var p1Pos = window.innerHeight;
    
    if(p1position < p1Pos){
        p1.classList.add('p1appear');
    }
    
}
window.addEventListener('scroll', text2appear1);
/* end of 1st slide */

/* 2nd slide */
function text2appear2(){
    var p2 = document.querySelector(".p2");
    var p2position = p2.getBoundingClientRect().top;
    var p2Pos = window.innerHeight;
    
    if(p2position < p2Pos){
        p2.classList.add('p2appear');
    }    
}
window.addEventListener('scroll', text2appear2);

function bottomappear1(){
    var bottom1 = document.querySelector(".bottom1");
    var bottom1position = bottom1.getBoundingClientRect().top;
    var bottom1Pos = window.innerHeight;
    
    if(bottom1position < bottom1Pos){
        bottom1.classList.add('bottom1appear');
    }    
}
window.addEventListener('scroll', bottomappear1);

function bottomappear2(){
    var bottom2 = document.querySelector(".bottom2");
    var bottom2position = bottom2.getBoundingClientRect().top;
    var bottom2Pos = window.innerHeight;
    
    if(bottom2position < bottom2Pos){
        bottom2.classList.add('bottom2appear');
    }   
}
window.addEventListener('scroll', bottomappear2);
/* end of 2nd slide */

/* 3rd slide */
function text31appear3(){
    var p31 = document.querySelector(".p31");
    var p31position = p31.getBoundingClientRect().top;
    var p31Pos = window.innerHeight;
    
    if(p31position < p31Pos){
        p31.classList.add('p31appear');
    }    
}
window.addEventListener('scroll', text31appear3);

function text32appear3(){
    var p32 = document.querySelector(".p32");
    var p32position = p32.getBoundingClientRect().top;
    var p32Pos = window.innerHeight;
    
    if(p32position < p32Pos){
        p32.classList.add('p32appear');
    }    
}
window.addEventListener('scroll', text32appear3);

function bottomappear31(){
    var bottom31 = document.querySelector(".bottom31");
    var bottom31position = bottom31.getBoundingClientRect().top;
    var bottom31Pos = window.innerHeight;
    
    if(bottom31position < bottom31Pos){
        bottom31.classList.add('bottom31appear');
    }   
}
window.addEventListener('scroll', bottomappear31);

function bottomappear32(){
    var bottom32 = document.querySelector(".bottom32");
    var bottom32position = bottom32.getBoundingClientRect().top;
    var bottom32Pos = window.innerHeight;
    
    if(bottom32position < bottom32Pos){
        bottom32.classList.add('bottom32appear');
    }   
}
window.addEventListener('scroll', bottomappear32);
/* end of 3rd slide */

/* 4th slide */
function text41appear4(){
    var p41 = document.querySelector(".p41");
    var p41position = p41.getBoundingClientRect().top;
    var p41Pos = window.innerHeight;
    
    if(p41position < p41Pos){
        p41.classList.add('p41appear');
    }    
}
window.addEventListener('scroll', text41appear4);

function text42appear4(){
    var p42 = document.querySelector(".p42");
    var p42position = p42.getBoundingClientRect().top;
    var p42Pos = window.innerHeight;
    
    if(p42position < p42Pos){
        p42.classList.add('p42appear');
    }    
}
window.addEventListener('scroll', text42appear4);

function bottomappear41(){
    var bottom41 = document.querySelector(".bottom41");
    var bottom41position = bottom41.getBoundingClientRect().top;
    var bottom41Pos = window.innerHeight;
    
    if(bottom41position < bottom41Pos){
        bottom41.classList.add('bottom41appear');
    }   
}
window.addEventListener('scroll', bottomappear41);

function bottomappear42(){
    var bottom42 = document.querySelector(".bottom42");
    var bottom42position = bottom42.getBoundingClientRect().top;
    var bottom42Pos = window.innerHeight;
    
    if(bottom42position < bottom42Pos){
        bottom42.classList.add('bottom42appear');
    }   
}
window.addEventListener('scroll', bottomappear42);
/* end of 4th slide */

/* 5th slide */
function text51appear5(){
    var p51 = document.querySelector(".p51");
    var p51position = p51.getBoundingClientRect().top;
    var p51Pos = window.innerHeight;
    
    if(p51position < p51Pos){
        p51.classList.add('p51appear');
    }    
}
window.addEventListener('scroll', text51appear5);

function text52appear5(){
    var p52 = document.querySelector(".p52");
    var p52position = p52.getBoundingClientRect().top;
    var p52Pos = window.innerHeight;
    
    if(p52position < p52Pos){
        p52.classList.add('p52appear');
    }    
}
window.addEventListener('scroll', text52appear5);

function bottomappear51(){
    var bottom51 = document.querySelector(".bottom51");
    var bottom51position = bottom51.getBoundingClientRect().top;
    var bottom51Pos = window.innerHeight;
    
    if(bottom51position < bottom51Pos){
        bottom51.classList.add('bottom51appear');
    }   
}
window.addEventListener('scroll', bottomappear51);

function bottomappear52(){
    var bottom52 = document.querySelector(".bottom52");
    var bottom52position = bottom52.getBoundingClientRect().top;
    var bottom52Pos = window.innerHeight;
    
    if(bottom52position < bottom52Pos){
        bottom52.classList.add('bottom52appear');
    }   
}
window.addEventListener('scroll', bottomappear52);
/* end of 5th slide */
