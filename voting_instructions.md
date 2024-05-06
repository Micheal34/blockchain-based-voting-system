# Hướng dẫn sử dụng Hệ thống bỏ phiếu dựa trên blockchain

## Tham gia bỏ phiếu
Để tham gia bỏ phiếu, bạn cần sử dụng hàm `vote(candidate)` trong `voting_smart_contract.js`. Dưới đây là cách sử dụng:

```javascript
const { vote } = require('./voting_smart_contract');

// Gửi phiếu bầu cho ứng cử viên số 1
vote(1)
  .then(() => console.log('Vote sent successfully.'))
  .catch(error => console.error('Error sending vote:', error));
css

