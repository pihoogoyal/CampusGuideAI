# from langchain_openai import ChatOpenAI

# def get_llm():

#     llm = ChatOpenAI(
#         model="gpt-4o",
#         temperature=0
#     )

#     return llm

from langchain_huggingface import HuggingFacePipeline
from transformers import pipeline


def get_llm():

    pipe = pipeline(
        "text-generation",
        model="Qwen/Qwen2.5-0.5B-Instruct",
        max_new_tokens=300,
        temperature=0.1,
        do_sample=False,
        return_full_text=False
    )

    llm = HuggingFacePipeline(
        pipeline=pipe
    )

    return llm