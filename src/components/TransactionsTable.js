import PropTypes from "prop-types";

function TransactionsTable({
  transactions,
}) {
  return (
    <div>
      <h2>Transactions</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse:
            "collapse",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>
              Transaction ID
            </th>
            <th>Amount</th>
            <th>Date</th>
            <th>
              Reward Points
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            (transaction) => (
              <tr
                key={
                  transaction.transactionId
                }
              >
                <td>
                  {
                    transaction.transactionId
                  }
                </td>

                <td>
                  $
                  {
                    transaction.amount
                  }
                </td>

                <td>
                  {
                    transaction.date
                  }
                </td>

                <td>
                  {
                    transaction.rewardPoints
                  }
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

TransactionsTable.propTypes = {
  transactions:
    PropTypes.array.isRequired,
};

export default TransactionsTable;