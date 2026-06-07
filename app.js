const ui = {
  zh: {
    brandWork: "思美奇主理人作品",
    createdBy: "CyberMagic by Jerry Fu",
    heroKicker: "AI未来家长课堂 · 第5课高质量样板",
    heroTitle: "把脑袋里的画说清楚",
    heroText: "这不是一节“教孩子按按钮”的课，而是一节训练孩子想象、表达、修改和判断的家庭互动课。家长可以打开网页，边讲义提示边操作画面，带孩子完成一节约30分钟的AI创意表达课。",
    authorTitle: "主理人的一点愿景",
    authorBody: "AI来到孩子身边以后，家长最需要做的不是焦虑，也不是把孩子直接交给工具。我们要陪孩子学会把想法说清楚，学会判断结果好不好，学会在新技术面前保持好奇、审美和独立思考。思美奇做这套课，希望让更多家庭用轻松、温暖、可操作的方式，和孩子一起进入AI时代。",
    startLesson: "开始第5课",
    catalogButton: "查看课程结构",
    samples: "1节深度样板",
    samplesNote: "先把第5课做到可讲、可玩、可分享",
    entries: "后续31课",
    entriesNote: "确认样板后再批量扩展完整课程",
    minutes: "约30分钟",
    minutesNote: "按家庭讲课节奏拆成8个环节",
    followKicker: "项目定位",
    followTitle: "给朋友免费分享的家庭AI课",
    followBody: "第一阶段目标不是卖课，而是先做出一个让家长愿意打开、孩子愿意参与、朋友愿意转发的样板。",
    followQr: "关注思美奇主理人",
    qrAccount: "Jerry Fu 视频号",
    catalogKicker: "第5课结构",
    catalogTitle: "从模糊想法到清楚指令",
    catalogBody: "孩子不只是点击答案，而是在网页里拼描述、改错误、生成自己的AI画面设计卡。",
    enter: "进入课程",
    waiting: "后续扩展",
    sample: "当前样板",
    done: "已完成线下",
    pending: "后续扩展",
    back: "首页",
    musicOff: "开启音乐",
    musicOn: "音乐开",
    sfxOn: "声效开",
    sfxOff: "声效关",
    collapseNotes: "收起讲义",
    expandNotes: "展开讲义",
    notesTitle: "课前家长讲义",
    parentTips: "家长 Tips",
    childView: "给孩子看的画面",
    qrText: "二维码",
    createdFooter: "Created by Jerry Fu, Founder / Curator of CyberMagic",
    musicCredit: "Music: Calm Piano Background Music by Orange Free Sounds, CC BY 4.0"
  },
  en: {
    brandWork: "A CyberMagic Curator Project",
    createdBy: "CyberMagic by Jerry Fu",
    heroKicker: "AI Future Parent Classroom · Lesson 5 sample",
    heroTitle: "Describe The Picture In Your Mind",
    heroText: "This is not a button-clicking AI lesson. It trains imagination, expression, revision, and judgment. Parents can teach from the notes while children interact with the visual pages.",
    authorTitle: "A Note From The Curator",
    authorBody: "As AI enters children's lives, parents do not need to panic, nor hand children directly to tools. We can help them express ideas clearly, judge results, and keep curiosity, taste, and independent thinking. CyberMagic hopes to make AI learning warmer, lighter, and easier for families to start.",
    startLesson: "Start Lesson 5",
    catalogButton: "View Lesson Flow",
    samples: "1 Deep Sample",
    samplesNote: "Lesson 5 is built for teaching, playing, and sharing",
    entries: "31 Lessons Later",
    entriesNote: "Scale after the sample is confirmed",
    minutes: "About 30 Min",
    minutesNote: "Eight parent-led teaching moments",
    followKicker: "Project Position",
    followTitle: "A free family AI lesson to share",
    followBody: "Phase one is not about selling a course. It is about making one sample that parents can open, children can enjoy, and friends may want to forward.",
    followQr: "Follow CyberMagic Curator",
    qrAccount: "Jerry Fu Channel",
    catalogKicker: "Lesson 5 Flow",
    catalogTitle: "From vague idea to clear prompt",
    catalogBody: "Children build descriptions, fix wrong AI results, and create their own AI picture design card inside the webpage.",
    enter: "Open Lesson",
    waiting: "Later",
    sample: "Sample Ready",
    done: "Offline",
    pending: "Later",
    back: "Home",
    musicOff: "Music",
    musicOn: "Music On",
    sfxOn: "SFX On",
    sfxOff: "SFX Off",
    collapseNotes: "Hide Notes",
    expandNotes: "Show Notes",
    notesTitle: "Parent Teaching Notes",
    parentTips: "Parent Tips",
    childView: "Child-facing visual",
    qrText: "QR",
    createdFooter: "Created by Jerry Fu, Founder / Curator of CyberMagic",
    musicCredit: "Music: Calm Piano Background Music by Orange Free Sounds, CC BY 4.0"
  }
};

