from dotenv import load_dotenv, dotenv_values

dotenv_values = dotenv_values()
print(dotenv_values.get("MY SECRET"))

load_dotenv()
import os 
print(os.getenv("MY SECRET"))





