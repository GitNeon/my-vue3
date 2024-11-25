const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// 设置下载路由
app.get('/download/test.docx', (req, res) => {
  const filePath = path.resolve(__dirname, './test.docx'); // 替换为你的.docx文件路径

  // 设置响应头
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.setHeader('Content-Disposition', 'attachment; filename=local_document.docx');
  res.setHeader('Content-Length', fs.statSync(filePath).size);

  // 创建可读流并发送给客户端
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://192.168.3.243:${port}`);
});
