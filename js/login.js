$(function() {
    var loginCond = false;
    const changeBtn = $("#change-btn")
    const signupForm = $('#signup-form')
    const loginForm = $("#login-form")

    loginForm.show()
    signupForm.hide();

    changeBtn.click(function() {
        loginCond = !loginCond
        if(loginCond){
            changeBtn.text("or Login")
            signupForm.show(350);
            loginForm.hide(350)
        }else{
            changeBtn.text("or Signup")
            signupForm.hide(350);
            loginForm.show(350)
        }
        
    })
})