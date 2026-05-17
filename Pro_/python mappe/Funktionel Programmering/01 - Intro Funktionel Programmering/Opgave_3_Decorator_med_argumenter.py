def log_args(func):
    def wrapper(*args):
        print("Argumenter:", *args)
        return func(*args)
    return wrapper

@log_args
def multiply(a,b):
    return a*b
multiply(3,4)

