const lessonCatalog = [
  { id: 1, title: "未来什么本领最厉害", status: "done", note: "已完成线下课，待补网页版" },
  { id: 2, title: "AI小帮手大比拼", status: "done", note: "已完成线下课，待补网页版" },
  { id: 3, title: "数字小守门员", status: "done", note: "已完成线下课，待补网页版" },
  { id: 4, title: "掌控指令：让AI听懂你的话", status: "done", note: "已完成线下课，待补网页版" },
  { id: 5, title: "AI创意画室：把脑袋里的画说清楚", status: "sample", note: "完整样板课" },
  { id: 6, title: "AI真假侦探：AI说的话都对吗", status: "sample", note: "完整样板课，待按PDF校准标题" },
  { id: 7, title: "AI故事工厂：和AI一起讲故事", status: "sample", note: "完整样板课，待按PDF校准标题" },
  ...Array.from({ length: 24 }, (_, index) => ({
    id: index + 8,
    title: `第${index + 8}课：待按PDF课题校准`,
    status: "pending",
    note: "目录入口已建立，等待原始课题与子题目"
  }))
];

const lessonDetails = {
  5: {
    title: "AI创意画室：把脑袋里的画说清楚",
    kicker: "30分钟家庭课 · 创意表达",
    illustration: "art",
    steps: [
      {
        label: "课程封面",
        title: "把想象说清楚，AI才画得更像",
        minutes: "2分钟",
        type: "cover",
        headline: "今天孩子要学会：先想象、再描述、最后修改。",
        body: "第4课已经学了清楚指令。这一课把指令用到画画里，让孩子知道 AI 不是读心术，自己的想象力才是起点。",
        bullets: ["会观察：我脑袋里有什么", "会描述：地点、主角、动作、细节", "会修改：不满意时说出改哪里"]
      },
      {
        label: "开场引入",
        title: "如果你只说“画一个”，别人听得懂吗",
        minutes: "3分钟",
        type: "talk",
        body: "爸爸可以问：如果我让你画一个东西，但不说画什么，你会不会很困惑？AI也一样。它很会帮忙，但不会自动知道你脑袋里的画面。",
        quote: "今天我们不是比赛谁会点按钮，而是练习谁能把脑袋里的画说清楚。"
      },
      {
        label: "小故事",
        title: "小安的未来公园",
        minutes: "5分钟",
        type: "story",
        body: "小安第一次对AI说：帮我画一个公园。AI画出普通公园，小安不满意。第二次，小安说：画一个未来公园，有机器人秋千、会发光的树、两个孩子在玩，颜色明亮。AI终于更接近他的想象。",
        question: "问孩子：第二次为什么更像小安脑袋里的画？"
      },
      {
        label: "核心知识",
        title: "画面描述四件套",
        minutes: "8分钟",
        type: "rules",
        rules: ["地点：画面发生在哪里", "主角：里面有谁或什么", "动作：他们正在做什么", "细节：颜色、心情、风格、特别物品"]
      },
      {
        label: "互动游戏",
        title: "哪一句更容易画出来",
        minutes: "6分钟",
        type: "quiz",
        prompt: "请孩子选择更清楚的描述。",
        choices: [
          { text: "帮我画一个好玩的。", correct: false, feedback: "太模糊了，AI不知道好玩在哪里。" },
          { text: "帮我画一个海底城市，有透明房子、发光小鱼和潜水机器人。", correct: true, feedback: "很好，有地点、主角和细节。" },
          { text: "帮我画漂亮一点。", correct: false, feedback: "漂亮是感觉，还需要说清楚画面里有什么。" }
        ]
      },
      {
        label: "小任务",
        title: "两个孩子各设计一幅AI画",
        minutes: "5分钟",
        type: "builder",
        task: "孩子A设计“未来学校”，孩子B设计“机器人朋友”。爸爸只追问，不替孩子决定。",
        chips: ["请你当儿童插画师", "画一个未来学校", "给7岁小朋友看", "颜色明亮，不要太复杂"]
      },
      {
        label: "总结",
        title: "想象力先从自己脑袋里出来",
        minutes: "3分钟",
        type: "summary",
        chant: "先想象，再描述，不满意就修改。",
        recap: ["你今天脑袋里最清楚的一幅画是什么？", "你给AI说了哪些细节？", "如果结果不满意，你会怎么改？"]
      }
    ]
  },
  6: {
    title: "AI真假侦探：AI说的话都对吗",
    kicker: "30分钟家庭课 · 判断力",
    illustration: "detective",
    steps: [
      {
        label: "课程封面",
        title: "会用AI，也要会怀疑",
        minutes: "2分钟",
        type: "cover",
        headline: "今天孩子要学会：AI会帮忙，但AI也可能说错。",
        body: "这一课训练孩子的判断力。不是让孩子害怕AI，而是让孩子知道：看到答案之后，要会停一下、想一下、查一下。",
        bullets: ["AI不是万能老师", "答案要看是否合理", "重要问题要问大人或查资料"]
      },
      {
        label: "开场引入",
        title: "聪明人不是全都相信",
        minutes: "3分钟",
        type: "talk",
        body: "爸爸可以问：如果一个同学很聪明，他说的话就一定都对吗？如果一个机器人回答很快，它说的话就一定是真的吗？",
        quote: "真正会用AI的小朋友，不是只会问，还会检查。"
      },
      {
        label: "小故事",
        title: "小乐和会说错的百科机器人",
        minutes: "5分钟",
        type: "story",
        body: "小乐问AI：企鹅会不会飞？AI答对了。小乐又问：所有鸟都会飞吗？AI说都会。小乐觉得奇怪，因为他知道企鹅和鸵鸟都不会飞。爸爸告诉他：AI有时会把话说得很像真的，所以我们要当小侦探。",
        question: "问孩子：小乐为什么没有马上相信AI？"
      },
      {
        label: "核心知识",
        title: "真假侦探三步法",
        minutes: "8分钟",
        type: "rules",
        rules: ["停一下：不要马上照做", "想一下：这句话和我知道的事情冲突吗", "查一下：问大人、看书、看可靠资料"]
      },
      {
        label: "互动游戏",
        title: "这句话要不要再查一查",
        minutes: "6分钟",
        type: "quiz",
        prompt: "请孩子判断哪句话最需要再查。",
        choices: [
          { text: "太阳从东方升起。", correct: false, feedback: "这是常识，通常不用特别查。" },
          { text: "明天学校一定停课。", correct: true, feedback: "这种会影响行动的信息，一定要问老师或家长确认。" },
          { text: "苹果是一种水果。", correct: false, feedback: "这是常见事实，可以先接受。" }
        ]
      },
      {
        label: "互动翻卡",
        title: "哪些问题不能只问AI",
        minutes: "5分钟",
        type: "flip",
        cards: ["身体不舒服怎么办", "家里地址能不能告诉别人", "作业答案是什么", "今天穿什么颜色"]
      },
      {
        label: "总结",
        title: "AI答案要过脑子",
        minutes: "3分钟",
        type: "summary",
        chant: "先停一下，再想一下，重要事情查一下。",
        recap: ["AI可能在哪些地方说错？", "什么问题一定要问爸爸妈妈？", "今天你像侦探一样发现了什么？"]
      }
    ]
  },
  7: {
    title: "AI故事工厂：和AI一起讲故事",
    kicker: "30分钟家庭课 · 表达与创造",
    illustration: "story",
    steps: [
      {
        label: "课程封面",
        title: "AI可以帮忙，主意要从孩子开始",
        minutes: "2分钟",
        type: "cover",
        headline: "今天孩子要学会：用角色、地点、麻烦、结尾做一个故事。",
        body: "这一课让孩子体验 AI 作为故事伙伴，而不是故事主人。孩子先给创意，AI再帮忙扩展。",
        bullets: ["角色：故事里有谁", "地点：发生在哪里", "麻烦：遇到什么问题", "结尾：希望怎样结束"]
      },
      {
        label: "开场引入",
        title: "一个好故事要有一点麻烦",
        minutes: "3分钟",
        type: "talk",
        body: "爸爸可以问：如果故事里什么都没发生，会不会无聊？一个好故事通常有主角、有地方、有麻烦，还有解决办法。",
        quote: "AI可以帮我们把故事讲长，但第一个火花要由我们点亮。"
      },
      {
        label: "小故事",
        title: "小米和迷路的月亮车",
        minutes: "5分钟",
        type: "story",
        body: "小米想讲故事，只说：讲一个故事。AI讲得很普通。后来小米说：主角是一辆胆小的月亮车，它在月球迷路了，遇到一只会唱歌的小机器人，最后一起找到回家的路。故事一下子有趣起来。",
        question: "问孩子：小米第二次给了哪几个重要线索？"
      },
      {
        label: "核心知识",
        title: "故事四块积木",
        minutes: "8分钟",
        type: "rules",
        rules: ["主角：谁在故事里", "地点：故事发生在哪里", "麻烦：主角遇到什么问题", "结尾：最后变好、变有趣或学会什么"]
      },
      {
        label: "互动游戏",
        title: "哪个故事更完整",
        minutes: "6分钟",
        type: "quiz",
        prompt: "请孩子选择更像完整故事开头的一句。",
        choices: [
          { text: "有一只小猫。", correct: false, feedback: "只有主角，还缺地点和麻烦。" },
          { text: "一只小猫在图书馆迷路了，它要找到会发光的出口。", correct: true, feedback: "很好，有主角、地点和麻烦。" },
          { text: "讲一个很有趣的故事。", correct: false, feedback: "这只是要求，还没有故事材料。" }
        ]
      },
      {
        label: "故事拼图",
        title: "拼出你的故事指令",
        minutes: "5分钟",
        type: "builder",
        task: "让两个孩子各选一个主角，再补地点、麻烦和结尾。",
        chips: ["主角是一只小恐龙", "地点在未来图书馆", "麻烦是找不到回家的门", "结尾要开心又有点好笑"]
      },
      {
        label: "总结",
        title: "你是故事导演，AI是故事助手",
        minutes: "3分钟",
        type: "summary",
        chant: "角色、地点、麻烦、结尾，故事马上活起来。",
        recap: ["你今天的故事主角是谁？", "它遇到了什么麻烦？", "如果让AI帮你改，你想改哪里？"]
      }
    ]
  }
};

