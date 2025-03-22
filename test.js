document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and add to clicked one
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // Hide all contents and show the one corresponding to clicked tab
            contents.forEach(content => content.classList.remove("active"));
            document.getElementById(tab.dataset.target).classList.add("active");
        });
    });
});
