<?php
/*
Plugin Name:    Clipboard.js
Plugin URI: https://farhan.app/
Description:    Clipboard.js plugin created by <a href="https://farhan.app/">Farhan</a> for Oxygen Builder.
Version:    1.0.0
Author:		Farhan
*/

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'wp_enqueue_scripts', 'clipboard_js' );

function clipboard_js() {

	if ( ! is_singular( 'post' ) ) {
		return;
	}

	wp_enqueue_style( 'clipboardjs-css', plugin_dir_url( __FILE__ ) . 'assets/css/style.css' );

	wp_enqueue_script( 'clipboard', plugin_dir_url( __FILE__ ) . 'assets/js/clipboard.min.js', '', '2.0.8', true );

	wp_enqueue_script( 'clipboard-init', plugin_dir_url( __FILE__ ) . 'assets/js/clipboard-init.js', '', '1.0.0', true );

}

?>