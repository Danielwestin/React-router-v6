import { useParams } from "react-router-dom";
import { useNotification } from "../../contexts/notification";

export default function NotifyDetails() {
  const { id } = useParams();
  const notify = useNotification();

  const handleClick = () => {
    if (id % 2) return notify({ type: "success", content: "success" });
    else if (id % 3) return notify({ type: "info", content: "info" });
    else return notify({ type: "error", content: "info" });
  };
  return <button onClick={handleClick}>Notify {id}</button>;
}
