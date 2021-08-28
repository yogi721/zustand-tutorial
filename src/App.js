import { useStore } from "./store";

import { useEffect } from "react";
import People from "./components/People";
import Todo from "./components/Todo";


function App() {
  const toggleDarkMode = useStore(state => state.toggleDarkMode)
  const dark = useStore(state => state.dark)

  useEffect(() => {
    if (dark) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="App">
      <button onClick={toggleDarkMode}>toggle Dark Mode</button>
      <People />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
