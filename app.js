const cookieBtn = document.getElementById("cookieBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const cookiesSpan = document.getElementById("cookiesSpan");
const cpsSpan = document.getElementById("cpsSpan");
const restartBtn = document.getElementById("restartBtn");

const stats = {
  cookieCount: 0,
  cps: 0,
};

const storageStats = JSON.parse(localStorage.getItem("stats"));

if (storageStats !== null) {
  stats.cookieCount = storageStats.cookieCount;
  stats.cps = storageStats.cps;
  updatePage();
}

function buyCookie() {
  stats.cookieCount++;
  updatePage();
  updateStorage();
}

function buyUpgrade() {
  stats.cps++;
  stats.cookieCount -= 10;
  updatePage();
  updateStorage();
}

function updatePage() {
  cookiesSpan.textContent = stats.cookieCount;
  cpsSpan.textContent = stats.cps;
}

function updateStorage() {
  localStorage.setItem("stats", JSON.stringify(stats));
}
function restartGame() {
  stats.cookieCount = 0;
  stats.cps = 0;
  updatePage();
  updateStorage();
}

cookieBtn.addEventListener("click", buyCookie);
upgradeBtn.addEventListener("click", buyUpgrade);
restartBtn.addEventListener("click", restartGame);

setInterval(function () {
  stats.cookieCount += stats.cps;
  updatePage();
  updateStorage();
}, 1000);
