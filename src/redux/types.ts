export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface FilterState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface UserState {
  users: User[];
  error: string;
  loading: boolean;
}

export interface AppState {
  users: UserState;
  filters: FilterState
}
