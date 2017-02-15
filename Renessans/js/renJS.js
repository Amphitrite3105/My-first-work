/**
 * Created by Nastya on 14.02.2017.
 */
/* Слайдер */
$('.carousel').carousel({
    interval: 5000
})

/* Подсказки, всплывающие окна*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});

/* Табы */
$('#tabs nav a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})



/* Выравнивание колонок */
function setEqualHeight(columns)
{
    var tallestcolumn = 0;
    columns.each(
        function()
        {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn)
            {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
$(document).ready(function() {
    setEqualHeight($(".caption > div"));
});

