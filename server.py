from quart import Quart, render_template, send_from_directory

app = Quart(__name__)

# @app.route("/static/<path:filename>", methods=["GET"])
# async def static(filename: str):
#     return await send_from_directory("static", filename)

@app.route("/assets/<path:filename>", methods=["GET"])
async def assets(filename: str):
    return await send_from_directory("assets", filename)

@app.route("/", methods=["GET"])
async def index():
    return await render_template("index.html")

app.run(
    host="127.0.0.1",
    port=2000,
    debug=False,
    use_reloader=False
)