import requests
from pprint import pprint

url = "https://catfact.ninja/fact"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    pprint(data)
else:
    print("Noget gik galt:", response.status_code)