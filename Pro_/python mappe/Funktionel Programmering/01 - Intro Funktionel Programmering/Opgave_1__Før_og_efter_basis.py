def del_1(funs):
    def wrapper():
        print("Før funktionen kører")
        funs()
        print("Efter funktionen kører")
    return wrapper
@del_1
def sig_hej():
    print("Hej!")
sig_hej()
