import axios from "axios";

const form = (state = {}, action) => {
  if (action.type === "SET_FORM") {
    state = action.form;
  }
  return state;
};

export const setForm = () => {
  return { type: "SET_FORM", form: {} };
};

export default form;
