// 设置营业时间（24小时制）
const openingHour = 11;  // 营业开始时间：早上11点
const closingHour = 19; // 营业结束时间：晚上7点
const closingMinute = 30; // 营业结束分钟：30分钟

// 获取当前时间（台湾时区 UTC+8）
const options = { timeZone: 'Asia/Taipei', hour: 'numeric', minute: 'numeric' };
const currentDate = new Date().toLocaleString('en-US', options);
const [currentHour, currentMinute] = currentDate.split(':').map(Number);

// 获取当前星期几（0 是周日，1 是周一，以此类推）
const currentDay = new Date().toLocaleString('en-US', { timeZone: 'Asia/Taipei', weekday: 'long' });

// 检查当前时间是否在营业时间内
const isOpenTime = (currentHour > openingHour && currentHour < closingHour) || 
                   (currentHour === closingHour && currentMinute <= closingMinute);

// 检查今天是否是营业日（星期二到星期六）
const isOpenDay = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].includes(currentDay);

// 最终营业状态
const isOpen = isOpenTime && isOpenDay;

const statusElement = document.getElementById('store-status');

// 确认营运状态并显示
if (isOpen) {
    statusElement.innerHTML = 'Open';
    statusElement.style.color = 'green'; // 直接设置颜色为绿色
} else {
    statusElement.innerHTML = 'Closed';
    statusElement.style.color = 'red'; // 直接设置颜色为红色
}

console.log(isOpen ? "Open" : "Closed"); // 在控制台输出状态
console.log("Current Day:", currentDay); // 输出当前星期几以进行调试
