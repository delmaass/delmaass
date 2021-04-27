import React, { useState } from "react";
import { HiMoon } from "react-icons/hi";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={"w-screen h-screen" + (darkMode ? " dark" : "")}>
      <header className="flex justify-center items-center h-5/6 dark:bg-black transition-all">
          <h1 className="h-min font-styled text-8xl dark:text-white transition-all">Delmas</h1>
      </header>

      <footer className="flex justify-center align-center h-1/6 dark:bg-black transition-all">
        <HiMoon
          className="text-5xl p-2 rounded-full ring-4 ring-black dark:text-white dark:ring-white"
          onClick={ () => setDarkMode(!darkMode) }></HiMoon>
      </footer>
    </div>
  );
}

export default App;
