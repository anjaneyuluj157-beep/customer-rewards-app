import {
  useEffect,
  useMemo,
  useState,
} from "react";

import CustomerList from "../components/CustomerList";
import RewardsSummary from "../components/RewardsSummary";
import TransactionsTable from "../components/TransactionsTable";
import FilterBar from "../components/FilterBar";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

import calculateRewards from "../utils/calculateRewards";

import {
  fetchTransactions,
} from "../services/transactionService";

function Dashboard() {
  const [transactions, setTransactions] =
    useState([]);

  const [selectedCustomer, setSelectedCustomer] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [selectedMonth, setSelectedMonth] =
    useState("");

  const [selectedYear, setSelectedYear] =
    useState("2025");

  const [currentPage, setCurrentPage] =
    useState(1);

  const transactionsPerPage = 5;

  useEffect(() => {
    loadTransactions();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCustomer,
    selectedMonth,
    selectedYear,
  ]);

  const loadTransactions = async () => {
    try {
      setLoading(true);

      const data =
        await fetchTransactions();

      const updatedTransactions =
        data.map((transaction) => ({
          ...transaction,
          rewardPoints:
            calculateRewards(
              transaction.amount
            ),
        }));

      setTransactions(
        updatedTransactions
      );
    } catch (err) {
      setError(
        "Failed to load transactions"
      );
    } finally {
      setLoading(false);
    }
  };

  const customers = useMemo(() => {
    const uniqueCustomers = [];

    transactions.forEach(
      (transaction) => {
        const exists =
          uniqueCustomers.find(
            (customer) =>
              customer.customerId ===
              transaction.customerId
          );

        if (!exists) {
          uniqueCustomers.push({
            customerId:
              transaction.customerId,
            customerName:
              transaction.customerName,
          });
        }
      }
    );

    return uniqueCustomers;
  }, [transactions]);

  const customerTransactions =
    useMemo(() => {
      if (!selectedCustomer) {
        return [];
      }

      return transactions.filter(
        (transaction) =>
          transaction.customerId ===
          selectedCustomer.customerId
      );
    }, [
      transactions,
      selectedCustomer,
    ]);

  const filteredTransactions =
    useMemo(() => {
      return customerTransactions.filter(
        (transaction) => {
          const transactionDate =
            new Date(
              transaction.date
            );

          const monthName =
            transactionDate.toLocaleString(
              "default",
              {
                month: "long",
              }
            );

          const year =
            transactionDate
              .getFullYear()
              .toString();

          const matchesMonth =
            !selectedMonth ||
            monthName ===
              selectedMonth;

          const matchesYear =
            year === selectedYear;

          return (
            matchesMonth &&
            matchesYear
          );
        }
      );
    }, [
      customerTransactions,
      selectedMonth,
      selectedYear,
    ]);

  const totalPages = Math.ceil(
    filteredTransactions.length /
      transactionsPerPage
  );

  const paginatedTransactions =
    filteredTransactions.slice(
      (currentPage - 1) *
        transactionsPerPage,
      currentPage *
        transactionsPerPage
    );

  const monthlyRewards = useMemo(() => {
    const rewards = {};

    filteredTransactions.forEach(
      (transaction) => {
        const month = new Date(
          transaction.date
        ).toLocaleString("default", {
          month: "long",
          year: "numeric",
        });

        rewards[month] =
          (rewards[month] || 0) +
          transaction.rewardPoints;
      }
    );

    return rewards;
  }, [filteredTransactions]);

  const totalRewards = useMemo(() => {
    return filteredTransactions.reduce(
      (total, transaction) =>
        total +
        transaction.rewardPoints,
      0
    );
  }, [filteredTransactions]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorMessage
        message={error}
      />
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Customer Rewards Dashboard
      </h1>

      <CustomerList
        customers={customers}
        selectedCustomer={
          selectedCustomer
        }
        onSelectCustomer={
          setSelectedCustomer
        }
      />

      {selectedCustomer && (
        <>
          <FilterBar
            selectedMonth={
              selectedMonth
            }
            selectedYear={
              selectedYear
            }
            onMonthChange={
              setSelectedMonth
            }
            onYearChange={
              setSelectedYear
            }
          />

          <RewardsSummary
            monthlyRewards={
              monthlyRewards
            }
            totalRewards={
              totalRewards
            }
          />

          {filteredTransactions.length >
          0 ? (
            <>
              <TransactionsTable
                transactions={
                  paginatedTransactions
                }
              />

              <Pagination
                currentPage={
                  currentPage
                }
                totalPages={
                  totalPages
                }
                onPageChange={
                  setCurrentPage
                }
              />
            </>
          ) : (
            <h3>
              No transactions
            </h3>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;