
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    if (window.scrollY > 500) {
        //배지 나타나기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        //버튼 나타나기
        gsap.to(toTopEl, .2, {
            x: 0
        })
    } else {
        //배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'    
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300));
// _.throttle(함수, 시간)



toTopEl.addEventListener('click', function(){
    gsap.to(window, .7, {
        scrollTo: 0
    });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, // 0.7 / 1.4 / 2.1 / 2.8초 뒤에 1초 동안 opacity가 1이 되는 애니메이션 실행
        opacity: 1
    })
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000
    },

    pagination: {
        el: '.promotion .swiper-pagination',
        clickale: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});


new Swiper('.awards .swiper', {
    direction: 'horizontal',
    slidesPerView: 5,
    loop: true,
    autoplay: true,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    } else {
    promotionEl.classList.remove('hide');
    };
})

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소 지정
            triggerHook: .8 //감시 위치
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});
