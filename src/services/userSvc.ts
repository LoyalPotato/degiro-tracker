import { User } from "../types/protos/user.pb";
import { typedInvoke } from "./tauriSvc";

export async function getUser() {
  try {
    const user = await typedInvoke<User>("get_user");
    return user;
  } catch (err) {
    console.log(err);
  }
}