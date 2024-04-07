index = {}


index.btnlogin = document.getElementById("BTN_LOGIN")

index.inputemail = document.getElementById("INPUT_EMAIL")

index.inputpassword = document.getElementById("INPUT_PASSWORD")

index.error = document.getElementById("ERROR")

index.btnlogin.addEventListener("click", (e) => {

    fetch("http://localhost:3000/api/teacher/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: index.inputemail.value,
            password: index.inputpassword.value
        })
    })
        .then(rawresponse => rawresponse.json())
        .then(jsonresponse => {


            if (jsonresponse.token) {
                // console.log(jsonresponse.token)
                localStorage.setItem("token", jsonresponse.token)
                window.location.href = "/dashboard";
            }
            else {
                index.error.classList.remove("d-none")
            }
        })
        .catch((e) => { console.log(e) })
})



