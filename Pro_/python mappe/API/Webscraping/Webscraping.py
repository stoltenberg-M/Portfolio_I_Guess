import requests
import csv
import re
from bs4 import BeautifulSoup

# 1 til 4
url = "https://henriksterner.github.io/IntroPython/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

print("Titel På Hjemmesiden", soup.title.string.strip())

# 5 til 6
def extract_tables(soup, filename="tables.csv"):
    tables = soup.find_all("table")
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for table in tables:
            for row in table.find_all("tr"):
                cells = row.find_all(["td", "th"])
                writer.writerow([cell.get_text(strip=True) for cell in cells])

extract_tables(soup)

# 7
def extract_paragraphs(soup, filename="paragraphs.csv"):
    paragraphs = soup.find_all("p")
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for p in paragraphs:
            writer.writerow([p.get_text(strip=True)])

extract_paragraphs(soup)

# 8
def extract_links(soup, filename="links.csv"):
    links = soup.find_all("a", href=True)
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for link in links:
            writer.writerow([link.get("href")])

extract_links(soup)

# 9
def extract_images(soup, filename="images.csv"):
    images = soup.find_all("img", src=True)
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for img in images:
            writer.writerow([img.get("src")])

extract_images(soup)

# 10
def extract_emails(soup, filename="emails.csv"):
    text = soup.get_text()
    emails = re.findall(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", text)
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for email in set(emails):
            writer.writerow([email])

extract_emails(soup)

# 11
def extract_by_tag_value(soup, tag_name, value, filename="tag_value.csv"):
    pattern = re.compile(re.escape(value), re.IGNORECASE)
    tags = soup.find_all(tag_name, string=pattern)

    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Tag", "Tekst", "Attributter"])
        for tag in tags:
            writer.writerow([tag.name, tag.get_text(strip=True), tag.attrs])

extract_by_tag_value(soup, "td", "Decorators")

# 12
def extract_by_class(soup, class_name, filename="class_tags.csv"):
    tags = soup.find_all(class_=class_name)
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for tag in tags:
            writer.writerow([tag.name, tag.get_text(strip=True)])

extract_by_class(soup, "markdown-body")

# 13
def extract_by_id(soup, id_value, filename="id_tags.csv"):
    tag = soup.find(id=id_value)
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        if tag:
            writer.writerow([tag.name, tag.get_text(strip=True)])

extract_by_id(soup, "grundbog-slides-og-øvelser")

# 14
def extract_by_attribute(soup, attr_name, filename="attribute_tags.csv"):
    tags = soup.find_all(attrs={attr_name: True})
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for tag in tags:
            writer.writerow([tag.name, tag[attr_name]])

extract_by_attribute(soup, "href")

# 15
def extract_by_attr_value(soup, attr_name, attr_value, filename="attribute_value_tags.csv"):
    tags = soup.find_all(attrs={attr_name: attr_value})
    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        for tag in tags:
            writer.writerow([tag.name, tag.get_text(strip=True)])

extract_by_attr_value(soup, "href", "https://colab.research.google.com/")
