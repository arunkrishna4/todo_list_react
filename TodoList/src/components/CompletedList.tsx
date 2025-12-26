import "../css/CompletedList.css";

interface CompletedListProps {
  children?: React.ReactNode;
  header: string;
}

function CompletedList({ children, header }: CompletedListProps) {
  return (
    <div className="completed-list">
      <h2>{header}</h2>
      {children}
    </div>
  );
}

export default CompletedList;
