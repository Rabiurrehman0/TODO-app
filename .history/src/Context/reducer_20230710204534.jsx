export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //   console.log("Han bhai main hu", action.payload);
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      state;
  }
};
