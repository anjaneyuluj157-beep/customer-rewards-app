import PropTypes from "prop-types";

import {
  SectionCard,
  SubHeading,
  StyledButton,
} from "../styles/globalStyles";

function CustomerList({
  customers,
  selectedCustomer,
  onSelectCustomer,
}) {
  return (
    <SectionCard>
      <SubHeading>
        Customers
      </SubHeading>

      <div>
        {customers.map((customer) => (
          <StyledButton
            key={
              customer.customerId
            }
            active={
              selectedCustomer?.customerId ===
              customer.customerId
            }
            onClick={() =>
              onSelectCustomer(
                customer
              )
            }
          >
            {customer.customerName}
          </StyledButton>
        ))}
      </div>
    </SectionCard>
  );
}

CustomerList.propTypes = {
  customers:
    PropTypes.arrayOf(
      PropTypes.shape({
        customerId:
          PropTypes.string.isRequired,
        customerName:
          PropTypes.string.isRequired,
      })
    ).isRequired,

  selectedCustomer:
    PropTypes.shape({
      customerId:
        PropTypes.string,
      customerName:
        PropTypes.string,
    }),

  onSelectCustomer:
    PropTypes.func.isRequired,
};

export default CustomerList;