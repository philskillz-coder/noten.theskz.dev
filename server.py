from quart import Quart, render_template, send_from_directory

app = Quart(__name__)

@app.route("/assets/<path:filename>", methods=["GET"])
async def assets(filename: str):
    return await send_from_directory("assets", filename)

@app.route("/", methods=["GET"])
async def index():
    return await render_template("index.html")

@app.route("/notenschnitt")
async def average():
    return await render_template("average.html")

@app.route("/fehlende-note")
async def missing():
    return await render_template("missing.html")

@app.route("/note-punkte-rechner")
async def grade_calculator():
    return await render_template("grade-points-converter.html")

# @app.route("/notentabelle")
# async def grade_table():
#     return await render_template("grade-from-points.html")

app.run(
    host="127.0.0.1",
    port=2000,
    debug=False,
    use_reloader=False
)