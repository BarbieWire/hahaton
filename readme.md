# HAHATON

## Overview

This project is composed of two main parts:
- **Backend**: FastAPI (Python)
- **Frontend**: React (JavaScript) integrated with Tailwind CSS and Flowbite React.

### Prerequisites

Before you begin, make sure you have the following installed:
- Python 3.x
- Node.js and npm
- A virtual environment for Python

---

## Getting Started

### 1. Set Up Backend (FastAPI)

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Create and activate a Python virtual environment**:

    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows: venv\Scripts\activate
    ```

3. **Install required Python dependencies**:

    ```bash
    pip install -r requirements.txt
    ```

4. **Run the FastAPI server**:

    ```bash
    uvicorn main:app --reload --host 0.0.0.0 --port 8000
    ```

    - The FastAPI backend will be running at `http://localhost:8000`.
    - The `--reload` flag enables hot-reloading, meaning the server restarts whenever you make code changes.

---

### 2. Set Up Frontend (React)

1. **Navigate to the frontend directory**:

    ```bash
    cd ../frontend
    ```

2. **Install Node.js dependencies**:

    ```bash
    npm install
    ```

3. **Run the React development server**:

    ```bash
    npm start
    ```

    - The React frontend will be running at `http://localhost:3000`.
    - Any changes in the code will be reflected live in the browser.

---