import { sleep } from "../helpers";

const USERNAME = "Moos";
const PASS = "123";

export async function signUp(username, password, callback) {
  //after 5 secounds
  await sleep(2000);
  if (username === USERNAME && password === PASS) {
    callback("SUCCESS");
  } else {
    callback("Login failed!");
  }
}

export async function signUpPr(username, password): Promise<any> {
  //after 5 secounds
  await sleep(2000);
  return new Promise((resolve, reject) => {
    if (username === USERNAME && password === PASS) {
      const successObject = {
        msg: "Success",
      };
      resolve(successObject);
    } else {
      const errorObject = {
        msg: "An error occured",
      };
      reject(errorObject);
    }
  });
}

export async function signInAsync(username, password) {
  await sleep(2000);
  if (username === USERNAME && password === PASS) {
    return "SUCCESS";
  } else {
    return "Login failed!";
  }
}
