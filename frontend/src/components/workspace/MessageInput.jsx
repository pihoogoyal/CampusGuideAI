import { useState } from "react";
import {
  SendHorizontal,
  FileText,
} from "lucide-react";

const MessageInput = ({ onSend, documents = [] }) => {
  const [message, setMessage] = useState("");
  const [selectedDocument, setSelectedDocument] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend({
      message,
      documentId: selectedDocument,
    });

    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "18px",
        margin: "16px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
      }}
    >

      {/* Document Selector */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#f8fafc",
          borderRadius: "12px",
          padding: "10px 12px",
          minWidth: "180px",
        }}
      >
        <FileText size={16} color="#6366f1" />

        <select
          value={selectedDocument}
          onChange={(e) => setSelectedDocument(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "14px",
            color: "#334155",
            width: "100%",
          }}
        >
          <option value="">
            Select Document
          </option>

          {documents.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name}
            </option>
          ))}
        </select>

      </div>


      {/* Message Input */}
      <input
        type="text"
        placeholder="Ask anything about your documents..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "15px",
          padding: "12px",
          background: "transparent",
          color: "#111827",
        }}
      />


      {/* Send Button */}
      <button
        onClick={handleSend}
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
          color: "white",
          cursor: "pointer",
          transition: "0.2s",
          flexShrink: 0,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.08)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      >
        <SendHorizontal size={20} />
      </button>

    </div>
  );
};

export default MessageInput;
