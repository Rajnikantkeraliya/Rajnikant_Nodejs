const token = localStorage.getItem("token");

fetch("http://localhost:3000/movies/", {
    method: "GET",
    headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    redirect: "follow"
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}).then(movies => {
    console.log(movies);
}).catch(error => {
    console.error('Error:', error);
});