const homeView = document.querySelector("#homeView");
const lessonView = document.querySelector("#lessonView");
const lessonGrid = document.querySelector("#lessonGrid");
const stepNav = document.querySelector("#stepNav");
const lessonNumber = document.querySelector("#lessonNumber");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonKicker = document.querySelector("#lessonKicker");
const stepTitle = document.querySelector("#stepTitle");
const stepCounter = document.querySelector("#stepCounter");
const stepPanel = document.querySelector("#stepPanel");
const backHome = document.querySelector("#backHome");
const prevStep = document.querySelector("#prevStep");
const nextStep = document.querySelector("#nextStep");
const scrollCatalog = document.querySelector("#scrollCatalog");

let currentLessonId = 5;
let currentStepIndex = 0;

function renderCatalog() {
  lessonGrid.innerHTML = lessonCatalog.map((lesson) => {
    const available = Boolean(lessonDetails[lesson.id]);
    const statusText = lesson.status === "sample" ? "完整样板" : lesson.status === "done" ? "已讲待补" : "待校准";
    return `
      <button class="lesson-card ${available ? "available" : "disabled"}" ${available ? `data-open-lesson="${lesson.id}"` : "disabled"}>
        <div class="card-top">
          <span class="lesson-badge">${lesson.id}</span>
          <span class="status-chip ${available ? "" : "pending"}">${statusText}</span>
        </div>
        <h3>${lesson.title}</h3>
        <p>${lesson.note}</p>
        <span class="mini-action">${available ? "进入课程" : "等待补齐"}</span>
      </button>
    `;
  }).join("");
}

