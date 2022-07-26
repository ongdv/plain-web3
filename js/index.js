$(async function () {
  var account = getCookie('account');
  const downBtn = $('#down-btn');
  const welcomeCard = $('#welcome-card');
  const accountAddress = $('#account_address');
  const createAccountBtn = $('#create-btn');
  const sendForm = $('#send-form');
  const addressInput = $("#address_input")
  const addressInputBtn = addressInput.find("button");

  if (account) {
    accountAddress.text(account);
    const result = await getBalance(account);
    createAccountBtn.text(result + ' ETH');
    sendForm.show(350);
    addressInput.hide(350)
  } else {
    accountAddress.text('Address');
    createAccountBtn.text('Create New Account');
    sendForm.hide();
    addressInput.show(1000)
  }

  // Scroll
  downBtn.click(function () {
    $('body,html').animate({ scrollTop: welcomeCard.offset().top }, 1000);
  });

  // input account
  addressInputBtn.click(function() {
    const address = addressInput.find('input').val()
    setCookie("account", address);
  })

  // CreateAccount
  createAccountBtn.click(async function () {
    if (account) {
      return;
    }
    const result = await createAccount();
    console.log(result);
    setCookie('account', result.address);
    // setCookie('private_key', result.privateKey);

    accountAddress.text(result.address);
    const balance = await getBalance(result.address);
    createAccountBtn.text(balance);
    sendForm.show();
  });
});