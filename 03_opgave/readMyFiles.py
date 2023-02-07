import csv

#READING MY CSV FILE:
with open("./files/test.csv", 'r') as file:
  csvreader = csv.reader(file)

  #I dont want the first, line to be seen. So i am iterating over the first value
  next(csvreader)
  for row in csvreader:
     print("Opgave 1")
     print(row)
     print('\n')
    #print(row[0])
    

#_____________________________________________________________________________________

#READING A JSON FILE: 

# Python program to read
# json file
  
  
import json
  
# Opening JSON file
f = open('./files/test.json', 'r')
  
# Iterating through the json
# list

# returns JSON object as 
# a dictionary
#data = json.load(f)

for i in f:
    
    print(i)
  
# Closing file
f.close()