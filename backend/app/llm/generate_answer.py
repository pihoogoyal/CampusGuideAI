from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
import json
from app.llm.model import get_llm
from app.llm.prompt import prompt


def generate_answer(chunks, query):
    """Generate final answer using multimodal content"""
    
    try:
        # # Initialize LLM (needs vision model for images)
        # Get LLM
        llm = get_llm()

        # Create prompt
        prompt_text = prompt(chunks, query)

        # Build message content starting with text
        message_content = [{"type": "text", "text": prompt_text}]
        
        # Add all images from all chunks
        for chunk in chunks:
            if "original_content" in chunk.metadata:
                original_data = json.loads(chunk.metadata["original_content"])
                images_base64 = original_data.get("images_base64", [])
                
                for image_base64 in images_base64:
                    message_content.append({
                        "type": "image_url",
                        "image_url": {"url": f"data:image/jpeg;base64,{image_base64}"}
                    })
        
        # Send to AI and get response
        # message = HumanMessage(content=message_content)
        response = llm.invoke(prompt_text)
        
        return response
        
    except Exception as e:
        print(f"❌ Answer generation failed: {e}")
        return "Sorry, I encountered an error while generating the answer."

# Usage
# query = "How many attention heads does the Transformer use, and what is the dimension of each head? "
# retriever = db.as_retriever(search_kwargs={"k": 3})
# chunks = retriever.invoke(query)
# final_answer = generate_final_answer(chunks, query)
# print(final_answer)