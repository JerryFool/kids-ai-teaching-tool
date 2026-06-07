const slides = Array.from(document.querySelectorAll(".slide"));
const navItems = Array.from(document.querySelectorAll(".nav-item"));
const progressText = document.querySelector("#progressText");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const revealStory = document.querySelector("#revealStory");
const storyHint = document.querySelector("#storyHint");
const quizList = document.querySelector("#quizList");
const quizFeedback = document.querySelector("#quizFeedback");
const chips = Array.from(document.querySelectorAll(".chip"));
const promptOutput = document.querySelector("#promptOutput");
const resetPrompt = document.querySelector("#resetPrompt");

let currentSlide = 0;
let promptParts = [];

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, slides.length - 1));
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
  navItems.forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === currentSlide);
  });
  progressText.textContent = `${currentSlide + 1} / ${slides.length}`;
}

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    showSlide(Number(item.dataset.slide));
  });
});

prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") showSlide(currentSlide + 1);
  if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
});

revealStory.addEventListener("click", () => {
  storyHint.classList.toggle("visible");
  revealStory.textContent = storyHint.classList.contains("visible") ? "收起爸爸提示" : "显示爸爸提示";
});

quizList.addEventListener("click", (event) => {
  const choice = event.target.closest(".choice");
  if (!choice) return;
  document.querySelectorAll(".choice").forEach((item) => {
    item.classList.remove("correct", "wrong");
  });
  const isCorrect = choice.dataset.correct === "true";
  choice.classList.add(isCorrect ? "correct" : "wrong");
  quizFeedback.querySelector("span").textContent = isCorrect ? "选得好" : "再想一想";
  quizFeedback.querySelector("strong").textContent = isCorrect
    ? "这句话有地点、主角和细节，AI更容易画出来。"
    : "这句话还太模糊，AI不知道具体要画什么。";
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("selected");
    promptParts = chips.filter((item) => item.classList.contains("selected")).map((item) => item.textContent.trim());
    promptOutput.textContent = promptParts.length ? promptParts.join("，") + "。" : "先点选四块拼图";
  });
});

resetPrompt.addEventListener("click", () => {
  chips.forEach((chip) => chip.classList.remove("selected"));
  promptParts = [];
  promptOutput.textContent = "先点选四块拼图";
});

showSlide(0);
