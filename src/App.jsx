import { useEffect, useState } from "react";
import { fetchTasks } from "./api/api";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .catch((err) => console.error("Erreur chargement des tâches", err));
  }, []);

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
