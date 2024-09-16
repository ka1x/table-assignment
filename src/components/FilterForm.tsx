import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilters } from "../redux/slices/filterSlice";
import { AppState, FilterState } from "../redux/types";

const FilterForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state:AppState) => state.filters);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ field: name as keyof FilterState, value }));
      };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div>
      <form className="filter-form">
        <div className="filter-row">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={filters.name}
            onChange={handleChange}
          />
        </div>

        <div className="filter-row">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={filters.username}
            onChange={handleChange}
          />
        </div>

        <div className="filter-row">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            value={filters.email}
            onChange={handleChange}
          />
        </div>

        <div className="filter-row">
          <label htmlFor="phone">Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={filters.phone}
            onChange={handleChange}
          />
        </div>

        <button type="button" className="reset-btn" onClick={handleReset}>
        Reset
        </button>
      </form>
    </div>
  );
};

export default FilterForm;
