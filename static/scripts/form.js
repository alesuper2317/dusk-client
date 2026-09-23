function show_error(error) {
    console.log(error.desc);
    const el = document.getElementById("error-message");
    el.textContent = error.desc;
    el.style.display = "block";
}

async function form_signup() {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const invite = document.getElementById("invite").value;

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Invite code:", invite);

    const termsAccepted = document.getElementById("terms").checked;

    if (!termsAccepted) {
        show_error({ desc: "Please accept the terms and conditions to continue" });
        return;
    }

    const data = await signup(username, password, invite);
    if (!data.success) {
        show_error(data.error)
    }
}

async function form_login() {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    const data = await login(username, password);
    if (!data.success) {
        show_error(data.error)
    }
}