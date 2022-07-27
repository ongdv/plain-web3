async function addUser(userInfo) {
  const { user_id, user_nm, user_passwrd, wallet_address = '' } = userInfo;
  db.collection('users')
    .add({
      user_id,
      user_nm,
      user_passwrd,
      wallet_address,
    })
    .then((res) => {
      console.log('Document written with ID: ', res);
    })
    .catch((err) => {
      console.error('Error adding document: ', err);
    });
}
