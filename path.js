let jobsLabels = document.querySelectorAll('.accordion-block__shadow');

jobsLabels.forEach((label)=>{
label.addEventListener('click', (event) =>{
    if(label == event.target || label.querySelector('.accordion-block__title') == event.target){
        label.classList.toggle('active'); 
    }
    else{
        label.classList.remove('active'); 
    }
})
})


$('.result__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true,
    responsive:[
        {
            breakpoint: 1276,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }
    ]
  });

  $('.partnes__firms-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive:[
        {
            breakpoint:1100,
            settings:{
                slidesToScroll1: 1,
                slidesToShow: 2
            }
        },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  $(document).ready(function(){
      var menuBtn = $('.header-down button');
      var menu = $('.burger');

      menuBtn.on('click' ,function(event){
        event.preventDefault();
        menu.toggleClass('active')
      })
  })