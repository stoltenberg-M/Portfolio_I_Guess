"""
# Start server via terminal:
uvicorn [name of file]:app --reload
# uden []
"""
from fastapi import FastAPI
from typing import Optional

app = FastAPI()

# http://127.0.0.1:8000/blog/
@app.get('/blog/predefined')
def checkFunc(check=True, limit:int=11,message="Hello World"):
    return {'data':f'check: {check} - message is {message}, and the limit is {limit}'}


# http://127.0.0.1:8000/blog?check=false&limit=2&message=paper_elephant
# prøv også disse
# http://127.0.0.1:8000/blog?check=true&limit=11
# http://127.0.0.1:8000/blog?check=cph&limit=denmark&message=visit  
@app.get('/blog')
def checkFunc(check:bool, limit:int=11, message:Optional[str] = None):
    return {'data':f'check: {check} - message is {message}, and the limit is {limit}'}

