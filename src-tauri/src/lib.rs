pub mod mods;

use mods::user::User;

pub fn test() {
    let new_user = User {
        name: String::from("Jeremia"),
    };

    println!("--- I created user --- \n {:?}", &new_user.name);

    //new_user.save_user_to_config();
    match User::read_user_from_config() {
        Some(read_config) => println!("Reading this user {:?}", read_config),
        None => {
            println!("No user found");
        }
    }
}
