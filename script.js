var nameError = document.querySelector(".name_error");
var contactError = document.querySelector(".contact_error");
var emailError = document.querySelector(".email_error");
var msgError = document.querySelector(".msg_error");
var submitError = document.querySelector(".btn_error");

const validateName = () => {
  var name = document.querySelector(".name input").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter Full Name";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  return true;
};

const validateContact = () => {
  var contact = document.querySelector(".contact input").value;

  if (contact.length == 0) {
    contactError.innerHTML = "Phone no. is required";
    return false;
  }

  if (contact.length > 10) {
    contactError.innerHTML = "Phone no. should be 10 digits";
    return false;
  }

  if (!/^\d+$/.test(contact)) {
    contactError.innerHTML = "Only Digits Required";
    return false;
  }

  if (contact.length == 10) {
    contactError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
};

const validateEmail = () => {
  let email = document.querySelector(".email input").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is Required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

const validateMsg = () => {
  var msg = document.querySelector(".msg textarea").value;

  if (msg.length <= 30) {
    msgError.innerHTML = `${30 - msg.length}` + "Words are left";
    return false;
  }

  msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
};

const checkForm = () => {

  if(validateContact() && validateEmail() && validateMsg() && validateName()){
    return true;
  }
  submitError.style.display = 'block';
  submitError.innerHTML = 'Fix The Error';
  setTimeout(()=>{
    submitError.style.display = 'none';
  },2000)

  return false;
  

};
