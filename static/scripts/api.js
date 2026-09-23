const server = "http://localhost:3050/";

async function signup( username, password, invite ) {
    return fetch(server + "signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password, invite: invite })
    })
    .then(response => response.json())
    .then(json => {return json})
}

async function login( username, password ) {
    return fetch(server + "login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(json => {return json})
}