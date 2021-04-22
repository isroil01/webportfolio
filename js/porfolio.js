var typed = new Typed('.move', {
    strings: [
         "Web Developer",
         "freelancer",
         "Web Designer"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

  var hamburger = document.getElementById('hamburger');
  var con = document.querySelector('.ham-con');
  con.addEventListener('click', () =>{
      document.querySelector('nav ul').classList.toggle('active');
      hamburger.classList.toggle('toggle');
  })



  var header = document.getElementById('navBar');

  window.addEventListener('scroll', function(){
      
      if(window.pageYOffset > 10){
          header.style.background = 'black';
          header.style.transition =' 0.5s easy-in-out';
      }else{
        header.style.background = 'none';
      }
  })

  $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  AOS.init({
    offset: 300,
    duration: 400,
  });
