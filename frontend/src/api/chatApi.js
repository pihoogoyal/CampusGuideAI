import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 30000,
});

export const sendMessage = async ({ message, documentId }) => {
  const response = await API.post("/ask/", {
    pdf_name: documentId,
    question: message,
  });

  return response.data;
};
