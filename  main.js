// 設定營業時間（24小時制）
const openingHour = 11;  // 營業開始時間：早上11點
const closingHour = 19; // 營業結束時間：下午7點

// 取得當前時間
const now = new Date();
const currentHour = now.getHours();

// 取得HTML元素
const statusElement = document.getElementById("status");

// 判斷是否在營業時間內
if (currentHour >= openingHour && currentHour < closingHour) {
    statusElement.textContent = "Open";
    statusElement.classList.remove("closed");
} else {
    statusElement.textContent = "Closed";
    statusElement.classList.add("closed");
}
