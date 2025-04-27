  // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
    function onYouTubeIframeAPIReady() {
        new YT.Player('player', { // html의 id 속성명 #player로 작성하지 않음.
            videoId: 'An6LvWQuj_8', // 최초 재생할 영상의 id
            playerVars: {
                autoplay: true, //자동 재생 유무
                loop: true, //반복 재생 유무
                playlist: 'An6LvWQuj_8' // 반복 재생할 영상의 id
            },
            events: {
                onReady: function (event){
                    event.target.mute() //음소거
                }
            }
        });
    }


    function random(min, max){
        return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    };

    function floatingObject(selector, delayTime, motionSize){
        //gsap.to(요소,시간,옵션)
        gsap.to(
            selector, //선택자
            random(1.5, 2.5), //지속시간
            { //옵션
                y: motionSize, //y축 이동거리
                repeat: -1, //무한반복
                yoyo: true, //재생 후 반대로 재생
                ease: "power4.inOut", //모션
                delay: random(0, delayTime) //모션 딜레이 시간
            }
        );
    };

    floatingObject('.floating1', 1, 25);
    floatingObject('.floating2', .5, 15);
    floatingObject('.floating3', 1.5, 30);