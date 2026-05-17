"""
# Gør evt. dette
# I terminal:
# ls
# cd evt. ind i hovedmappen for projektet
python3 -m venv fastapi-env

"""

"""
pip3 install fastapi
pip3 install uvicorn

# Start server via terminal:
uvicorn [file name]:app --reload
# uden []
# Dette åbner en REPL (Read Evaluate Print Loop), tryk "ctrl+c" for at afslutter REPL 
# Hvis du afslutter REPL afslutter du også serveren. 
# Åben en browser og gå til http://127.0.0.1:8000
# --reload gør her at man ikke selv behøver at genstart serveren,
# når man gemmer en ændring i python-dokumentet.
# man stadig selv refresh browserne.
"""

from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def index():
    return {"message": "Hello World!"}