// Redux toolkit
import {
    Action,
    configureStore,
    ThunkAction,
    combineReducers ,
    AnyAction,
} from '@reduxjs/toolkit';
// React redux
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
  } from 'react-redux';
// Next redux wrapper
import { createWrapper, HYDRATE } from "next-redux-wrapper";
//Internal
import { counterReducer } from './reducers/reducer';
import usersReducer from './slices/users';


const combinedReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
});

const myReducer = (
    state: ReturnType<typeof combinedReducer | any>,
    action: AnyAction
  ) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state,
        ...action.payload,
      };
      console.log(action);
      console.log(state);
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
  };

const store = () =>
 configureStore({
    reducer: myReducer,
});




export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;