<?php get_header(); ?>
<section class="os-body">
  <div class="os-banner">
    <img class="os-banner-img" src="<?php echo get_theme_file_uri('assets/img/wallpaper/BMR-ONLINE-SCHOOL-WALLPAPER.png') ?>" alt="BMR-ONLINE-SCHOOL">
    <div class='os-banner-text'>
      <p>MASSACHUSETTS REAL ESTATE LICENSE</p>
      <p>ONLINE PROGRAM</p>
    </div>
  </div>
  <div class="os-body-box">
    <p>Boston Moves Real Estate is a proud affiliate and course administrator of the Harris Real Estate School. You can complete the Massachusetts Board approved 40 hours salespersons course directly with us.</p>
    <div class="os-body-package">
      <p>Whats included:</p>
      <p>-40 hour video course</p>
      <p>-Text book Included</p>
      <p>-Completely flexible, learn on your own time</p>
      <p>-Test Prep material included</p>
      <p>-Practice exams included</p>
      <p>-Live iand/or in person support available</p>
    </div>
    <p>Although you are not obligated to work for Boston Moves nor guaranteed a position after you complete the course, we definitely put applicants at the top of the list if they completed the course with us.</p>
  </div>
  <div class="os-body-application">
    <div>Contact Us Now</div>
    <p>Fields marked with * are required.</p>
    <form class="os-body-form applicationSubmit">
        <label for="os-body-form-fname">First Name *</label>
        <input id="os-body-form-fname" class="os-body-form-input" type="text" name="user_fname" required>
        <label for="os-body-form-lname">Last Name *</label>
        <input id="os-body-form-lname" class="os-body-form-input" type="text" name="user_lname" required>
        <label for="os-body-form-email">Email *</label>
        <input id="os-body-form-email" class="os-body-form-input" type="text" name="user_email" required>
        <label for="os-body-form-phone">Phone *</label>
        <input id="os-body-form-phone" class="os-body-form-input" type="text" name="user_sns" required>
        <input class="os-body-form-input" type="text" name="to_email" value="ken@newyorkmovesre.com" style="display: none;">
        <label for="os-body-form-msg">Message</label>
        <textarea id="os-body-form-msg" name="message" class="os-body-form-input os-body-form-textarea" placeholder="Please tell us more about you! Or, you can copy and paste your resume here!"></textarea>
        <button type="submit" class="os-body-form-text-btn">Send email</button>
    </form>
    <!-- <div class="applicationSent hideEmailDiv">
        <h4>Thank you for your interest in joining Boston Moves Real Estate Team.</h4>
        <h4>We will review your application and look forward to getting in touch with you soon.</h4>
    </div> -->
  </div>
</section>
<?php get_footer(); ?>
