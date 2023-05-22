pub mod mods;

use mods::user::User;

pub fn test() {
    let new_user = User {
        name: String::from("Jeremia"),
    };

    println!("--- I created user --- \n {:?}", &new_user.name);

    new_user.save_user_to_config();
    if let Some(read_config) = new_user.read_user_from_config() {
        println!("Reading this user {:?}", read_config);
    }
}
