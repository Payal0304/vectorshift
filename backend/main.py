from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph: Dict[str, List[str]] = {node.id: [] for node in pipeline.nodes}
    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)

    visited = set()
    stack = set()

    def has_cycle(node):
        visited.add(node)
        stack.add(node)
        for nxt in graph.get(node, []):
            if nxt not in visited:
                if has_cycle(nxt):
                    return True
            elif nxt in stack:
                return True
        stack.remove(node)
        return False

    is_dag = True
    for node in graph:
        if node not in visited:
            if has_cycle(node):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
