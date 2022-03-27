<--- Tocbot --->

//PHP
global:
// tocbot
if ( is_singular( 'post' ) ) {

    	wp_enqueue_script(
    		'tocbot',
    		plugin_dir_url( __FILE__ ) . 'assets/tocbot.min.js',
    		array(),
    		'4.3.1',
    		true
    	);

    } // End if()

    // auto ID's

function auto_id_headings( $content ) {

    $content = preg_replace_callback( '/(\<h[1-6](.*?))\>(.*)(<\/h[1-6]>)/i', function( $matches ) {
    	if ( ! stripos( $matches[0], 'id=' ) ) :
    		$matches[0] = $matches[1] . $matches[2] . ' id="' . sanitize_title( $matches[3] ) . '">' . $matches[3] . $matches[4];
    	endif;
    	return $matches[0];
    }, $content );

    return $content;

}
add_filter( 'the_content', 'auto_id_headings' );

//HTML
content wrapper class = "js-toc-content"
table of content wrapper class = "toc" and "js-toc"

//CSS
global:
.toc {overflow-y: auto;}.toc > .toc-list {overflow: hidden;position: relative;}.toc > .toc-list li {list-style: none;}.toc-list {margin: 0;padding-left: 15px;}a.toc-link {color: currentColor;height: 100%;}.is-collapsible {max-height: 1000px;overflow: hidden;transition: all 300ms ease-in-out;}.is-collapsed {max-height: 0;}.is-position-fixed {position: fixed !important;top: 0;}.is-active-link {font-weight: 400;}.toc-link::before {background-color: #eee;content: " ";display: inline-block;height: inherit;left: 0;margin-top: -12px;position: absolute;width: 2px;}.is-active-link::before {background-color: #005282;}@media only screen and (min-width: 993px) {.sticky {position: -webkit-sticky;position: sticky;top: 0;align-self: flex-start;}}@media only screen and (max-width: 992px) {.is-collapsed {max-height: none;}}.admin-bar .sticky {top: 32px;}.sticky:before, .sticky:after {content: "";display: table;}a.toc-link {padding: 7px 0;display: block;line-height: 1.4;font-size: 1.3rem;}a.toc-link:hover {color: #005282;}.is-collapsible a.toc-link {padding: 5px 0;}a.toc-link {line-height: 1.4;}

//JS
local:
tocbot.init({tocSelector:'.js-toc',contentSelector:'.js-toc-content',headingSelector:'h2, h3',headingsOffset:1,})
