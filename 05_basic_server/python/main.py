from fastapi  import FastAPI 
from converter import *


app = FastAPI()


@app.get("/")
def root(): 
    return {"Message: ": "First FastAPI route"}


@app.get("/newroute")
def _(): 
    return {"Message: ": "This is secound route"}

@app.get("/txt")
def convertTXT(): 
    return txt()

#pip install xmltodict
@app.get("/xml")
def convertXML(): 
    return xml()

#Pip install pyyaml
@app.get("/yaml")
def convertYaml(): 
    return yamlConvert()

#Pip install pandas 
@app.get("/csv")
def convertCSV():
    return csvConverter()

@app.get("/json")
def convertJson(): 
    return jsonConverter()

#Convert json file to json file. Return this file to json and make an endpoint. 

