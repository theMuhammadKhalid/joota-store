import { commerce } from "../lib/commerce.js";

// action Types
export const MENUBTNCLICKED = "menuBtnClicked";
export const DRAWERCLOSEBTNCLICKED = "drawerCloseBtnClicked";
export const MENSELECTED = "menSelected";
export const WOMENSELECTED = "womenSelected";
export const HOMESELECTED = "homeSelected";
export const CARTSELECTED = "cartSelected";
export const CHANGEOPENSIGNINDIALOG = "changeOpenSignInDialog";
export const CHANGEOPENSIGNUPDIALOG = "changeOpenSignUpDialog";
export const SETPRODUCTS = "setProducts";
export const SETCART = "setCart";

// action creators
export const menuBtnClicked = () => ({
  type: MENUBTNCLICKED,
});

export const drawerCloseBtnClicked = () => ({
  type: DRAWERCLOSEBTNCLICKED,
});

export const menSelected = () => ({
  type: MENSELECTED,
});

export const womenSelected = () => ({
  type: WOMENSELECTED,
});

export const homeSelected = () => ({
  type: HOMESELECTED,
});

export const cartSelected = () => ({
  type: CARTSELECTED,
});

export const changeOpenSignInDialog = () => ({
  type: CHANGEOPENSIGNINDIALOG,
});

export const changeOpenSignUpDialog = () => ({
  type: CHANGEOPENSIGNUPDIALOG,
});

export const fetchProducts = () => {
  return (dispatch) => {
    return commerce.products.list().then(({ data }) => {
      dispatch(setProducts(data));
    });
  };
};

export const setProducts = (data) => {
  return {
    type: SETPRODUCTS,
    payload: data,
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    return commerce.cart.retrieve().then((cart) => {
      dispatch(setCart(cart));
    });
  };
};

export const addToCart = (productId, quantity) => {
  return (dispatch) => {
    return commerce.cart.add(productId, quantity).then(({ cart }) => {
      dispatch(setCart(cart));
    });
  };
};

export const updateCartQty = (productId, quantity) => {
  return (dispatch) => {
    return commerce.cart.update(productId, { quantity }).then(({ cart }) => {
      dispatch(setCart(cart));
    });
  };
};

export const removeFromCart = (productId) => {
  return (dispatch) => {
    return commerce.cart.remove(productId).then(({ cart }) => {
      dispatch(setCart(cart));
    });
  };
};

export const emptyCart = () => {
  return (dispatch) => {
    return commerce.cart.empty().then(({ cart }) => {
      dispatch(setCart(cart));
    });
  };
};

export const setCart = (cart) => {
  return {
    type: SETCART,
    payload: cart,
  };
};
