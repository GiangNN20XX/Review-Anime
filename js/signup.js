let btnSignUp = document.getElementById("btnSignUp")

const re = /^[A-Za-z0-9._%+-]+@gmail\.com$/   //regex

btnSignUp.addEventListener("click", () => {
    let emailSignUp = document.getElementById("emailSignUp").value
    let pwd = document.getElementById("pwd").value

    let obj = { emailSignUp: emailSignUp, pwd: pwd }
    let arr = new Array()


    let getLocalStorage = localStorage.getItem('data')
    if (getLocalStorage === null || getLocalStorage.length === undefined) {
        if (emailSignUp.match(re)) {
            arr.push(JSON.stringify(obj))
            localStorage.setItem('data', `[` + arr + `]`)
            alert("Đăng ký thành công")
            window.location.href = "../index.html"
        } else {
            alert("Email không hợp lệ")
        }
    } else {
        //validate name 
        let isValueEmail = validateEmail(emailSignUp)
        //console.log(isValueEmail)
        if (isValueEmail) {
            alert('Email đã được nhập!!')
        } else {
            let datas = JSON.parse(getLocalStorage)
            if (emailSignUp.match(re)) {
                for (let data of datas) {
                    arr.push(JSON.stringify(data))
                }
                arr.push(JSON.stringify(obj))
                //console.log(arr)
                localStorage.setItem('data', `[` + arr + `]`)
                alert("Đăng ký thành công")
                window.location.href = "../index.html"
            } else {
                alert("Email không hợp lệ")
            }
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

})