<?php
/**
 * The template for displaying the footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Susty
 */
?>

	</div>

	<footer id="colophon">
		<a href="<?php echo esc_url( __( 'https://wordpress.org', 'susty' ) ); ?>">
			<?php
			/* translators: %s: CMS name, i.e. WordPress. */
			printf( esc_html__( 'Proudly powered by %s', 'susty' ), 'WordPress' );
			?>
		</a>
		<span> | </span>
			<?php
			/* translators: 1: Theme name, 2: Theme author. */
			printf( esc_html__( 'Theme: %1$s by %2$s.', 'susty' ), '<a href="https://github.com/jacklenox/susty">Susty</a>', '<a href="https://blog.jacklenox.com">Jack&nbsp;Lenox</a>' );
			?>
	</footer>
</div>

    <script type="text/javascript">
    var colorObjects='<?php print get_theme_mod('object_color'); ?>';
    if(! colorObjects )
    	colorObjects="random"; //"random" or css color, like "red", "rgb(22,22,22)" or "#22ee22"
    
    var colorSecondObjects='<?php print get_theme_mod('object_secondcolor'); ?>';

    var amountObjects='<?php print get_theme_mod('amountObjects'); ?>';
    if(! amountObjects )
    	amountObjects=0.5; 

    var lightenObjects='<?php print get_theme_mod('lightenObjects'); ?>';
    if(! lightenObjects )
    	lightenObjects=0.75; 

    var lightenContent='<?php print get_theme_mod('lightenContent'); ?>';
    if(! lightenContent )
    	lightenContent=0.95; 

    var backgroundColor='<?php print get_theme_mod('background_color'); ?>';
    if(! backgroundColor )
    	backgroundColor='#ffffff'; 

    var svgContent="M0 0 L 40 40 L 80 0 Z"; 
    var layout = '<?php echo get_theme_mod( 'canvaslayout_field' )?>'; 
	if(layout.startsWith('svg')){
    	svgContent='<?php print get_theme_mod('svgContent'); ?>';
    }
<!-- layout -->
<?php 
$layout = get_theme_mod( 'canvaslayout_field' );
if(empty($layout)) $layout='arcs1';
echo file_get_contents(get_template_directory()."/canvas_layouts/".$layout.".js");
?>
<!-- script.js -->
<?php 
echo file_get_contents(get_template_directory() . '/canvas_layouts/script.js');
?>

/*
console.log(
"colorObjects",colorObjects,"colorSecondObjects",colorSecondObjects,
"amountObjects",amountObjects,"lightenObjects",lightenObjects,"lightenContent",lightenContent,
"backgroundColor",backgroundColor,"<?php echo get_theme_mod( 'canvaslayout_field' );?>",
"svgContent",svgContent

);*/


    var context, bodyElement, bodyStyle, canvas, contentElement;
    </script>

<?php wp_footer(); ?>

</body>
</html>
