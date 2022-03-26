<?php
/*
Plugin Name:    Highlight.js
Plugin URI: https://farhan.app/
Description:    Highlight.js plugin created by <a href="https://farhan.app/">Farhan</a> for Oxygen Builder.
Version:    1.0.0
Author:		Farhan
*/

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'wp_enqueue_scripts', 'highlight_js' );

function highlight_js() {

	if ( ! is_singular( 'post' ) ) {
		return;
	}
	
	wp_enqueue_style( 'highlightjs-css', plugin_dir_url( __FILE__ ) . 'assets/css/style.css' );
	
	wp_enqueue_script( 'highlightjs', plugin_dir_url( __FILE__ ) . 'assets/js/highlight.min.js', '', '11.0.1', true );


}

?>