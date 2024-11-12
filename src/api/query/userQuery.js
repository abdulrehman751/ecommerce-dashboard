import Axois from "../axios";

const USER_URL = "/user";
export const signinUser = async ({ password, email }) => {
  try {
    const { data } = await Axois.post(`${USER_URL}/signin`, {
      password,
      email,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw Error(error?.response?.data?.message || "something went wrong");
  }
};
export const signupUser = async ({ password, email, firstName, lastName }) => {
  try {
    const { data } = await Axois.post(`${USER_URL}/signup`, {
      password,
      email,
      firstName,
      lastName,
    });
    return data;
  } catch (error) {
    console.log(error, "error");
    throw Error(error?.response?.data?.message || "something went wrong");
  }
};
export const sendVerificationMail = async ({ email }) => {
  try {
    const { data } = await Axois.post(`${USER_URL}/ send-verification-mail  `, {
      email,
    });
    return data;
  } catch (error) {
    throw Error(error?.response?.data?.message || "something went wrong");
  }
};
export const verifyEmailAddressSignup = async ({ token }) => {
  try {
    const { data } = await Axois.post(`${USER_URL}/ verify-user-email  `, {
      token,
    });
    return data;
  } catch (error) {
    throw Error(error?.response?.data?.message || "something went wrong");
  }
};
