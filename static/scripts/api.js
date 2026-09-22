const server = "http://localhost:3050/";

async function login( username, password ) {
    const response = await fetch(server + "login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    });
    console.log(await response.body.)
    const data = await response.json();
    return data.data.token;
}