const lessonCatalog = [
  { id: 5, zh: "第5课：AI创意画室，把脑袋里的画说清楚", en: "Lesson 5: AI Art Studio, Describe Your Picture Clearly", status: "sample" },
  { id: 31, zh: "后续：确认样板后扩展31课完整目录", en: "Next: expand to the full 31-lesson catalog after this sample", status: "pending" }
];

const lessonDetails = {
  5: {
    illustration: "art",
    zh: {
      title: "AI创意画室：把脑袋里的画说清楚",
      kicker: "30分钟家庭课 · 想象力与表达力",
      prep: "课前家长准备：这节课的重点不是让孩子学会某个AI软件，而是训练孩子把脑袋里的画面说清楚。家长可以准备纸笔，也可以打开任意AI绘图工具作为演示。讲课时请记住三个原则：先让孩子说、再帮孩子拆、最后让孩子自己修改。",
      tips: [
        "孩子说得模糊时，不要直接替他说完整答案，先追问：在哪里？谁在？正在做什么？还有什么特别细节？",
        "每一页的画面主要给孩子看，讲义主要给家长看。家长可以收起讲义，让孩子专注画面和操作。",
        "如果孩子的想法很跳跃，先接住创意，再帮他排顺序。表达力不是一次说完美，而是一次比一次更清楚。"
      ],
      steps: [
        {
          type: "cover",
          label: "开场",
          title: "AI不是读心术",
          minutes: "2分钟",
          body: "今天我们练一个很厉害的能力：把脑袋里的画说清楚。",
          quote: "AI可以帮我们画，但它不会自动知道你心里想的样子。",
          bullets: ["先想象：画面里有什么", "再描述：地点、主角、动作、细节", "会修改：AI画错了也能说清楚怎么改"],
          guide: "开场不要急着讲技术。你可以先问孩子：如果我只说“帮我画一个好玩的”，你知道我要什么吗？让孩子自己发现，模糊的表达会让别人和AI都听不懂。"
        },
        {
          type: "story",
          label: "小故事",
          title: "小安的未来学校",
          minutes: "5分钟",
          body: "小安想设计一所未来学校。他第一次对AI说：帮我画一个好玩的。AI画出一张普通游乐场，小安不满意。爸爸问他：学校在哪里？谁在上课？老师是什么样子？画面是什么颜色？小安重新说：请画一个蓝白色的未来学校，里面有机器人老师，两个小朋友正在开心上课，画面明亮、有未来感。第二次，画面终于更接近小安心里的样子。",
          quote: "问孩子：第二次为什么更清楚？它比“好玩的”多了哪些信息？",
          guide: "故事讲完后，让孩子用自己的话复述一次。重点是让他发现：清楚描述不是字多，而是关键信息完整。"
        },
        {
          type: "rules",
          label: "方法",
          title: "画面描述四件套",
          minutes: "5分钟",
          body: "任何AI画面指令，都可以先补齐四件套。",
          bullets: ["地点：画面发生在哪里", "主角：谁在画面里", "动作：他们正在做什么", "细节：颜色、风格、表情、特别物品"],
          guide: "每讲一个词，都让孩子用自己的例子说一句。比如地点可以是未来学校、海底城市、儿童房、月球图书馆。"
        },
        {
          type: "puzzle",
          label: "拼图游戏",
          title: "把模糊想法拼清楚",
          minutes: "6分钟",
          prompt: "请孩子从四组词里各点一个，拼成一条更清楚的AI画图指令。",
          groups: [
            { name: "地点", options: ["未来学校", "海底城市", "儿童房", "月球图书馆"] },
            { name: "主角", options: ["机器人老师", "潜水机器人", "两个小朋友", "会发光的小书包"] },
            { name: "动作", options: ["正在开心上课", "寻找发光小鱼", "整理玩具", "一起设计机器人朋友"] },
            { name: "细节", options: ["蓝白色、发光、明亮", "透明房子、像动画片", "温暖整洁、玩具很多", "轻赛博风、不要太复杂"] }
          ],
          guide: "这页让孩子实际操作。选完后读出完整句子，再问：如果要让画更像你心里想的，还能加哪一个细节？"
        },
        {
          type: "upgrade",
          label: "升级练习",
          title: "把一句模糊话升级",
          minutes: "4分钟",
          prompt: "原句：帮我画一个好玩的。",
          choices: ["未来学校", "机器人老师", "两个小朋友正在开心上课", "蓝白色、发光、明亮、有未来感"],
          guide: "家长先让孩子判断原句为什么不够清楚，再通过点击补充信息。不要只追求一个标准答案，关键是孩子能说出自己补了什么。"
        },
        {
          type: "repair",
          label: "修正AI",
          title: "AI画错了怎么办",
          minutes: "4分钟",
          problem: "你想要蓝白机器人，但AI画成了黑色机器人。",
          target: "请把机器人改成蓝白色，保留儿童房和整理玩具的场景。",
          options: ["改颜色：蓝白色", "保留地点：儿童房", "保留动作：整理玩具", "不要改变：开心、明亮、卡通感"],
          guide: "这页训练“修改指令”。告诉孩子：不满意不是结束，而是第二轮表达的开始。修改时要说清楚保留什么、改变什么。"
        },
        {
          type: "design",
          label: "设计卡",
          title: "我的AI画面设计卡",
          minutes: "6分钟",
          fields: ["地点", "主角", "动作", "细节"],
          placeholder: "比如：未来学校 / 机器人老师 / 正在上课 / 蓝白色、发光、开心",
          guide: "这是孩子真正输出的一页。让孩子自己填，你只负责追问和记录。填完后请孩子完整读一遍，这就是他的AI画图指令。"
        },
        {
          type: "duo",
          label: "双人任务",
          title: "两个孩子各做一张创意卡",
          minutes: "4分钟",
          kids: [
            { name: "孩子A", mission: "设计未来学校", starter: ["地点：未来学校", "主角：机器人老师", "动作：正在上课", "细节：蓝白色、发光、开心"] },
            { name: "孩子B", mission: "设计机器人朋友", starter: ["地点：儿童房", "主角：蓝白机器人朋友", "动作：整理玩具", "细节：温暖、明亮、像动画片"] }
          ],
          guide: "如果两个孩子一起上课，这页可以分工。让他们互相听对方的描述，并各提一个“还能更清楚吗”的问题。"
        },
        {
          type: "summary",
          label: "复盘",
          title: "今天到底学会了什么",
          minutes: "4分钟",
          chant: "先想象，再描述；AI画错了，再修改。",
          recap: [
            "今天一开始，我们发现“帮我画一个好玩的”太模糊，AI不知道好玩在哪里。",
            "我们学习了画面描述四件套：地点、主角、动作、细节。",
            "我们用拼图游戏把词语组合成完整指令，发现清楚表达会让画面更接近想象。",
            "我们练习了AI画错后的修改方法：说清楚要改变什么，也说清楚要保留什么。",
            "最后孩子完成自己的AI画面设计卡，真正把脑袋里的画变成了一段可以交给AI的清楚描述。"
          ],
          guide: "总结时请孩子说三句话：我今天设计的画面是……我用了哪四件套……如果AI画错了我会……这比家长单方面总结更有效。"
        }
      ]
    },
    en: {
      title: "AI Art Studio: Describe The Picture In Your Mind",
      kicker: "30-minute family lesson · Imagination and expression",
      prep: "Parent prep: this lesson is not about a specific AI app. It trains children to describe the picture in their mind clearly. Prepare paper and pen, and optionally an AI image tool. Let the child speak first, help them break ideas into parts, then let them revise.",
      tips: [
        "When the child is vague, do not complete the answer for them. Ask: where, who, doing what, and what details?",
        "The visuals are mainly for children. The notes are mainly for parents. Hide notes when the child needs focus.",
        "If the idea jumps around, accept the creativity first, then help the child put it in order."
      ],
      steps: [
        { type: "cover", label: "Start", title: "AI cannot read minds", minutes: "2 min", body: "Today we practice one powerful skill: describing the picture in our mind clearly.", quote: "AI can help us draw, but it does not automatically know what we imagine.", bullets: ["Imagine: what is in the picture", "Describe: place, character, action, details", "Revise: say what to change if AI gets it wrong"], guide: "Begin with a simple question: if I only say 'draw something fun', do you know what I want?" },
        { type: "story", label: "Story", title: "An's Future School", minutes: "5 min", body: "An wants to design a future school. First he says: draw something fun. AI creates a playground, but it is not what An wanted. Dad asks: where is the school, who is in class, what is the teacher like, and what colors do you want? An says: please draw a bright blue-white future school with a robot teacher and two children happily learning. Now the image is much closer.", quote: "Ask: why is the second prompt clearer? What information did it add?", guide: "After the story, ask the child to retell it. Clear description is not about more words; it is about key information." },
        { type: "rules", label: "Method", title: "Four picture parts", minutes: "5 min", body: "Every AI image prompt can start with four parts.", bullets: ["Place: where is it?", "Character: who or what is inside?", "Action: what are they doing?", "Details: colors, style, mood, special objects"], guide: "After each part, ask the child for one example." },
        { type: "puzzle", label: "Puzzle", title: "Build a clear prompt", minutes: "6 min", prompt: "Choose one item from each group to build a clearer AI image prompt.", groups: [{ name: "Place", options: ["future school", "underwater city", "children's room", "moon library"] }, { name: "Character", options: ["robot teacher", "diving robot", "two children", "glowing schoolbag"] }, { name: "Action", options: ["happily learning", "looking for glowing fish", "cleaning up toys", "designing a robot friend"] }, { name: "Details", options: ["blue-white, bright, glowing", "glass houses, cartoon style", "warm and tidy, many toys", "light cyber style, not too complex"] }], guide: "Let the child operate. Then read the full prompt and ask what extra detail would make it closer to their idea." },
        { type: "upgrade", label: "Upgrade", title: "Upgrade a vague sentence", minutes: "4 min", prompt: "Original: draw something fun.", choices: ["future school", "robot teacher", "two children happily learning", "blue-white, glowing, bright, futuristic"], guide: "Ask why the original sentence is unclear. The key is that the child can explain what each added part does." },
        { type: "repair", label: "Fix AI", title: "What if AI gets it wrong?", minutes: "4 min", problem: "You wanted a blue-white robot, but AI made a black robot.", target: "Please change the robot to blue-white, and keep the children's room and toy-cleaning scene.", options: ["Change color: blue-white", "Keep place: children's room", "Keep action: cleaning toys", "Keep mood: happy, bright, cartoon"], guide: "This trains revision. Say what to change and what to keep." },
        { type: "design", label: "Design Card", title: "My AI Picture Design Card", minutes: "6 min", fields: ["Place", "Character", "Action", "Details"], placeholder: "Example: future school / robot teacher / teaching class / blue-white, glowing, happy", guide: "This is the child's output page. Let the child fill it. Then ask them to read the whole prompt aloud." },
        { type: "duo", label: "Two Kids", title: "Two children, two creative cards", minutes: "4 min", kids: [{ name: "Child A", mission: "Design a future school", starter: ["Place: future school", "Character: robot teacher", "Action: teaching class", "Details: blue-white, glowing, happy"] }, { name: "Child B", mission: "Design a robot friend", starter: ["Place: children's room", "Character: blue-white robot friend", "Action: cleaning up toys", "Details: warm, bright, cartoon style"] }], guide: "If two children join, let them ask each other one question: how can this be clearer?" },
        { type: "summary", label: "Review", title: "What did we learn today?", minutes: "4 min", chant: "Imagine first, describe clearly, revise when AI gets it wrong.", recap: ["We found that 'draw something fun' is too vague.", "We learned four picture parts: place, character, action, details.", "We built prompts by combining words.", "We practiced revision: say what to change and what to keep.", "The child completed an AI picture design card."], guide: "Ask the child to say three sentences: my picture is..., I used four parts..., if AI gets it wrong I will..." }
      ]
    }
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
const languageSelect = document.querySelector("#languageSelect");
const musicToggle = document.querySelector("#musicToggle");
const sfxToggle = document.querySelector("#sfxToggle");
const lessonMusicToggle = document.querySelector("#lessonMusicToggle");
const lessonSfxToggle = document.querySelector("#lessonSfxToggle");
const lectureToggle = document.querySelector("#lectureToggle");
const lecturePanel = document.querySelector("#lecturePanel");
const lectureTitle = document.querySelector("#lectureTitle");
const lectureBody = document.querySelector("#lectureBody");

let currentLessonId = 5;
let currentStepIndex = 0;
let languageMode = "zh";
let audioContext;
let musicTimer;
let musicAudio;
let musicEnabled = false;
let sfxEnabled = true;
let lectureCollapsed = false;

function tr(key) {
  return ui[languageMode][key];
}

function localLesson(id = currentLessonId) {
  return lessonDetails[id][languageMode];
}

function updateStaticLanguage() {
  document.documentElement.lang = languageMode === "zh" ? "zh-CN" : "en";
  document.querySelector(".brand-lockup strong").textContent = tr("brandWork");
  document.querySelector(".brand-lockup p").textContent = tr("createdBy");
  document.querySelector(".hero-copy .eyebrow").textContent = tr("heroKicker");
  document.querySelector(".hero-copy h1").textContent = tr("heroTitle");
  document.querySelector(".hero-text").textContent = tr("heroText");
  document.querySelector(".author-note strong").textContent = tr("authorTitle");
  document.querySelector(".author-note p").textContent = tr("authorBody");
  document.querySelector('[data-open-lesson="5"]').textContent = tr("startLesson");
  scrollCatalog.textContent = tr("catalogButton");
  const statusItems = document.querySelectorAll(".status-band div");
  statusItems[0].querySelector("strong").textContent = tr("samples");
  statusItems[0].querySelector("span").textContent = tr("samplesNote");
  statusItems[1].querySelector("strong").textContent = tr("entries");
  statusItems[1].querySelector("span").textContent = tr("entriesNote");
  statusItems[2].querySelector("strong").textContent = tr("minutes");
  statusItems[2].querySelector("span").textContent = tr("minutesNote");
  document.querySelector(".creator-card .eyebrow").textContent = tr("followKicker");
  document.querySelector(".creator-card h2").textContent = tr("followTitle");
  document.querySelector(".creator-card p").textContent = tr("followBody");
  document.querySelector(".qr-card strong").textContent = tr("followQr");
  document.querySelector(".qr-card p").textContent = tr("qrAccount");
  document.querySelector(".qr-placeholder b").textContent = tr("qrText");
  document.querySelector(".section-heading .eyebrow").textContent = tr("catalogKicker");
  document.querySelector(".section-heading h2").textContent = tr("catalogTitle");
  document.querySelector(".section-heading p").textContent = tr("catalogBody");
  document.querySelector(".site-footer p").textContent = tr("createdFooter");
  document.querySelector("#musicCredit").textContent = tr("musicCredit");
  backHome.querySelector("span").textContent = tr("back");
  lectureToggle.textContent = lectureCollapsed ? tr("expandNotes") : tr("collapseNotes");
  syncAudioButtons();
  renderCatalog();
  if (!lessonView.hidden) renderLesson();
}

function renderCatalog() {
  lessonGrid.innerHTML = lessonCatalog.map((lesson) => {
    const available = Boolean(lessonDetails[lesson.id]);
    const statusText = available ? tr("sample") : tr("pending");
    const note = available
      ? (languageMode === "zh" ? "当前可完整体验的第5课样板" : "The current complete sample lesson")
      : (languageMode === "zh" ? "先不急着做满，等样板确认后再扩展" : "Will expand after this sample is confirmed");
    return `
      <button class="lesson-card ${available ? "available" : "disabled"}" ${available ? `data-open-lesson="${lesson.id}"` : "disabled"}>
        <div class="card-top">
          <span class="lesson-badge">${lesson.id}</span>
          <span class="status-chip ${available ? "" : "pending"}">${statusText}</span>
        </div>
        <h3>${lesson[languageMode]}</h3>
        <p>${note}</p>
        <span class="mini-action">${available ? tr("enter") : tr("waiting")}</span>
      </button>
    `;
  }).join("");
}

function illustration(scene = "cover") {
  const prop = {
    cover: `<rect x="168" y="70" width="214" height="150" rx="22" fill="#fff" stroke="#21313b" stroke-width="7"/><path d="M210 172l54-64 48 64z" fill="#119fe3"/><circle cx="336" cy="112" r="23" fill="#ffd447"/><path d="M226 246h130" stroke="#ee334e" stroke-width="10" stroke-linecap="round"/>`,
    story: `<rect x="142" y="78" width="248" height="162" rx="24" fill="#fff" stroke="#21313b" stroke-width="7"/><rect x="176" y="124" width="54" height="80" rx="18" fill="#119fe3" stroke="#21313b" stroke-width="6"/><circle cx="203" cy="152" r="8" fill="#fff"/><rect x="260" y="118" width="86" height="74" rx="12" fill="#ffd447" stroke="#21313b" stroke-width="6"/><path d="M184 250c52-28 94-28 146 0" stroke="#ee334e" stroke-width="10" stroke-linecap="round" fill="none"/>`,
    rules: `<rect x="128" y="74" width="270" height="194" rx="22" fill="#fff" stroke="#21313b" stroke-width="7"/><circle cx="176" cy="124" r="19" fill="#119fe3"/><circle cx="176" cy="174" r="19" fill="#ffd447"/><circle cx="176" cy="224" r="19" fill="#ee334e"/><path d="M216 124h126M216 174h126M216 224h126" stroke="#21313b" stroke-width="8" stroke-linecap="round"/>`,
    puzzle: `<rect x="112" y="88" width="116" height="74" rx="16" fill="#119fe3" stroke="#21313b" stroke-width="7"/><rect x="252" y="88" width="116" height="74" rx="16" fill="#ffd447" stroke="#21313b" stroke-width="7"/><rect x="112" y="188" width="116" height="74" rx="16" fill="#fff" stroke="#21313b" stroke-width="7"/><rect x="252" y="188" width="116" height="74" rx="16" fill="#ee334e" stroke="#21313b" stroke-width="7"/>`,
    upgrade: `<path d="M138 238h248" stroke="#21313b" stroke-width="7" stroke-linecap="round"/><rect x="150" y="94" width="98" height="86" rx="18" fill="#fff" stroke="#21313b" stroke-width="7"/><rect x="284" y="78" width="118" height="126" rx="22" fill="#119fe3" stroke="#21313b" stroke-width="7"/><path d="M252 140h28" stroke="#ee334e" stroke-width="10" stroke-linecap="round"/>`,
    repair: `<rect x="154" y="78" width="88" height="124" rx="26" fill="#1f2d35" stroke="#21313b" stroke-width="7"/><rect x="288" y="78" width="88" height="124" rx="26" fill="#f7fcff" stroke="#21313b" stroke-width="7"/><path d="M314 96h36" stroke="#119fe3" stroke-width="10" stroke-linecap="round"/><path d="M246 140h34" stroke="#ee334e" stroke-width="10" stroke-linecap="round"/>`,
    design: `<rect x="134" y="68" width="256" height="218" rx="24" fill="#fff" stroke="#21313b" stroke-width="7"/><path d="M174 122h166M174 166h166M174 210h166M174 254h116" stroke="#119fe3" stroke-width="8" stroke-linecap="round"/><circle cx="344" cy="86" r="23" fill="#ffd447"/>`,
    duo: `<circle cx="178" cy="156" r="48" fill="#fff" stroke="#21313b" stroke-width="7"/><circle cx="344" cy="156" r="48" fill="#fff" stroke="#21313b" stroke-width="7"/><path d="M150 158q28 30 58 0M316 158q28 30 58 0" stroke="#21313b" stroke-width="7" stroke-linecap="round" fill="none"/><rect x="118" y="236" width="286" height="42" rx="16" fill="#119fe3" stroke="#21313b" stroke-width="7"/>`,
    summary: `<path d="M142 244l72-92 58 56 78-118 58 154z" fill="#fff" stroke="#21313b" stroke-width="7"/><circle cx="360" cy="92" r="26" fill="#ffd447"/><path d="M180 286h186" stroke="#ee334e" stroke-width="10" stroke-linecap="round"/>`
  }[scene] || "";

  return `
    <svg viewBox="0 0 520 360" role="img" aria-label="${tr("childView")}">
      <rect x="18" y="20" width="484" height="318" rx="28" fill="#f9fbff" />
      <path d="M62 92h56M90 64v56" stroke="#65f3ff" stroke-width="8" stroke-linecap="round"/>
      <circle cx="434" cy="82" r="25" fill="#ffd447"/>
      ${prop}
      <path d="M66 296 C126 232, 190 314, 260 246 S386 234, 456 280" fill="none" stroke="#119fe3" stroke-width="12" stroke-linecap="round" />
    </svg>
  `;
}

function getAudioContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  return audioContext;
}

function playTone(frequency, duration = 0.08, type = "sine", volume = 0.032) {
  if (!sfxEnabled) return;
  const ctx = getAudioContext();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(ctx.currentTime + duration + 0.03);
}

function playSfx(kind) {
  if (kind === "correct") {
    playTone(659, 0.1, "triangle", 0.035);
    setTimeout(() => playTone(880, 0.12, "triangle", 0.032), 90);
  } else if (kind === "wrong") {
    playTone(294, 0.16, "sine", 0.026);
  } else if (kind === "complete") {
    [523, 659, 784].forEach((note, i) => setTimeout(() => playTone(note, 0.1, "triangle", 0.03), i * 80));
  } else {
    playTone(440, 0.045, "sine", 0.022);
  }
}

function startMusic() {
  if (!musicAudio) {
    const musicSource = window.SIMARS_MUSIC_DATA_URI || "./assets/music/calm-piano-background.mp3";
    musicAudio = new Audio(musicSource);
    musicAudio.volume = 0.3;
    musicAudio.preload = "auto";
    musicAudio.loop = false;
    musicAudio.addEventListener("ended", () => {
      musicEnabled = false;
      syncAudioButtons();
    });
  }
  musicAudio.play().catch(() => startGeneratedAmbientMusic());
}

function startGeneratedAmbientMusic() {
  const ctx = getAudioContext();
  const scale = [261.63, 293.66, 329.63, 392, 440, 493.88, 523.25, 587.33, 659.25];
  stopMusic();
  musicTimer = setInterval(() => {
    if (!musicEnabled) return;
    const root = scale[Math.floor(Math.random() * 5)];
    [root, root * 1.25, root * 1.5].forEach((frequency, i) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = i === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.008 / (i + 1), ctx.currentTime + 0.35 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.8 + Math.random() * 1.4);
      oscillator.connect(gain);
      gain.connect(ctx.destination);
      oscillator.start(ctx.currentTime + i * 0.06);
      oscillator.stop(ctx.currentTime + 5.3);
    });
  }, 4200);
}

