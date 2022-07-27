async function addUser(userInfo) {
  const { user_id, user_nm, user_pw, wallet_address = '' } = userInfo;

  const result = await db.collection('users').add({
    user_id,
    user_nm,
    user_pw,
    wallet_address,
  });
  console.log(result);
  return result;
}

async function loginUser(userInfo) {
  try {
    const { login_id, login_pw } = userInfo;
    const result = await  db.collection('users').where('user_id', '==', login_id).where('user_pw', '==', login_pw).get()
    result.forEach((item) => {
        dd = item.data()
    })
    const user = {
        user_id:dd.user_id,
        user_nm:dd.user_nm,
        wallet_address: dd.wallet_address
    }
    return user;
  } catch (error) {
    return error;
  }

  return false;
}
