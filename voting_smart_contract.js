const Web3 = require('web3');

// Kết nối đến mạng blockchain (ví dụ: Ethereum)
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Địa chỉ và ABI của hợp đồng thông minh bỏ phiếu
const contractAddress = '0x123456789abcdef';
const contractABI = [
  // Define các hàm và sự kiện của hợp đồng
];

// Tạo một instance của hợp đồng từ địa chỉ và ABI
const votingContract = new web3.eth.Contract(contractABI, contractAddress);

// Hàm để gửi phiếu bầu
async function vote(candidate) {
  try {
    // Thực hiện giao dịch để gửi phiếu bầu
    const accounts = await web3.eth.getAccounts();
    const transaction = await votingContract.methods.vote(candidate).send({ from: accounts[0] });
    console.log('Vote sent successfully. Transaction hash:', transaction.transactionHash);
  } catch (error) {
    console.error('Error sending vote:', error);
    throw error;
  }
}

module.exports = { vote };