def print_result(func):
    def wrapper(*args):
        result=func(*args)
        print(result)
        return result
    return wrapper

@print_result
def add(a,b):
    return a+b
add(3,4)