document.addEventListener("DOMContentLoaded", () => {
    // 1. 選取所有導覽連結與內容區塊
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".content-section");

    // 安全檢查：如果 HTML 結構有誤，在 Console 警告
    if (sections.length === 0 || navLinks.length === 0) {
        console.error("錯誤：找不到 .navbar a 或 .content-section，請檢查 HTML class 名稱");
        return;
    }

    // 2. 定義切換功能的函式
    function switchTab(targetId) {
        // A. 隱藏所有區塊，移除所有連結的 active 狀態
        sections.forEach(section => section.classList.remove("active"));
        navLinks.forEach(link => link.classList.remove("active"));

        // B. 顯示目標區塊
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
        } else {
            console.error(`找不到 ID 為 ${targetId} 的區塊`);
            return;
        }

        // C. 設定導覽列按鈕為 active (高亮顯示)
        const activeLink = document.querySelector(`.navbar a[data-target="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        // D. [優化體驗] 切換頁面後，自動平滑捲動到頂部
        // 這對於手機版瀏覽非常重要，避免切換後卡在頁面底部
        window.scrollTo({
            top: 0,
            behavior: "smooth" // 平滑滾動效果
        });
    }

    // 3. 為每個導覽連結綁定點擊事件
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // 防止連結原本的跳轉行為
            const targetId = link.dataset.target; // 取得 data-target 的值
            switchTab(targetId);
        });
    });

    // 4. 初始化：預設顯示 "about" (或是 HTML 中已經寫好 active 的那個)
    // 這裡我們強制預設顯示 'about'，確保重新整理後狀態正確
    switchTab("about");
});