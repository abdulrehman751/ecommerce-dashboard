import Axois from "../axios";

export const fetchExample = async () => {
  try {
    const { data } = Axois.get("/");
    return data;
  } catch (error) {
    throw Error("error.response.data.message");
  }
};
