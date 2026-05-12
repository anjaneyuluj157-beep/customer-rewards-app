import PropTypes from "prop-types";

import {
  MONTHS,
  YEARS,
} from "../constants/filterConstants";

function FilterBar({
  selectedMonth,
  selectedYear,
  onMonthChange,
  onYearChange,
}) {
  return (
    <div style={{ margin: "20px 0" }}>
      <select
        value={selectedMonth}
        onChange={(e) =>
          onMonthChange(e.target.value)
        }
      >
        <option value="">All Months</option>

        {MONTHS.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <select
        value={selectedYear}
        onChange={(e) =>
          onYearChange(e.target.value)
        }
        style={{ marginLeft: "10px" }}
      >
        {YEARS.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

FilterBar.propTypes = {
  selectedMonth: PropTypes.string.isRequired,
  selectedYear: PropTypes.string.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  onYearChange: PropTypes.func.isRequired,
};

export default FilterBar;