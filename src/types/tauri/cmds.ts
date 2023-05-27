import { invoke } from "@tauri-apps/api";

export type AllowedCommand = "get_user"
export type InvokeParams = Parameters<typeof invoke>