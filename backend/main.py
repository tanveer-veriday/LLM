import logging
from fastapi import FastAPI, Form , Request
from fastapi.middleware.cors import CORSMiddleware

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logger = logging.getLogger(__name__)

app = FastAPI()


origins = [
    "http://127.0.0.1:3000/",
    "http://localhost:3000",
    "http://localhost:3000/",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000" , "http://localhost:3000/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    logger.info("Root endpoint called")
    return {'Ping': 'Pong'}

@app.get('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    logger.info(f"Received pipeline: {pipeline}")
    
    logger.info("Parsing started")
    
    
    logger.info("Parsing completed successfully")
    return {'status': 'parsed'}



@app.post('/pipelines/parse')
async def parse_pipeline_post(request : Request):
    logger.info("Received POST request for pipeline parsing")
    logger.info("Parsing started")
    
    data = await request.json()
    pipeline = data.get('pipeline', '')
    
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])

    dag = checkdag(nodes,edges)

    nodesCount = len(data['nodes'])
    edgesCount = len(data['edges'])
    
    logger.info(f"Received pipeline: {pipeline}")
    
    
    logger.info("Parsing completed successfully")
    return {'num_nodes': nodesCount, 'num_edges': edgesCount , 'isdag' : dag} 



def checkdag(nodes,edges):
    graph = {node['id']: [] for node in nodes}
    
    for edge in edges:
        source = edge['source']
        target = edge['target']
        graph[source].append(target)
    
    visited = set()
    rec_stack = set()

    def dfs(node):
        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in rec_stack:
                return True
        
        rec_stack.remove(node)
        return False

    for node in graph:
        if node not in visited:
            if dfs(node):
                return True
    
    return False