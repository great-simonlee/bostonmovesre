if (window.location.pathname === '/sell/') {
  window.addEventListener('DOMContentLoaded', () => {
    const emailSendBtn = document.querySelector('#sellEmailBtn');
    const emailName = document.querySelector('#sellEmailName');
    const emailEmail = document.querySelector('#sellEmailEmail');
    const emailPhone = document.querySelector('#sellEmailPhone');
    const emailZip = document.querySelector('#sellEmailZip');
    const emailDesc = document.querySelector('#sellEmailDesc');
    emailSendBtn.addEventListener('click', () => {
      console.log(emailName.value);
      console.log(emailEmail.value);
      console.log(emailPhone.value);
      console.log(emailZip.value);
      console.log(emailDesc.value);
      console.log('Confirmed');
    });
  });
}
