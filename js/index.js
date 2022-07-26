$(async function () {
  var account = getCookie('account');
  var amount = 0;
  const downBtn = $('#down-btn');
  const welcomeCard = $('#welcome-card');
  const accountAddress = $('#account-address');
  const createAccountBtn = $('#create-btn');
  const sendForm = $('#send-form');
  const addressInput = $('#address_input');
  const addressInputBtn = addressInput.find('button');

  const sendAmount = $('#send-amount');
  const sendAddress = $('#send-address');

  if (account) {
    accountAddress.text(account);
    const result = await getBalance(account);
    amount = result;
    createAccountBtn.text(result + ' ETH');
    sendForm.show(350);
    addressInput.hide(350);
  } else {
    accountAddress.text('Address');
    createAccountBtn.text('Create New Account');
    sendForm.hide();
    addressInput.show(1000);
  }

  // Scroll
  downBtn.click(function () {
    $('body,html').animate({ scrollTop: welcomeCard.offset().top }, 1000);
  });

  // input account
  addressInputBtn.click(function () {
    const address = addressInput.find('input').val();
    setCookie('account', address);
  });

  // sendAmount
  sendAmount.keyup(function () {
    // console.log($(this).val());
    const cond = Number(amount) - Number($(this).val())
    if(cond < 0 ){
      sendAmount.css('color', 'red')
    }else{
      sendAmount.css('color', 'white')
    }
    
  });

  // CreateAccount
  createAccountBtn.click(async function () {
    if (account) {
      return;
    }
    const result = await createAccount();
    setCookie('account', result.address);
    // setCookie('private_key', result.privateKey);

    const data = `
    <table>
        <tr>
            <th>
              AccountAddress
            </th>
            <th>
              PrivateKey
            </th>
        </tr>
        <tr>
            <td>
              ${result.address}
            </td>
            <td>
              ${result.privateKey}
            </td>
        </tr>
    </table>`;


    var a = document.createElement('a');
    var data_type = 'data:application/vnd.ms-excel';
    var table_html = encodeURIComponent(data);
    a.href = data_type + ', ' + table_html;
    a.download = 'account.xls';
    a.click();
    

    accountAddress.text(result.address);
    const balance = await getBalance(result.address);
    createAccountBtn.text(balance);
    amount = balance;
    sendForm.show();
  });


});
