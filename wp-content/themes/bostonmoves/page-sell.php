<?php get_header(); ?>


    <div class="sell-page-header">
        <img class="sell-page-header-img" src="<?php echo get_theme_file_uri('assets/img/wallpaper/sell_banner_img.jpg') ?>" alt="bg_img">
        <div class="sell-page-header-div">
            <div class="sell-page-header-text">
                <p class="sell-page-header-title">SELL YOUR PROPERTY WITH US</p>
                <p class="sell-page-header-subtitle">Whether you are ready to sell or just thinking about it.</p>
                <p class="sell-page-header-subtitle">we can offer expert advice and get you on track.</p>
            </div>
        </div>
    </div>
    <div class="sell-body-container">
        <div class="sell-page-body">
            <div class="sell-page-body-content">
                <p class="sell-page-body-content-title">TRIED-AND-TRUE</p>
                <p class="sell-page-body-content-text">Experienced agents work with you to get you what you want.</p>
                <p class="sell-page-body-content-text">We listen, we care, and we sell.</p>
            </div>
            <div class="sell-page-email">
                <form id="sell-submission">
                    <h1 class="sell-page-email-title">THINKING OF SELLING?</h1>
                    <p class="sell-page-body-content-text">Please contact us anytime anywhere without hesitation.</p>
                    <p class="sell-page-body-content-text">We are here to help you with our best.</p>
                    <div class="sell-page-email-input-box">
                        <input name="title" class="sell-page-email-input" type="text" id="sellEmailTitle" style="display: none" value="Property Sale" />
                        <input name="category" class="sell-page-email-input" type="text" id="sellEmailCategory" style="display: none" value="property sale" />
                        <input name="name" class="sell-page-email-input" type="text" placeholder="Name" id="sellEmailName" />
                        <input name="email" class="sell-page-email-input" type="text" placeholder="Email" id="sellEmailEmail" />
                        <input name="phone" class="sell-page-email-input" type="text" placeholder="Phone" id="sellEmailPhone" />
                        <input name="zip" class="sell-page-email-input" type="text" placeholder="Zipcode" id="sellEmailZip" />
                        <textarea name="desc" class="sell-page-email-input" style="resize: none; height: 120px; font-family: 'Montserrat', sans-serif;" placeholder="Please let us know about your valuable property" id="sellEmailDesc"></textarea>
                        <button class="sell-page-email-text-btn" id="sellEmailBtn">CONTACT US</button>
                    </div>
                </form>
                <div id="sell-confirm-msg" style="display: none; text-align: center; flex-direction: column;">
                    <h2>THANK YOU SO MUCH FOR SENDING US AN INQUIRY</h2>
                    <h2>WE WILL COME BACK WITH YOU SHOTLY</h2>
                </div>
            </div>
        </div>
    </div>

<?php get_footer(); ?>
