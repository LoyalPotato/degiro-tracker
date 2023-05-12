pub mod protos;

use protos::user::User;

pub fn test() {
    let new_user = User {
        name: String::from("Jeremia"),
    };

    println!("The lib user is named {:?}", new_user.name)
}
