use std::{
    error::Error,
    fs::{self, File},
    io::{self, ErrorKind, Write},
    path::PathBuf,
};

use tauri::api::path::config_dir;

use super::user::User;

pub struct Config {}

pub trait ResourceConfig<T> {
    type Error;
    fn get_config() -> Result<Option<T>, Self::Error>;
    fn get_config_path() -> Option<PathBuf>;
    fn save_config(resource: &T) -> Result<(), Self::Error>;
}

impl Config {
    pub fn create_config_path() -> Result<(), io::Error> {
        if let Some(config_path) = Self::get_config_path() {
            fs::create_dir_all(config_path).expect("Could not create directory");
            return Ok(());
        }
        Err(io::Error::new(ErrorKind::NotFound, "Config path not found"))
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
    type Error = Box<dyn Error>;

    fn get_config() -> Result<Option<User>, Self::Error> {
        if let Some(user_config_path) = Self::get_config_path() {
            let file = fs::read_to_string(user_config_path)?;
            let user: User = file.parse()?;

            return Ok(Some(user));
        }

        Ok(None)
    }

    fn get_config_path() -> Option<PathBuf> {
        if let Some(config_path) = Config::get_config_path() {
            let mut user_config = PathBuf::from(config_path);
            user_config.push("user.txt");

            return Some(user_config);
        }

        None
    }

    fn save_config(user: &User) -> Result<(), Self::Error> {
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
