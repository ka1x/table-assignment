import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./redux/slices/userSlice";
import { AppDispatch } from "./redux/store";
import { AppState, User } from "./redux/types";
import FilterForm from "./components/FilterForm";
import "./index.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const { users, error, loading } = useSelector(
    (state: AppState) => state.users
  );
  const filters = useSelector((state: AppState) => state.filters);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user: User) => {
    const filterName = filters.name.toLowerCase();
    const filterUsername = filters.username.toLowerCase();
    const filterEmail = filters.email.toLowerCase();
    const filterPhone = filters.phone.toLowerCase();

    return (
      user.name.toLowerCase().includes(filterName) &&
      user.username.toLowerCase().includes(filterUsername) &&
      user.email.toLowerCase().includes(filterEmail) &&
      user.phone.toLowerCase().includes(filterPhone)
    );
  });

  return (
    <>
      {(loading || error) && (
        <div>{loading ? `Loading...` : `Error: ${error}`}</div>
      )}

      {!loading && !error && (
        <>
          <h1 className="page-header">Users Table</h1>
          <div className="header-line"></div>
          <div className="users-container">
            <FilterForm />

            <table className="user-table">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="header-line"></div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
