import asteroidsList from "./asteroids";
import { combineReducers } from "redux";
import asteroidsDetails from "./asteroidsDetails";

const rootReducer = combineReducers({
  asteroidsList: asteroidsList,
  asteroidsFilteredList: asteroidsList,
  asteroidsDetail: asteroidsDetails,
});
export default rootReducer;
