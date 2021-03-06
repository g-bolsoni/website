$(document).ready(function(){
    /*Circle A*/
    let containerA = document.getElementById('circleA');
    let circleA = new ProgressBar.Circle(containerA,  {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1400,
        from: {color:'#aaa'},
        to: {color: '#64daf9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value() * 60);
            circle.setText(value);
        }
    });
    /*Circle A*/
    /*Circle B*/
    let containerB = document.getElementById('circleB');
    let circleB = new ProgressBar.Circle(containerB,  {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1600,
        from: {color:'#aaa'},
        to: {color: '#64daf9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value()*254);
            circle.setText(value);
        }
    });
    /*Circle B*/

    /*Circle C*/
    let containerC = document.getElementById('circleC');
    let circleC = new ProgressBar.Circle(containerC,  {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2000,
        from: {color:'#aaa'},
        to: {color: '#64daf9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value()*32);
            circle.setText(value);
        }
    });
    /*Circle C*/
    /*Circle D*/
    let containerD = document.getElementById('circleD');
    let circleD = new ProgressBar.Circle(containerD,  {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2200,
        from: {color:'#aaa'},
        to: {color: '#64daf9'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
            let value =  Math.round(circle.value()*5243);
            circle.setText(value);
        }
    });
    /*Circle D*/

    /*iniciar o loader quando o user chegar ao elemento*/
    /*let dataAreaOffSet = $('#data-area').offset();*/
    let dataAreaOffSet = document.getElementById('data-area').offsetHeight;
    let stop = 0;
    console.log('dataAreaOffSet ' + dataAreaOffSet);
    $(window).scroll(function(e){
        let scroll = window.scrollY;
        // console.log('scroll '+ scroll)   
        if ((scroll > (dataAreaOffSet + 1000)) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);
            
            stop = 1;
        }
    });

    /*Paralax*/
    setTimeout(() => {
        $('#data-area').parallax({imageSrc: 'Sources/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'Sources/pattern.png'});
    }, 300);    

    /*Filter */
    $('.filter-btn').on('click',function(){
        let type =  $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');
        
        if(type == 'dsg-btn'){
        	eachBoxes('dsg',boxes )
        }
        if(type == 'dev-btn'){
        	eachBoxes('dev',boxes )
        }
        if(type == 'seo-btn'){
        	eachBoxes('seo',boxes )
        }
        if(type == 'all-btn'){
        	eachBoxes('all',boxes )
        }
    });
    
function eachBoxes(type,boxes){
	if(type=='all'){
		$(boxes).addClass('fadeIn');
        $(boxes).removeClass('fadeOut');
	}else {
		$(boxes).each(function(){
			if(!$(this).hasClass(type)){
                $(this).removeClass('fadeIn');
				$(this).addClass('fadeOut');
			}else{
                $(this).removeClass('fadeOut');
				$(this).addClass('fadeIn');
			}
		});
	}
	
}
    /*Filter */
    /* animation Scroll*/
    let navBtn =  $('.nav-item');
    
    let bannerSection = $('#mainSlider')
    let aboutSection = $('#about-area');
    let servicesSection = $('#service-area');
    let teamSection = $('#team-area');
    let portifolioSection = $('#portifolio_area');
    let contactSection = $('#call-area');
    
    
    $(navBtn).on('click',function(){
        let scrollTo = 0;
        let btnId = $(this).attr('id');
        switch (btnId) {      
            case ('mainSlider'):
                console.log('bannerSection '+ scrollTo);
                scrollTo = bannerSection;
                break;
            case ('about-menu'):
                console.log('aboutSection '+ scrollTo);
                scrollTo = aboutSection;
                break;
            case ('services-menu'):
                console.log('servicesSection '+ scrollTo);                
                scrollTo = servicesSection;
                break;
            case ('team-area'):
                console.log('teamSection '+ scrollTo); 
                scrollTo = teamSection;
                break;
            case ('portifolio_area'):
                console.log('portifolioSection '+ scrollTo); 
                scrollTo = portifolioSection;
                break;
            case ('team-area'):
                console.log('servicteamSectionesSection '+ scrollTo); 
                scrollTo = teamSection;
                break;    
            case ('call-area'):
                console.log('contactSection '+ scrollTo); 
                scrollTo = contactSection;
                break;
            default:
                break;

        }
            $([document.documentElement,document.body]).animate({
                scrollTop : $(scrollTo).offset().top - 70
            },1500);
       
    });
      /*
        if(btnId == "about-menu" ){
            scrollTo = aboutSection;
        }
        if(btnId == "services-menu" ){
            scrollTo = servicesSection;
        }
        if(btnId == "team-area" ){
            scrollTo = teamSection;
        } 
        if(btnId == "portifolio_area" ){
            scrollTo = portifolioSection;
        } 
        if(btnId == "call-area" ){
            scrollTo = contactSection;
        }
        if(btnId == "mainSlider"){
            scrollTo = bannerSection
        }



        */


    /* animation Scroll*/

});