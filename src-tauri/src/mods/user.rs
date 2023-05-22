use super::config::{ResourceConfig, UserConfig};

include!(concat!(env!("OUT_DIR"), "/degiro_tracker.user.rs"));

impl User {
    pub fn new(name: String) -> Self {
        Self { name }
    }

    pub fn read_user_from_config(&self) -> Option<User> {
        UserConfig::get_config()
    }

    pub fn save_user_to_config(&self) {
        match UserConfig::save_config(&self) {
            Ok(()) => (),
            Err(error) => {
                panic!("Problem saving config: {:?}", error);
            }
        }
    }
}

impl std::str::FromStr for User {
    type Err = &'static str;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        if s.trim().len() == 0 {
            return Err("String cannot be empty");
        }

        let config = String::from(s);

        let mut name: String = String::new();

        if config.contains("name=") {
            name = config.replace("name=", "");
        }

        Ok(User::new(name))
    }
}
