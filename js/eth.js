/**
 * 잔액 조회
 * --
 * @param {*} address 
 * @returns 
 */
async function getBalance(address=null, unit="ether") {
    try {
        const balance = await web3.eth.getBalance(address,  web3.eth.defaultBlock);
        if(balance){
            switch (unit) {
                case "ether":
                    return web3.utils.fromWei(balance, 'ether')
                case "wei":
                default:
                    return balance
            }
        }

        // web3.eth.getBalance(address).then(res => {
        //     callback(res);
        // })

    } catch (error) {
        console.log(error);
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