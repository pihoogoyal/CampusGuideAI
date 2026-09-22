from fastapi import APIRouter
from pydantic import BaseModel
from app.document import ask_pdf

router = APIRouter(prefix="/ask", tags=["Ask"])


class AskRequest(BaseModel):
    pdf_name: str
    question: str


@router.post("/")
async def ask_question(request: AskRequest):

    # No document selected
    if not request.pdf_name:
        return {
            "question": request.question,
            "answer": "Please select a document before asking a question."
        }

    answer = ask_pdf(request.pdf_name, request.question)

    return {
        "question": request.question,
        "answer": answer
    }