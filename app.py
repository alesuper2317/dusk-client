from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/signup")
def signup():
    return render_template("forms/signup.html")

@app.route("/login")
def login():
    return render_template("forms/login.html")

app.run(host="0.0.0.0", port=8080, debug=True)