import React from "react";
import { Sidebar } from "./components/Sidebar";
import { TodoTasks } from "./components/TodoTasks";

import "./badge.scss";

function App() {
  return (
    <main className='todo'>
      <Sidebar />
      <TodoTasks />
    </main>
  );
}

export default App;
