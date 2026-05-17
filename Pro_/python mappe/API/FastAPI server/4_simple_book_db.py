"""
Dette er blot en simple database i form af en liste af dictionaries.
Ønsker man at anvende en ekstern database, bør man overveje,
at lave de af funktionerne, der kontakter databasen til 'async'
'async' understøttes af FastAPI
"""
"""
# Start server via terminal:
uvicorn [name of file]:app --reload
# uden []
"""
"""
Hvis man vi afprøve de forskellige metoder kan man anvende Swagger UI via
# http://127.0.0.1:8000/docs 
"""

from fastapi import FastAPI
from pprint import pprint as pp

app = FastAPI()

bookList = [
    {'id': 1, 'name': '1984', 'author': 'George Orwell', 'description': 'Dystopian surveillance, truth is twisted.'},
    {'id': 2, 'name': 'To Kill a Mockingbird', 'author': 'Harper Lee', 'description': 'Justice, racism, childhood, moral courage.'},
    {'id': 3, 'name': 'The Great Gatsby', 'author': 'F. Scott Fitzgerald', 'description': 'Wealth, love, illusion, American Dream.'},
    {'id': 4, 'name': 'Pride and Prejudice', 'author': 'Jane Austen', 'description': 'Romance, wit, pride, social status'},
    {'id': 5, 'name': 'The Hobbit', 'author': 'J.R.R. Tolkien', 'description': 'Adventure, dragon, courage, unexpected hero.'}
]

@app.get('/books')
def get_books(limit:int = None):
    if limit:
        return bookList[:limit]
    else:
        return bookList

@app.get('/books/{id}')
def get_book(id: int):
    for book in bookList:
        if book['id'] == id:
            return {'result': book}

@app.post('/books')
def create_book(book: dict):
    new_id = max(book['id'] for book in bookList) + 1

    new_book = {
        'id': new_id,
        'name': book['name'],
        'Author': book['author'],
        'description': book['description'] 
    }
    bookList.append(new_book)
    return new_book

@app.put('/books/{id}')
def update_book(id: int, updated_book: dict):
    for book in bookList:
        if book['id'] == id:
            book['name'] = updated_book['name']
            book['author'] = updated_book['author']
            book['description'] = updated_book['description']
            return book
    return "Error, not found"

@app.delete('/books/{id}')
def delete_book(id: int):
    for index, book in enumerate(bookList):
        if book['id'] == id:
            delete_book = bookList.pop(index)
            return delete_book
    return "Error, not found"

if __name__ == "__main__":
    import uvicorn; from pathlib import Path
    uvicorn.run(f'{Path(__file__).resolve().stem}:app', host="0.0.0.0", port=8000, reload=True)