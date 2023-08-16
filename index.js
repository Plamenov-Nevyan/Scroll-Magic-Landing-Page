$(document).ready(function(){
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {duration: 538},
        triggerHook: 'onLeave'
    })
    let typeWriteScene = initTypewritingScene().addTo(controller)
    let headerScenes = initHeaderBgScenes().forEach(scene => scene.addTo(controller)) 
    let sponsorArticlesScene = initSponsorsScene().addTo(controller)
    let workforceLiScene = initWorkforceLiScene().addTo(controller)
    let detailsImgScenes = initDetailsImgScenes().forEach(scene => scene.addTo(controller)) 
    
    function initTypewritingScene(){
        let textToDisplay = ' We are a complete Talent Pool solution that combines HR tech, marketing automation, real human interactions and the power of your brand to attract, engage and manage curated talent pools'
        let textLength = textToDisplay.length
    
        function typing(lengthToDisplay){
            if(lengthToDisplay <= textLength){
                $('#type-anim-text').text(textToDisplay.substring(0, lengthToDisplay))
            }
        }
    
        let typewriteOnScroll = new TimelineMax()
        let typewriteScene = new ScrollMagic.Scene({
            triggerElement :'.advert-section-3',
            duration: 500
        }).on('progress', function(){
            let scrollProgress = Math.ceil(typewriteScene.progress() * textLength)
            typing(scrollProgress)
        })
    
        .setPin('#type-anim-text')
        .setTween(typewriteOnScroll)
        return typewriteScene
    }

    function initHeaderBgScenes(){
        let firstChange = new ScrollMagic.Scene({
            triggerElement : '.advert-section-2',
            duration: 300
        })
        .setClassToggle('#page-header', 'bg-blue')

        let secondChange = new ScrollMagic.Scene({
            triggerElement : '.advert-section-4',
            duration: 300
        })
        .setClassToggle('#page-header', 'bg-green')

        let thirdChange = new ScrollMagic.Scene({
            triggerElement : '.details-section',
            duration: 300
        })
        .setClassToggle('#page-header', 'bg-gradient')

        return [firstChange, secondChange, thirdChange]
    }
    function initSponsorsScene(){
        let tl = new TimelineMax()
        tl.staggerFrom('.sponsor-article',1.5, {
            scale: 0,
            cycle: {
                y: [-50, 50]
            },
            stagger: {
                from: "center",
                amount: 0.35
            }
        })
        let sponsorArticlesScene = new ScrollMagic.Scene({
            triggerElement: '.sponsor-articles',
            duration: 300
        }) 
        .setTween(tl)
        return sponsorArticlesScene
    }
    function initWorkforceLiScene(){
        let workforceLiScene = new ScrollMagic.Scene({
            triggerElement : '.about-section',
            duration: 500,
            // triggerHook: 'onEnter'
        })
        .setClassToggle('.workforce-list', 'workforce-list-scale')

        return workforceLiScene
    }
    function initDetailsImgScenes(){
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

        return [ sceneImg1, sceneImg2, sceneImg3]
    }
})