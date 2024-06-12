console.log('Web to Lead')

let inputDate = document.querySelector('.inputDate')
let outputDate = document.querySelector('.outputDate')

beforeSubmit = () => {
    console.log('Input Value: ', inputDate.value);
    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN")
    outputDate.value = formattedDate;
}

beforeSubmit(); 