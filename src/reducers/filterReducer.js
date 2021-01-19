export default function (state = [], action) {
  switch (action.type) {
    case "FILTER_PRODUCTS":
      return [...action.payload];
    default:
      return state;
  }
}
