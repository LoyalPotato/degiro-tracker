use std::{
    fs::{self, File},
    io::{Error, ErrorKind, Write},
    path::PathBuf,
};

use tauri::api::path::config_dir;

use super::user::User;

pub struct Config {}

pub trait ResourceConfig<T> {
    fn get_config() -> Option<T>;
    fn get_config_path() -> Option<PathBuf>;
    fn save_config(resource: &T) -> Result<(), Error>;
}

impl Config {
    pub fn create_config_path() -> Result<(), Error> {
        if let Some(config_path) = Self::get_config_path() {
            fs::create_dir_all(config_path).expect("Could not create directory");
            return Ok(());
        }
        Err(Error::new(ErrorKind::NotFound, "Config path not found"))
    }

    pub fn get_config_path() -> Option<PathBuf> {
        if let Some(mut config_path) = config_dir() {
            config_path.push("degiro-tracker");
            return Some(config_path);
        }
        None
    }
}

pub struct UserConfig {}

impl UserConfig {
    fn get_user_config_value(key: &str, value: &str) -> String {
        format!("{}{}{}", key, '=', value)
    }
}

impl ResourceConfig<User> for UserConfig {
    fn get_config() -> Option<User> {
        if let Some(user_config_path) = Self::get_config_path() {
            let user: User = fs::read_to_string(user_config_path)
                .expect("Couldn't read user")
                .parse()
                .unwrap();
            return Some(user);
        }
        None
    }

    fn get_config_path() -> Option<PathBuf> {
        if let Some(config_path) = Config::get_config_path() {
            let mut user_config = PathBuf::from(config_path);
            user_config.push("user.txt");
            return Some(user_config);
        }
        None
    }

    fn save_config(user: &User) -> Result<(), Error> {
        Config::create_config_path()?;
        if let Some(user_config_dir) = Self::get_config_path() {
            println!("--- Creating user config ---");
            let mut user_config =
                File::create(user_config_dir).expect("Could not create user config");

            println!("--- Writing to user config ---");

            user_config
                .write_all(Self::get_user_config_value("name", &user.name).as_bytes())
                .expect("Error writing to user config");
        }

        println!("--- Finished ---");

        Ok(())
    }
}
