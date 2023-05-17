import requests 
from bs4 import BeautifulSoup

html = requests.get("https://en.wikipedia.org/wiki/List_of_Monty_Python_projects").text
parsed_html = BeautifulSoup(html, features="lxml")

tags = parsed_html.find_all("div", {"class: mw-parser-output"})

projects = []

current_category = ... 
for tag in tags:
    if(tag.name == "h2"):
        current_category = tag.text.replace("[edit]", "").strip()
        projects[current_category] = []
    elif(tag.name == "ul"):
        print(tag.text)
        projects[current_category].append(tag.text)


