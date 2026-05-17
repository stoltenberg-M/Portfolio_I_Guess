# inspiration fra reference fastapi.tiangolo.com/tutorial/body
"""
# Start server via terminal:
uvicorn [name of file]:app --reload
# uden []
"""
from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

# Pydantic muliggør her bl.a., at man kan gøre nogle af dem optional
# Har man ikke brug for det kan man blot lave en dictionary liste
# Ligesom i '4_simple_db_server' eksemplet 
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[str] = None

dataItem = Item() #None

app = FastAPI()

@app.get('/')
def index():
    return {"message": "Try http://127.0.0.1:8000/docs"}

#prøv http://127.0.0.1:8000/docs 
@app.post('/items/')
def create_item(item: Item):
   #global dataItem
   dataItem = item
   return item

@app.get('/dataItem')
def index():
    #global dataItem
    return {"message": dataItem}