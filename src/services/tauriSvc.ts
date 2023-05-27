import { invoke } from "@tauri-apps/api";
import { AllowedTauriCommand, InvokeParams } from "../types/tauri/cmds";

export function typedInvoke<T>(cmd: AllowedTauriCommand, args?: InvokeParams[1]): Promise<T> {
  return invoke<T>(cmd, args);
}