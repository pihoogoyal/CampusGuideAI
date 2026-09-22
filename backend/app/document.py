from pathlib import Path

from app.rag.partition import partition_document
from app.rag.chunking import create_chunks_by_title
from app.rag.langchain import summarise_chunks
from app.rag.vector_store import (create_vector_store, load_vector_store, create_retriever)
from app.llm.generate_answer import generate_answer


# Processes the PDF and creates a vector store if it doesn't exist
def process_pdf(pdf_path: str):

    pdf_name = Path(pdf_path).stem

    db_path = Path(f"./vectorstores/{pdf_name}")

    # CREATE VECTOR STORE (ONLY IF NEEDED)
    if not db_path.exists():

        print(f"Creating vector store for '{pdf_name}'...")

        # Create partitions
        elements = partition_document(pdf_path)

        # Create chunks
        chunks = create_chunks_by_title(elements)

        # Summarize chunks (LangChain)
        processed_chunks = summarise_chunks(chunks)

        # Create and save FAISS
        create_vector_store(processed_chunks, pdf_name)

        print("Vector store created.\n")

    else:
        print(f"Using existing vector store for '{pdf_name}'.\n")

    return pdf_name


# Asks a question to the PDF and returns the answer
def ask_pdf(pdf_name: str, question: str):

    # LOAD VECTOR STORE
    db = load_vector_store(pdf_name)

    # CREATE RETRIEVER
    retriever = create_retriever(db)

    # RETRIEVE CHUNKS
    docs = retriever.invoke(question)

    # GENERATE ANSWER
    answer = generate_answer(docs, question)

    return answer