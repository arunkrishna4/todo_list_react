import "../css/TodoCard.css";

interface TodoCardProps {
  title: string;
  description?: string;
  onDelete: () => void;
  onComplete: () => void;
}

function TodoCard({ title, description, onDelete, onComplete }: TodoCardProps) {
  return (
    <div className="todo-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="button-group">
        <button
          className="completedbtn"
          onClick={() => {
            onComplete();
          }}
        >
          ✔️ Complete
        </button>
        <button
          className="deletebtn"
          onClick={() => {
            onDelete();
          }}
        >
          🗑️
        </button>
      </span>
    </div>
  );
}

export default TodoCard;
