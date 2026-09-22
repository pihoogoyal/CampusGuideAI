from pathlib import Path
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings

def create_vector_store(documents, pdf_name):
    """Create and save a FAISS vector store."""

    print("🔮 Creating embeddings and storing in FAISS...")

    embedding_model = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    # Convert all documents into vectors and store them in FAISS
    vectorstore = FAISS.from_documents(
        documents=documents,
        embedding=embedding_model
    )

    # Save inside vectorstores/<pdf_name>/
    save_path = f"./vectorstores/{pdf_name}"

    vectorstore.save_local(save_path)

    print(f"✅ Vector store created and saved to {save_path}")

    return vectorstore

# Load an existing FAISS vector store
def load_vector_store(pdf_name):
    embedding_model = HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )

    db = FAISS.load_local(
        f"./vectorstores/{pdf_name}",
        embedding_model,
        allow_dangerous_deserialization=True,
    )

    return db


# Retriever of top 3 most similar chunks
def create_retriever(vectorstore):
    """
    Create retriever from FAISS vector store
    """

    retriever = vectorstore.as_retriever(
        search_type="similarity",
        search_kwargs={
            "k": 3
        }
    )

    return retriever