$(document).ready(function(){
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {duration: 538}
    })
    let sceneImg1 = new ScrollMagic.Scene({
        triggerElement: '.article-right-top'
    })
    .setClassToggle('#article-right-img-top', 'fade-in')
    .addTo(controller)
    let sceneImg2 = new ScrollMagic.Scene({
        triggerElement: '.article-left-bottom'
    })
    .setClassToggle('#article-left-img', 'fade-in')
    .addTo(controller)
    let sceneImg3 = new ScrollMagic.Scene({
        triggerElement: '.article-right-bottom'
    })
    .setClassToggle('#article-right-img-bottom', 'fade-in')
    .addTo(controller)
})