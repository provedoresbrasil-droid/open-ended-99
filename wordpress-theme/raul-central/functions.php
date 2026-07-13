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

    // Passa a URL da imagem de fundo para o CSS via variável CSS
    $bg_url = get_theme_file_uri( 'assets/bg-night.png' );
    $inline = ":root{--bg-night:url('" . esc_url( $bg_url ) . "');}";
    wp_add_inline_style( 'raul-central-style', $inline );
}
add_action( 'wp_enqueue_scripts', 'raul_central_assets' );
