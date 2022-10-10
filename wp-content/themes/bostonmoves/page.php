<?php get_header(); ?>
<section class="default-page">
    <div class="default-container">
        <?php 
            while(have_posts()) {
                the_post(); ?>

                <!-- <h1>This is a page, not a post.</h1> -->
                <h2 class="default-title"><?php the_title(); ?></h2>
                <?php the_content(); ?>

        <?php }
        ?>
    </div>
</section>
<?php get_footer(); ?>
