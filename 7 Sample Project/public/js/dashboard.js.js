dashboard = {}

const token = localStorage.getItem("token");

if (token !== null) {

    fetch("http://localhost:3000/api/teacher/login")


}
else {
    window.location.href = '/'
}