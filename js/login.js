$(function() {
    const sess = getCookie('user_info')
    if(sess){
        location.href="/"
        return;
    }
    var loginCond = false;
    const changeBtn = $("#change-btn")
    const signupForm = $('#signup-form')
    const loginForm = $("#login-form")

    const loginBtn = loginForm.find('#login_btn');
    const signupBtn = signupForm.find("#signup-btn")

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

    loginBtn.click(async function() {
        const login_id = loginForm.find('#login_id').val()
        const login_pw = loginForm.find('#login_pw').val()
        
        const result = await loginUser({login_id, login_pw})
        const t = JSON.stringify(result);
        setCookie("user_info",t)
    })

    signupBtn.click(async function() {
        const user_id = signupForm.find('#user_id').val()
        const user_pw = signupForm.find('#user_pw').val()
        const user_pw_check = signupForm.find('#user_pw_check').val()
        const user_nm = signupForm.find('#user_nm').val()
        const cond = user_pw === user_pw_check
        if(!cond) {
            return;
        }
        const result = await addUser({user_id, user_pw, user_nm});
        if(result){
            const t = JSON.stringify({user_id, user_pw, user_nm, wallet_address: ''});
            setCookie("user_info",t)
        }
    })
})