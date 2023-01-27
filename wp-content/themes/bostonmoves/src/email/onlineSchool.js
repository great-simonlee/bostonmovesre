if (window.location.pathname === '/online-school/') {
  window.addEventListener('DOMContentLoaded', () => {
    emailjs.init('XfVl5KseF47HmnaJr');

    const emailForm = document.querySelector('#os-submission');
    const confirmDiv = document.querySelector('#os-confirm-msg');

    const emailSendBtn = document.querySelector('#osEmailBtn');
    // const emailName = document.querySelector('#sellEmailName');
    // const emailEmail = document.querySelector('#sellEmailEmail');
    // const emailPhone = document.querySelector('#sellEmailPhone');
    // const emailZip = document.querySelector('#sellEmailZip');
    // const emailDesc = document.querySelector('#sellEmailDesc');
    emailSendBtn.addEventListener('click', (event) => {
      event.preventDefault();
      // console.log(emailName.value);
      // console.log(emailEmail.value);
      // console.log(emailPhone.value);
      // console.log(emailZip.value);
      // console.log(emailDesc.value);
      // console.log('Confirmed');
      emailjs.sendForm('service_jojfbg8', 'template_xhuuo2e', emailForm).then(
        function () {
          console.log('SUCCESS!');
          emailForm.style.display = 'none';
          confirmDiv.style.display = 'flex';
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
      window.scrollTo({
        bottom: 0,
        behavior: 'smooth',
      });
    });
  });
}
