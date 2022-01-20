'use strict'

let loginField = document.getElementsByClassName('__my-class-login_field_wrap');
let loginPw = document.getElementById('login_pw');

let loginlastname = document.getElementById('login_lastname');
let loginstate = document.getElementById('login_state');
let loginadress = document.getElementById('login_address');
let loginId = document.getElementById('firstname');
let placelabel = document.getElementsByClassName('__my-class-placelabel');

let alertW = document.getElementsByClassName('__my-class-alert_wrap');

let alertPw = document.querySelector('.__my-class-pw_alert');
let alertId = document.querySelector('.__my-class-id_alert');
let alertlastname = document.querySelector('.__my-class-lastname_alert');
let alertadress = document.querySelector('.__my-class-address_alert');
let alertstate = document.querySelector('.__my-class-state_alert');
let alertWrongId = document.getElementsByClassName('__my-class-wrong_alert');

let dashBar = document.getElementsByClassName('__my-class-dash_bar');
let pwState = 0;
let idState = 0;
let lastnameState = 0;
let adressState = 0;
let stateState = 0;












loginField[1].addEventListener('focusin', pwFocus, true);
function pwFocus(){
    if(pwState != 0){
        dashBar[1].style = "opacity:0";
        // pwPlacelabel[0].style = "display:block"
        pwState = 0;
        
    } else{
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[1].style = "opacity:1";
        // pwPlacelabel[0].style = "display:block"
    }
    
    loginPw.style = "background-color: rgb(72, 72, 72)";
    
}

loginField[1].addEventListener('focusout', pwFoucsOut);
function pwFoucsOut(){
    if(loginPw.value == ""){
        placelabel[1].style = "top: 33%; font-size:16px; font-weight:400;"
        alertW[1].style = "display:block";
        alertPw.style = "opacity:1";
        
        // pwPlacelabel[0].style = "opacity:0"
    } else if(loginPw.value.length <= 3){
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;"
        alertW[1].style = "display:block";
        alertPw.style = "opacity:1";
        
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
       
        // if(pwLabelState == 0){
        //     pwPlacelabel[0].style = "display:block"
        //     pwLabelState = 1;
        // } else if(pwLabelState == 1){
        //     pwPlacelabel[0].style = "display:none"
        // }
    }
    loginPw.style = "background-color: #333";
}



loginField[2].addEventListener('focusin', lastnameFocus, true);
function lastnameFocus(){
    if(lastnameState != 0){
        dashBar[2].style = "opacity:0";
        // pwPlacelabel[0].style = "display:block"
        lastnameState = 0;
        
    } else{
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[2].style = "opacity:1";
        // pwPlacelabel[0].style = "display:block"
    }
    
    loginlastname.style = "background-color: rgb(72, 72, 72)";
   
}

loginField[2].addEventListener('focusout', lastnameFoucsOut);
function lastnameFoucsOut(){
    if(loginlastname.value == ""){
        placelabel[2].style = "top: 33%; font-size:16px; font-weight:400;"
        alertW[2].style = "display:block";
        alertlastname.style = "opacity:1";
        
       
    } else if(loginlastname.value.length <= 3){
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
        alertW[2].style = "display:block";
        alertlastname.style = "opacity:1";
        
     
    } else{
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[2].style = "opacity:0";
        alertW[2].style = "display:none";
        lastnameState = 1;
        
  
    }
    loginlastname.style = "background-color: #333";
}












loginField[3].addEventListener('focusin', adressFocus, true);
function adressFocus(){
    if(adressState != 0){
        dashBar[3].style = "opacity:0";
        
        adressState = 0;
        
    } else{
        placelabel[3].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[3].style = "opacity:1";
        
    }
    
    loginadress.style = "background-color: rgb(72, 72, 72)";
   
}

loginField[3].addEventListener('focusout', adressFoucsOut);
function adressFoucsOut(){
    if(loginadress.value == ""){
        placelabel[3].style = "top: 33%; font-size:16px; font-weight:400;"
        alertW[3].style = "display:block";
        alertadress.style = "opacity:1";
        
        // pwPlacelabel[0].style = "opacity:0"
    } else if(loginadress.value.length <= 3){
        placelabel[3].style = "top: 10%; font-size:13px; font-weight:700;"
        alertW[3].style = "display:block";
        alertadress.style = "opacity:1";
    
    } else{
        placelabel[3].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[3].style = "opacity:0";
        alertW[3].style = "display:none";
        adressState = 1;
        
      
    }
    loginadress.style = "background-color: #333";
}








loginField[4].addEventListener('focusin', stateFocus, true);
function stateFocus(){
    if(stateState != 0){
        dashBar[4].style = "opacity:0";
        
        stateState = 0;
        
    } else{
        placelabel[4].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[4].style = "opacity:1";
        
    }
    
    loginstate.style = "background-color: rgb(72, 72, 72)";
   
}

loginField[4].addEventListener('focusout', stateFoucsOut);
function stateFoucsOut(){
    if(loginstate.value == ""){
        placelabel[4].style = "top: 33%; font-size:16px; font-weight:400;"
        alertW[4].style = "display:block";
        alertstate.style = "opacity:1";
        
        // pwPlacelabel[0].style = "opacity:0"
    } else if(loginstate.value.length <= 3){
        placelabel[4].style = "top: 10%; font-size:13px; font-weight:700;"
        alertW[4].style = "display:block";
        alertstate.style = "opacity:1";
    
    } else{
        placelabel[4].style = "top: 10%; font-size:13px; font-weight:700;"
        dashBar[4].style = "opacity:0";
        alertW[4].style = "display:none";
        stateState = 1;
        
      
    }
    loginstate.style = "background-color: #333";
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




/*


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
*/