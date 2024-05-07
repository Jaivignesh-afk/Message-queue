from typing import Response
from fastapi import FastAPI

# Create your views here.

app = FastAPI()

@app.options("/")
def handle_connection(res: Response):
    res.status_code = 200
    res.headers["Message"] = "Connection established"
    return res

