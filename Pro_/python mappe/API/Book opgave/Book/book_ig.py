# client.py

API_URL = "http://127.0.0.1:8000/books"

import requests
import tkinter as tk
from tkinter import ttk

class BookClient(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title('Book API Client')
        self.geometry('400x510')

        # Input fields
        ttk.Label(self, text="Book ID:").grid(row=0, column=0, sticky="w", padx=10, pady=5)
        self.book_id_entry = ttk.Entry(self)
        self.book_id_entry.grid(row=0, column=1, padx=10, pady=5)

        ttk.Label(self, text="Name:").grid(row=1, column=0, sticky="w", padx=10, pady=5)
        self.name_entry = ttk.Entry(self)
        self.name_entry.grid(row=1, column=1, padx=10, pady=5)

        ttk.Label(self, text="Author:").grid(row=2, column=0, sticky="w", padx=10, pady=5)
        self.author_entry = ttk.Entry(self)
        self.author_entry.grid(row=2, column=1, padx=10, pady=5)

        ttk.Label(self, text="Description:").grid(row=3, column=0, sticky="w", padx=10, pady=5)
        self.desc_entry = ttk.Entry(self)
        self.desc_entry.grid(row=3, column=1, padx=10, pady=5)

        # Result label
        self.result_label = ttk.Label(self, text="Welcome")
        self.result_label.grid(row=4, column=0, columnspan=2, pady=10)

        # Buttons
        ttk.Button(self, text="Get Book", command=self.get_book_action).grid(row=5, column=0, columnspan=2, pady=2)
        ttk.Button(self, text="Create Book", command=self.create_book_action).grid(row=6, column=0, columnspan=2, pady=2)
        ttk.Button(self, text="Update Book", command=self.update_book_action).grid(row=7, column=0, columnspan=2, pady=2)
        ttk.Button(self, text="Delete Book", command=self.delete_book_action).grid(row=8, column=0, columnspan=2, pady=2)
        ttk.Button(self, text="List Books", command=self.list_books_action).grid(row=9, column=0, columnspan=2, pady=10)

        # Listbox
        self.books_listbox = tk.Listbox(self, width=60)
        self.books_listbox.grid(row=10, column=0, columnspan=2, padx=10, pady=5)

    # API methods
    def get_book_action(self):
        book_id = self.book_id_entry.get()
        if not book_id.isdigit():
            self.result_label.config(text="Invalid ID")
            return
        response = requests.get(f"{API_URL}/{book_id}")
        if response.status_code == 200 and response.json():
            book = response.json().get("result")
            if book:
                self.name_entry.delete(0, tk.END)
                self.name_entry.insert(0, book.get("name", ""))
                self.author_entry.delete(0, tk.END)
                self.author_entry.insert(0, book.get("author", ""))
                self.desc_entry.delete(0, tk.END)
                self.desc_entry.insert(0, book.get("description", ""))
                self.result_label.config(text="Book loaded.")
        else:
            self.result_label.config(text="Book not found.")

    def create_book_action(self):
        name = self.name_entry.get().strip()
        author = self.author_entry.get().strip()
        description = self.desc_entry.get().strip()
        if not name or not author or not description:
            self.result_label.config(text="All fields required.")
            return
        payload = {"name": name, "author": author, "description": description}
        response = requests.post(API_URL, json=payload)
        if response.status_code == 200:
            book = response.json()
            self.book_id_entry.delete(0, tk.END)
            self.book_id_entry.insert(0, book.get("id"))
            self.result_label.config(text="Book created.")
            self.list_books_action()
        else:
            self.result_label.config(text="Error creating book.")

    def update_book_action(self):
        book_id = self.book_id_entry.get()
        if not book_id.isdigit():
            self.result_label.config(text="Invalid ID for update.")
            return
        payload = {
            "name": self.name_entry.get().strip(),
            "author": self.author_entry.get().strip(),
            "description": self.desc_entry.get().strip()
        }
        response = requests.put(f"{API_URL}/{book_id}", json=payload)
        if response.status_code == 200:
            self.result_label.config(text="Book updated.")
            self.list_books_action()
        else:
            self.result_label.config(text="Error updating book.")

    def delete_book_action(self):
        book_id = self.book_id_entry.get()
        if not book_id.isdigit():
            self.result_label.config(text="Invalid ID for delete.")
            return
        response = requests.delete(f"{API_URL}/{book_id}")
        if response.status_code == 200:
            self.result_label.config(text="Book deleted.")
            self.list_books_action()
        else:
            self.result_label.config(text="Error deleting book.")

    def list_books_action(self):
        response = requests.get(API_URL)
        self.books_listbox.delete(0, tk.END)
        if response.status_code == 200:
            books = response.json()
            for book in books:
                display = f"ID: {book['id']} | Name: {book['name']} | Author: {book['author']}"
                self.books_listbox.insert(tk.END, display)
        else:
            self.books_listbox.insert(tk.END, "Error fetching books.")

if __name__ == "__main__":
    app = BookClient()
    app.mainloop()
