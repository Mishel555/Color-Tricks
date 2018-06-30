
$(window).on('keydown',function(event) {
  let red = 255;
  let green = 0;
  let blue = 0;
  if(event.which == '13'){
    document.getElementsByTagName('section')[0].innerHTML = '';
    let inpVal = $('input').val();
    if(inpVal>1000){
      alert(`You can't give more then 1000 points`);
      document.getElementsByTagName('section')[0].innerHTML = '';
      document.getElementsByTagName('input')[0].value = ''
      return ;
    }
    let divs;
    let deg = Math.round(255/(inpVal/2));
    for(let i = 0; i<inpVal;i++){
      $('section').append('<div></div>');
      divs = $('div');
      if(i<inpVal/2){
        blue = blue+deg;
        divs[i].style.backgroundColor = `rgb(${red},${green},${blue})`;
      }else {
        red = red - deg;
        divs[i].style.backgroundColor = `rgb(${red},${green},${blue})`;
      }
    }
  }
})
