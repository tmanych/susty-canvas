<?php
/**
 * Susty WP functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Susty
 */
$canvas_layouts = array(
    'flowers1' => "Flowers 1",
    'flowers2' => "Flowers 2",
    'flowers3' => "Flowers 3",
    'flowers4' => "Flowers 4",
    'flowers5' => "Flowers 5",
    'flowers6' => "Flowers 6",
    'radiate' => "Radiate",
    'lines' => "Lines  (from big to small)",
    'rectangles' => "Chess",
    'rectangles1' => "Rectangles (from big to small)",
    'rectangles2' => "Wide Lines",
    'rectangles3' => "Rectangles big",
    'arcs1' => "Arcs 1 (from big to small)",
    'arcs2' => "Arcs 2 (colored left bottom)",
    'arcs3' => "Arcs 3 (lines left bottom)",
    'arcs4' => "Arcs 4 (random lines)",
    'art1' => "Art 1",
    'art2' => "Art 2",
    'art3' => "Art 3",
    'triangle1' => "Triangle 1 (random)",
    'triangle2' => "Triangle 2",
    'arcanimation' => 'Arc-Animation',
    'titleanimation' => 'Title-Animation',
    'title1' => 'Title 1',
    'title2' => 'Title 2',
    'title3' => 'Title 3',
    'title4' => 'Title 4',
    'svg1' => 'SVG pattern (for experts)',
    'svg2' => 'SVG random (for experts)',
);
ksort($canvas_layouts,2);
if ( ! function_exists( 'susty_setup' ) ) :
    /**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function susty_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Susty WP, use a find and replace
		 * to change 'susty' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'susty', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'susty' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );
		
		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
		global $canvas_layouts;
		$canvas_layout = get_theme_mod( 'canvaslayout_field' );
	}
endif;
add_action( 'after_setup_theme', 'susty_setup' );

add_action( 'customize_register', 'mytheme_customize_register' );
function mytheme_customize_register( $wp_customize ) {
    global $canvas_layouts;
    // Add a setting to save the selected value
    $wp_customize->add_setting( 'canvaslayout_field', array(
        'default'   => 'arcs1',
        'transport' => 'refresh',
    ) );
    
    // Add a control to display the select field
    $wp_customize->add_control( 'canvaslayout_field', array(
        'type'    => 'select',
        'label'   => 'Select Layout',
        'section' => 'title_tagline', // You can change this section as per your preference
        'choices' => $canvas_layouts,
    ) );
    
    // Add a setting to save the selected value
    $wp_customize->add_setting( 'lightenObjects', array(
        'default'   => '0.5',
        'transport' => 'refresh',
    ) );
    
    // Add a control to display the select field
    $wp_customize->add_control( 'lightenObjects', array(
        'type' => 'range',
        'input_attrs' => array(
            'min' => 0,
            'max' => 1,
            'step' => 0.1,
        ),
        'label'   => 'Lighten objects in background',
        'section' => 'colors', // You can change this section as per your preference
    ) );
    
    // Add a setting to save the selected value
    $wp_customize->add_setting( 'lightenContent', array(
        'default'   => '0.7',
        'transport' => 'refresh',
    ) );
    
    // Add a control to display the select field
    $wp_customize->add_control( 'lightenContent', array(
        'type' => 'range',
        'input_attrs' => array(
            'min' => 0,
            'max' => 1,
            'step' => 0.05,
        ),
        'label'   => 'Lighten content',
        'section' => 'colors', // You can change this section as per your preference
    ) );
    
    // Add a setting to save the selected value
    $wp_customize->add_setting( 'amountObjects', array(
        'default'   => '0.5',
        'transport' => 'refresh',
    ) );
    
    // Add a control to display the select field
    $wp_customize->add_control( 'amountObjects', array(
        'type' => 'range',
        'input_attrs' => array(
            'min' => 0.1,
            'max' => 1,
            'step' => 0.1,
        ),
        'label'   => 'Amount / Size',
        'section' => 'title_tagline', // You can change this section as per your preference
    ) );
    
    // Add a setting to save the selected value
    $wp_customize->add_setting( 'svgContent', array(
        'default'   => "m 34.75,39.75 c 21.333333,7 31.166667,-2 29.5,-27 -1.666667,1 -4.333333,2 -8,3 -18.666667,2 -25.833333,10 -21.5,24 m -9,7 28.5,-21 m -39,31 v 12.5 l 17,-12.5 h 44.5 c 6.666667,0 10,-3.333333 10,-10 v -34 c 0,-6.6666667 -3.333333,-10 -10,-10 h -64 c -6.6666667,0 -10,3.3333333 -10,10 v 34 c 0,6.666667 3.3333333,10 10,10 z",
        'transport' => 'refresh',
    ) );
    
    // Add a control to display the select field
    $wp_customize->add_control( 'svgContent', array(
        'type' => 'textarea',
        'description' => 'Use this only together with SVG-Templates. Drop an SVG-Path here like "M0 0 L 40 40 L 80 0 Z". See https://www.w3.org/TR/SVG11/paths.html for more informations.',
        'label'   => 'SVG Content (for experts only)',
        'section' => 'title_tagline', // You can change this section as per your preference
    ) );
    
    
    $colors = array(
        'background_color' => 'Background Color',
        'object_color' => 'Color of Objects (empty=random)', 
        'object_secondcolor' => 'Second color (not suitable for all layouts)',
    );
    foreach ($colors as $c => $t){
        $wp_customize->add_setting( $c, //No need to use a SERIALIZED name, as `theme_mod` settings already live under one db record
            array(
                'default'    => '', //Default setting/value to save
                'type'       => 'theme_mod', //Is this an 'option' or a 'theme_mod'?
                'capability' => 'edit_theme_options', //Optional. Special permissions for accessing this setting.
                'transport'  => 'postMessage', //What triggers a refresh of the setting? 'refresh' or 'postMessage' (instant)?
            )
            );
        
        $wp_customize->add_control( new WP_Customize_Color_Control( //Instantiate the color control class
            $wp_customize, //Pass the $wp_customize object (required)
            'susty_'.$c, //Set a unique ID for the control
            array(
                'label'      => __( $t, 'susty' ), //Admin-visible name of the control
                'settings'   => $c, //Which setting to load and manipulate (serialized is okay)
                'priority'   => 10, //Determines the order this control appears in for the specified section
                'section'    => 'colors', //ID of the section this control should render in (can be one of yours, or a WordPress default section)
            )
            ) );
    }
}


/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function susty_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'susty_content_width', 640 );
}
add_action( 'after_setup_theme', 'susty_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function susty_scripts() {
	wp_enqueue_style( 'susty-style', get_stylesheet_uri() );

	wp_deregister_script( 'wp-embed' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'susty_scripts' );

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

function susty_nav_rewrite_rule() {
	add_rewrite_rule( 'menu', 'index.php?menu=true', 'top' );
}

add_action( 'init', 'susty_nav_rewrite_rule' );

function susty_register_query_var( $vars ) {
	$vars[] = 'menu';

	return $vars;
}

add_filter( 'query_vars', 'susty_register_query_var' );

add_filter( 'template_include', function( $path ) {
	if ( get_query_var( 'menu' ) ) {
		return get_template_directory() . '/menu.php';
	}
	return $path;
});

// Remove dashicons in frontend for unauthenticated users
add_action( 'wp_enqueue_scripts', 'susty_dequeue_dashicons' );
function susty_dequeue_dashicons() {
	if ( ! is_user_logged_in() ) {
		wp_deregister_style( 'dashicons' );
	}
}
