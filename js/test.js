/**
 * Created by Alexandr on 07.05.2016.
 */
$(document).ready(function() {
    var bxxslider = $('.slider').bxSlider({
        pagerCustom: '#bx-pager'
    });
    
    $('#prev-slide').on('click',function() {
        bxxslider.goToPrevSlide();
    });
    $('#next-slide').on('click',function() {
        bxxslider.goToNextSlide();
    });

});
