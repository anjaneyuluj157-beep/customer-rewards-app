import logger from "../logger";

export const fetchTransactions = async () => {
  logger.info("Fetching transactions");

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch("/data/transactions.json");

        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data = await response.json();

        logger.info("Transactions fetched successfully");

        resolve(data);
      } catch (error) {
        logger.error(error);

        reject(error);
      }
    }, 1000);
  });
};