import PropTypes from "prop-types";

import {
  SectionCard,
  StyledTable,
  SubHeading,
} from "../styles/globalStyles";

function TransactionsTable({
  transactions,
}) {
  return (
    <SectionCard>
      <SubHeading>
        Transactions
      </SubHeading>

      <StyledTable>
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
      </StyledTable>
    </SectionCard>
  );
}

TransactionsTable.propTypes = {
  transactions:
    PropTypes.arrayOf(
      PropTypes.shape({
        transactionId:
          PropTypes.string.isRequired,
        amount:
          PropTypes.number.isRequired,
        date:
          PropTypes.string.isRequired,
        rewardPoints:
          PropTypes.number.isRequired,
      })
    ).isRequired,
};

export default TransactionsTable;