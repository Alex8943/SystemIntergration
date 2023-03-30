from fastapi  import FastAPI;
from datetime import datetime;

app = FastAPI(); 

@app.get("/timestamp")
def _():
    return {"timestamp": datetime.now()} 
