import csv
import json
import yaml 
import os
import xml.etree.ElementTree as ET



#READING MY .csv FILE and parsing:
print('Reading my .csv file: ')
lines = []
with open("./files/test.csv", 'r') as file:
    csvreader = csv.reader(file)

  #I dont want the first, line to be seen. So i am iterating over the first value
  #next(csvreader)
    
   
    # Loop through File, add lines to Enumurated list
    for i, line in enumerate(csvreader):    
        lines.append(line)
        
    #Loop thorug enumerated list and print each element
    for idx, x in enumerate(lines):
        print(idx, x)

   

#_____________________________________________________________________________________

print('Reading my json file:')
#READING A JSON FILE and parsing: 


f = open('./files/test.json',)
  

# a dictionary
data = json.load(f)
  
for i in data['userInfo']:
    print(i)
  
# Closing file
f.close()



#__________________________________________________________

#Reading a .yaml file and parse it to a python list
print('Reading my yaml file: ')
with open('./files/test.yaml', 'r') as file:
    docs = yaml.safe_load_all(file)

    for doc in docs:
        print(doc)



#___________________________________________________________


#READING A .txt file

print('Reading my txt file: ')


with open(r"./files/test.txt", 'r') as fp:
    
    #Eksemple på parsing: 
    #_______________________________________________
    # To store lines

    #Opret tom liste (Enumerated)
    lines = []

    #Loop through File, add lines to Enumurated list
    for i, line in enumerate(fp):    
        lines.append(line.strip())
    
    #Loop thorug enumerated list and print each element
    for idx, x in enumerate(lines):
        print(idx, x)






#_____________________________________________________
 
#Reading a .xml file

            
            
tree = ET.parse('./files/test.xml')

root = tree.getroot()

for elem in root:
    print(elem.text) 
    for subelem in elem: 
        print(subelem.text)




