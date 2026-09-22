import { SendHorizontal } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="chat-input-area">
      <input
        type="text"
        placeholder="Ask CampusGuide AI anything..."
      />

      <button>
        <SendHorizontal size={18} />
      </button>
    </div>
  );
};

export default ChatInput;