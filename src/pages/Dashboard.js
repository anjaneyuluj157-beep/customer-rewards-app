import { useEffect, useState } from "react";
import { fetchTransactions } from "../services/transactionService";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      setLoading(true);

      const data = await fetchTransactions();

      setTransactions(data);
    } catch (err) {
      setError("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Customer Rewards Dashboard</h1>

      <p>Total Transactions: {transactions.length}</p>
    </div>
  );
}

export default Dashboard;