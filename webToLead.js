console.log('Web to Lead')

let inputDate = document.querySelector('.inputDate')
let outputDate = document.querySelector('.outputDate')

beforeSubmit = () => {
    console.log('Input Value: ', inputDate.value);
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN")
    outputDate.value = formattedDate;
}

beforeSubmit(); 

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") 
        {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
            elems["ts"] = JSON.stringify(new Date().getTime());
            document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
        }
     } setInterval(timestamp, 500); 

