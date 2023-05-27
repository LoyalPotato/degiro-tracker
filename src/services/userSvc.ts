import { User } from "../types/protos/user.pb";
import { typedInvoke } from "./tauriSvc";

export async function getUser() {
  try {
    const encodedUser = await typedInvoke<Uint8Array>("get_user");
    const user = User.decode(encodedUser);
    // TODO: Save user to context thing
    return user;
  } catch (err) {
    console.error(err);
  }
}

export async function saveUser(user: User) {
  try {
    const encodedUser = User.encode(user).finish();

    // NOTE: Tauri doesn't allow receiving a Uint8Array atm. Need to convert to a regular number array
    // I wasn't able to find concrete proof that this is being worked on or has been fixed for a later version
    // I think this is the one though: https://github.com/tauri-apps/tauri/pull/3305 || But it's set for "next" release
    // Saw solution here https://www.reddit.com/r/rust/comments/10x7zvx/passing_utf8_data_array_to_tauri_command/
    await typedInvoke<void, { user: number[]; }>("save_user", { user: Array.from(encodedUser) });
    // TODO: Save user in a context thing
  } catch (err) {
    console.error(err);
  }
}