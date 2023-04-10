$(document).ready(() => {
    const $aboutButton1 = $('#about-1');
    const $aboutButton2 = $('#about-2');
    const $aboutButton3 = $('#about-3');
    const $endButton = $('#end');
    const $contactButton = $('#contact');

    const $aboutContent = $('.content');
    const $aboutContent1 = $('#about-content-1');
    const $aboutContent2 = $('#about-content-2');
    const $aboutContent3 = $('#about-content-3');
    const $aboutContent4 = $('#about-content-4');
    const $aboutContent5 = $('#about-content-5');
    const $aboutContent6 = $('#about-content-6');
    
    const $contactContent = $('#contact-content');

    $aboutContent.hide();
    $contactContent.hide();
    
    $contactButton.on('click', () => {
        $contactContent.show();
    })

    $aboutButton1.on('click', () => {
        $aboutContent1.show();
        $aboutContent2.show();
    })

    $aboutButton2.on('click', () => {
        $aboutContent3.show();
        $aboutContent4.show();
        $aboutContent5.show();
    })

    $aboutButton3.on('click', () => {
        $aboutContent6.show();
        $endButton.show();
    })

    $endButton.on('click', () => {
        $aboutContent.hide();
    })

});