function stopMusic() {
  if (musicAudio) {
    musicAudio.pause();
    musicAudio.currentTime = 0;
  }
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
}

function syncAudioButtons() {
  [musicToggle, lessonMusicToggle].forEach((button) => {
    if (!button) return;
    button.setAttribute("aria-pressed", String(musicEnabled));
    button.textContent = musicEnabled ? tr("musicOn") : tr("musicOff");
  });
  [sfxToggle, lessonSfxToggle].forEach((button) => {
    if (!button) return;
    button.setAttribute("aria-pressed", String(sfxEnabled));
    button.textContent = sfxEnabled ? tr("sfxOn") : tr("sfxOff");
  });
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  if (musicEnabled) startMusic();
  else stopMusic();
  syncAudioButtons();
  playSfx("click");
}

function toggleSfx() {
  sfxEnabled = !sfxEnabled;
  syncAudioButtons();
  if (sfxEnabled) playSfx("click");
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
  const lesson = localLesson();
  const stepData = lesson.steps[currentStepIndex];
  lessonNumber.textContent = languageMode === "zh" ? `第${currentLessonId}课` : `Lesson ${currentLessonId}`;
  lessonTitle.textContent = lesson.title;
  lessonKicker.textContent = lesson.kicker;
  stepTitle.textContent = stepData.title;
  stepCounter.textContent = `${currentStepIndex + 1} / ${lesson.steps.length}`;
  lectureTitle.textContent = currentStepIndex === 0 ? tr("notesTitle") : stepData.label;
  lectureBody.textContent = buildLectureText(lesson, stepData);
  stepNav.innerHTML = lesson.steps.map((item, index) => `
    <button class="step-button ${index === currentStepIndex ? "active" : ""}" data-step="${index}">
      <span>${index + 1}</span>${item.label}
    </button>
  `).join("");
  stepPanel.innerHTML = renderStep(stepData, lesson);
  bindStepInteractions();
}

