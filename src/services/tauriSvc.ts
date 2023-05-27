import { invoke } from "@tauri-apps/api";
import { AllowedTauriCommand } from "../types/tauri/cmds";

export function typedInvoke<T, A extends Record<string, any> | undefined = undefined>(cmd: AllowedTauriCommand, args?: A): Promise<T> {
  return invoke<T>(cmd, args);
}