import { useState } from "react";
import { words } from "./lib/words";

function App() {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * words.length)
  );

  const reset = () => {
    let newRandomIndex = Math.floor(Math.random() * words.length);

    if (newRandomIndex === randomIndex) newRandomIndex++;

    setRandomIndex(newRandomIndex);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <p className="text-7xl md:text-9xl text-center" suppressHydrationWarning>
        {words[randomIndex]}
      </p>
      <button className="mt-5" onClick={() => reset()}>
        🔄
      </button>

      <div className="fixed bottom-0 right-0 p-4">
        <a
          href="https://benunyolo.com"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          👋
        </a>
      </div>
    </main>
  );
}

export default App;
