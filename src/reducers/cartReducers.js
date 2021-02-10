import { ADD_ITEM, REMOVE_ITEM } from "../Actions/types";

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case REMOVE_ITEM:
      let tempArr = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: tempArr };
    default:
      return state;
  }
};
