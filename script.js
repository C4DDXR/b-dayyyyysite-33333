
// =========================
// PART 1 - LAUNCH BUTTON
// =========================

const launchBtn = document.getElementById("launchBtn");
const desktop = document.getElementById("desktop");
const helloWindow = document.getElementById("helloWindow")
const bgMusic = document.getElementById("bgMusic");

launchBtn.addEventListener("click", () => {

    bgMusic.play();

    document.getElementById("bgVideo").style.display = "block";

    desktop.style.display = "none";
    helloWindow.style.display = "flex";

});


// =========================
// PART 2 - YES / NO BUTTON
// =========================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const achievementWindow = document.getElementById("achievementWindow");

yesBtn.addEventListener("click", () => {
    helloWindow.style.display = "none";
    achievementWindow.style.display = "flex";
});


// NO BUTTON RUN AWAY
noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 300;
    const y = Math.random() * 300;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

});
  
// =========================
// PART 3 - ACHIEVEMENT TO QUESTION
// =========================

const questionWindow = document.getElementById("questionWindow");

const achievementBtn = document.querySelector("#achievementWindow button");

if (achievementBtn) {
    achievementBtn.addEventListener("click", () => {
        achievementWindow.style.display = "none";
        questionWindow.style.display = "flex";
    });
}
const answerButtons = document.querySelectorAll(".answerBtn");
const inventoryWindow = document.getElementById("inventoryWindow");

answerButtons.forEach(button => {

    button.addEventListener("click", () => {


        inventoryWindow.style.display = "block";
        inventoryWindow.style.zIndex = "9999";

    });

});

// =========================
// PART 5 - INVENTORY GIFTS
// =========================

const flowersBtn = document.getElementById("flowersBtn");
const hugsBtn = document.getElementById("hugsBtn");
const letterBtn = document.getElementById("letterBtn");

const flowersWindow = document.getElementById("flowersWindow");
const hugWindow = document.getElementById("hugWindow");
const letterWindow = document.getElementById("letterWindow");

flowersBtn.addEventListener("click", () => {

    inventoryWindow.style.display = "none";
    flowersWindow.style.display = "flex";

});


hugsBtn.addEventListener("click", () => {

    inventoryWindow.style.display = "none";
    hugWindow.style.display = "flex";

});


letterBtn.addEventListener("click", () => {

    inventoryWindow.style.display = "none";
    letterWindow.style.display = "flex";

});

// =========================
// PART 6 - BACK BUTTONS
// =========================

const backBtns = document.querySelectorAll(".backBtn");

backBtns.forEach(button => {

    button.addEventListener("click", () => {

        flowersWindow.style.display = "none";
        hugWindow.style.display = "none";
        letterWindow.style.display = "none";

        inventoryWindow.style.display = "flex";

    });

});
