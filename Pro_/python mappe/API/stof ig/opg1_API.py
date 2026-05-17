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

print("Dictionary printet med prettyprint opg del 1")
pp(students["Alice"]["grades"]["english"])

print("Dictionary printet med prettyprint opg del 2")
pp(students["Bob"]["hobbies"])

print("Dictionary printet med prettyprint opg del 3")
for key in students.keys():
    pp(key)

print("Dictionary printet med prettyprint opg del 4")
for keys in students.keys():
    pp(f"{keys} {students[keys]["grades"]["math"]}")

print("Dictionary printet med prettyprint opg del 5")
for student in students:
    pp(students[student]["hobbies"])

print("Dictionary printet med prettyprint opg del 6")
alice_E = (students["Alice"]["grades"]["english"])
bob_E = (students["Bob"]["grades"]["english"])
charlie_E = (students["Charlie"]["grades"]["english"]) 

gennemsnittet = (alice_E + bob_E + charlie_E) / 3
pp(gennemsnittet)

print("Dictionary printet med prettyprint opg del 7")
for name, info in students.items():
    if info["grades"]["math"] > 90:
        pp(name)

print("Dictionary printet med prettyprint opg del 8")
for name, info in students.items():
    if info["age"] > 20:
        pp(name)

print("Dictionary printet med prettyprint opg del 9")
num_of = 0
for name, info in students.items():
    if "drawing" in info["hobbies"]:
        num_of += 1
pp(num_of)

print("Dictionary printet med prettyprint opg del 10")
# not 100% done or right 
alice_Al = (students["Alice"]["grades"]["math"] + students["Alice"]["grades"]["english"]) / 2
bob_Al = (students["Bob"]["grades"]["math"] + students["Bob"]["grades"]["english"]) / 2
charlie_Al = (students["Charlie"]["grades"]["math"] + students["Charlie"]["grades"]["english"]) / 2

pp({alice_Al, bob_Al, charlie_Al})



