import { useState } from "react";
import "./App.css";
import PendingList from "./components/PendingList";
import TodoCard from "./components/TodoCard";
import CompletedList from "./components/CompletedList";
import CompleteTodoCard from "./components/CompleteTodoCard";

interface DoneTodoProps {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [doneTodos, setDoneTodos] = useState<DoneTodoProps[]>([]);
  const [todos, setTodos] = useState<DoneTodoProps[]>([]);

  // dialog + form state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function completeTodo(id: number) {
    const completedTodo = todos.find((todo) => todo.id === id);
    if (!completedTodo) return;
    setTodos(todos.filter((todo) => todo.id !== id));
    setDoneTodos([...doneTodos, completedTodo]);
  }

  function addTodo() {
    if (!newTitle.trim()) return; // basic validation

    const newTodo: DoneTodoProps = {
      id: todos.length + 1,
      title: newTitle,
      description: newDescription,
    };

    setTodos([...todos, newTodo]);
    setNewTitle("");
    setNewDescription("");
    setIsDialogOpen(false);
  }

  return (
    <>
      <div className="app-header">
        <h1>My Todo List</h1>
        <button className="addTask" onClick={() => setIsDialogOpen(true)}>
          + ADD Task
        </button>
      </div>

      <div className="outer-container">
        <PendingList header="Pending Todos">
          {todos.length === 0 ? (
            <p className="empty-text">No task Pending</p>
          ) : (
            <div className="todo-grid">
              {todos.map((todo) => (
                <TodoCard
                  key={todo.id}
                  title={todo.title}
                  description={todo.description}
                  onDelete={() => deleteTodo(todo.id)}
                  onComplete={() => completeTodo(todo.id)}
                />
              ))}
            </div>
          )}
        </PendingList>

        <CompletedList header="Completed Todos">
          {doneTodos.length === 0 ? (
            <p className="empty-text">No task completed</p>
          ) : (
            <div className="todo-grid">
              {doneTodos.map((todo) => (
                <CompleteTodoCard
                  key={todo.id}
                  title={todo.title}
                  description={todo.description}
                  onDelete={() => {}}
                  onComplete={() => {}}
                />
              ))}
            </div>
          )}
        </CompletedList>
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <div className="dialog-backdrop">
          <div className="dialog">
            <h2>Add New Todo</h2>

            <label>
              Title
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </label>

            <label>
              Description
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </label>

            <div className="dialog-actions">
              <button onClick={() => setIsDialogOpen(false)}>Cancel</button>
              <button onClick={addTodo}>Add</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