function illustration(type) {
  const palette = {
    art: ["#4b9f98", "#e96f51", "#f2c84b"],
    detective: ["#7fa7e8", "#3f8f88", "#f2c84b"],
    story: ["#9a8be3", "#e96f51", "#a8d3a0"]
  }[type] || ["#4b9f98", "#e96f51", "#f2c84b"];

  return `
    <svg viewBox="0 0 520 360" role="img" aria-label="课程主题插画">
      <rect x="18" y="20" width="484" height="318" rx="28" fill="#fff8e8" />
      <circle cx="92" cy="82" r="28" fill="${palette[2]}" />
      <path d="M92 38 v-24 M92 150 v-28 M48 82 H20 M164 82h-34" stroke="${palette[2]}" stroke-width="8" stroke-linecap="round" />
      <rect x="210" y="62" width="180" height="126" rx="18" fill="#ffffff" stroke="#21313b" stroke-width="7" />
      <path d="M246 146 L286 100 L328 146 Z" fill="${palette[0]}" />
      <circle cx="344" cy="104" r="22" fill="${palette[1]}" />
      <path d="M66 270 C126 208, 190 290, 260 222 S386 210, 456 256" fill="none" stroke="${palette[0]}" stroke-width="12" stroke-linecap="round" />
      <circle cx="136" cy="270" r="34" fill="#f4b7a5" stroke="#21313b" stroke-width="7" />
      <path d="M112 268 Q136 294 166 268" fill="none" stroke="#21313b" stroke-width="6" stroke-linecap="round" />
      <circle cx="384" cy="270" r="34" fill="#a9c6ff" stroke="#21313b" stroke-width="7" />
      <path d="M360 268 Q384 294 414 268" fill="none" stroke="#21313b" stroke-width="6" stroke-linecap="round" />
      <path d="M426 86 h44 M448 64 v44" stroke="${palette[1]}" stroke-width="9" stroke-linecap="round" />
    </svg>
  `;
}

