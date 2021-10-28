var togglePlay, play, pause, fast, medium, slow;
var toggleStatus = true;

var tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
})

tl.set('#Shadow', {
    transformOrigin: '50% 100%',
})
    .fromTo('#Robot', {
        y: 2.5,
    }, {
        y: -2.5,
    })
    .to('#Shadow', {
        scale: 0.75,
    },
        '-=.75',
    )

    .to('#Shadow', {
        scale: 0.75,
    },
        '<',
    )

const changeClassList = function(click, other1, other2){
    click.classList.add("u-constrols__button");
    other1.classList.remove("u-constrols__button");
    other2.classList.remove("u-constrols__button");
}

document.addEventListener("DOMContentLoaded", function () {
    togglePlay = document.querySelector(".js-toggleState");
    medium = document.querySelector(".js-normal");
    pause = document.querySelector(".js-pause");
    play = document.querySelector(".js-play");
    slow = document.querySelector(".js-slow");
    fast = document.querySelector(".js-fast");

    play.style.display = "none";
    pause.style.display = "block";

    console.log(tl);

    togglePlay.addEventListener("click", function () {
        if (toggleStatus) {
            play.style.display = "block";
            pause.style.display = "none";
            toggleStatus = false;
            tl.pause();
        }
        else {
            play.style.display = "none";
            pause.style.display = "block";
            toggleStatus = true;
            tl.play();
        }
    })

    fast.addEventListener("click", function(){
        tl.timeScale(2);
        changeClassList(fast.nextElementSibling, medium.nextElementSibling, slow.nextElementSibling);
    })

    medium.addEventListener("click", function(){
        tl.timeScale(1);
        changeClassList(medium.nextElementSibling, fast.nextElementSibling, slow.nextElementSibling);
    })

    slow.addEventListener("click", function(){
        tl.timeScale(0.5);
        changeClassList(slow.nextElementSibling, medium.nextElementSibling, fast.nextElementSibling);
    })
});