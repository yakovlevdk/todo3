import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const handleChangeInput = (id, value, setChangeValue) => {
  setChangeValue((preValue) => ({
    ...preValue,
    [id]: value,
  }));
};

export const changeTodo = (id, value) => {
  const todosDbRef = ref(db, `todos/${id}`);
  set(todosDbRef, {
    title: value,
  });
};
