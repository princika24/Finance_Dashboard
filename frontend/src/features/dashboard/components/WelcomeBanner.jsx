import Card from "../../../components/ui/Card/Card"; 
import { useAuth } from "../../../context/AuthContext"; 
import Skeleton from "../../../components/ui/Skeleton/Skeleton";

const WelcomeBanner = () => {
  const { user } = useAuth();
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">
          {greeting} 👋
        </h2>

        <h3 className="text-xl font-bold">
          {user?.name || "User"}
        </h3>

        <p className="text-gray-500">
          {today}
        </p>

        <p className="text-gray-600">
          Keep tracking your expenses.
        </p>
      </div>
    </Card>
  );
};

export default WelcomeBanner;