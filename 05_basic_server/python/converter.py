# Python program to convert text
# file to JSON
import json
import xmltodict
import yaml
import pandas as pd 

 
def txt():  
    # the file to be converted to
    # json format
    filename = './files/test.txt'
    
    # dictionary where the lines from
    # text will be stored
    dict1 = {}
    
    # creating dictionary
    with open(filename) as fh:
        
        for line in fh:
            # reads each line and trims of extra the spaces
            # and gives only the valid words
            command, description = line.strip().split(None, 1)
            dict1[command] = description.strip()
    
    # creating json file
    # the JSON file is named as test1
    
    out_file = open("./files/convertertoJson/test1.json", "w")
    json.dump(dict1, out_file, indent = 4, sort_keys = False)
    out_file.close()

    with open("./files/test1.json", "r") as jsonF: 
        newData = json.load(jsonF)
        
    return newData




def yamlConvert(): 
    #Read YAML file
    with open('./files/test.yaml', 'r') as f:
        data = yaml.load(f, Loader=yaml.SafeLoader)

    # Write YAML object to JSON format
    with open('./files/convertertoJson/yamlTojson.json', 'w') as f:
        json.dump(data, f, sort_keys=False)


    with open("./files/convertertoJson/yamlTojson.json", "r") as read_file:
        data = json.load(read_file)
    return data


def csvConverter(): 
    csvFile = "./files/test.csv"
    obj = pd.read_csv(csvFile, sep=",")
    json_output = "./files/convertertoJson/csvToJson.json"

    obj.to_json(json_output, indent= 1)

    with open(json_output, "r") as read_file:
        data = json.load(read_file)
    return data

def xml():

    with open("./files/test.xml") as xml_file:
        data_dict = xmltodict.parse(xml_file.read())
        
        # generate the object using json.dumps()
        # corresponding to json data
        json_data = json.dumps(data_dict)
        
        # Write the json data to output
        # json file
        with open("./files/convertertoJson/xmlTojson.json", "w") as json_file:
            json_file.write(json_data)
            json_file.close()

    with open("./files/convertertoJson/xmlTojson.json", "r") as read_file:
        data = json.load(read_file)
    return data


def jsonConverter(): 
    f = open('./files/test.json',)
    # a dictionary
    
    data = json.load(f)    
  
    # Closing file
    f.close()

    #Return my object: 
    return data