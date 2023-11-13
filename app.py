from flask import Flask, render_template
from  simp.simp import simp_bp
from  comp.comp import comp_bp
from col.col import col_bp

app = Flask(__name__)

app.register_blueprint(simp_bp, url_prefix="/simp")
app.register_blueprint(comp_bp, url_prefix="/comp")
app.register_blueprint(col_bp, url_prefix='/col')


@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
