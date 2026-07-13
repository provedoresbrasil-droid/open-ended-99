<?php
/**
 * Raul Central Premium - functions.php
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

function raul_central_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'html5', array( 'style', 'script' ) );
}
add_action( 'after_setup_theme', 'raul_central_setup' );

function raul_central_assets() {
    wp_enqueue_style(
        'raul-central-style',
        get_stylesheet_uri(),
        array(),
        '1.0.0'
    );

    // Procura a imagem de fundo em jpg/jpeg/png/webp dentro de assets/
    $bg_url = '';
    foreach ( array( 'jpg', 'jpeg', 'png', 'webp' ) as $ext ) {
        $path = get_theme_file_path( 'assets/bg-night.' . $ext );
        if ( file_exists( $path ) ) {
            $bg_url = get_theme_file_uri( 'assets/bg-night.' . $ext );
            break;
        }
    }
    if ( $bg_url ) {
        $inline = ":root{--bg-night:url('" . esc_url( $bg_url ) . "');}";
        wp_add_inline_style( 'raul-central-style', $inline );
    }
}
add_action( 'wp_enqueue_scripts', 'raul_central_assets' );
