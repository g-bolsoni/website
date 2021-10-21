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
        console.log('scroll '+ scroll)
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
    }, 300);    
})