<?php
/*
Plugin Name:    Oxygen Functions
Plugin URI: https://farhan.app/
Description:    Functions plugin created for Oxygen Builder.
Version:    1.0.0
Author:		Farhan
Author URI:	https://farhan.app/
*/

// prevent public user to directly access .php file through URL

if ( ! defined( 'WPINC' ) ) {
	die;
}

// enqueue the following scripts

add_action( 'wp_enqueue_scripts', 'custom_enqueue_files' );

function custom_enqueue_files() {
	
// enqueue stylesheet in the head from the filepath
	
wp_enqueue_style( 'stylesheet', plugin_dir_url( __FILE__ ) . 'assets/stylesheet.css' );

// enqueue scripts in the footer from the filepath
	
wp_enqueue_script( 'scripts', plugin_dir_url( __FILE__ ) . 'assets/scripts.js', '', '1.0.0', true );
}

?>