// components/Subscription/SubscriptionList.jsx
import { useSubscription } from "../../hooks/useSubscription";

export default function SubscriptionList() {
  const { subscriptions, loading, error, unsubscribe } = useSubscription();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      {subscriptions.map((sub) => (
        <div
          key={sub.id}
          className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <p className="font-medium text-gray-900 dark:text-white">
              {sub.email}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Frequency: {sub.frequency}
            </p>
          </div>
          <button
            onClick={() => unsubscribe(sub.id)}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Unsubscribe
          </button>
        </div>
      ))}
    </div>
  );
}
