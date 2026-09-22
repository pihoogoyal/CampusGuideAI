import { useState, useEffect, useRef } from "react";

import EmptyState from "./EmptyState";
import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import InsightPanel from "./InsightPanel";
import TypingLoader from "./TypingLoader";

import { sendMessage } from "../../api/chatApi";

import "../../styles/workspace.css";

import { getDocuments } from "../../api/documentApi";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [documents, setDocuments] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getDocuments();

        const formattedDocuments = data.map((doc) => ({
          id: doc.pdf_name,
          name: doc.pdf_name,
        }));

        setDocuments(formattedDocuments);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocuments();
  }, []);

  const handleSend = async ({ message, documentId }) => {
    const userMessage = {
      id: Date.now(),
      role: "user",
      message,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    try {
      // Pass both values to your API
      const data = await sendMessage({
        message,
        documentId,
      });

      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        message: data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant",
        message: "Unable to connect to CampusGuide AI backend.",
      };

      setMessages((prev) => [...prev, aiMessage]);

      console.error(error);
    }

    setIsTyping(false);
  };

  return (
    <div
      className="workspace-layout"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <div
        className="chat-window"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: 0,
        }}
      >
        <span
          className="workspace-badge"
          style={{
            margin: "10px",
            width: "fit-content",
          }}
        >
          AI Workspace
        </span>

        <div
          className="chat-content"
          style={{
            flex: 1,
            overflowY: "auto",
            minHeight: 0,
          }}
        >
          {messages.length === 0 ? (
            <EmptyState />
          ) : (
            <>
              {messages.map((msg) => (
                <ChatBubble
                  key={msg.id}
                  role={msg.role}
                  message={msg.message}
                />
              ))}

              {isTyping && <TypingLoader />}

              <div ref={bottomRef}></div>
            </>
          )}
        </div>

        <MessageInput
          onSend={handleSend}
          documents={documents}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
