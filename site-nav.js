(function () {
    if (window.top !== window.self) return;

    var pages = [
        { href: "index.html", label: "Índice" },
        { href: "lp1.html", label: "Landing Page 1" },
        { href: "lp2.html", label: "Landing Page 2" },
        { href: "lp3.html", label: "Landing Page 3" },
        { href: "lp4.html", label: "Landing Page 4" },
        { href: "lp5.html", label: "Landing Page 5" },
    ];

    var current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    var barHeight = 36;

    var style = document.createElement("style");
    style.textContent =
        "body{padding-top:" +
        barHeight +
        "px !important;}" +
        "header.fixed,.fixed.top-0{top:" +
        barHeight +
        "px !important;}" +
        "#lp-switcher{position:fixed;top:0;left:0;right:0;height:" +
        barHeight +
        "px;z-index:10000;display:flex;align-items:center;gap:4px;padding:0 10px;background:#111c2a;color:#f8f9ff;font-family:Inter,system-ui,sans-serif;font-size:12px;line-height:1;overflow-x:auto;scrollbar-width:none;}" +
        "#lp-switcher::-webkit-scrollbar{display:none;}" +
        "#lp-switcher a{color:#d5dbe8;text-decoration:none;white-space:nowrap;padding:6px 10px;border-radius:999px;}" +
        "#lp-switcher a:hover{color:#fff;background:rgba(255,255,255,.08);}" +
        "#lp-switcher a.is-active{color:#111c2a;background:#f8f9ff;font-weight:600;}";
    document.head.appendChild(style);

    var nav = document.createElement("nav");
    nav.id = "lp-switcher";
    nav.setAttribute("aria-label", "Páginas");

    pages.forEach(function (page) {
        var link = document.createElement("a");
        link.href = page.href;
        link.textContent = page.label;
        if (current === page.href) {
            link.className = "is-active";
            link.setAttribute("aria-current", "page");
        }
        nav.appendChild(link);
    });

    document.body.prepend(nav);
})();
