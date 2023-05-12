pub mod user {
    include!(concat!(env!("OUT_DIR"), "/degiro_tracker.user.rs"));
}

pub mod assets {
    include!(concat!(env!("OUT_DIR"), "/degiro_tracker.assets.rs"));
}
