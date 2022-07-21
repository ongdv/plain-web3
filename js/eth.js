/**
 * 잔액 조회
 * --
 * @param {*} address 
 * @returns 
 */
async function getBalance(address=null) {
    try {
        const balance = await web3.eth.getBalance(address);
        if(balance){
            return balance
        }

    } catch (error) {
        return false
    }
}


function createAccount() {
    try {
        const account = web3.eth.accounts.create();
        return account;
    } catch (error) {
        return false;
    }
}