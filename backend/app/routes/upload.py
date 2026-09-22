from fastapi import APIRouter, UploadFile, File
from pathlib import Path
import shutil
import os

from pathlib import Path
from app.document import process_pdf

router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)


@router.post("/pdf")
async def upload_pdf(file: UploadFile = File(...)):

    upload_folder = "uploads"

    os.makedirs(upload_folder, exist_ok=True)

    file_path = os.path.join(upload_folder, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Process the PDF and create a vector store if it doesn't exist
    pdf_name = process_pdf(file_path)

    return {
        "message": "PDF uploaded and indexed successfully.",
        "filename": file.filename,
        "pdf_name": pdf_name
    }

@router.get("/documents")
def get_documents():

    vectorstore_path = Path("vectorstores")

    if not vectorstore_path.exists():
        return []

    documents = []

    for folder in vectorstore_path.iterdir():
        if folder.is_dir():
            documents.append({
                "pdf_name": folder.name
            })

    return documents