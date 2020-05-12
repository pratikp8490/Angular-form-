<?php
// $con = mysqli_connect('localhost','root','', 'cinema');
//       if(!$con)
//       {
//           die('could not connect:'.mysqli_error());
//       }else
//       {
//           echo" connection successful";
//       }

//     mysqli_select_db($con, 'cinema');

/**
 * Astra functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Define Constants
 */
define( 'ASTRA_THEME_VERSION', '2.4.2' );
define( 'ASTRA_THEME_SETTINGS', 'astra-settings' );
define( 'ASTRA_THEME_DIR', trailingslashit( get_template_directory() ) );
define( 'ASTRA_THEME_URI', trailingslashit( esc_url( get_template_directory_uri() ) ) );


/**
 * Minimum Version requirement of the Astra Pro addon.
 * This constant will be used to display the notice asking user to update the Astra addon to latest version.
 */
define( 'ASTRA_EXT_MIN_VER', '2.4.0' );

/**
 * Setup helper functions of Astra.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-theme-options.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-theme-strings.php';
require_once ASTRA_THEME_DIR . 'inc/core/common-functions.php';

/**
 * Update theme
 */
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-update.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/astra-update-functions.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-background-updater.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-pb-compatibility.php';


/**
 * Fonts Files
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-font-families.php';
if ( is_admin() ) {
	require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts-data.php';
}

require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts.php';

require_once ASTRA_THEME_DIR . 'inc/core/class-astra-walker-page.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-enqueue-scripts.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-gutenberg-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-dynamic-css.php';

/**
 * Custom template tags for this theme.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-attr.php';
require_once ASTRA_THEME_DIR . 'inc/template-tags.php';

require_once ASTRA_THEME_DIR . 'inc/widgets.php';
require_once ASTRA_THEME_DIR . 'inc/core/theme-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/admin-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/sidebar-manager.php';

/**
 * Markup Functions
 */
require_once ASTRA_THEME_DIR . 'inc/extras.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog-config.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog.php';
require_once ASTRA_THEME_DIR . 'inc/blog/single-blog.php';
/**
 * Markup Files
 */
require_once ASTRA_THEME_DIR . 'inc/template-parts.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-loop.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-mobile-header.php';

/**
 * Functions and definitions.
 */
require_once ASTRA_THEME_DIR . 'inc/class-astra-after-setup-theme.php';

// Required files.
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-helper.php';

require_once ASTRA_THEME_DIR . 'inc/schema/class-astra-schema.php';

if ( is_admin() ) {

	/**
	 * Admin Menu Settings
	 */
	require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-settings.php';
	require_once ASTRA_THEME_DIR . 'inc/lib/notices/class-astra-notices.php';

	/**
	 * Metabox additions.
	 */
	require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-boxes.php';
}

require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-box-operations.php';


/**
 * Customizer additions.
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-customizer.php';


/**
 * Compatibility
 */
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-jetpack.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/woocommerce/class-astra-woocommerce.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/edd/class-astra-edd.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/lifterlms/class-astra-lifterlms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/learndash/class-astra-learndash.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bb-ultimate-addon.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-contact-form-7.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-visual-composer.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-site-origin.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gravity-forms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bne-flyout.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-ubermeu.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-divi-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-amp.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-yoast-seo.php';
require_once ASTRA_THEME_DIR . 'inc/addons/transparent-header/class-astra-ext-transparent-header.php';
require_once ASTRA_THEME_DIR . 'inc/addons/breadcrumbs/class-astra-breadcrumbs.php';
require_once ASTRA_THEME_DIR . 'inc/addons/heading-colors/class-astra-heading-colors.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-filesystem.php';

