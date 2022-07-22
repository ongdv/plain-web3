/**
 * 잔액 조회
 * --
 * @param {*} address 
 * @returns 
 */
async function getBalance(address=null) {
    console.log(address);
    try {
        const balance = await web3.eth.getBalance(address);
        console.log(balance);
        if(balance){
            return balance
        }

    } catch (error) {
        return false
    }
}

/**
 * 계좌 생성
 * --
 * @returns 
 */
function createAccount() {
    try {
        const result = web3.eth.accounts.create();
        return result;
    } catch (error) {
        return false;
    }
}