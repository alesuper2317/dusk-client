from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def root():
    return render_template("index.html")

@app.route("/signup")
def signup():
    return render_template("forms/signup.html")

app.run(host="0.0.0.0", port=80, debug=True)