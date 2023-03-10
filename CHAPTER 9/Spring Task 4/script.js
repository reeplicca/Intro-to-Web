let usersArray;
if(localStorage.getItem('users') == null) {
    usersArray = []
} else {
    let json = localStorage.getItem('users');
    usersArray = JSON.parse(json)
}

function register() {
    let newUsers = {};
    newUsers.email = emailReg.value;
    newUsers.password = passwordReg.value;
    newUsers.fullname = fullname.value;
    newUsers.country = country.value;
    newUsers.birthdate = birthdate.value;

    usersArray.push(newUsers);   
    updateStorage();

    document.location.href = "login.html";
}


function updateStorage(){
    let jsonObj = JSON.stringify(usersArray);
    localStorage.setItem('users', jsonObj)

}

function signIn() {
    let json = localStorage.getItem('users')
    let obj = JSON.parse(json);
    let flag = false

    for (let data of obj) {
        if(data.email == emailSign.value && data.password == passwordSign.value) {
            flag = true
            localStorage.setItem("account", JSON.stringify(data))
            document.location.href = "account.html";
            break;
        }
    }

    if(!flag) {
        alert("Incorrect login or password")
    }
}

