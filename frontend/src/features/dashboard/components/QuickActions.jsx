import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button/Button";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      label: "Add Transaction",
      path: "/transactions",
    },
    {
      label: "Budgets",
      path: "/budgets",
    },
    {
      label: "Analytics",
      path: "/analytics",
    },
    {
      label: "Assistant",
      path: "/assistant",
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          onClick={() => navigate(action.path)}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}