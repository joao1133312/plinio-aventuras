const scenes = document.querySelectorAll(".scene");
const buttons = document.querySelectorAll("button[data-next]");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const next = btn.dataset.next;

        document.querySelector(".scene.active").classList.remove("active");
        document.getElementById("scene-" + next).classList.add("active");
    });
});

