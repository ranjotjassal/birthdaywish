(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      rotate = $('rotatecard'),
      frontcard = $('card-front'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    if(frontcard.getAttribute('style')){
      frontcard.setAttribute('style','')
    }
    if(window.screen.availWidth <= 768){
      setTimeout(()=>{
        card.setAttribute('class', 'close-half');
        if (timer) clearTimerout(timer);
        timer = setTimeout(function () {
          card.setAttribute('class', '');
          timer = null;
        }, 1000);
      },1000)
    }else{
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    }
    
  });


  rotate.addEventListener('click',function(){
    if(frontcard.getAttribute('style')){
      frontcard.setAttribute('style','')
    }else{
      frontcard.setAttribute('style','transform:rotateY(180deg)!important')
    }
  })

}());