import "../css/PendingList.css";

interface PendingListProps {
  children?: React.ReactNode;
  header: string;
}

function PendingList({ children, header }: PendingListProps) {
  return (
    <div className="pending-list">
      <h2>{header}</h2>
      {children}
    </div>
  );
}

export default PendingList;
