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
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true
  });

  $('.partnes__firms-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });