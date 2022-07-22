$(function () {
  var account = getCookie('account');
  const downBtn = $('#down-btn');
  const welcomeCard = $('#welcome-card');
  const accountAddress = $('#account_address');
  const createAccountBtn = $('#create-btn');
  const sendForm = $('#send-form');

  if (account) {
    accountAddress.text(account);
    getBalance(account).then((res) => {
      createAccountBtn.text(res);
    });

    sendForm.show();
  } else {
    accountAddress.text('Address');
    createAccountBtn.text('Create New Account');
    sendForm.hide();
  }

  downBtn.click(function () {
    $('body,html').animate({ scrollTop: welcomeCard.offset().top }, 1000);
  });

  createAccountBtn.click(async function () {
    if (account) {
      return;
    }
    const result = await createAccount();
    console.log(result);
    setCookie('account', result.address);
    setCookie('private_key', result.privateKey);

    accountAddress.text(result.address);
    const balance = await getBalance(result.address);
    createAccountBtn.text(balance);
    sendForm.show();
  });
});
