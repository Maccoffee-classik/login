


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






loginField[0].addEventListener('focusin', pwFocus, true);
function pwFocus(){
    if(pwState != 0){
        dashBar[0].style = "opacity:0";
        // pwPlacelabel[0].style = "display:block"
        pwState = 0;
        
    } else{
        placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[0].style = "opacity:1";
        // pwPlacelabel[0].style = "display:block"
    }
    
    loginPw.style = "background-color: rgb(72, 72, 72)";
    
}

loginField[0].addEventListener('focusout', pwFoucsOut);
function pwFoucsOut(){
    if(loginPw.value == ""){
        placelabel[0].style = "top: 33%; font-size:16px; font-weight:400;";
        alertW[0].style = "display:block";
        alertPw.style = "opacity:1";
        
     
    } else if(loginPw.value.length <= 3){
        placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;";
        alertW[0].style = "display:block";
        alertPw.style = "opacity:1";
        
        
    } else{
        placelabel[0].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[0].style = "opacity:0";
        alertW[0].style = "display:none";
        pwState = 1;
       
  
    }
    loginPw.style = "background-color: #333";
}





loginField[1].addEventListener('focusin', lastnameFocus, true);
function lastnameFocus(){
    if(lastnameState != 0){
        dashBar[1].style = "opacity:0";
       
        lastnameState = 0;
        
    } else{
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[1].style = "opacity:1";
     }
    
    loginlastname.style = "background-color: rgb(72, 72, 72)";
   
}

loginField[1].addEventListener('focusout', lastnameFoucsOut);
function lastnameFoucsOut(){
    if(loginlastname.value == ""){
        placelabel[1].style = "top: 33%; font-size:16px; font-weight:400;";
        alertW[1].style = "display:block";
        alertlastname.style = "opacity:1";
        
       
    } else if(loginlastname.value.length <= 3){
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;";
        alertW[1].style = "display:block";
        alertlastname.style = "opacity:1";
        
     
    } else{
        placelabel[1].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[1].style = "opacity:0";
        alertW[1].style = "display:none";
        lastnameState = 1;
        
  
    }
    loginlastname.style = "background-color: #333";
}












loginField[2].addEventListener('focusin', adressFocus, true);
function adressFocus(){
    if(adressState != 0){
        dashBar[2].style = "opacity:0";
        
        adressState = 0;
        
    } else{
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[2].style = "opacity:1";
        
    }
    
    loginadress.style = "background-color: rgb(72, 72, 72)";
   
}

loginField[2].addEventListener('focusout', adressFoucsOut);
function adressFoucsOut(){
    if(loginadress.value == ""){
        placelabel[2].style = "top: 33%; font-size:16px; font-weight:400;";
        alertW[2].style = "display:block";
        alertadress.style = "opacity:1";
        
        // pwPlacelabel[0].style = "opacity:0"
    } else if(loginadress.value.length <= 3){
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;";
        alertW[2].style = "display:block";
        alertadress.style = "opacity:1";
    
    } else{
        placelabel[2].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[2].style = "opacity:0";
        alertW[2].style = "display:none";
        adressState = 1;
        
      
    }
    loginadress.style = "background-color: #333";
}








loginField[3].addEventListener('focusin', stateFocus, true);
function stateFocus(){
    if(stateState != 0){
        dashBar[3].style = "opacity:0";
        
        stateState = 0;
        
    } else{
        placelabel[3].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[3].style = "opacity:1";
        
    }
    
    loginstate.style = "background-color: rgb(72, 72, 72)";
   
}

loginField[3].addEventListener('focusout', stateFoucsOut);
function stateFoucsOut(){
    if(loginstate.value == ""){
        placelabel[3].style = "top: 33%; font-size:16px; font-weight:400;";
        alertW[3].style = "display:block";
        alertstate.style = "opacity:1";
        
        // pwPlacelabel[0].style = "opacity:0"
    } else if(loginstate.value.length <= 3){
        placelabel[3].style = "top: 10%; font-size:13px; font-weight:700;";
        alertW[3].style = "display:block";
        alertstate.style = "opacity:1";
    
    } else{
        placelabel[3].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[3].style = "opacity:0";
        alertW[3].style = "display:none";
        stateState = 1;
        
      
    }
    loginstate.style = "background-color: #333";
}




















