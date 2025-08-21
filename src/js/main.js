


let testimonial = document.getElementById("testimonial");
let avatars = document.querySelectorAll(".avatar");

avatars.forEach(avatar => {
    avatar.addEventListener("click", () => {
        testimonial.setAttribute("src", avatar.getAttribute("src"));

        avatars.forEach(el => {
            el.classList.add("opacity-50");
            el.classList.remove("opacity-100");
        });

        avatar.classList.add("opacity-100");
        avatar.classList.remove("opacity-50");
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("mybtn");   // زرار الموبايل
    const icon = document.getElementById("icon");    // الأيقونة جوا الزرار
    const menu = document.getElementById("mobileMenu"); // قائمة الموبايل

    if (!btn || !icon || !menu) {
        console.error("مش لاقي عنصر:", { btn, icon, menu });
        return;
    }

    btn.addEventListener("click", () => {
        // تبديل الأيقونة
        if (icon.classList.contains("fa-bars")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark"); // لو عندك FA6
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

        if (menu.classList.contains("h-0")) {
            menu.classList.remove("h-0");
            menu.classList.add("h-[210px]"); // افتح
        } else {
            menu.classList.remove("h-[210px]");
            menu.classList.add("h-0"); // اقفل
        }
    });
});