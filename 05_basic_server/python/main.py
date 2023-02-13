from fastapi  import FastAPI 

app = FastAPI()


@app.get("/")
def _(): 
    return {"Message: ": "First FastAPI route"}


@app.get("/newroute")
def _(): 
    return {"Message: ": "This is secound route"}