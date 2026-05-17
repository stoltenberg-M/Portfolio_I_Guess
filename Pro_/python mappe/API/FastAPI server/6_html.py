"""
# Start server via terminal:
uvicorn [name of file]:app --reload
# uden []
"""

# pip install jinja2
from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
#from fastapi.responses import HTMLResponse

app = FastAPI()

app.mount("/templates", StaticFiles(directory="templates"))
templates = Jinja2Templates(directory="templates")

@app.get('/')
def index(request: Request):
    return templates.TemplateResponse("index.html",{"request": request, "message": "Hello World from python"})



