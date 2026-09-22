# import json


# def prompt(chunks, query):

#     # Build the text prompt
#     prompt_text = f"""Based on the following documents, please answer this question: {query}

#     CONTENT TO ANALYZE:
#     """
    
#     for i, chunk in enumerate(chunks):
#         prompt_text += f"--- Document {i+1} ---\n"
        
#         if "original_content" in chunk.metadata:
#             original_data = json.loads(chunk.metadata["original_content"])
            
#             # Add raw text
#             raw_text = original_data.get("raw_text", "")
#             if raw_text:
#                 prompt_text += f"TEXT:\n{raw_text}\n\n"
            
#             # Add tables as HTML
#             tables_html = original_data.get("tables_html", [])
#             if tables_html:
#                 prompt_text += "TABLES:\n"
#                 for j, table in enumerate(tables_html):
#                     prompt_text += f"Table {j+1}:\n{table}\n\n"
        
#         prompt_text += "\n"
    
#     prompt_text += """
#     Please provide a clear, comprehensive answer using the text, tables, and images above. 
#     If the documents don't contain sufficient information to answer the question, say "I don't have enough information to answer that question based on the provided documents."

#     ANSWER:"""


#     return prompt_text

# import json


# def prompt(chunks, query):

#     context = ""

#     for i, chunk in enumerate(chunks):
#         context += f"\n--- Document {i+1} ---\n"

#         if "original_content" in chunk.metadata:
#             original_data = json.loads(chunk.metadata["original_content"])

#             raw_text = original_data.get("raw_text", "")
#             if raw_text:
#                 context += raw_text[:2000]  # limit chunk size

#             tables_html = original_data.get("tables_html", [])
#             if tables_html:
#                 context += "\nTables:\n"
#                 for table in tables_html[:2]:
#                     context += table[:1000]

#     prompt_text = f"""You are a question answering assistant.

# Answer the question using ONLY the information in the context.

# Context:
# {context}

# Question:
# {query}

# Rules:
# - Give only the final answer.
# - Do not repeat the context.
# - Do not explain your reasoning.
# - If the answer is missing, say "I don't know".

# Answer:"""

#     return prompt_text


import json


def prompt(chunks, query):

    context = ""

    for i, chunk in enumerate(chunks):
        context += f"\n\n--- Document {i+1} ---\n"

        if "original_content" in chunk.metadata:
            original_data = json.loads(chunk.metadata["original_content"])

            raw_text = original_data.get("raw_text", "")
            if raw_text:
                context += raw_text[:3000]

            tables = original_data.get("tables_html", [])
            if tables:
                context += "\nTables:\n"
                for table in tables[:2]:
                    context += table[:1000]

    prompt_text = f"""
You are an expert question-answering assistant.

Your task is to answer the user's question using ONLY the provided context.

IMPORTANT RULES:
- Read the context carefully before answering.
- Give a direct answer to the question.
- Do not copy large parts of the context.
- Do not mention "the document" or "the context" in your answer.
- If the answer is not available, say: "I don't have enough information."
- Keep the answer concise and accurate.

CONTEXT:
{context}

QUESTION:
{query}

FINAL ANSWER:
"""

    return prompt_text
