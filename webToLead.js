console.log('Web to Lead')


let captchaChecked = false;
beforeSubmit = (event) => {
    if(captchaChecked){
    let inputDate = document.querySelector('.inputDate')
    let outputDate = document.querySelector('.outputDate')
    console.log('Input Value: ', inputDate.value);
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN")
    outputDate.value = formattedDate;
    }else{
        alert("Please check the reCaptcha Box to Submit");
        event.preventDefault(); //stop the submission of the form
    }
}


function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
        {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = 
            JSON.stringify(elems); 
        }
     } setInterval(timestamp, 500); 

function captchaSuccess(){
    captchaChecked = true;
}
