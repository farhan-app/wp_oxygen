<?php
/*
Plugin Name:    Prism.js
Plugin URI: https://farhan.app/
Description:    Prism.js plugin created by <a href="https://farhan.app/">Farhan</a> for Oxygen Builder.
Version:    1.0.0
Author:		Farhan
*/

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'wp_enqueue_scripts', 'prism_js' );

function prism_js() {

	wp_enqueue_style( 'prismjs-css', plugin_dir_url( __FILE__ ) . 'assets/css/style.css' );

	wp_enqueue_script( 'prism-js', plugin_dir_url( __FILE__ ) . 'assets/js/prism.js', '', '2.0.8', true );

}

?>