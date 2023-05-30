
//홈페이지 왼쪽위 배너
document.addEventListener('DOMContentLoaded', ()=>{
    var interval = window.setInterval(rollingCallback, 3000);
})
function rollingCallback(){
    //.final 클래스 삭제
    document.querySelector('.rollingbanner .final').classList.remove('final');

    //.first -> .final
    let first = document.querySelector('.rollingbanner .first');
    first.classList.remove('first');
    first.classList.add('final');

    //.second -> .first
    let second = document.querySelector('.rollingbanner .second');
    //다음 목록 요소가 널인지 체크
    if(second.nextElementSibling == null){
        document.querySelector('.rollingbanner ul li:first-child').classList.add('second');
    }else{
    	//목록 처음 요소를 다음 요소로 선택
        second.nextElementSibling.classList.add('second');
    }
    second.classList.remove('second');
    second.classList.add('first');
}
let slideIndex = 1;
let slideTimeout;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(() => {
    plusSlides(1);
  }, 3000); // Change slide every 3 seconds
}

// 마우스를 올렸을 때 슬라이드 쇼를 멈추도록 이벤트 핸들러 추가
let slideshowContainer = document.querySelector(".slideshow-container");
slideshowContainer.addEventListener("mouseenter", function () {
  clearTimeout(slideTimeout);
});

// 마우스를 벗어났을 때 슬라이드 쇼를 다시 시작하도록 이벤트 핸들러 추가
slideshowContainer.addEventListener("mouseleave", function () {
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(() => {
    plusSlides(1);
  }, 3000); // Change slide every 3 seconds
});
