# Byg en simpel kontaktformular med Tkinter

from tkinter import *
from tkinter import ttk

import subprocess

root = Tk()
root.geometry("300x250")

root.title("Kontaktformular")
title = root.title("Kontaktformular")


mainframe = ttk.Frame(root, padding="10 10 10 10")
mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
root.columnconfigure(0, weight=1)
root.rowconfigure(0, weight=1)

Navn_ = StringVar()
Navn_entry = ttk.Entry(mainframe, textvariable=Navn_, width=30)
Navn_entry.grid(column=3, row=2, sticky=(W, E))

Email_ = StringVar()
Email_entry = ttk.Entry(mainframe, textvariable=Email_, width=30)
Email_entry.grid(column=3, row=4, sticky=(W, E))

Text_entry = Text(mainframe, width=30, height=5)
Text_entry.grid(column=3, row=7, sticky=(W, E))

def submit_text():
    Navn = Navn_entry.get()
    Email = Email_entry.get()
    Text = Text_entry.get(1.0, END)

    if "@" in Email and "." in Email:
        print("Navn:", Navn)
        print("Email:", Email)
        print("Text:", Text)
        subprocess.Popen(["python", "Applications_forløb_opg_2.py"])
    else:
        Navn_.set("No")
        Email_.set("No")

def Remove_text():
    Navn_.set("")
    Email_.set("")
    Text_entry.delete(1.0, END)

ttk.Button(mainframe, text="Send", command=submit_text).grid(column=3, row=8, sticky=W)
ttk.Button(mainframe, text="Ryd", command=Remove_text).grid(column=3, row=9, sticky=W)

ttk.Label(mainframe, text="Navn").grid(column=1, row=2, sticky=E)
ttk.Label(mainframe, text=" ").grid(column=1, row=3, sticky=W)
ttk.Label(mainframe, text="Email").grid(column=1, row=4, sticky=E)
ttk.Label(mainframe, text=" ").grid(column=1, row=5, sticky=W)
ttk.Label(mainframe, text="Text").grid(column=1, row=7, sticky=E)

root.mainloop()



