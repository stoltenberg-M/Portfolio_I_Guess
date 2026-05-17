import tkinter as tk
import tkinter.ttk as ttk

root = tk.Tk()
root.title("Eksempel med ttk og grid")

# Opret en ttk Label
label = ttk.Label(root, text="tk vs ttk (themed tk)")
label.grid(row=0, column=0, padx=10, pady=10)

# Opret en ttk Entry (tekstfelt)
entry = ttk.Entry(root)
entry.grid(row=1, column=0, padx=10, pady=5)

# Opret en tk Button
buttonTk = tk.Button(root, text="Tk knap")
buttonTk.grid(row=2, column=0, padx=10, pady=10)

# Opret en ttk Button
buttonTtk = ttk.Button(root, text="Ttk knap")
buttonTtk.grid(row=3, column=0, padx=10, pady=10)

root.mainloop()
