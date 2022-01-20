'use strict'

let loginField = document.getElementsByClassName('__my-class-login_field_wrap');
let loginId = document.getElementById('login_id');
let loginPw = document.getElementById('login_pw');
let placelabel = document.getElementsByClassName('__my-class-placelabel');
let alertW = document.getElementsByClassName('__my-class-alert_wrap');
let alertId = document.querySelector('.__my-class-id_alert');
let alertWrongId = document.getElementsByClassName('__my-class-wrong_alert');
let pwPlacelabel = document.getElementsByClassName('__my-class-pw_placelabel');
let alertPw = document.querySelector('.__my-class-pw_alert');
let dashBar = document.getElementsByClassName('__my-class-dash_bar');
let idState = 0;
let pwState = 0;
let pwLabelState = 0;

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
    } else if(loginPw.value.length <= 10){
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

pwPlacelabel[0].addEventListener('click', function(){
    pwLabelState = 1;
    pwPlacelabel[0].style = "display:block"
    this.classList.toggle('__my-class-pwShow');
        if(this.classList.contains('__my-class-pwShow')){
            pwPlacelabel[0].innerHTML = "HIDE"
            loginPw.type = 'text';
        }else{
            pwPlacelabel[0].innerHTML = "SHOW"
            loginPw.type = 'password';
        }
console.log(pwLabelState);
});

// pwPlacelabel[0].addEventListener('change', function(){
//     pwPlacelabel[0].style = "display:block"
// })




