//client side validation
const displayMsg=(message,id,colorName)=>{
    document.getElementById(id).innerHTML=message
    document.getElementById(id).style.color=colorName
}
const fnameValidate=()=>{
   const first_name= document.getElementById('fname').value
   
   if(first_name == ''){
    displayMsg('first name is mandatory','fnamemsg','red')
    // data should not be return so return false 
    return false
   }
   else if(first_name.length<3){
    displayMsg('firstname character should be at least of 3','fnamemsg','red')
    return false
   }
   else if(!first_name.match(/^([a-z])+$/) ){
    displayMsg('firstname only cantain lowercase alphabets','fnameMsg','red')
    return false

}
   else{
    displayMsg('valid first name','fnamemsg','green')
    //return enter data
    return true
   }
}
const lnameValidate=()=>{
    const last_Name=document.getElementById('lname').value
    if(last_Name==''){
        displayMsg('last name cannot be empty','lnamemsg','red')
        return false;
    }
    else if(last_Name.length<3){
        displayMsg('last name should be of at least 3 character','lnamemsg','red')
        return false;
    }
    else if(!last_Name.match(/^([a-z])+$/)){
        displayMsg('only lower  alphabetic character is accepted ','lnamemsg','red')
    }
    else{
        displayMsg('valid last name','lnamemsg','green')
        return true;
    }

}
const emailValidate=()=>{
    const email=document.getElementById('email').value
    if(email==''){
        displayMsg('email is mandatory','emailmsg','red')
        return false;
    }
    else if(!email.match(/^([a-zA-Z0-9])[a-z0-9\-\_\.]+\@+([a-z])+\.+([a-z])+$/)){
        displayMsg('email invalid format','emailMsg','red')
        return false
    }
    else{
        displayMsg('valid email','emailmsg','green')
        return true
    }
}
const pwdValidate=()=>{
    const pwd =document.getElementById('pwd').value
    if(pwd==''){
        displayMsg('password is necessary','pwdmsg','red')
        return false
    }
    else if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\@\#\$\-\_\?]).{8,100}$/)){
        displayMsg('min 8 character with alphanumeric ,special charcter,capital letter','pwdmsg','red')
        return false
    }

    else{
        displayMsg('strong password','pwdmsg','green')
        return true
    }
}
const cpwdValidate=()=>{
    const password=document.getElementById('pwd').value
    const cpwd=document.getElementById('cpwd').value
    if(cpwd==''){
        displayMsg('confirm password is mandatory','cpwdmsg','red')
        return false
    }
    else if(password !==cpwd){
        displayMsg('password not match','cpwdmsg','red')
        return false
    }
    else{
        displayMsg('password match','cpwdmsg','green')
        return true

    }

}
const validForm=()=>{
    if(fnameValidate() && lnameValidate() && emailValidate()&& pwdValidate() && cpwdValidate())
    {
        return true
    }
    else{ return false}
}