function openLesson(lessonId) {
  currentLessonId = lessonId;
  currentStepIndex = 0;
  homeView.hidden = true;
  lessonView.hidden = false;
  renderLesson();
}

function closeLesson() {
  lessonView.hidden = true;
  homeView.hidden = false;
}

function renderLesson() {
  const lesson = lessonDetails[currentLessonId];
  const step = lesson.steps[currentStepIndex];
  lessonNumber.textContent = `第${currentLessonId}课`;
  lessonTitle.textContent = lesson.title;
  lessonKicker.textContent = lesson.kicker;
  stepTitle.textContent = step.title;
  stepCounter.textContent = `${currentStepIndex + 1} / ${lesson.steps.length}`;

  stepNav.innerHTML = lesson.steps.map((item, index) => `
    <button class="step-button ${index === currentStepIndex ? "active" : ""}" data-step="${index}">
      <span>${index + 1}</span>${item.label}
    </button>
  `).join("");

  stepPanel.innerHTML = renderStep(step, lesson);
  bindStepInteractions();
}

function renderStep(step, lesson) {
  if (step.type === "cover") {
    return `
      <div class="panel-grid">
        <div class="content-card">
          <span class="time-tag">${step.minutes}</span>
          <div class="big-line">${step.headline}</div>
          <p>${step.body}</p>
          <ul class="rule-list">${step.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="visual-card">${illustration(lesson.illustration)}</div>
      </div>
    `;
  }

  if (step.type === "talk") {
    return `
      <div class="panel-grid">
        <div class="content-card">
          <span class="time-tag">${step.minutes}</span>
          <p class="big-line">${step.body}</p>
          <div class="quote-box">${step.quote}</div>
        </div>
        <div class="visual-card">${illustration(lesson.illustration)}</div>
      </div>
    `;
  }

  if (step.type === "story") {
    return `
      <div class="story-grid">
        <div class="story-visual">${illustration(lesson.illustration)}</div>
        <div class="content-card">
          <span class="time-tag">${step.minutes}</span>
          <p>${step.body}</p>
          <div class="callout"><strong>问孩子：</strong><br>${step.question}</div>
        </div>
      </div>
    `;
  }

  if (step.type === "rules") {
    return `
      <div class="rules-grid">
        <div class="content-card">
          <span class="time-tag">${step.minutes}</span>
          <p class="big-line">记住这几个小规则就够了。</p>
        </div>
        <div class="content-card">
          <ul class="rule-list">${step.rules.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
    `;
  }

  if (step.type === "quiz") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${step.minutes}</span>
          <p>${step.prompt}</p>
          <div class="choice-list" data-quiz>
            ${step.choices.map((choice) => `<button class="choice" data-correct="${choice.correct}" data-feedback="${choice.feedback}">${choice.text}</button>`).join("")}
          </div>
        </div>
        <div class="content-card feedback-card" data-feedback-card>
          <span>等待选择</span>
          <strong>点一个答案，看它是不是更清楚。</strong>
        </div>
      </div>
    `;
  }

  if (step.type === "builder") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${step.minutes}</span>
          <p>${step.task}</p>
          <div class="chip-grid" data-builder>
            ${step.chips.map((chip) => `<button class="chip">${chip}</button>`).join("")}
          </div>
        </div>
        <div class="content-card">
          <h3>拼出的指令</h3>
          <div class="prompt-output" data-prompt-output>点选拼图，组成一句完整指令。</div>
          <button class="secondary-action" data-reset-builder>重新拼</button>
        </div>
      </div>
    `;
  }

  if (step.type === "flip") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${step.minutes}</span>
          <p>点开卡片，说说为什么这些问题不能只问AI。</p>
          <div class="flip-grid">
            ${step.cards.map((card) => `<button class="flip-card" data-original="${card}" data-answer="重要问题要问爸爸妈妈或可靠来源">${card}</button>`).join("")}
          </div>
        </div>
        <div class="visual-card">${illustration(lesson.illustration)}</div>
      </div>
    `;
  }

  return `
    <div class="summary-grid">
      <div class="teacher-card">
        <span class="time-tag">${step.minutes}</span>
        <p class="big-line">${step.chant}</p>
      </div>
      <div class="teacher-card">
        <h3>复盘问题</h3>
        <div class="teacher-grid">
          ${step.recap.map((item, index) => `<div><strong>${index + 1}</strong><span>${item}</span></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function bindStepInteractions() {
  document.querySelectorAll("[data-quiz] .choice").forEach((button) => {
    button.addEventListener("click", () => {
      const list = button.closest("[data-quiz]");
      const card = document.querySelector("[data-feedback-card]");
      list.querySelectorAll(".choice").forEach((item) => item.classList.remove("correct", "wrong"));
      const correct = button.dataset.correct === "true";
      button.classList.add(correct ? "correct" : "wrong");
      card.querySelector("span").textContent = correct ? "选得好" : "再想一想";
      card.querySelector("strong").textContent = button.dataset.feedback;
    });
  });

  document.querySelectorAll("[data-builder] .chip").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
      const chips = Array.from(document.querySelectorAll("[data-builder] .chip.selected")).map((item) => item.textContent.trim());
      document.querySelector("[data-prompt-output]").textContent = chips.length ? `${chips.join("，")}。` : "点选拼图，组成一句完整指令。";
    });
  });

  document.querySelectorAll("[data-reset-builder]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-builder] .chip").forEach((item) => item.classList.remove("selected"));
      document.querySelector("[data-prompt-output]").textContent = "点选拼图，组成一句完整指令。";
    });
  });

  document.querySelectorAll(".flip-card").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("revealed");
      button.textContent = button.classList.contains("revealed") ? button.dataset.answer : button.dataset.original;
    });
  });
}

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-open-lesson]");
  if (opener) openLesson(Number(opener.dataset.openLesson));

  const stepButton = event.target.closest("[data-step]");
  if (stepButton) {
    currentStepIndex = Number(stepButton.dataset.step);
    renderLesson();
  }
});

backHome.addEventListener("click", closeLesson);
prevStep.addEventListener("click", () => {
  const lesson = lessonDetails[currentLessonId];
  currentStepIndex = Math.max(0, currentStepIndex - 1);
  renderLesson(lesson);
});
nextStep.addEventListener("click", () => {
  const lesson = lessonDetails[currentLessonId];
  currentStepIndex = Math.min(lesson.steps.length - 1, currentStepIndex + 1);
  renderLesson(lesson);
});
scrollCatalog.addEventListener("click", () => document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" }));

document.addEventListener("keydown", (event) => {
  if (lessonView.hidden) return;
  if (event.key === "ArrowRight") nextStep.click();
  if (event.key === "ArrowLeft") prevStep.click();
});

renderCatalog();
