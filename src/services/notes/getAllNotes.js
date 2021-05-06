import axios from "axios";

export const getAllNotes = () => {
  return axios
    .get("http://localhost:3001/api/notes")
    .then((response) => {
      const { data } = response;
      console.log(data)
      return data;
    });
};
