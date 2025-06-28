import CommandInput from "./CommandInput";
import { useState, useRef, useEffect } from "react";
import { commandList } from "../data/Commands";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [history]);

  const handleCommand = (input) => {
    const cmd = input.trim().toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const outputComponent =
      typeof commandList[cmd] === "function"
        ? commandList[cmd]() // Call and get JSX
        : `Command not found: ${cmd}. Try help command to see the available commands`;

    const output =
      commandList[cmd] ||
      `Command not found: ${cmd}. Type 'help' to see available commands.`;

    setHistory((prev) => [...prev, { input, output : outputComponent }]);
  };

  return (
    <div className="max-w-4xl mx-auto mt-6 border border-gray-700 bg-[#111] rounded-xl shadow-lg flex flex-col h-[90vh] overflow-hidden">
      {/* Header Bar */}
      <div className="flex items-center px-4 py-2 bg-[#222] border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <span className="ml-4 text-sm text-gray-300">
          ravimani2217@portfolio
        </span>
      </div>

      

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="flex-1 px-4 py-2 overflow-y-auto custom-scroll scroll-smooth"
        id="terminal-body"
      >
        <div className="mb-5">
        <p className="text-xl mb-3"><span className="text-yellow-500">Hello, World!</span><span>{" "}</span><span className="text-blue-500">Welcome to Ravi's portfolio.</span></p>
        <p className="text-sm">Type <span className="px-2 py-1 bg-[#222]">help</span> to see all available commands</p>
      </div>
        {history.map((entry, i) => (
          <div key={i} className="mb-2">
            <div className="text-sm">
              <span className="text-red-500">&gt;&gt;</span>{" "}
              <span className="text-white">{entry.input}</span>
            </div>
            <div className="text-sm whitespace-pre-wrap">{entry.output}</div>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="px-4 py-3 border-t border-gray-700">
        <CommandInput onSubmit={handleCommand} history={history.map((h) => h.input)}/>
      </div>
    </div>
  );
};

export default Terminal;
