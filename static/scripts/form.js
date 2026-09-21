function post(url) {
    function listener(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const invite = document.getElementById("invite").value;

        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Invite code:", invite)
    }
    return listener;
}

document.getElementById("form").addEventListener("submit", post("localhost:8080"));
