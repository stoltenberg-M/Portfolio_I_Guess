import requests
from pprint import pprint

url = "https://api.chucknorris.io/jokes/random"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    pprint(data)
else:
    print("Noget gik galt:", response.status_code)
