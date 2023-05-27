fn main() {
    prost_build::Config::new()
        .compile_protos(
            &["../protos/assets.proto", "../protos/user.proto"],
            &["../protos"],
        )
        .expect("Could not compile protos");

    tauri_build::build();
}
