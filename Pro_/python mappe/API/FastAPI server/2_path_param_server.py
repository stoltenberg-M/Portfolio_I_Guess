"""
# Start server via terminal:
uvicorn [name of file]:app --reload
# uden []
"""
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def index():
    return {"message": "This is blogsite"}

# http://127.0.0.1:8000/
@app.get('/blog')
def info():
    return {'data':'blog info'}

# Prøv
# http://127.0.0.1:8000/blog/spec 

# http://127.0.0.1:8000/blog/specific
@app.get('/blog/specific')
def sInfo():
    return {'data':'specific info'}

# http://127.0.0.1:8000/blog/42/
@app.get('/blog/{id}')
def show(id:int): #validering af int variabel
    return {'data':id}

# Prøv
# http://127.0.0.1:8000/blog/47/comm
# Denne giver fejl, da den ikke eksisterer - status code 422 Unprocessable Content 
# http://127.0.0.1:8000/blog/47/comments
@app.get('/blog/{id}/comments')
def comments(id):
    return {'data':f'comment {id}'}