function buildLectureText(lesson, stepData) {
  const zh = languageMode === "zh";
  const typeHelp = {
    cover: zh ? "讲法：先让孩子看画面并猜今天学什么，再把目标说出来：不是学画画软件，而是学会说清楚。" : "Teaching: let the child look and guess first, then explain that the goal is clear expression.",
    story: zh ? "讲法：故事要讲出第一次为什么失败、爸爸怎么追问、第二次为什么更接近想象。" : "Teaching: show why the first prompt failed, how the parent asked, and why the second became clearer.",
    rules: zh ? "讲法：四件套不用背，必须马上用。每讲一个词，请孩子立刻举自己的例子。" : "Teaching: do not memorize. Use each part immediately with the child's examples.",
    puzzle: zh ? "讲法：让孩子自己点选组合。选完以后读完整句，并补一句“我还想加……”" : "Teaching: let the child choose and read the full prompt, then add one more detail.",
    upgrade: zh ? "讲法：先让孩子说原句哪里模糊，再点按钮一点点升级。重点是孩子能解释升级原因。" : "Teaching: ask why the original is vague, then upgrade it step by step.",
    repair: zh ? "讲法：告诉孩子，AI画错不是失败，而是进入第二轮表达。修改时说清楚改变和保留。" : "Teaching: AI mistakes begin the second round of expression. Say what to change and what to keep.",
    design: zh ? "讲法：这是输出页。请家长做记录员，不要抢孩子的答案。" : "Teaching: this is the output page. The parent records but does not take over.",
    duo: zh ? "讲法：适合两个孩子一起上。让他们互相提一个让画面更清楚的问题。" : "Teaching: good for two children. Let them ask each other one clarity question.",
    summary: zh ? "讲法：不要只问“懂了吗”。让孩子完整说出过程、方法、下次怎么用。" : "Teaching: do not only ask 'do you understand'. Ask the child to explain the process, method, and next use."
  }[stepData.type];
  return [currentStepIndex === 0 ? lesson.prep : stepData.guide, typeHelp].filter(Boolean).join("\n\n");
}

