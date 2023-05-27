// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use degiro_tracker::mods::user::User;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    //test();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, get_user, save_user])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn get_user() -> Result<Vec<u8>, String> {
    match User::read_user_from_config() {
        Some(user) => Ok(User::get_encoded_user(&user)),
        _ => Err(String::from("No user config found")),
    }
}

#[tauri::command(rename_all = "snake_case")]
fn save_user(user: Vec<u8>) -> Result<(), String> {
    let new_user = User::new_encoded(user);
    Ok(new_user.save_user_to_config())
}
