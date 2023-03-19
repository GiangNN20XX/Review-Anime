let btnLogIn = document.getElementById("btnLogIn")

btnLogIn.addEventListener("click", () => {
    let eLogIn = document.getElementById("eLogIn")
    let pwdLogIn = document.getElementById("pwdLogIn")

    let getLocalStorage = localStorage.getItem('data')
    if (getLocalStorage === null || getLocalStorage.length === undefined) {
        alert("Tài khoản không tồn tại")
    } else {
        //validate name 
        let isValueEmail = validateEmail(emailSignUp)
        let isValuePWD = validatePwd(pwdLogIn)
        //console.log(isValueEmail)
        if (isValueEmail && isValuePWD) {
            alert('Đăng nhập thành công')
        } else {
            alert("Tài khoản không tồn tại")
        }
    }

    function validateEmail(emailSignUp) {
        let getLocalStorage = localStorage.getItem('data');
        let datas = JSON.parse(getLocalStorage);
        for (let data of datas) {
            if (emailSignUp === data.emailSignUp.trim()) {
                return true;
            }
        }
        return false;
    }

    function validatePwd(pwdLogIn) {
        let getLocalStorage = localStorage.getItem('data');
        let datas = JSON.parse(getLocalStorage);
        for (let data of datas) {
            if (pwdLogIn === data.pwd.trim()) {
                return true;
            }
        }
        return false;
    }
})