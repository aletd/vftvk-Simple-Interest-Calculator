/**
 * These variables hold the "id" values for the slider
 * input element, as well as the span element.
 * These will be used as selector variables to get
 * references to the elements.
 */
var SLIDER_ID       = 'rate';
var SLIDER_SPAN_ID  = 'slider-indication';

/**
 * Function compute()
 * Inputs:
 * Outputs:
 *      total interest
 * Description: this function reads the values for all 
 * required elements, validates these values and then 
 * calculates the total interest
 */

function compute()
{
    var principal   = document.getElementById("principal").value;
    var rate        = document.getElementById("rate").value;
    var years       = document.getElementById("years").value;
    

    // validate principal not empty or <= 0
    if( (principal == "") || (principal <= 0) ){
        alert("Enter a positive number");
        document.getElementById('principal').focus();
        return false;
    }

    // convert years to number
    years = parseInt(years);

    // calculate interest (output value)
    var interest = principal * years * rate / 100;

    // get end year
    var currentYear = new Date().getFullYear();
    var endYear = currentYear + years;

    // compose answer text
    var result_text = 'If you deposit ' + '<mark>' +  principal +'</mark>' + ',<br>';
    result_text += 'at an interest rate of ' + '<mark>' + rate + '%</mark>' +'.<br>';
    result_text += 'You will receive an amount of ' + '<mark>' + interest + '</mark>' + ',<br>';
    result_text += 'in the year ' + '<mark>' + endYear + '</mark>' + '<br>';

    // display answer
    document.getElementById('result').innerHTML = result_text;

    
}
 

function update_slider_text(){
    var slider_value = document.getElementById('rate').value
    var slider_text = slider_value + ' %';
    document.getElementById('slider-indication').textContent = slider_text;

}

window.onload = function(){
    console.log('Inside onload');
    document.getElementById('rate').onchange = update_slider_text;
}