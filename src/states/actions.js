// action Types
export const MENUBTNCLICKED = "menuBtnClicked";
export const DRAWERCLOSEBTNCLICKED = "drawerCloseBtnClicked";
export const MENSELECTED = "menSelected";
export const WOMENSELECTED = "womenSelected";
export const HOMESELECTED = "homeSelected";

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
