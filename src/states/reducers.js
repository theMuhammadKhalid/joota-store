import * as actions from "./actions.js";
import appState from "./state.js";

export default function appReducer(state = appState, action) {
  switch (action.type) {
    case actions.MENUBTNCLICKED:
      return { ...state, openDrawer: true };
    case actions.DRAWERCLOSEBTNCLICKED:
      return { ...state, openDrawer: false };
    case actions.MENSELECTED:
      return {
        ...state,
        menActive: true,
        womenActive: false,
        openDrawer: false,
      };
    case actions.WOMENSELECTED:
      return {
        ...state,
        womenActive: true,
        menActive: false,
        openDrawer: false,
      };
    case actions.HOMESELECTED:
      return {
        ...state,
        menActive: false,
        womenActive: false,
      };
    default:
      return state;
  }
}
