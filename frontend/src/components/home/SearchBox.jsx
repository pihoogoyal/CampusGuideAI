import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Command } from "lucide-react";

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleShortcut = (event) => {
      if (event.ctrlKey && event.key.toLowerCase() === "k") {
        event.preventDefault();

        setIsFocused(true);

        setTimeout(() => {
          inputRef.current?.focus();
        }, 50);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () =>
      window.removeEventListener(
        "keydown",
        handleShortcut
      );
  }, []);

  return (
    <motion.div
      className={`spotlight-search ${
        isFocused ? "search-focused" : ""
      }`}
      animate={{
        scale: isFocused ? 1.02 : 1,
        y: isFocused ? -2 : 0,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <div className="search-icon-wrapper">
        <Search size={20} />
      </div>

      <input
        ref={inputRef}
        type="text"
        className="spotlight-input"
        placeholder="Ask anything about your campus..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <div className="shortcut-key">
        <Command size={14} />
        <span>K</span>
      </div>
    </motion.div>
  );
};

export default SearchBox;