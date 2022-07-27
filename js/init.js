const web3 = new Web3(`https://ropsten.infura.io/v3/035ee5b7beeb4d8f88719d16475a8762`);
const app = window.firebase.initializeApp(firebaseConfig);
const db = window.firebase.firestore()

console.log(web3)
console.log(app);
console.log(db);