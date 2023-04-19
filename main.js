$(document).ready(() => {
    const $aboutButton1 = $('#about-1');
    const $aboutButton2 = $('#about-2');
    const $aboutButton3 = $('#about-3');
    const $endButton = $('#end');
    const $cursors = $('button .cursor');
    const $contactButton = $('#contact');
    const $buttons = $('button');

    const $aboutContent = $('.content');
    const $aboutContent1 = $('#about-content-1');
    const $aboutContent2 = $('#about-content-2');
    const $aboutContent3 = $('#about-content-3');
    const $aboutContent4 = $('#about-content-4');
    const $aboutContent5 = $('#about-content-5');
    const $aboutContent6 = $('#about-content-6');
    
    const $contactContent = $('#contact-content');

    $aboutContent.hide();
    $cursors.hide();
    $contactContent.hide();
    
    $($buttons).hover((event)=> {
        $(event.currentTarget).children('img').show()
    }, 
      ()=> {$cursors.hide()})

    $contactButton.on('click', () => {
        $contactContent.show();
    })

    $aboutButton1.on('click', () => {
        $aboutContent1.show();
        setTimeout(() => {
            $aboutContent2.show();    
        }, 800);
        
    })

    $aboutButton2.on('click', () => {
        setTimeout(() => {
            $aboutContent3.show();
        }, 800
        )

        setTimeout(() => {
            $aboutContent4.show();
        }, 1800
        )
        
        setTimeout(() => {
            $aboutContent5.show();
        }, 2800
        )
    })

    $aboutButton3.on('click', () => {
        setTimeout(() => {
            $aboutContent6.show();
        }, 800
        )

        setTimeout(() => {
            $endButton.show();
        }, 1800
        )
    })

    $endButton.on('click', () => {

        setTimeout(() => {
            $aboutContent.hide();
        }, 800)
        
    })

});