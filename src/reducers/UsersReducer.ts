import {User} from "../models/User";

export interface UsersState {
  currentUser: User;
};
const initialState: UsersState = {
  currentUser: null
};
