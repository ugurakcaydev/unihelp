import { _removeModal, _setModal } from ".";
import store from "..";

export const setModal = (
  name,
  data //data=false vardı sildim
) => store.dispatch(_setModal({ name, data }));

export const removeModal = () => store.dispatch(_removeModal());
