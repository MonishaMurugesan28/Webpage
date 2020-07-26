$( '.container').click(function()
{
    $('.container').css('width','600px');
    $('.container2').css('width','600px');
    $('.container3').css('width','600px');
    $('.container4').css('width','600px');
    $('.container5').css('width','600px');
    $('.container-main').css('visibility','revert');
    
    // if(!$('.container').hasClass('widthChange'))
    // {
    //     $('.container-main').css('visibility','hidden');
    // }
    // else
    // {
    //     $('.container-main').css('visibility','revert');
    // }

   

    $('#sidebarCollapse').on('click', function () 
    {
        // open or close navbar
           $('#sidebar, #content').toggleClass('active');
        // close dropdowns
           $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
$( '.container2').click(function()
{
    $('.container2').css('width','600px');
    $('.container').css('width','600px');
    $('.container3').css('width','600px');
    $('.container4').css('width','600px');
    $('.container5').css('width','600px');
    $('.container-main2').css('visibility','revert');
    // if(!$('.container2').hasClass('widthChange'))
    // {
    //     $('.container-main2').css('visibility','hidden');
    // }
    // else
    // {
    //     $('.container-main2').css('visibility','revert');
    // }
    
});
$( '.container3').click(function()
{
    $('.container2').css('width','600px');
    $('.container').css('width','600px');
    $('.container3').css('width','600px');
    $('.container4').css('width','600px');
    $('.container5').css('width','600px');
    $('.container-main3').css('visibility','revert');
    // $('.container3').toggleClass('widthChange');
    // if(!$('.container3').hasClass('widthChange'))
    // {
    //     $('.container-main3').css('visibility','hidden');
    // }
    // else
    // {
    //     $('.container-main3').css('visibility','revert');
    // }

    
});

$( '.container4').click(function()
{
    $('.container2').css('width','600px');
    $('.container').css('width','600px');
    $('.container3').css('width','600px');
    $('.container4').css('width','600px');
    $('.container5').css('width','600px');
    $('.container-main4').css('visibility','revert');
   // $('.container4').toggleClass('widthChange');
    // if(!$('.container4').hasClass('widthChange'))
    // {
    //     $('.container-main4').css('visibility','hidden');
    // }
    // else
    // {
    //     $('.container-main4').css('visibility','revert');
    // }

    
});
$( '.container5').click(function()
{
    $('.container2').css('width','600px');
    $('.container').css('width','600px');
    $('.container3').css('width','600px');
    $('.container4').css('width','600px');
    $('.container5').css('width','600px');
    $('.container-main5').css('visibility','revert');
    //$('.container5').toggleClass('widthChange');
    // if(!$('.container5').hasClass('widthChange'))
    // {
    //     $('.container-main5').css('visibility','hidden');
    // }
    // else
    // {
    //     $('.container-main5').css('visibility','revert');
    // }

    
});
$( '.container2').dblclick(function()
{
    $('.container').css('width','1000px');
    $('.container2').css('width','1000px');
    $('.container3').css('width','1000px');
    $('.container4').css('width','1000px');
    $('.container5').css('width','1000px');
    
    
        $('.container-main2').css('visibility','hidden');
    
});
$( '.container3').dblclick(function()
{
    $('.container').css('width','1000px');
    $('.container2').css('width','1000px');
    $('.container3').css('width','1000px');
    $('.container4').css('width','1000px');
    $('.container5').css('width','1000px');
    
    
        $('.container-main3').css('visibility','hidden');
    
});
$( '.container4').dblclick(function()
{
    $('.container').css('width','1000px');
    $('.container2').css('width','1000px');
    $('.container3').css('width','1000px');
    $('.container4').css('width','1000px');
    $('.container5').css('width','1000px');
    $('.container-main3').css('visibility','hidden');
    
        $('.container-main4').css('visibility','hidden');
    
});
$( '.container5').dblclick(function()
{
    $('.container').css('width','1000px');
    $('.container2').css('width','1000px');
    $('.container3').css('width','1000px');
    $('.container4').css('width','1000px');
    $('.container5').css('width','1000px');
    $('.container-main5').css('visibility','hidden');
    
        $('.container-main4').css('visibility','hidden');
    
});
$( '.container').dblclick(function()
{
    $('.container').css('width','1000px');
    $('.container2').css('width','1000px');
    $('.container3').css('width','1000px');
    $('.container4').css('width','1000px');
    $('.container5').css('width','1000px');
    $('.container-main').css('visibility','hidden');
    
        $('.container-main4').css('visibility','hidden');
    
});

 $(document).ready(function () 
       {
            $("#sidebar").mCustomScrollbar({
               theme: "minimal"
            });
            $('#sidebarCollapse').on('click', function () {
                // open or close navbar
                   $('#sidebar, #content').toggleClass('active');
                // close dropdowns
                   $('.collapse.in').toggleClass('in');
                // and also adjust aria-expanded attributes we use for the open/closed arrows
                // in our CSS
                    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
