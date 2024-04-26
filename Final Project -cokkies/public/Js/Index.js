// Get references to DOM elements
const btnLogin = document.getElementById("BTN_LOGIN");
const etxEmail = document.getElementById("ETX_EMAIL");
const etxPassword = document.getElementById("ETX_PASSWORD");

// Add event listener to the login button
btnLogin.addEventListener("click", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Send a POST request to the server
    fetch("http://localhost:3000/login", {
        method: "POST", // Specify the HTTP method
        headers: {
            "Content-type": "application/json", // Specify the content type
        },
        redirect: "follow", // Follow redirects, if any
        // Convert the user's email and password to JSON and send it in the request body
        body: JSON.stringify({
            email: etxEmail.value,
            password: etxPassword.value
        })
    }).then(rawResponse => {

        if (!rawResponse.ok) {
            alert("Invalid Credential")
        }
        else {
            return rawResponse.json()
        }

    }).then(jsonresponse => {
        console.log(jsonresponse)

    })

});
