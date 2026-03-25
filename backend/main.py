import logging
from fastapi import FastAPI, Form

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)

app = FastAPI()

@app.get('/')
def read_root():
    logger.info("Root endpoint called")
    return {'Ping': 'Pong'}

@app.get('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    logger.info(f"Received pipeline: {pipeline}")
    
    # Simulate parsing
    logger.info("Parsing started")
    
    # (your logic here)
    
    logger.info("Parsing completed successfully")
    return {'status': 'parsed'}