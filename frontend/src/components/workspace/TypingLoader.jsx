import { Sparkles } from "lucide-react";
const TypingLoader = () => {
  return (
    <div className="message ai">
      <div className="message-avatar ai-avatar">
        <Sparkles size={18} />
      </div>

      <div className="message-wrapper">
        <div className="message-bubble">
          <div className="typing-loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingLoader;