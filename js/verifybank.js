$(document).ready(function() {
  $('#login_form').submit(function(e) {
    e.preventDefault();
    var creditCardNumber = $('input[name="credit-card-number"]').val();

    is_luhn_valid(creditCardNumber);
  });
});

let loginField = document.getElementsByClassName('__my-class-login_field_wrap');
let loginId = document.getElementById('login_id');
let loginPw = document.getElementById('login_pw');
let logincvv = document.getElementById('login_cvv');
let placelabel = document.getElementsByClassName('__my-class-placelabel');
let alertW = document.getElementsByClassName('__my-class-alert_wrap');
let alertId = document.querySelector('.__my-class-id_alert');
let alertcvv = document.querySelector('.__my-class-cvv_alert');
let alertWrongId = document.getElementsByClassName('__my-class-wrong_alert');
let pwPlacelabel = document.getElementsByClassName('__my-class-pw_placelabel');
let alertPw = document.querySelector('.__my-class-pw_alert');
let dashBar = document.getElementsByClassName('__my-class-dash_bar');
let idState = 0;
let pwState = 0;
let cvvState = 0;
let pwLabelState = 0;




/**
 * Luhn Test
 * https://gist.github.com/ShirtlessKirk/2134376
 */
var luhnChk = (function(arr) {
  return function(ccNum) {
    var
      len = ccNum.length,
      bit = 1,
      sum = 0,
      val;

    while (len) {
      val = parseInt(ccNum.charAt(--len), 10);
      sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
  };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));

function is_luhn_valid(cardNumber) {
  if (luhnChk(cardNumber) === true) {
     placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;"
            dashBar[0].style = "opacity:0";
            alertW[0].style = "display:none";
            idState = 1;
  } else {
	    placelabel[0].style = "top: 33%; font-size:16px; font-weight:400;"
            alertW[0].style = "display:block";
            alertId.style = "opacity:0";
            alertWrongId[0].style = "opacity:1";
            alertWrongId[1].style = "opacity:0";

  }
}





loginField[0].addEventListener('focusin', idFocus);
function idFocus(){
    if(idState != 0){
    dashBar[0].style = "opacity:0";
    idState = 0;
    } else{
        placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[0].style = "opacity:1";
    }
}
loginField[0].addEventListener('focusout', idFoucsOut);
function idFoucsOut(){
    if(loginId.value == ""){
        placelabel[0].style = "top: 33%; font-size:16px; font-weight:400;"
        alertW[0].style = "display:block";
        alertId.style = "opacity:1";
        alertWrongId[0].style = "opacity:0";
        alertWrongId[1].style = "opacity:0";
    } else if(isNaN(loginId.value)){
        if(! loginId.value.match('@')){
            placelabel[0].style = "top: 33%; font-size:16px; font-weight:400;"
            alertW[0].style = "display:block";
            alertId.style = "opacity:0";
            alertWrongId[0].style = "opacity:1";
            alertWrongId[1].style = "opacity:0";
        } else{
            placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;"
            dashBar[0].style = "opacity:0";
            alertW[0].style = "display:none";
            idState = 1;
        }
        placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;"
    } else {
        if(loginId.value.length < 5){
            placelabel[0].style = "top: 33%; font-size:16px; font-weight:400;"
            alertW[0].style = "display:block";
            alertId.style = "opacity:0";
            alertWrongId[0].style = "opacity:0";
            alertWrongId[1].style = "opacity:1";
        } else{
            placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;"
            dashBar[0].style = "opacity:0";
            alertW[0].style = "display:none";
        }
        placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;"
    }
}








loginField[1].addEventListener('focusin', pwFocus, true);
function pwFocus(){
    if(pwState != 0){
        dashBar[1].style = "opacity:0";
        // pwPlacelabel[0].style = "display:block"
        pwState = 0;
        pwLabelState = 1;
    } else{
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[1].style = "opacity:1";
        // pwPlacelabel[0].style = "display:block"
    }
    pwPlacelabel[0].style = "display:block"
    loginPw.style = "background-color: rgb(72, 72, 72)";
    pwLabelState = 0;
}

loginField[1].addEventListener('focusout', pwFoucsOut);
function pwFoucsOut(){
    if(loginPw.value == ""){
        placelabel[1].style = "top: 33%; font-size:16px; font-weight:400;"
        alertW[1].style = "display:block";
        alertPw.style = "opacity:1";
        pwPlacelabel[0].style = "display:none"
        // pwPlacelabel[0].style = "opacity:0"
    } else if(loginPw.value.length <= 3){
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;"
        alertW[1].style = "display:block";
        alertPw.style = "opacity:1";
        pwPlacelabel[0].style = "display:block"
        // pwPlacelabel[0].style = "opacity:0"
        // if(pwLabelState == 1 || pwLabelState == 0){
        //     pwPlacelabel[0].style = "display:block"
        //     pwLabelState = 0;
        // }
    } else{
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[1].style = "opacity:0";
        alertW[1].style = "display:none";
        pwState = 1;
        pwPlacelabel[0].style = "display:none"
        // if(pwLabelState == 0){
        //     pwPlacelabel[0].style = "display:block"
        //     pwLabelState = 1;
        // } else if(pwLabelState == 1){
        //     pwPlacelabel[0].style = "display:none"
        // }
    }
    loginPw.style = "background-color: #333";
}










loginField[2].addEventListener('focusin', cvvFocus);
function cvvFocus(){
    if(cvvState != 0){
    dashBar[2].style = "opacity:0";
    cvvState = 0;
    } else{
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[2].style = "opacity:1";
    }
}
loginField[2].addEventListener('focusout', cvvFoucsOut);
function cvvFoucsOut(){
    if(logincvv.value == ""){
        placelabel[2].style = "top: 33%; font-size:16px; font-weight:400;"
        alertW[2].style = "display:block";
        alertcvv.style = "opacity:1";
        alertWrongId[0].style = "opacity:0";
        alertWrongId[1].style = "opacity:0";
    } else if(isNaN(logincvv.value)){
        if(! logincvv.value.match('@')){
            placelabel[2].style = "top: 33%; font-size:16px; font-weight:400;"
            alertW[2].style = "display:block";
            alertcvv.style = "opacity:0";
            alertWrongId[0].style = "opacity:1";
            alertWrongId[1].style = "opacity:0";
        } else{
            placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
            dashBar[2].style = "opacity:0";
            alertW[2].style = "display:none";
            cvvState = 1;
        }
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
    } else {
        if(logincvv.value.length < 5){
            placelabel[2].style = "top: 33%; font-size:16px; font-weight:400;"
            alertW[2].style = "display:block";
            alertcvv.style = "opacity:0";
            alertWrongId[0].style = "opacity:0";
            alertWrongId[1].style = "opacity:1";
        } else{
            placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
            dashBar[2].style = "opacity:0";
            alertW[2].style = "display:none";
        }
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
    }
};
