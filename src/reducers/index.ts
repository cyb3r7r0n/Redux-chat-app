import {Reducer, combineReducers} from 'redux';
import {UsersState} from "./UsersReducer";
import {ThreadsState} from "./ThreadsReducer";

export interface AppState {
  users: UsersState;
  threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UsersReducer,
  threads: ThreadsReducer
});
