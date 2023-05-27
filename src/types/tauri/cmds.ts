import { invoke } from "@tauri-apps/api";

export type AllowedTauriCommand = "get_user"
export type InvokeParams = Parameters<typeof invoke>