loginField[4].addEventListener('focusin', idFocus, true);
function idFocus(){
    if(idState != 0){
        dashBar[4].style = "opacity:0";
        
        idState = 0;
        
    } else{
        placelabel[4].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[4].style = "opacity:1";
        
    }
    
   loginId.style = "background-color: rgb(72, 72, 72)";
   
}

loginField[4].addEventListener('focusout', idFoucsOut);
function idFoucsOut(){
    if(loginId.value == ""){
        placelabel[4].style = "top: 33%; font-size:16px; font-weight:400;";
        alertW[4].style = "display:block";
        alertId.style = "opacity:1";
        
        // pwPlacelabel[0].style = "opacity:0"
    } else if(loginId.value.length <= 3){
        placelabel[4].style = "top: 10%; font-size:13px; font-weight:700;";
        alertW[4].style = "display:block";
        alertId.style = "opacity:1";
    
    } else{
        placelabel[4].style = "top: 10%; font-size:13px; font-weight:700;";
        dashBar[4].style = "opacity:0";
        alertW[4].style = "display:none";
        idState = 1;
        
      
    }
    loginId.style = "background-color: #333";
};


















(function($) {

$.fn.numeric = function(config, callback)
{
	if(typeof config === 'boolean')
	{
		config = { decimal: config };
	}
	config = config || {};
	// if config.negative undefined, set to true (default is to allow negative numbers)
	if(typeof config.negative == "undefined") { config.negative = true; }
	// set decimal point
	var decimal = (config.decimal === false) ? "" : config.decimal || ".";
	// allow negatives
	var negative = (config.negative === true) ? true : false;
	// callback function
	callback = (typeof(callback) == "function" ? callback : function() {});
	// scale
	var scale;
	if ((typeof config.scale) == "number")
	{
		if (config.scale == 0)
		{
			decimal = false;
			scale = -1;
		}
		else
			scale = config.scale;
	}
	else
		scale = -1;
	// precision
	var precision;
	if ((typeof config.precision) == "number")
	{
		precision = config.precision;
	}
	else
		precision = 0;
	// set data and methods
	return this.data("numeric.decimal", decimal).data("numeric.negative", negative).data("numeric.callback", callback).data("numeric.scale", scale).data("numeric.precision", precision).keypress($.fn.numeric.keypress).keyup($.fn.numeric.keyup).blur($.fn.numeric.blur);
};

$.fn.numeric.keypress = function(e)
{
	// get decimal character and determine if negatives are allowed
	var decimal = $.data(this, "numeric.decimal");
	var negative = $.data(this, "numeric.negative");
	// get the key that was pressed
	var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
	// allow enter/return key (only when in an input box)
	if(key == 13 && this.nodeName.toLowerCase() == "input")
	{
		return true;
	}
	else if(key == 13)
	{
		return false;
	}
	var allow = false;
	// allow Ctrl+A
	if((e.ctrlKey && key == 97 /* firefox */) || (e.ctrlKey && key == 65) /* opera */) { return true; }
	// allow Ctrl+X (cut)
	if((e.ctrlKey && key == 120 /* firefox */) || (e.ctrlKey && key == 88) /* opera */) { return true; }
	// allow Ctrl+C (copy)
	if((e.ctrlKey && key == 99 /* firefox */) || (e.ctrlKey && key == 67) /* opera */) { return true; }
	// allow Ctrl+Z (undo)
	if((e.ctrlKey && key == 122 /* firefox */) || (e.ctrlKey && key == 90) /* opera */) { return true; }
	// allow or deny Ctrl+V (paste), Shift+Ins
	if((e.ctrlKey && key == 118 /* firefox */) || (e.ctrlKey && key == 86) /* opera */ ||
	  (e.shiftKey && key == 45)) { return true; }
	// if a number was not pressed
	if(key < 48 || key > 57)
	{
	  var value = $(this).val();
		/* '-' only allowed at start and if negative numbers allowed */
		if(value.indexOf("-") !== 0 && negative && key == 45 && (value.length === 0 || parseInt($.fn.getSelectionStart(this), 10) === 0)) { return true; }
		/* only one decimal separator allowed */
		if(decimal && key == decimal.charCodeAt(0) && value.indexOf(decimal) != -1)
		{
			allow = false;
		}
		// check for other keys that have special purposes
		if(
			key != 8 /* backspace */ &&
			key != 9 /* tab */ &&
			key != 13 /* enter */ &&
			key != 35 /* end */ &&
			key != 36 /* home */ &&
			key != 37 /* left */ &&
			key != 39 /* right */ &&
			key != 46 /* del */
		)
		{
			allow = false;
		}
		else
		{
			// for detecting special keys (listed above)
			// IE does not support 'charCode' and ignores them in keypress anyway
			if(typeof e.charCode != "undefined")
			{
				// special keys have 'keyCode' and 'which' the same (e.g. backspace)
				if(e.keyCode == e.which && e.which !== 0)
				{
					allow = true;
					// . and delete share the same code, don't allow . (will be set to true later if it is the decimal point)
					if(e.which == 46) { allow = false; }
				}
				// or keyCode != 0 and 'charCode'/'which' = 0
				else if(e.keyCode !== 0 && e.charCode === 0 && e.which === 0)
				{
					allow = true;
				}
			}
		}
		// if key pressed is the decimal and it is not already in the field
		if(decimal && key == decimal.charCodeAt(0))
		{
			if(value.indexOf(decimal) == -1)
			{
				allow = true;
			}
			else
			{
				allow = false;
			}
		}
	}
	//if a number key was pressed.
	else
	{
		// If scale >= 0, make sure there's only <scale> characters
		// after the decimal point.
		if($.data(this, "numeric.scale") >= 0)
		{
			var decimalPosition = this.value.indexOf(decimal);
			//If there is a decimal.
			if (decimalPosition >= 0)
			{
				decimalsQuantity = this.value.length - decimalPosition - 1;
				//If the cursor is after the decimal.
				if ($.fn.getSelectionStart(this) > decimalPosition)
					allow = decimalsQuantity < $.data(this, "numeric.scale");
				else
				{
					integersQuantity = (this.value.length - 1) - decimalsQuantity;
					//If precision > 0, integers and decimals quantity should not be greater than precision
					if (integersQuantity < ($.data(this, "numeric.precision") - $.data(this, "numeric.scale")))
						allow = true;
					else
						allow = false;
				}
			}
			//If there is no decimal
			else {
				if ($.data(this, "numeric.precision") > 0)
					allow = this.value.replace($.data(this, "numeric.decimal"), "").length < $.data(this, "numeric.precision") - $.data(this, "numeric.scale");
				else
					allow = true;
			}
		}
		else
			// If precision > 0, make sure there's not more digits than precision
			if ($.data(this, "numeric.precision") > 0)
				allow = this.value.replace($.data(this, "numeric.decimal"), "").length < $.data(this, "numeric.precision");
			else
				allow = true;
		}
	return allow;
};

$.fn.numeric.keyup = function(e)
{
	var val = $(this).val();
	if(val && val.length > 0)
	{
		// get carat (cursor) position
		var carat = $.fn.getSelectionStart(this);
		// get decimal character and determine if negatives are allowed
		var decimal = $.data(this, "numeric.decimal");
		var negative = $.data(this, "numeric.negative");
		
		// prepend a 0 if necessary
		if(decimal !== "" && decimal !== null)
		{
			// find decimal point
			var dot = val.indexOf(decimal);
			// if dot at start, add 0 before
			if(dot === 0)
			{
				this.value = "0" + val;
			}
			// if dot at position 1, check if there is a - symbol before it
			if(dot == 1 && val.charAt(0) == "-")
			{
				this.value = "-0" + val.substring(1);
			}
			val = this.value;
		}
		
		// if pasted in, only allow the following characters
		var validChars = [0,1,2,3,4,5,6,7,8,9,'-',decimal];
		// get length of the value (to loop through)
		var length = val.length;
		// loop backwards (to prevent going out of bounds)
		for(var i = length - 1; i >= 0; i--)
		{
			var ch = val.charAt(i);
			// remove '-' if it is in the wrong place
			if(i !== 0 && ch == "-")
			{
				val = val.substring(0, i) + val.substring(i + 1);
			}
			// remove character if it is at the start, a '-' and negatives aren't allowed
			else if(i === 0 && !negative && ch == "-")
			{
				val = val.substring(1);
			}
			var validChar = false;
			// loop through validChars
			for(var j = 0; j < validChars.length; j++)
			{
				// if it is valid, break out the loop
				if(ch == validChars[j])
				{
					validChar = true;
					break;
				}
			}
			// if not a valid character, or a space, remove
			if(!validChar || ch == " ")
			{
				val = val.substring(0, i) + val.substring(i + 1);
			}
		}
		// remove extra decimal characters
		var firstDecimal = val.indexOf(decimal);
		if(firstDecimal > 0)
		{
			for(var k = length - 1; k > firstDecimal; k--)
			{
				var chch = val.charAt(k);
				// remove decimal character
				if(chch == decimal)
				{
					val = val.substring(0, k) + val.substring(k + 1);
				}
			}
			// remove numbers after the decimal so that scale matches.
			if ($.data(this, "numeric.scale") >= 0)
				val = val.substring(0, firstDecimal+$.data(this, "numeric.scale") + 1);
			// remove numbers so that precision matches.
			if ($.data(this, "numeric.precision") > 0)
				val = val.substring(0, $.data(this, "numeric.precision") + 1);
		}
		// limite the integers quantity, necessary when user delete decimal separator
		else if ($.data(this, "numeric.precision") > 0)
			val = val.substring(0, ($.data(this, "numeric.precision") - $.data(this, "numeric.scale")));
		
		// set the value and prevent the cursor moving to the end
		this.value = val;
		$.fn.setSelection(this, carat);
	}
};

$.fn.numeric.blur = function()
{
	var decimal = $.data(this, "numeric.decimal");
	var callback = $.data(this, "numeric.callback");
	var val = this.value;
	if(val !== "")
	{
		var re = new RegExp("^\\d+$|^\\d*" + decimal + "\\d+$");
		if(!re.exec(val))
		{
			callback.apply(this);
		}
	}
};

$.fn.removeNumeric = function()
{
	return this.data("numeric.decimal", null).data("numeric.negative", null).data("numeric.callback", null).unbind("keypress", $.fn.numeric.keypress).unbind("blur", $.fn.numeric.blur);
};

// Based on code from http://javascript.nwbox.com/cursor_position/ (Diego Perini <dperini@nwbox.com>)
$.fn.getSelectionStart = function(o)
{
	if (o.createTextRange)
	{
		var r = document.selection.createRange().duplicate();
		r.moveEnd('character', o.value.length);
		if (r.text === '') { return o.value.length; }
		return o.value.lastIndexOf(r.text);
	} else { return o.selectionStart; }
};

// set the selection, o is the object (input), p is the position ([start, end] or just start)
$.fn.setSelection = function(o, p)
{
	// if p is number, start and end are the same
	if(typeof p == "number") { p = [p, p]; }
	// only set if p is an array of length 2
	if(p && p.constructor == Array && p.length == 2)
	{
		if (o.createTextRange)
		{
			var r = o.createTextRange();
			r.collapse(true);
			r.moveStart('character', p[0]);
			r.moveEnd('character', p[1]);
			r.select();
		}
		else if(o.setSelectionRange)
		{
			o.focus();
			o.setSelectionRange(p[0], p[1]);
		}
	}
};

})(jQuery);

$(".numeric").numeric({ decimal : ".",  negative : false, scale: 3 });

