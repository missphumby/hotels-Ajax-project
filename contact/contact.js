const firstname = document.forms.firstname;
    const lastname = document.forms.lastname;
console.log(firstname)
const selectedRoom = document.getElementById('selectroom');
    console.log(selectedRoom)
    const totalamount = document.getElementById('amount');
    console.log(totalamount);
    const checkIn = document.getElementById('checkin')
    const checkOut = document.getElementById('checkout')
   console.log(checkin)
   var emailadd = document.forms.emailaddress;
   var homeadd = document.forms.homeaddress;
const feedback = document.getElementById('message');
console.log(feedback)
// window.addEventListener('DOMContentLoaded', function(e){
// validateName();
// validateDate()
// });

function validateName(){
        // const emailadd = document.forms.emailaddress;
    if (firstname.value === '' || lastname.value === ""){
        lastname.focus()
        alert('name cannot be empty');
        return false;
    }
    emailadd.focus()
    return true;
};

function validateEmail(){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailadd.value.match(mailformat) && emailadd.value.length > 0){
        homeadd.focus()
        return true
    }
    alert("you must enter a valid email address");
    emailadd.focus();
    return false
}

function showamount(){
        if (selectedRoom.value === "southern serenade"){
        totalamount.value =  "Your total bill is $156.99 NGN"
    }else if(selectedRoom.value === "enchanted escape"){
        totalamount.value =  "Your total bill is $195.99 NGN"
    }else if(selectedRoom.value === "sandy suite"){
        totalamount.value =  "Your total bill is $200.50 NGN"
    }
};

function validateDate1(){
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(checkIn.value.match(dateformat)){
        checkOut.focus()
        return true;
    }
    
  alert('please enter a valid date');
  checkin.focus()
  return false
};

function validateDate2(){
        var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(checkOut.value.match(dateformat)){
        submitBtn.focus();
        
        return true;
    }
  alert('please enter a valid date')
  checkOut.focus()
  return false
};


const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(firstname.value === "" || lastname.value === "" || emailadd.value === "" || homeadd.value === "" || selectedRoom.value === ""){
feedback.innerHTML = "please enter the field";
feedback.style.display = "block";
setTimeout(()=>{
    feedback.style.display = "none"
}, 1000)
return false;
}
else{
        confirm('Are you sure you want to submit this form?');
        alert('Congrats, a reservation has been made for you at Meenah Suites. See you soon');
window.location.href = "../index.html";
// window.location.reload
}
})