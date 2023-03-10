from fastapi import FastAPI, Request, Response

app = FastAPI()

@app.post("/githubwebhooks")
async def githu_webhook(request: Request, response: Response):
    if request.headers.get("content-type") == "application/x-www-form-urlencoded": 

        formdata = await request.form()
        payloud = formdata['payload']
        print(payloud)
        response.status_code = 200
    else: 
        response.status_code = 400