<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php wp_head();?>
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.css' rel='stylesheet' />
    </head>
    <body <?php body_class();?>>
        <header id="header">
            <div class="header-social-nav-bar">
                <a href="/"><p>LANGUAGES&nbsp;&nbsp;&#9662;</p></a>
                <div class="header-menu-toggle">
                    <ul class="header-social-community">
                        <li class="header-social-community-item"><a href="https://www.facebook.com/newyorkmovesre/"><i class="fa fa-facebook header-social-facebook"></i></a></li>
                        <li class="header-social-community-item"><a href="https://www.instagram.com/newyorkmovesteam/?hl=en"><i class="header-social-instagram fa fa-instagram"></i></a></li>
                        <li class="header-social-community-item"><a href="https://www.linkedin.com/company/new-york-moves"><i class="header-social-linkedin fa fa-linkedin"></i></a></li>
                        <li class="header-social-community-item"><a href="#"><i class="header-social-nym fa fa-user-circle" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <nav class="header-global-nav">
                <a class="header-container" href="<?php echo site_url('/') ?>"><img class="header-logo" src="<?php echo get_theme_file_uri('/assets/img/logo/boston_header_logo.png') ?>" alt="BOSTON MOVES HOME" /></a>
                <div class="header-main-navbar">
                    <div class="header-menu-toggle-icon">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                    <ul class="header-main-navbar-items">
                        <li class="header-main-navbar-items-list"><a href="<?php echo site_url('/buy') ?>">BUY</a></li>
                        <li class="header-main-navbar-items-list"><a href="<?php echo site_url('/sell') ?>">SELL</a></li>
                        <li class="header-main-navbar-items-list"><a href="<?php echo site_url('/rent') ?>">RENT</a></li>
                        <li class="header-main-navbar-items-list"><a href="<?php echo site_url('/about-us') ?>">ABOUT US</a></li>
                        <li class="header-main-navbar-items-list"><a href="<?php echo site_url('/career') ?>">CAREER</a></li>
                        <li class="header-main-navbar-items-list"><a href="https://www.newyorkmovesre.com/" target="_blank">NEW YORK</a></li>
                    </ul>
                </div>
            </nav>
        </header>