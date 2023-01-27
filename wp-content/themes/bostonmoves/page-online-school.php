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
    <form class="os-body-form applicationSubmit" id="os-submission">
      <div>Contact Us Now</div>
      <p>Fields marked with * are required.</p>
      <input name="title" class="sell-page-email-input" type="text" id="sellEmailTitle" style="display: none" value="Online License Program" />
      <input name="category" class="sell-page-email-input" type="text" id="sellEmailCategory" style="display: none" value="online license program" />
      <label for="os-body-form-name">Full Name *</label>
      <input id="os-body-form-name" class="os-body-form-input" type="text" name="name" required>
      <label for="os-body-form-email">Email *</label>
      <input id="os-body-form-email" class="os-body-form-input" type="text" name="email" required>
      <label for="os-body-form-phone">Phone *</label>
      <input id="os-body-form-phone" class="os-body-form-input" type="text" name="phone" required>
      <input class="os-body-form-input" type="text" name="zip" value="" style="display: none;">
      <label for="os-body-form-msg">Message</label>
      <textarea id="os-body-form-msg" name="desc" class="os-body-form-input os-body-form-textarea" placeholder="Please tell us more about you! Or, you can copy and paste your resume here!"></textarea>
      <button type="submit" class="os-body-form-text-btn" id="osEmailBtn">Send email</button>
    </form>
    <div id="os-confirm-msg" style="display: none; text-align: center; flex-direction: column;">
        <h3>THANK YOU SO MUCH FOR SENDING US AN INQUIRY</h3>
        <h3>WE WILL COME BACK WITH YOU SHOTLY</h3>
    </div>
    <!-- <div class="applicationSent hideEmailDiv">
        <h4>Thank you for your interest in joining Boston Moves Real Estate Team.</h4>
        <h4>We will review your application and look forward to getting in touch with you soon.</h4>
    </div> -->
  </div>
</section>
<?php get_footer(); ?>
