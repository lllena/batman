$(document).ready(function () {
    let tabsItem=$('.tabs-items');

    tabsItem.on('click', function(event){
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-items-active').toggleClass('tabs-items-active');
        $(this).toggleClass('tabs-items-active')
    });
});