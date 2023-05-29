const fs = require("fs");
const path = require("path");

const fileToModify = path.resolve(__dirname, "../index.html");
const searchRegx = /© 2020-2022 Yuan Yuan\. Last updated: (.+?)\./; // 要搜索的字符串
const now = new Date(); // 当前时
const dateString = formatDate(now);

function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
}
// 读取文件内容
fs.readFile(fileToModify, "utf8", (err, data) => {
  if (err) {
    console.error(`读取文件失败: ${err}`);
    return;
  }

  // 替换字符串
  const updatedData = data.replace(
    searchRegx,
    `© 2020-2022 Yuan Yuan\. Last updated: ${dateString}\.`
  );

  // 写入文件
  fs.writeFile(fileToModify, updatedData, "utf8", (err) => {
    if (err) {
      console.error(`写入文件失败: ${err}`);
      return;
    }
    console.log(`已将"${searchRegx}"替换为"${dateString}"`);
  });
});