function tipsMarkup(lesson) {
  return `<div class="page-tips"><strong>${tr("parentTips")}</strong><span>${lesson.tips[currentStepIndex % lesson.tips.length]}</span></div>`;
}

function renderStep(stepData, lesson) {
  const visual = `<div class="visual-card">${illustration(stepData.type)}</div>`;
  const tips = tipsMarkup(lesson);
  if (["cover", "story", "rules"].includes(stepData.type)) {
    return `
      <div class="panel-grid">
        <div class="content-card child-card">
          <span class="time-tag">${stepData.minutes}</span>
          <div class="big-line">${stepData.body}</div>
          ${stepData.quote ? `<div class="quote-box">${stepData.quote}</div>` : ""}
          ${stepData.bullets?.length ? `<ul class="rule-list">${stepData.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
        </div>
        ${visual}
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "puzzle") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${stepData.minutes}</span>
          <p>${stepData.prompt}</p>
          <div class="prompt-groups">
            ${stepData.groups.map((group, index) => `
              <section>
                <strong>${group.name}</strong>
                <div class="chip-grid" data-puzzle-group="${index}">
                  ${group.options.map((option) => `<button class="chip" data-piece="${option}">${option}</button>`).join("")}
                </div>
              </section>
            `).join("")}
          </div>
        </div>
        <div class="content-card prompt-card">
          <h3>${languageMode === "zh" ? "生成的清楚指令" : "Clear Prompt"}</h3>
          <div class="prompt-output" data-puzzle-output>${languageMode === "zh" ? "每组点一个，完整指令会出现在这里。" : "Choose one from each group to build the prompt."}</div>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "upgrade") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${stepData.minutes}</span>
          <p class="big-line">${stepData.prompt}</p>
          <div class="chip-grid" data-upgrade>
            ${stepData.choices.map((item) => `<button class="chip" data-piece="${item}">${item}</button>`).join("")}
          </div>
        </div>
        <div class="content-card prompt-card">
          <h3>${languageMode === "zh" ? "升级后" : "Upgraded"}</h3>
          <div class="prompt-output" data-upgrade-output>${languageMode === "zh" ? "点击补充信息，把模糊句变清楚。" : "Tap details to make it clearer."}</div>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "repair") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${stepData.minutes}</span>
          <div class="ai-mistake">
            <div>${illustration("repair")}</div>
            <p>${stepData.problem}</p>
          </div>
          <div class="chip-grid" data-repair>
            ${stepData.options.map((item) => `<button class="chip" data-piece="${item}">${item}</button>`).join("")}
          </div>
        </div>
        <div class="content-card prompt-card">
          <h3>${languageMode === "zh" ? "修改指令" : "Revision Prompt"}</h3>
          <div class="prompt-output" data-repair-output>${stepData.target}</div>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "design") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${stepData.minutes}</span>
          <div class="design-form" data-design-form>
            ${stepData.fields.map((field) => `
              <label>
                <span>${field}</span>
                <input type="text" placeholder="${stepData.placeholder}" data-design-field="${field}">
              </label>
            `).join("")}
          </div>
        </div>
        <div class="content-card prompt-card">
          <h3>${languageMode === "zh" ? "我的完整指令" : "My Full Prompt"}</h3>
          <div class="prompt-output" data-design-output>${languageMode === "zh" ? "填完左边四格，这里会自动组成一句话。" : "Fill the four fields to build one sentence."}</div>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "duo") {
    return `
      <div class="duo-grid">
        ${stepData.kids.map((kid) => `
          <div class="teacher-card kid-card">
            <span class="time-tag">${kid.name}</span>
            <h3>${kid.mission}</h3>
            <ul class="rule-list">${kid.starter.map((item) => `<li contenteditable="true">${item}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </div>
      ${tips}
    `;
  }
  return `
    <div class="summary-grid">
      <div class="teacher-card">
        <span class="time-tag">${stepData.minutes}</span>
        <p class="big-line">${stepData.chant}</p>
        ${visual}
      </div>
      <div class="teacher-card">
        <h3>${languageMode === "zh" ? "完整复盘" : "Full Review"}</h3>
        <div class="teacher-grid review-grid">${stepData.recap.map((item, index) => `<div><strong>${index + 1}</strong><span>${item}</span></div>`).join("")}</div>
      </div>
    </div>
    ${tips}
  `;
}

function joinPrompt(parts) {
  if (!parts.length) return languageMode === "zh" ? "点击补充信息，把指令变清楚。" : "Tap details to make the prompt clearer.";
  return languageMode === "zh"
    ? `请帮我画：${parts.join("，")}。画面适合小学生，明亮、友好、有轻微未来感。`
    : `Please draw: ${parts.join(", ")}. Make it bright, friendly, lightly futuristic, and suitable for children.`;
}

function bindStepInteractions() {
  document.querySelectorAll("[data-puzzle-group] .chip").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest("[data-puzzle-group]");
      group.querySelectorAll(".chip").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      const pieces = Array.from(document.querySelectorAll("[data-puzzle-group] .chip.selected")).map((item) => item.dataset.piece);
      document.querySelector("[data-puzzle-output]").textContent = joinPrompt(pieces);
      playSfx(pieces.length >= 4 ? "complete" : "click");
    });
  });
  document.querySelectorAll("[data-upgrade] .chip").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
      const pieces = Array.from(document.querySelectorAll("[data-upgrade] .chip.selected")).map((item) => item.dataset.piece);
      document.querySelector("[data-upgrade-output]").textContent = joinPrompt(pieces);
      playSfx(pieces.length >= 4 ? "complete" : "click");
    });
  });
  document.querySelectorAll("[data-repair] .chip").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
      const pieces = Array.from(document.querySelectorAll("[data-repair] .chip.selected")).map((item) => item.dataset.piece);
      document.querySelector("[data-repair-output]").textContent = pieces.length ? joinPrompt(pieces) : localLesson().steps[currentStepIndex].target;
      playSfx(pieces.length >= 4 ? "complete" : "click");
    });
  });
  document.querySelectorAll("[data-design-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const values = Array.from(document.querySelectorAll("[data-design-field]")).map((field) => field.value.trim()).filter(Boolean);
      document.querySelector("[data-design-output]").textContent = values.length ? joinPrompt(values) : (languageMode === "zh" ? "填完左边四格，这里会自动组成一句话。" : "Fill the four fields to build one sentence.");
    });
  });
}

