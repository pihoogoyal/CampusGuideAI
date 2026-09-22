import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, User, Sparkles, Check } from "lucide-react";

const ChatBubble = ({
  role = "assistant",
  message,
  time = "Just now",
}) => {
  const isUser = role === "user";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <motion.div
      className={`message ${isUser ? "user" : "ai"}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      {!isUser && (
        <div className="message-avatar ai-avatar">
          <Sparkles size={18} />
        </div>
      )}

      <div className="message-wrapper">

        <div className="message-bubble">
          {message}
        </div>

        <div className="message-footer">
          <span>{time}</span>

          {!isUser && (
            <button
              className="copy-btn"
              onClick={handleCopy}
              title={copied ? "Copied!" : "Copy"}
            >
              {copied ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          )}

        </div>

      </div>

      {isUser && (
        <div className="message-avatar user-avatar">
          <User size={18} />
        </div>
      )}

    </motion.div>
  );
};

export default ChatBubble;
