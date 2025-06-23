import { useState } from "react";

const CommandInput = ({ onSubmit, history }) => {
  const [input, setInput] = useState("");
   const [historyIndex, setHistoryIndex] = useState(null);
    

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim() !== "") {
        onSubmit(input);
        setInput("");
        setHistoryIndex(null); // Reset history navigation
      }
    }

     if (e.key === "ArrowUp") {
      if (history && history.length > 0) {
        const newIndex = historyIndex === null
          ? history.length - 1
          : Math.max(historyIndex - 1, 0);
        setInput(history[newIndex]);
        setHistoryIndex(newIndex);
      }
    }

    if (e.key === "ArrowDown") {
      if (history && history.length > 0 && historyIndex !== null) {
        const newIndex = Math.min(historyIndex + 1, history.length - 1);
        setInput(history[newIndex]);
        setHistoryIndex(newIndex);
      } else {
        setInput("");
        setHistoryIndex(null);
      }
    }

  };

  return (
    <div className="flex items-center">
      <span className="text-red-500 pr-2">&gt;&gt;</span>
      <input
        className="w-full bg-transparent border-none outline-none text-base flex-1"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setHistoryIndex(null); // Reset index when typing
        }}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </div>
  );
};

export default CommandInput;
