import { commerce } from "../lib/commerce.js";

// action Types
export const MENUBTNCLICKED = "menuBtnClicked";
export const DRAWERCLOSEBTNCLICKED = "drawerCloseBtnClicked";
export const MENSELECTED = "menSelected";
export const WOMENSELECTED = "womenSelected";
export const HOMESELECTED = "homeSelected";
export const CHANGEOPENSIGNINDIALOG = "changeOpenSignInDialog";
export const CHANGEOPENSIGNUPDIALOG = "changeOpenSignUpDialog";

export const FETCHPRODUCTS = "fetchProducts";
export const SETPRODUCTS = "setProducts";

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