document.addEventListener("click", (event) => {
  const opener = event.target.closest("[data-open-lesson]");
  if (opener) {
    playSfx("click");
    openLesson(Number(opener.dataset.openLesson));
  }
  const stepButton = event.target.closest("[data-step]");
  if (stepButton) {
    playSfx("click");
    currentStepIndex = Number(stepButton.dataset.step);
    renderLesson();
  }
});

backHome.addEventListener("click", () => {
  playSfx("click");
  closeLesson();
});
prevStep.addEventListener("click", () => {
  currentStepIndex = Math.max(0, currentStepIndex - 1);
  playSfx("click");
  renderLesson();
});
nextStep.addEventListener("click", () => {
  currentStepIndex = Math.min(localLesson().steps.length - 1, currentStepIndex + 1);
  playSfx("click");
  renderLesson();
});
scrollCatalog.addEventListener("click", () => {
  playSfx("click");
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});
languageSelect.addEventListener("change", () => {
  languageMode = languageSelect.value;
  playSfx("click");
  updateStaticLanguage();
});
[musicToggle, lessonMusicToggle].forEach((button) => button.addEventListener("click", toggleMusic));
[sfxToggle, lessonSfxToggle].forEach((button) => button.addEventListener("click", toggleSfx));
lectureToggle.addEventListener("click", () => {
  lectureCollapsed = !lectureCollapsed;
  lecturePanel.classList.toggle("collapsed", lectureCollapsed);
  lectureToggle.setAttribute("aria-pressed", String(!lectureCollapsed));
  lectureToggle.textContent = lectureCollapsed ? tr("expandNotes") : tr("collapseNotes");
  playSfx("click");
});
document.addEventListener("keydown", (event) => {
  if (lessonView.hidden) return;
  if (event.key === "ArrowRight") nextStep.click();
  if (event.key === "ArrowLeft") prevStep.click();
});

updateStaticLanguage();
