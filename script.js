const form = document.getElementById('form')
//console.log(form);

const mortgageAmt = document.querySelector('input')
 //console.log(mortgageAmt);

const clearAll = document.querySelector('a')
//  console.log(clearAll);

const mortgageTerm = document.getElementById('terms')
 //console.log(mortgageTerm);

const interestRate = document.querySelector('#interest-rate')
 //console.log(interestRate);

const repaymentRadio = document.querySelector('#radio1')
 //console.log(repaymentRadio);

const interestOnlyRadio = document.getElementById('radio2')
 //console.log(interestOnlyRadio);

const rightInner = document.querySelector('.right-inner')
 //console.log(rightInner);

const rightResult = document.querySelector('.right-result-container')
 //console.log(rightResult);

const calculateBtn = document.querySelector('button')
 //console.log(calculateBtn);

const monthlyRepayResult = document.querySelector('h1')
 //console.log(monthlyRepayResult);

const totalRepayResult = document.querySelector('#last')
 //console.log(totalRepayResult);

const formGroups = document.querySelectorAll('.form-inner')
 //console.log(formGroups);
 const allErrors =document.querySelectorAll('#error');


// showError 
function showError(elem, msg){
const formGroup =elem.closest('.form-group');
const small = formGroup.querySelector('#error');
const formInner = formGroup.querySelector('.form-inner');
small.innerHTML = msg;
if (formInner) {
    formInner.classList.add('error');
}
small.style.visibility ="visible";
}

// showError(mortgageTerm, "This field is required");

// resetForm
function resetForm(){    
    form.reset(); // clear form fields 
    rightResult.style.display = "none";
    rightInner.style.display ="block";
    formGroups.forEach((error)=> error.classList.remove("error"));
    allErrors.forEach((small)=> small.style.visibility = "hidden");
}
clearAll.addEventListener("click", resetForm)

// handleSubmit
function handleSubmit(e){
    e.preventDefault();
    // Reset all error messages
    formGroups.forEach ((error)=> error.classList.remove("error"));


    let isValid = true;
    // Validate form fields
    if (!mortgageAmt.value || isNaN(mortgageAmt.value)) {
    showError(mortgageAmt, "This field is required");
    isValid =false;
    }
    if(!mortgageTerm.value || isNaN(mortgageTerm.value)) {
    showError(mortgageTerm, "This field is required");
    isValid =false;
    }
    if(!interestRate.value || isNaN(interestRate.value)) {
    showError(interestRate, "This field is required");
    isValid = false;
    }
    if (!repaymentRadio.checked || !interestOnlyRadio.checked) {
        showError(repaymentRadio, "This field is required");
    isValid = false;
    }

}

calculateBtn.addEventListener("click", handleSubmit)

