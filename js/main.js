document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll(".content-section");

    if (sections.length === 0) {
        console.error("找不到任何 content-section，請確認 HTML 中有 class='content-section'");
        return;
    }

    // 預設顯示「關於我」
    showSection("about");
    setActiveNav("about");

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = link.dataset.target;
            showSection(target);
            setActiveNav(target);
        });
    });

    function showSection(id) {
        sections.forEach(section => section.classList.remove("active"));
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.classList.add("active");
        } else {
            console.error("找不到 section:", id);
        }
    }

    function setActiveNav(id) {
        navLinks.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`.navbar a[data-target="${id}"]`);
        if (activeLink) activeLink.classList.add("active");
    }
});
