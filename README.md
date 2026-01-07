# VectorShift Frontend Technical Assessment

This project is a visual pipeline builder that allows users to create workflows using nodes and connections, and submit the pipeline for backend validation.

---

## 🚀 Features

- Drag-and-drop pipeline editor built with React Flow
- Reusable node abstraction for easy scalability and maintainability
- Multiple node types: Input, Text, LLM, Output
- Dynamic Text node that parses `{{variables}}` into input handles
- Clean, unified UI design with consistent spacing and layout
- Backend validation to count nodes, edges, and verify DAG correctness

---

## 🖥️ Tech Stack

### Frontend

- React
- React Flow
- Zustand (state management)

### Backend

- Python
- FastAPI

---

## 📂 Project Structure

```
.
├── frontend/   # React frontend
└── backend/    # FastAPI backend
```

---

## ▶️ How to Run the Project

### 1️⃣ Run the Backend

```bash
cd backend
pip install fastapi uvicorn python-multipart
python -m uvicorn main:app --reload
```

Backend will be available at:

```
http://127.0.0.1:8000
```

---

### 2️⃣ Run the Frontend

```bash
cd frontend
npm install
npm start
```

Frontend will be available at:

```
http://localhost:3000
```

---

## 🔗 Backend API

### `POST /pipelines/parse`

Accepts a pipeline definition containing nodes and edges and returns:

```json
{
  "num_nodes": 3,
  "num_edges": 2,
  "is_dag": true
}
```

This endpoint validates whether the pipeline forms a Directed Acyclic Graph (DAG).

---

## 🧠 Design Notes

- Node layout and styling are centralized using a reusable `BaseNode` abstraction to avoid duplication.
- Individual node components only define their specific logic and content.
- The Text node dynamically detects variables wrapped in double curly braces and creates corresponding input handles.
- The backend focuses on pipeline structure validation and does not execute the pipeline.
