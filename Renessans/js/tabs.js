/**
 * Created by Nastya on 15.02.2017.
 */
(function($) {
    $(function() {

        $('ul.navigation').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);