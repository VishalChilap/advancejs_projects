// 
let flag=1;
function controller(x){
    flag+=x;
    // flag += -1;
    // flag =0
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName('slide');
    if (num == slides.length){
        num=0;
        flag=0;
    }
    if(num==-1){
        num=slides.length-1;
        flag=slides.length - 1;
    }
      //console.log(slides);
      for (let y of slides) {
        y.style.display = "none";
      }
    slides[num].style.display="block"
}