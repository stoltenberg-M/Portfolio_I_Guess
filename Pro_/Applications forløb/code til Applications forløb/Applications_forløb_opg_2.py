# Byg en simpel kontaktformular med Tkinter

from tkinter import *
from tkinter import ttk


root = Tk()
root.geometry("450x275")

root.title("Spørgeskema")
title = root.title("Spørgeskema")

mainframe = ttk.Frame(root, padding="10 10 10 10")
mainframe.grid(column=0, row=0, sticky=(N, W, E, S))

root.columnconfigure(0, weight=1)
root.rowconfigure(0, weight=1)


#Your gender
Køn = StringVar()
Køn_Man = ttk.Radiobutton(mainframe, text='Man', variable=Køn, value='man')
Køn_Man.grid(column=3, row=2, sticky=(W, E))

Køn_Kvinde = ttk.Radiobutton(mainframe, text='Kvinde', variable=Køn, value='kvinde')
Køn_Kvinde.grid(column=4, row=2, sticky=(W, E))

Køn_Andet = ttk.Radiobutton(mainframe, text='Andet', variable=Køn, value='andet')
Køn_Andet.grid(column=5, row=2, sticky=(W, E))

def dit_Køn():
    dig = Køn.get()

    if dig =='man':
        print("køn er Man")
    elif dig =='kvinde':
        print("køn er Kvinde")
    elif dig =='andet':
        print("køn er Andet")
    else:
        print("none")


#your age
Alder = StringVar()
Alder_på = ttk.Combobox(mainframe, textvariable=Alder)
Alder_på['values'] = list(range(10, 81, 5))
Alder_på.grid(column=3, row=4, sticky=(W, E))


# Square check box
you_want_1 = BooleanVar()
check_1 = ttk.Checkbutton(mainframe, text='Vil have nyhedsbrev', variable=you_want_1)
check_1.grid(column=3, row=6, sticky=W, pady=5)

you_want_2 = BooleanVar()
check_2 = ttk.Checkbutton(mainframe, text='Vil have tilbudsmails', variable=you_want_2)
check_2.grid(column=4, row=6, sticky=W, pady=5)


#Vil godt have vil ikke have
def check_yes_no():
    if you_want_1.get():
        print("Vil godt have Nyhedsbrev")
    else:
        print("Vil ikke have Nyhedsbrev")
    if you_want_2.get():
        print("Vil godt have Tilbudsmails")
    else:
        print("Vil ikke have Tilbudsmails")    
    
Glæde = IntVar()
ttk.Label(mainframe, text="Hvor tilfreds er du Fra 1 til 10?").grid(column=3, row=8, sticky=E)
slider = Scale(mainframe, from_=0, to=10, orient=HORIZONTAL, variable=Glæde)
slider.grid(column=3, row=9, columnspan=2, sticky=(W, E))


#THE submit :3
def submit():
    dit_Køn()
    print("alder:",Alder.get())
    check_yes_no()
    print("tilfreds:", Glæde.get())

#THE nulstil :3
def nulstil():
    Køn.set("")
    Alder.set("")
    you_want_1.set(False)
    you_want_2.set(False)
    Glæde.set(0)

ttk.Button(mainframe, text="Indsend ", command=submit).grid(column=3, row=10, sticky=W)
ttk.Button(mainframe, text="Nulstil  ", command=nulstil).grid(column=3, row=11, sticky=W)

ttk.Label(mainframe, text="Køn").grid(column=1, row=2, sticky=E)
ttk.Label(mainframe, text=" ").grid(column=1, row=3, sticky=W)
ttk.Label(mainframe, text="Alder").grid(column=1, row=4, sticky=E)
ttk.Label(mainframe, text=" ").grid(column=1, row=5, sticky=W)
ttk.Label(mainframe, text=" ").grid(column=1, row=7, sticky=W)

root.mainloop()



