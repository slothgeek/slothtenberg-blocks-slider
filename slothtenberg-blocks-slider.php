<?php
/**
 * Plugin Name:       Blocks slider
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slothtenberg-blocks-slider
 *
 * @package           create-block
 */

define( 'SGBS_URL', plugin_dir_url( __FILE__ ) );
define( 'SGBS_PATH', plugin_dir_path(__FILE__) );

function sg_block_slothtenberg_blocks_slider_block_init() {
	wp_register_script(
		'splidejs',
		SGBS_URL.'assets/javascript/splide.min.js', array(),
		'0.5.3',
		true
	);
	wp_register_script(
		'splideautoscrolljs',
		SGBS_URL.'assets/javascript/splide-extension-auto-scroll.min.js', array(),
		'4.1.2',
		true
	);

	wp_register_script(
		'blocksliderjs',
		SGBS_URL.'assets/javascript/block-slider.js', array('jquery', 'splidejs'),
		'0.0.1',
		true
	);

	wp_register_style(
		'splidecss',
		SGBS_URL . '/assets/css/splide.min.css',
		'1.0',
		true
	);

	register_block_type( __DIR__ . '/build/slide/' );
	register_block_type( __DIR__ . '/build/slider/' );
}
add_action( 'init', 'sg_block_slothtenberg_blocks_slider_block_init' );
