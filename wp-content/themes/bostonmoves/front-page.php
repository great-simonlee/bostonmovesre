<?php get_header(); ?>
<!-- <div class="temp-const" style="width: 100vw; height: 42px; background-color: darkred; color:#fff; text-align: center;"><h4>>>> OUR WEBSITE IS UNDER CONSTRUCTION <<<</h4><h4>If you have any questions, please send us an email at manager@bostonmovesre.com</h4></div> -->
<section class="main-banner">
  <img class="main-wallpaper" src="<?php echo get_theme_file_uri('/assets/img/wallpaper/b_wallpaper.png') ?>" alt="BOSTON MOVES MAIN" />
  <div class="main-qcontainer">
    <h1 class="main-quote">MAKE YOUR BEST MOVE</h1>
  </div>
</section>
<section class="main-feature-listing">
  <p class="main-flisting-title">Featured Sales Listings</p>
  <div class="main-flisting-container">
    <?php the_content(); ?>
  </div>
</section>
<section class="main-sales">
  <div class='main-sales-cont'>
    <a href="/sell"><div class='main-part-section front-sell-img'></div><div class='main-part-text' >SELL<br>YOUR<br>PROPERTY</div></a>
    <a href="/about-us"><div class='main-part-section front-aboutus-img'></div><div class='main-part-text' >ABOUT<br>BOSTON<br>MOVES</div></a>
    <a href="/career"><div class='main-part-section front-career-img'></div><div class='main-part-text' >WORK<br>WITH<br>US</div></a>
  </div>
</section>
<?php get_footer(); ?>
