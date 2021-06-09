$(document).ready(function(){
    const masksObj = {
        ru: '+7 (999) 999 99-99',
        us: '+1 (999) 999-9999'        
    };

    $('.form__dropdown__button').on('click', function(e){
        e.preventDefault();

        if ($(this).hasClass('drop')) {
            $('.form__dropdown__content').slideUp();
            $(this).removeClass('drop');
        }
        else {
            $('.form__dropdown__content').slideDown();
            $(this).addClass('drop');
        }
    });

    $('#inpt-phone').mask('+7 (999) 999 99-99');

    $('.form__dropdown__item').each(function(){
        $(this).on('click', function(){            
            let cont = $(this).html();
            $('.form__dropdown__button').html(cont);
            $('.form__dropdown__content').slideUp();
            $('.form__dropdown__button').removeClass('drop');
            $.each(masksObj, (key, val) => {
                if (key === $(this).attr('data-lang')) {
                    $('#inpt-phone').mask(val);
                }
            });
        });
    });
});