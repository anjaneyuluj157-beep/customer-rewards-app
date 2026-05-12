import PropTypes from "prop-types";

function CustomerList({
  customers,
  selectedCustomer,
  onSelectCustomer,
}) {
  return (
    <div>
      <h2>Customers</h2>

      <div>
        {customers.map((customer) => (
          <button
            key={
              customer.customerId
            }
            onClick={() =>
              onSelectCustomer(
                customer
              )
            }
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              padding: "10px 15px",
              border:
                "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor:
                selectedCustomer?.customerId ===
                customer.customerId
                  ? "#d3d3d3"
                  : "#fff",
            }}
          >
            {customer.customerName}
          </button>
        ))}
      </div>
    </div>
  );
}

CustomerList.propTypes = {
  customers:
    PropTypes.array.isRequired,
  selectedCustomer:
    PropTypes.object,
  onSelectCustomer:
    PropTypes.func.isRequired,
};

export default CustomerList;