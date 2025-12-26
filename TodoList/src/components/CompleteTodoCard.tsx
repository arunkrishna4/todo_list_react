import "../css/TodoCard.css";

interface CompleteTodoCardProps {
  title: string;
  description?: string;
  onDelete: () => void;
  onComplete: () => void;
}

function CompleteTodoCard({ title, description }: CompleteTodoCardProps) {
  return (
    <div className="completed-todo-card">
      <h3>{title}</h3>
      <span>{description}</span>
      <p>Task Completed ✅</p>
    </div>
  );
}

export default CompleteTodoCard;
