# pip install prettyprint
from pprint import pprint as pp

students = {
    'Alice': {
        'age': 20,
        'grades': {'math': 90, 'english': 85},
        'hobbies': ['reading', 'chess']
    },
    'Bob': {
        'age': 22,
        'grades': {'math': 75, 'english': 80},
        'hobbies': ['football', 'gaming']
    },
    'Charlie': {
        'age': 21,
        'grades': {'math': 95, 'english': 70},
        'hobbies': ['music', 'drawing']
    }
}

print("Dictionary printet med almindelig print")
print(students)
print("Dictionary printet med pretty print")
pp(students)