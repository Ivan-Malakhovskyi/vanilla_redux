const filtersInitState = {
  status: "all",
};

export const filtersReducer = (state = filtersInitState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
