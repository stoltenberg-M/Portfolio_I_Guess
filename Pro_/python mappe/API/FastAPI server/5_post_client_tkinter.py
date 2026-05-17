# Start serveren fra "4_post_server.py" i en terminal
# Kør derefter denne fil i en anden terminal
import requests
import tkinter as tk
from tkinter import ttk

class App(tk.Tk):
    def __init__(self):
        super().__init__() 
        self.title('Client for fastAPI server')
        self.url_post = "http://127.0.0.1:8000/items"
        self.param = {  "name": "Nintendo Switch",
                        "description": "Console",
                        "price": 2500}
        self.response_post = requests.post(self.url_post,json=self.param)
        self.url_get = "http://127.0.0.1:8000/dataItem"
        self.response_get = requests.get(self.url_get)
        self.name_posted = self.response_get.json()["message"]["name"]
        # Det som skrives i Tkinter er først blevet postet på server, 
        # og dernæst igen hentet fra serveren.
        ttk.Label(self, text=self.name_posted).grid(row=1,column=0,padx=20,pady=20)

if __name__ == '__main__':
    app = App()
    app.mainloop()