// Elementor Compatibility requires PHP 5.4 for namespaces.
if ( version_compare( PHP_VERSION, '5.4', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor-pro.php';
}

// Beaver Themer compatibility requires PHP 5.3 for anonymus functions.
if ( version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-themer.php';
}

/**
 * Load deprecated functions
 */
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-filters.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-functions.php';


// headers
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Credentials: true");
function add_cors_http_header(){
	header("Access-Control-Allow-Origin: *");
	
}
add_action('init﻿','add_cors_http_header');

add_filter('allowed_http_origins', 'add_allowed_origins');

function add_allowed_origins($origins) {
	$origins[] = 'https://www.yourdomain.com';
	return $origins;
}  


// ******************************************************** Login API *******************************************

add_action( 'rest_api_init', 'register_api_hooks' );

function register_api_hooks() {
	register_rest_route(
		'custom-plugin', '/login/',
		array(
			'methods'  => 'GET',
			'callback' => 'login',
		)
	);
}
function login($request){
	session_start();

	$creds['user_login'] = $request["username"];
	$creds['user_password'] =  $request["password"];
	$_SESSION['login'] = $creds['user_login'];
	$_SESSION['password'] = $creds['user_password'];

  // echo $_SESSION['login'];
  // echo $_SESSION['password'];
	if($_SESSION['login'] == "" || $_SESSION['password'] == ""){
		
		$required = "Unauthorized";
		http_response_code(401);
		echo $required;
		exit;
	}

	$creds['remember'] = true;
	$user = wp_signon( $creds );

	  if ( is_wp_error($user) )
		echo $user->get_error_message();
	return $user;
}


// *********************************** Boking page API ******************************************************

add_action( 'rest_api_init', 'register_api_hooks_booking' );

function register_api_hooks_booking() {
	register_rest_route(
		'custom-plugin', '/tickets/',
		array(
			'methods'  => 'POST',
			'callback' => 'booking',

		)
	);
}

function booking($request){

	$nm=$_POST['post_title'];
	$no=$_POST['mo_no'];
	$co=$_POST['post_content'];
	$em=$_POST['email'];
	$dt=$_POST['eve_date'];
	$tm=$_POST['eve_time'];
	$ad=$_POST['address'];

	$log_id = $_POST['log_id'];



	if($nm == "" || $no == "" || $em == "" ||  $dt == "" || $tm == "" || $co == "" || $ad == "")
	{
		$required = "BAD Request";
		http_response_code(400);
		echo $required;
		exit;
  // echo "All Fields Are Reqiuired";
	}
	if(!preg_match("/^[a-z]+$/", $nm)){
		echo "Enter valid Name";
	}
	if(!preg_match("/^[0-9]{10}$/", $no)){
		echo "Enter valid Number";
	}
	if(!preg_match("/^[a-zA-Z0-9.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/", $em)){
		echo "Enter valid Email";
	}
	else{
		$con = mysqli_connect('localhost','root','','events');

		$qy= "INSERT INTO wp_posts (log_id, post_title , mo_no , Email , eve_date , eve_time , post_content , address) 
		VALUES ('$log_id','$nm' , '$no' , '$em' , '$dt' , '$tm' , '$co' , '$ad' )";
		if ($con->query($qy) === TRUE) {
			$last_id = mysqli_insert_id($con);
			echo 
			$last_id ;
		}
		else {
			echo "Error: " . $qy . "<br>" . $con->error;
		}
	}
}

// ****************************************************** logout API ***********************************************

add_action( 'rest_api_init', 'logoutfn');

function logoutfn() {
	register_rest_route(
		'custom-plugin', '/logout/',
		array(
			'methods'  => 'GET',
			'callback' => 'logout',
		)
	);
}
function logout(){
    // echo "user logout";
	session_destroy();
}

// ***************************************display booked event API***************************************************

add_action( 'rest_api_init', 'lookevent');

function lookevent() {
	register_rest_route(
		'custom-plugin', '/event/',
		array(
			'methods'  => 'GET',
			'callback' => 'events',
		)
	);
}
function events($request){


$json = $request->get_headers();

// echo " <h1>pratik</h1> ";
// echo "<br>";

$user_req_email = '';
foreach ($json as $key => $feature) {
	if($key == 'auth'){
		$user_email = $feature[0];
	}
}

if($user_email){
	echo $user_email;
	exit();
}



	$log_id = $_GET['log_id'];
    // echo $log_id;

	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "events";

	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	$sql = "SELECT id, post_title, mo_no, email, post_content, eve_date, eve_time, address  FROM wp_posts WHERE log_id = $log_id";
	$result = mysqli_query($conn, $sql);

	$response =  [];

	if (mysqli_num_rows($result) > 0) {
		while($row = mysqli_fetch_assoc($result)) {

			array_push($response, $row);
		}
		echo json_encode($response);
		exit();
	} else 
	{
		echo "This User is not valid to see his bookings"; 
	} 
}


// *****************************************Edit API**********************************************************
add_action( 'rest_api_init', 'register_api_hooks_update' );

function register_api_hooks_update() {
	register_rest_route(
		'custom-plugin', '/update/',
		array(
			'methods'  => 'PUT',
			'callback' => 'record',
		)
	);
}

function record(){

    $ID = $_GET['ID'];
	var_dump($ID);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "events";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
    	die("Connection failed: " . $conn->connect_error);
    }

    parse_str(file_get_contents('php://input'),$_PUT);

	var_dump($_put);
 	 $json_array[] = $_PUT;
      $json = json_encode($json_array);
    echo $json;
 
 $sql = mysqli_query($conn,"UPDATE wp_posts SET
      post_title='".$_PUT['post_title']."', email='".$_PUT['email']."',mo_no='".$_PUT['mo_no']."',post_content='".$_PUT['post_content']."',eve_date='".$_PUT['eve_date']."',eve_time='".$_PUT['eve_time']."',address='".$_PUT['address']."' WHERE ID= $ID");


    if ($conn->query($sql) === TRUE) {
    	echo "Record updated successfully";
    } 
   
    else {
    	echo "Error updating record: " . $conn->error;
    }

    $conn->close();
}


// *****************************************Delete API**********************************************************
add_action( 'rest_api_init', 'register_api_hooks_delete' );

function register_api_hooks_delete() {
  register_rest_route(
    'custom-plugin', '/delete/',
    array(
      'methods'  => 'DELETE',
      'callback' => 'deletedata',
    )
  );
}

function deletedata(){
  $ID = $_GET['ID'];

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "events";

// Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


  $query=mysqli_query($conn, "DELETE FROM wp_posts WHERE ID = '$ID' ");

  if($query==true){ 
        echo "Records was delete successfully.";

    } else{ 
        echo "ERROR:Records is not delete . " . $mysqli->error;
    } 
}



// ************************************signup api ************************************************************

add_action( 'rest_api_init', 'signup');

function signup() {
	register_rest_route(
		'custom-plugin', '/signup/',
		array(
			'methods'  => 'POST',
			'callback' => 'signupdata',
		)
	);
}
function signupdata($request){

	$un = $_POST['user_login'];
	$up = $_POST['user_pass'];
	 $md = md5($up);
	$ue = $_POST['user_email'];
	 $nk = $_POST['user_nicename'];
	$d= date("Y-m-d h:i:sa");

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "events";

// Create connection// headers
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Credentials: true");
function add_cors_http_header(){
	header("Access-Control-Allow-Origin: *");
	
}
add_action('init﻿','add_cors_http_header');

add_filter('allowed_http_origins', 'add_allowed_origins');

function add_allowed_origins($origins) {
	$origins[] = 'https://www.yourdomain.com';
	return $origins;
}
// Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
$qy = "INSERT into wp_users (user_login, user_pass, user_email, user_nicename, display_name, user_registered) 
VALUES ('$un','$md','$ue', '$nk', '$nk','$d')";

 if (mysqli_query($conn, $qy)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $qy . "<br>" . mysqli_error($conn);
}

}