const ui = {
  zh: {
    brandWork: "思美奇主理人作品",
    createdBy: "Created by Jerry Fu",
    heroKicker: "Jerry 家庭 AI 课堂 · 蓝白日漫轻赛博风",
    heroTitle: "AI未来家长学校互动课",
    heroText: "31节课网站框架已建立。先完成第5、6、7课样板，每节约30分钟，适合家长用 iPad 横屏边讲边操作。",
    authorTitle: "作者的话",
    authorBody: "AI 时代已经来到孩子身边。作为家长，我们不能只把孩子交给工具，也不能站在一旁焦虑观望。思美奇希望做的，不只是把新工具介绍给孩子，而是陪孩子建立面向未来的底层能力：会提问、会判断、会表达、会创造，也知道如何保护自己。真正的教育不是让孩子更早依赖 AI，而是让他们在新技术面前依然保有好奇、善良、独立思考和动手创造的勇气。我们这一代家长也要重新学习，和孩子一起顺应时代，一起长出新的能力。",
    startLesson: "开始第5课",
    catalogButton: "查看31课目录",
    samples: "3节样板课",
    samplesNote: "第5、6、7课完整互动设计",
    entries: "31个入口",
    entriesNote: "目录结构先搭好，后续逐节补齐",
    minutes: "30分钟",
    minutesNote: "每节课按家庭讲课节奏设计",
    followKicker: "关注主理人",
    followTitle: "思美奇主理人 Jerry Fu",
    followBody: "一起探索 AI 教育、体育 IP 与儿童创造力。后续真实视频号二维码可直接替换这里。",
    followQr: "关注思美奇主理人",
    qrAccount: "Jerry Fu 视频号",
    catalogKicker: "课程目录",
    catalogTitle: "31节课总览",
    catalogBody: "已完成样板课可直接进入；待校准课题会在拿到 PDF 准确目录后逐节替换。",
    enter: "进入课程",
    waiting: "等待补齐",
    sample: "完整样板",
    done: "已讲待补",
    pending: "待校准",
    back: "目录",
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
    createdFooter: "Created by Jerry Fu, Founder / Curator of SIMARS",
    musicCredit: "Music: Calm Piano Background Music by Orange Free Sounds, CC BY 4.0",
    qrFooter: "AI教育 · 体育IP · 儿童创造力"
  },
  en: {
    brandWork: "A SIMARS Curator Project",
    createdBy: "Created by Jerry Fu",
    heroKicker: "Jerry's Family AI Classroom · blue-white anime cyber style",
    heroTitle: "AI Future Parent School",
    heroText: "A 31-lesson interactive site for parents teaching children at home. Lessons 5, 6, and 7 are complete samples, each designed for about 30 minutes.",
    authorTitle: "A Note From The Author",
    authorBody: "AI is already entering our children's world. As parents, we should not simply hand children to tools, nor stand aside with anxiety. What SIMARS hopes to build is not just a set of tool lessons, but a warmer path for children to grow future-ready abilities: asking, judging, expressing, creating, and staying safe. Real education is not about making children depend on AI earlier. It is about helping them keep curiosity, kindness, independent thinking, and the courage to create. We learn again, together with our children.",
    startLesson: "Start Lesson 5",
    catalogButton: "View 31 Lessons",
    samples: "3 Sample Lessons",
    samplesNote: "Lessons 5, 6, and 7 are fully interactive",
    entries: "31 Entries",
    entriesNote: "The full structure is ready for future lessons",
    minutes: "30 Minutes",
    minutesNote: "Each lesson follows a parent-led teaching flow",
    followKicker: "Follow The Curator",
    followTitle: "SIMARS Curator Jerry Fu",
    followBody: "Explore AI education, sports IP, and children's creativity. Replace this placeholder with the real Channel QR code later.",
    followQr: "Follow SIMARS Curator",
    qrAccount: "Jerry Fu Channel",
    catalogKicker: "Course Catalog",
    catalogTitle: "31-Lesson Overview",
    catalogBody: "Completed sample lessons are available now. Pending lessons will be aligned with the original PDF topics later.",
    enter: "Open Lesson",
    waiting: "Coming Later",
    sample: "Sample Ready",
    done: "Taught Offline",
    pending: "To Align",
    back: "Catalog",
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
    createdFooter: "Created by Jerry Fu, Founder / Curator of SIMARS",
    musicCredit: "Music: Calm Piano Background Music by Orange Free Sounds, CC BY 4.0",
    qrFooter: "AI Education · Sports IP · Children's Creativity"
  }
};

const lessonCatalog = [
  { id: 1, zh: "未来什么本领最厉害", en: "What Skills Matter Most In The Future", status: "done" },
  { id: 2, zh: "AI小帮手大比拼", en: "Different Kinds Of AI Helpers", status: "done" },
  { id: 3, zh: "数字小守门员", en: "Little Digital Gatekeepers", status: "done" },
  { id: 4, zh: "掌控指令：让AI听懂你的话", en: "Clear Instructions: Help AI Understand You", status: "done" },
  { id: 5, zh: "AI创意画室：把脑袋里的画说清楚", en: "AI Art Studio: Describe The Picture In Your Mind", status: "sample" },
  { id: 6, zh: "AI真假侦探：AI说的话都对吗", en: "AI Truth Detective: Is AI Always Right?", status: "sample" },
  { id: 7, zh: "AI故事工厂：和AI一起讲故事", en: "AI Story Factory: Create Stories With AI", status: "sample" },
  ...Array.from({ length: 24 }, (_, index) => ({
    id: index + 8,
    zh: `第${index + 8}课：待按PDF课题校准`,
    en: `Lesson ${index + 8}: Topic To Be Aligned With PDF`,
    status: "pending"
  }))
];

const lessonDetails = {
  5: {
    illustration: "art",
    zh: {
      title: "AI创意画室：把脑袋里的画说清楚",
      kicker: "30分钟家庭课 · 创意表达",
      prep: "课前准备：打开一个能演示图片生成或图片描述的AI工具即可。不要一上来追求出图效果，先让孩子在纸上或口头说出画面。你今天要练的是孩子的表达，不是AI的技术。",
      tips: [
        "每一页都先让孩子说，再让家长补充。",
        "孩子说不出来时，追问地点、主角、动作、颜色，不替他决定。",
        "如果AI结果不满意，引导孩子说清楚“我想改哪里”。"
      ],
      steps: [
        step("cover", "课程封面", "把想象说清楚，AI才画得更像", "2分钟", "今天孩子要学会：先想象、再描述、最后修改。", "第4课已经学了清楚指令。这一课把指令用到画画里，让孩子知道 AI 不是读心术，自己的想象力才是起点。", ["会观察：我脑袋里有什么", "会描述：地点、主角、动作、细节", "会修改：不满意时说出改哪里"], "你可以先问：如果我说“画一个东西”，你知道我要什么吗？让孩子意识到“说清楚”本身就是能力。"),
        step("talk", "开场引入", "如果你只说“画一个”，别人听得懂吗", "3分钟", "爸爸可以问：如果我让你画一个东西，但不说画什么，你会不会很困惑？AI也一样。它很会帮忙，但不会自动知道你脑袋里的画面。", "今天我们不是比赛谁会点按钮，而是练习谁能把脑袋里的画说清楚。", [], "让两个孩子分别说一个想画的东西。先不要评价，只追问：在哪里？有什么？什么颜色？"),
        step("story", "小故事", "小安的未来公园", "5分钟", "小安想给妹妹做一张生日卡片。他第一次对AI说：帮我画一个公园。AI画出草地、长椅和太阳，虽然不难看，但和小安心里的画不一样。小安有点着急，觉得AI没有懂他。爸爸没有马上帮他说，而是问：这个公园在哪里？谁在里面？有什么特别的东西？小安想了想，说：这是一个未来公园，有机器人秋千、会发光的树、两个孩子在玩，天空里还有小小的飞行书包，颜色要明亮。第二次，AI画出来的画终于更像小安心里的生日卡片。", "问孩子：第二次为什么更像小安脑袋里的画？如果你是小安，还会加什么细节？", [], "讲故事时语速慢一点。重点不是记住故事，而是让孩子发现第二次多了“地点、主角、动作、细节”。"),
        step("rules", "核心知识", "画面描述四件套", "8分钟", "记住四个小按钮：地点、主角、动作、细节。孩子每说一个画面，都试着补齐这四个按钮。", "", ["地点：画面发生在哪里", "主角：里面有谁或什么", "动作：他们正在做什么", "细节：颜色、心情、风格、特别物品"], "可以拿家里的任意物品练习，比如“桌上的杯子”。让孩子把普通句子慢慢说丰富。"),
        quizStep("互动游戏", "哪一句更容易画出来", "6分钟", "请孩子选择更清楚的描述。", [
          ["帮我画一个好玩的。", false, "太模糊了，AI不知道好玩在哪里。可以追问：在哪里？谁在玩？玩什么？"],
          ["帮我画一个海底城市，有透明房子、发光小鱼和潜水机器人。", true, "很好，有地点、主角和细节。孩子可以继续补颜色、心情和画面风格。"],
          ["帮我画漂亮一点。", false, "漂亮是感觉，还需要说清楚画面里有什么。可以改成：颜色明亮、像动画片、适合生日卡片。"]
        ], "选完后不要马上跳过，问孩子：这句话多了哪些信息？"),
        builderStep("小任务", "两个孩子各设计一幅AI画", "5分钟", "孩子A设计“未来学校”，孩子B设计“机器人朋友”。爸爸只追问，不替孩子决定。", ["请你当儿童插画师", "画一个未来学校", "给7岁小朋友看", "颜色明亮，不要太复杂"], "把孩子说的话记录下来。最后让孩子自己选择一个最想保留的细节。"),
        summaryStep("总结", "把今天的创作过程回放一遍", "3分钟", "先想象，再描述，不满意就修改。", ["今天我们先看了什么问题：AI不会读心，描述越清楚越接近想象。", "我们练了哪四个按钮：地点、主角、动作、细节。", "你今天最满意的一句描述是什么？它比一开始多了哪些信息？", "下次你想让AI画图时，准备先说哪三个细节？"], "最后提醒：AI可以帮忙画，但想象力要从自己脑袋里先出来。")
      ]
    },
    en: {
      title: "AI Art Studio: Describe The Picture In Your Mind",
      kicker: "30-minute family lesson · Creative expression",
      prep: "Before class: open any AI image or image-description tool. Do not focus on making a perfect image first. Let the child describe the picture in their mind. The goal is expression, not technology.",
      tips: [
        "Let the child speak first on every page.",
        "If the child gets stuck, ask about place, character, action, and color.",
        "If the AI result is not good, guide the child to say what should change."
      ],
      steps: [
        step("cover", "Cover", "Clear imagination makes better AI pictures", "2 min", "Today we learn: imagine first, describe clearly, then improve.", "AI cannot read our minds. The clearer we describe, the closer the picture becomes.", ["Observe: what is in my mind?", "Describe: place, character, action, details", "Improve: say what to change"], "Ask: if I only say 'draw something', do you know what I want?"),
        step("talk", "Warm-up", "Can others understand 'draw one thing'?", "3 min", "Ask the children what information is missing when someone says only 'draw one thing'.", "We are not competing to press buttons. We are learning to express a picture clearly.", [], "Let each child name one picture idea. Ask follow-up questions slowly."),
        step("story", "Story", "An's Future Park", "5 min", "An wants to make a birthday card for his sister. First he asks AI to draw a park. The picture has grass, a bench, and the sun, but it is not the picture in his mind. Dad asks: where is the park, who is inside, and what is special? An adds: a future park with robot swings, glowing trees, two children playing, flying schoolbags, and bright colors. Now the picture feels much closer.", "Ask: why is the second request clearer? What detail would you add?", [], "Help children notice place, character, action, and detail."),
        step("rules", "Core Idea", "Four picture buttons", "8 min", "Use four buttons for every picture: place, character, action, details.", "", ["Place: where is it?", "Character: who or what is inside?", "Action: what are they doing?", "Details: color, mood, style, special objects"], "Practice with simple objects at home."),
        quizStep("Game", "Which sentence is easier to draw?", "6 min", "Choose the clearer description.", [
          ["Draw something fun.", false, "Too vague. Ask: where is it, who is playing, and what are they doing?"],
          ["Draw an underwater city with glass houses, glowing fish, and diving robots.", true, "Great. It has place, characters, and details. You can still add color and mood."],
          ["Make it beautiful.", false, "Beautiful is a feeling. Try: bright colors, cartoon style, for a birthday card."]
        ], "After choosing, ask what information made it clearer."),
        builderStep("Task", "Design one AI picture each", "5 min", "Child A designs a future school. Child B designs a robot friend. The parent only asks questions.", ["Act as a children's illustrator", "Draw a future school", "For a 7-year-old child", "Bright colors, not too complex"], "Write down the child's own words."),
        summaryStep("Wrap-up", "Replay today's creative process", "3 min", "Imagine, describe, improve.", ["What did we learn first? AI cannot read our minds.", "Which four buttons did we practice? Place, character, action, details.", "What was your clearest sentence today?", "Next time you ask AI to draw, what three details will you say first?"], "Remind children: AI can help, but imagination starts with us.")
      ]
    }
  },
  6: {
    illustration: "detective",
    zh: {
      title: "AI真假侦探：AI说的话都对吗",
      kicker: "30分钟家庭课 · 判断力",
      prep: "课前准备：准备两个常识例子和一个需要确认的生活例子，比如“苹果是水果”“明天是否停课”。这节课不是吓孩子，而是训练孩子温和地检查信息。",
      tips: ["重点训练判断力，不是制造AI恐惧。", "涉及身体、安全、隐私、学校通知时，一定要问家长或可靠来源。", "孩子答错时问：这件事会影响行动吗？需要再确认吗？"],
      steps: [
        step("cover", "课程封面", "会用AI，也要会怀疑", "2分钟", "今天孩子要学会：AI会帮忙，但AI也可能说错。", "这一课训练孩子的判断力。不是让孩子害怕AI，而是让孩子看到答案之后，会停一下、想一下、查一下。", ["AI不是万能老师", "答案要看是否合理", "重要问题要问大人或查资料"], "先讲清楚：怀疑不是不礼貌，而是保护自己。"),
        step("talk", "开场引入", "聪明人不是全都相信", "3分钟", "爸爸可以问：如果一个同学很聪明，他说的话就一定都对吗？如果一个机器人回答很快，它说的话就一定是真的吗？", "真正会用AI的小朋友，不是只会问，还会检查。", [], "用轻松语气讲，不要把AI讲成危险怪物。"),
        step("story", "小故事", "小乐和会说错的百科机器人", "5分钟", "小乐正在做动物小报。他问AI：企鹅会不会飞？AI答对了，说企鹅不会飞。小乐又问：所有鸟都会飞吗？AI很快回答：都会。小乐停了一下，因为他想起在动物园见过鸵鸟，也知道企鹅不会飞。他没有马上把答案写进小报，而是去翻书，又问了爸爸。爸爸告诉他：AI有时会把话说得很像真的，但聪明的小朋友不会急着照抄，会先停一下、想一下、查一下。", "问孩子：小乐为什么没有马上相信AI？如果你要写进作业，应该怎么确认？", [], "强调小乐不是比AI更厉害，而是他愿意检查。"),
        step("rules", "核心知识", "真假侦探三步法", "8分钟", "遇到AI答案，先做三件事。", "", ["停一下：不要马上照做", "想一下：这句话和我知道的事情冲突吗", "查一下：问大人、看书、看可靠资料"], "把三步法配动作：停手、摸头、找家长。"),
        quizStep("互动游戏", "这句话要不要再查一查", "6分钟", "请孩子判断哪句话最需要再查。", [
          ["太阳从东方升起。", false, "这是常识，通常不用特别查。可以问孩子：你在生活中见过吗？"],
          ["明天学校一定停课。", true, "这种会影响行动的信息，一定要问老师或家长确认，不能只听AI一句话。"],
          ["苹果是一种水果。", false, "这是常见事实，可以先接受。如果是写正式作业，也可以查书确认。"]
        ], "问孩子：为什么“停课”这种话不能只信AI？"),
        flipStep("互动翻卡", "哪些问题不能只问AI", "5分钟", ["身体不舒服怎么办", "家里地址能不能告诉别人", "作业答案是什么", "今天穿什么颜色"], "每翻一张卡，都让孩子说：这个问题为什么要问大人？"),
        summaryStep("总结", "把今天的小侦探过程回放一遍", "3分钟", "先停一下，再想一下，重要事情查一下。", ["今天我们先发现：AI回答很快，但不代表一定正确。", "我们练了哪三步：停一下、想一下、查一下。", "哪些问题不能只问AI：身体、安全、隐私、学校通知、重要决定。", "下次你看到一个很像真的答案时，准备怎么确认？"], "结尾不要说AI不可信，而是说：重要事情要多确认。")
      ]
    },
    en: {
      title: "AI Truth Detective: Is AI Always Right?",
      kicker: "30-minute family lesson · Judgment",
      prep: "Before class: prepare two common-sense examples and one life example that needs checking. This lesson is about calm checking, not fear.",
      tips: ["Train judgment, not fear.", "For health, safety, privacy, and school notices, ask adults or reliable sources.", "If the child answers wrong, ask: will this affect our action? Should we check again?"],
      steps: [
        step("cover", "Cover", "Use AI, but still think", "2 min", "Today we learn: AI can help, but AI can also be wrong.", "We learn to pause, think, and check.", ["AI is not a perfect teacher", "Answers should make sense", "Important things need reliable checking"], "Explain that checking is a smart habit."),
        step("talk", "Warm-up", "Smart people can still be wrong", "3 min", "Ask: if a smart friend says something, is it always true? If a robot answers fast, is it always correct?", "Good AI users ask and check.", [], "Keep the tone calm and friendly."),
        step("story", "Story", "Le and the mistaken robot", "5 min", "Le is making an animal poster. AI says penguins cannot fly. Then AI says all birds can fly. Le pauses because he remembers ostriches and penguins. He checks a book and asks Dad before writing it down. Dad says: AI can sound confident, so smart children pause, think, and check.", "Ask: why did Le not believe it immediately? How should he confirm it for homework?", [], "Highlight the habit of checking."),
        step("rules", "Core Idea", "Three detective steps", "8 min", "Use three steps when AI gives an answer.", "", ["Pause: do not act immediately", "Think: does this conflict with what I know?", "Check: ask adults, books, or reliable sources"], "Pair each step with a body action."),
        quizStep("Game", "Which sentence needs checking?", "6 min", "Choose the sentence that needs checking most.", [
          ["The sun rises in the east.", false, "This is common knowledge. Ask: have you seen this in real life?"],
          ["School will definitely be closed tomorrow.", true, "This affects action, so we must confirm it with teachers or parents."],
          ["An apple is a fruit.", false, "This is a common fact. For formal homework, a book can confirm it."]
        ], "Ask why school closure needs confirmation."),
        flipStep("Flip Cards", "Questions AI should not answer alone", "5 min", ["What if I feel sick?", "Can I share my address?", "What is my homework answer?", "What color should I wear today?"], "Ask why each card may need an adult."),
        summaryStep("Wrap-up", "Replay today's detective process", "3 min", "Pause, think, and check important things.", ["What did we discover first? Fast answers are not always correct.", "What three steps did we practice? Pause, think, check.", "What topics should not rely on AI alone? Health, safety, privacy, school notices, important choices.", "What will you do next time an answer sounds very confident?"], "Say: important things need confirmation.")
      ]
    }
  },
  7: {
    illustration: "story",
    zh: {
      title: "AI故事工厂：和AI一起讲故事",
      kicker: "30分钟家庭课 · 表达与创造",
      prep: "课前准备：准备纸和笔，先让孩子口头说故事，不急着打开AI。这节课要让孩子成为故事导演，AI只是帮忙扩写。",
      tips: ["训练结构化表达，让孩子知道故事需要角色、地点、麻烦和结尾。", "不要急着帮孩子编完整故事，先听孩子的第一个主意。", "孩子卡住时，用追问推进：谁在里面？在哪里？遇到什么问题？"],
      steps: [
        step("cover", "课程封面", "AI可以帮忙，主意要从孩子开始", "2分钟", "今天孩子要学会：用角色、地点、麻烦、结尾做一个故事。", "AI可以帮我们把故事讲长，但故事的第一个火花要从孩子自己开始。", ["角色：故事里有谁", "地点：发生在哪里", "麻烦：遇到什么问题", "结尾：希望怎样结束"], "先告诉孩子：你是导演，AI是助手。"),
        step("talk", "开场引入", "一个好故事要有一点麻烦", "3分钟", "爸爸可以问：如果故事里什么都没发生，会不会无聊？一个好故事通常有主角、有地方、有麻烦，还有解决办法。", "AI可以帮我们把故事讲长，但第一个火花要由我们点亮。", [], "让孩子举一个最喜欢的动画，找出里面的“麻烦”。"),
        step("story", "小故事", "小米和迷路的月亮车", "5分钟", "小米想给弟弟讲睡前故事。她第一次对AI说：讲一个故事。AI讲了一个很普通的小动物故事，小米觉得不像自己的想法。爸爸问她：主角是谁？发生在哪里？遇到了什么麻烦？最后希望怎么样？小米说：主角是一辆胆小的月亮车，它在月球迷路了，遇到一只会唱歌的小机器人，最后它们跟着星星的声音找到回家的路。AI再帮她整理时，故事一下子有了画面、麻烦和温暖的结尾。", "问孩子：小米第二次给了哪几个重要线索？你想给这个故事加一个什么角色？", [], "听孩子回答时，把角色、地点、麻烦、结尾写下来。"),
        step("rules", "核心知识", "故事四块积木", "8分钟", "拼故事不用一开始就很厉害，先拼四块积木。", "", ["主角：谁在故事里", "地点：故事发生在哪里", "麻烦：主角遇到什么问题", "结尾：最后变好、变有趣或学会什么"], "用积木比喻，不要讲文学术语。"),
        quizStep("互动游戏", "哪个故事更完整", "6分钟", "请孩子选择更像完整故事开头的一句。", [
          ["有一只小猫。", false, "只有主角，还缺地点和麻烦。可以追问：它在哪里？遇到了什么？"],
          ["一只小猫在图书馆迷路了，它要找到会发光的出口。", true, "很好，有主角、地点和麻烦。接下来可以补朋友、选择和结尾。"],
          ["讲一个很有趣的故事。", false, "这只是要求，还没有故事材料。AI不知道什么对你来说有趣。"]
        ], "选对后，请孩子把这句话继续往下讲一句。"),
        builderStep("故事拼图", "拼出你的故事指令", "5分钟", "让两个孩子各选一个主角，再补地点、麻烦和结尾。", ["主角是一只小恐龙", "地点在未来图书馆", "麻烦是找不到回家的门", "结尾要开心又有点好笑"], "如果两个孩子抢答案，让他们轮流负责一块积木。"),
        summaryStep("总结", "把今天的故事工厂回放一遍", "3分钟", "角色、地点、麻烦、结尾，故事马上活起来。", ["今天我们先发现：只说“讲个故事”太模糊。", "我们练了哪四块积木：角色、地点、麻烦、结尾。", "你的故事里最有趣的麻烦是什么？它最后怎么解决？", "下次你想和AI讲故事时，准备先给它哪四个线索？"], "结尾强调：主意来自孩子，AI只是帮忙整理。")
      ]
    },
    en: {
      title: "AI Story Factory: Create Stories With AI",
      kicker: "30-minute family lesson · Expression and creativity",
      prep: "Before class: prepare paper and pens. Let children speak their story before opening AI. The child is the director; AI helps expand.",
      tips: ["Train structured expression: character, place, problem, ending.", "Do not write the whole story for the child. Listen to the first idea.", "If the child gets stuck, ask: who, where, what problem, what ending?"],
      steps: [
        step("cover", "Cover", "AI can help, but ideas start with children", "2 min", "Today we learn to build stories with character, place, problem, and ending.", "AI can make the story longer, but the first spark comes from the child.", ["Character: who is in the story?", "Place: where does it happen?", "Problem: what goes wrong?", "Ending: how does it end?"], "Tell children: you are the director; AI is the helper."),
        step("talk", "Warm-up", "A good story needs a small problem", "3 min", "Ask: if nothing happens in a story, is it interesting?", "AI can help us expand, but we light the first spark.", [], "Use a favorite cartoon to find the problem in the story."),
        step("story", "Story", "Mimi and the lost moon car", "5 min", "Mimi wants a bedtime story for her little brother. First she says: tell a story. It is plain. Dad asks: who is the main character, where are they, what problem happens, and how should it end? Mimi adds a shy moon car, the moon, getting lost, a singing robot, and a warm way home by following the sound of stars. Now the story has pictures, a problem, and a soft ending.", "Ask: what clues did Mimi give? What new character would you add?", [], "Write down character, place, problem, ending."),
        step("rules", "Core Idea", "Four story blocks", "8 min", "Build a story with four blocks.", "", ["Character", "Place", "Problem", "Ending"], "Use building blocks as the metaphor."),
        quizStep("Game", "Which beginning is more complete?", "6 min", "Choose the stronger story beginning.", [
          ["There is a cat.", false, "Only a character. Ask: where is it, and what problem happens?"],
          ["A cat gets lost in a library and must find the glowing exit.", true, "Great. It has character, place, and problem. Next add a friend, a choice, and an ending."],
          ["Tell a very interesting story.", false, "This is a request, not story material. AI does not know what is interesting to you yet."]
        ], "Ask the child to continue the chosen sentence."),
        builderStep("Story Puzzle", "Build your story prompt", "5 min", "Each child chooses a character, then adds place, problem, and ending.", ["The main character is a little dinosaur", "The place is a future library", "The problem is finding the way home", "The ending is happy and funny"], "Let children take turns choosing blocks."),
        summaryStep("Wrap-up", "Replay today's story factory", "3 min", "Character, place, problem, ending: the story comes alive.", ["What did we discover first? 'Tell a story' is too vague.", "What four blocks did we practice? Character, place, problem, ending.", "What was the most interesting problem in your story?", "Next time you create a story with AI, what four clues will you give first?"], "Remind: the idea comes from the child.")
      ]
    }
  }
};

function step(type, label, title, minutes, body, quote, bullets, guide) {
  return { type, label, title, minutes, body, quote, bullets, guide };
}
function quizStep(label, title, minutes, prompt, choices, guide) {
  return { type: "quiz", label, title, minutes, prompt, choices: choices.map(([text, correct, feedback]) => ({ text, correct, feedback })), guide };
}
function builderStep(label, title, minutes, task, chips, guide) {
  return { type: "builder", label, title, minutes, task, chips, guide };
}
function flipStep(label, title, minutes, cards, guide) {
  return { type: "flip", label, title, minutes, cards, guide };
}
function summaryStep(label, title, minutes, chant, recap, guide) {
  return { type: "summary", label, title, minutes, chant, recap, guide };
}

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
    const statusText = lesson.status === "sample" ? tr("sample") : lesson.status === "done" ? tr("done") : tr("pending");
    const note = lesson.status === "sample"
      ? (languageMode === "zh" ? "完整样板课" : "Complete sample lesson")
      : lesson.status === "done"
        ? (languageMode === "zh" ? "已完成线下课，待补网页版" : "Taught offline, web version pending")
        : (languageMode === "zh" ? "目录入口已建立，等待原始课题与子题目" : "Entry ready, waiting for original topic details");
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

function illustration(type, scene = "cover") {
  const palette = {
    art: ["#119fe3", "#ee334e", "#ffd447"],
    detective: ["#0a8fd3", "#f7d94a", "#ee334e"],
    story: ["#229de5", "#ffcf3f", "#ff7aa8"]
  }[type] || ["#119fe3", "#ee334e", "#ffd447"];
  const prop = {
    cover: `<rect x="212" y="72" width="178" height="124" rx="20" fill="#ffffff" stroke="#21313b" stroke-width="7" /><path d="M246 150 L290 104 L332 150 Z" fill="${palette[0]}" /><circle cx="346" cy="108" r="22" fill="${palette[1]}" />`,
    talk: `<path d="M212 96 h150 q30 0 30 30 v40 q0 30-30 30h-62l-38 32v-32h-50q-30 0-30-30v-40q0-30 30-30z" fill="#fff" stroke="#21313b" stroke-width="7" /><path d="M230 132h116M230 164h78" stroke="${palette[0]}" stroke-width="8" stroke-linecap="round"/>`,
    story: `<path d="M214 68 h154 q24 0 24 24v164q0 24-24 24H214q-24 0-24-24V92q0-24 24-24z" fill="#fff" stroke="#21313b" stroke-width="7" /><path d="M230 114h124M230 150h86M230 206h110" stroke="${palette[0]}" stroke-width="8" stroke-linecap="round"/>`,
    rules: `<rect x="188" y="70" width="220" height="190" rx="20" fill="#fff" stroke="#21313b" stroke-width="7"/><circle cx="232" cy="124" r="18" fill="${palette[1]}"/><circle cx="232" cy="174" r="18" fill="${palette[0]}"/><circle cx="232" cy="224" r="18" fill="${palette[1]}"/><path d="M270 124h88M270 174h88M270 224h88" stroke="#21313b" stroke-width="8" stroke-linecap="round"/>`,
    quiz: `<rect x="196" y="80" width="210" height="150" rx="22" fill="#fff" stroke="#21313b" stroke-width="7"/><path d="M250 154l32 32 72-82" fill="none" stroke="${palette[0]}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`,
    builder: `<rect x="176" y="86" width="92" height="72" rx="16" fill="${palette[0]}" stroke="#21313b" stroke-width="7"/><rect x="286" y="86" width="92" height="72" rx="16" fill="${palette[1]}" stroke="#21313b" stroke-width="7"/><rect x="230" y="176" width="92" height="72" rx="16" fill="#fff" stroke="#21313b" stroke-width="7"/>`,
    flip: `<rect x="188" y="84" width="86" height="126" rx="16" fill="#fff" stroke="#21313b" stroke-width="7"/><rect x="292" y="84" width="86" height="126" rx="16" fill="${palette[0]}" stroke="#21313b" stroke-width="7"/><path d="M214 236h140" stroke="${palette[1]}" stroke-width="10" stroke-linecap="round"/>`,
    summary: `<path d="M196 96l54 44 86-76 72 124H170z" fill="#fff" stroke="#21313b" stroke-width="7"/><circle cx="354" cy="98" r="24" fill="${palette[1]}"/>`
  }[scene] || "";

  return `
    <svg viewBox="0 0 520 360" role="img" aria-label="${tr("childView")}">
      <rect x="18" y="20" width="484" height="318" rx="28" fill="#f9fbff" />
      <circle cx="84" cy="82" r="30" fill="${palette[1]}" />
      <path d="M84 36v-22M84 150v-24M42 82H20M150 82h-28" stroke="${palette[1]}" stroke-width="8" stroke-linecap="round" />
      ${prop}
      <path d="M66 282 C126 220, 190 302, 260 234 S386 222, 456 268" fill="none" stroke="${palette[0]}" stroke-width="12" stroke-linecap="round" />
      <circle cx="132" cy="276" r="35" fill="#ffffff" stroke="#21313b" stroke-width="7" />
      <path d="M108 274 Q132 300 164 274" fill="none" stroke="#21313b" stroke-width="6" stroke-linecap="round" />
      <circle cx="132" cy="266" r="15" fill="${palette[0]}" />
      <circle cx="384" cy="276" r="35" fill="#ffffff" stroke="#21313b" stroke-width="7" />
      <path d="M360 274 Q384 300 416 274" fill="none" stroke="#21313b" stroke-width="6" stroke-linecap="round" />
      <circle cx="384" cy="266" r="15" fill="${palette[0]}" />
      <path d="M426 86h44M448 64v44" stroke="${palette[1]}" stroke-width="9" stroke-linecap="round" />
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
    musicAudio.volume = 0.34;
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
  // Self-generated royalty-free ambient music: slow, airy, and lightly randomized instead of a repeated melody.
  musicTimer = setInterval(() => {
    if (!musicEnabled) return;
    const root = scale[Math.floor(Math.random() * 5)];
    const chord = [root, root * 1.25, root * 1.5].map((note) => note * (Math.random() > 0.75 ? 2 : 1));
    chord.forEach((frequency, i) => {
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

  stepPanel.innerHTML = renderStep(stepData, lessonDetails[currentLessonId].illustration, lesson);
  bindStepInteractions();
}

function buildLectureText(lesson, stepData) {
  const zh = languageMode === "zh";
  const opening = currentStepIndex === 0 ? lesson.prep : stepData.guide;
  const typeHelp = {
    cover: zh
      ? "讲法：先让孩子看画面，不急着解释概念。请孩子用自己的话说今天可能要学什么，再把课程目标说出来。"
      : "How to teach: let children look at the picture first. Ask what they think today's lesson is about, then state the goal.",
    talk: zh
      ? "讲法：用生活问题引入，尽量问孩子经历过的场景。不要直接给定义，用追问让孩子自己发现问题。"
      : "How to teach: start from daily life. Ask about situations children know. Avoid definitions; use questions.",
    story: zh
      ? "讲法：故事要讲出起因、遇到的问题、孩子做出的选择、结果。讲完后不要急着总结，先让孩子复述一遍。"
      : "How to teach: tell the beginning, problem, choice, and result. After the story, let the child retell it first.",
    rules: zh
      ? "讲法：每讲一个规则，就让孩子举一个自己的例子。规则不用背，能用出来更重要。"
      : "How to teach: after each rule, ask the child for their own example. Using rules matters more than memorizing them.",
    quiz: zh
      ? "讲法：孩子选完后，一定问“为什么”。答错时不要说错了，而是让孩子找缺了什么信息。"
      : "How to teach: after the child chooses, ask why. If wrong, ask what information is missing.",
    builder: zh
      ? "讲法：这是孩子输出的环节。家长只做记录员和提问者，不要抢着帮孩子组织漂亮答案。"
      : "How to teach: this is the child's output stage. The parent records and asks, but does not take over.",
    flip: zh
      ? "讲法：翻卡片时让孩子先判断，再补充原因。重点是建立边界，不是吓唬孩子。"
      : "How to teach: let the child judge first, then explain why. Build boundaries without creating fear.",
    summary: zh
      ? "讲法：带孩子按顺序回顾“我看到什么、我做了什么、我学会什么、下次怎么用”。让孩子说完整句。"
      : "How to teach: review in order: what I saw, what I did, what I learned, and how I can use it next time."
  }[stepData.type];
  const close = zh
    ? "收束：这一页结束前，让孩子说一句自己的理解。家长可以帮他补完整，但不要替他说。"
    : "Wrap-up: before leaving this page, ask the child to say one sentence in their own words. Help complete it, but do not speak for them.";
  return [opening, typeHelp, close].filter(Boolean).join("\n\n");
}

function tipsMarkup(lesson) {
  return `<div class="page-tips"><strong>${tr("parentTips")}</strong><span>${lesson.tips[currentStepIndex % lesson.tips.length]}</span></div>`;
}

function renderStep(stepData, illustrationType, lesson) {
  const visual = `<div class="visual-card">${illustration(illustrationType, stepData.type)}</div>`;
  const tips = tipsMarkup(lesson);
  if (stepData.type === "cover" || stepData.type === "talk") {
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
  if (stepData.type === "story") {
    return `
      <div class="story-grid">
        <div class="story-visual">
          ${illustration(illustrationType, "story")}
          <div class="demo-scene" aria-label="${tr("childView")}">
            <div class="demo-orbit"></div><div class="demo-child"></div><div class="demo-bubble">${languageMode === "zh" ? "先想一想，再问AI" : "Think first, then ask AI"}</div><div class="demo-bot"></div>
          </div>
        </div>
        <div class="content-card child-card">
          <span class="time-tag">${stepData.minutes}</span>
          <p>${stepData.body}</p>
          <div class="callout"><strong>${languageMode === "zh" ? "问孩子：" : "Ask:"}</strong><br>${stepData.quote}</div>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "rules") {
    return `
      <div class="rules-grid">
        <div class="content-card child-card">
          <span class="time-tag">${stepData.minutes}</span>
          <p class="big-line">${stepData.body}</p>
        </div>
        <div class="content-card">
          <ul class="rule-list">${stepData.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "quiz") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${stepData.minutes}</span>
          <p>${stepData.prompt}</p>
          <div class="choice-list" data-quiz>
            ${stepData.choices.map((choice) => `<button class="choice" data-correct="${choice.correct}" data-feedback="${choice.feedback}">${choice.text}</button>`).join("")}
          </div>
        </div>
        <div class="content-card feedback-card" data-feedback-card>
          <span>${languageMode === "zh" ? "等待选择" : "Waiting"}</span>
          <strong>${languageMode === "zh" ? "点一个答案，看它是不是更清楚。" : "Tap an answer and discuss why."}</strong>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "builder") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${stepData.minutes}</span>
          <p>${stepData.task}</p>
          <div class="chip-grid" data-builder>
            ${stepData.chips.map((chip) => `<button class="chip">${chip}</button>`).join("")}
          </div>
        </div>
        <div class="content-card">
          <h3>${languageMode === "zh" ? "拼出的指令" : "Built Prompt"}</h3>
          <div class="prompt-output" data-prompt-output>${languageMode === "zh" ? "点选拼图，组成一句完整指令。" : "Tap blocks to build a complete prompt."}</div>
          <button class="secondary-action" data-reset-builder>${languageMode === "zh" ? "重新拼" : "Reset"}</button>
        </div>
      </div>
      ${tips}
    `;
  }
  if (stepData.type === "flip") {
    return `
      <div class="game-grid">
        <div class="game-card">
          <span class="time-tag">${stepData.minutes}</span>
          <p>${languageMode === "zh" ? "点开卡片，说说为什么这些问题不能只问AI。" : "Flip a card and discuss why AI should not answer it alone."}</p>
          <div class="flip-grid">
            ${stepData.cards.map((card) => `<button class="flip-card" data-original="${card}" data-answer="${languageMode === "zh" ? "重要问题要问爸爸妈妈或可靠来源" : "Ask parents or reliable sources for important issues"}">${card}</button>`).join("")}
          </div>
        </div>
        ${visual}
      </div>
      ${tips}
    `;
  }
  return `
    <div class="summary-grid">
      <div class="teacher-card">
        <span class="time-tag">${stepData.minutes}</span>
        <p class="big-line">${stepData.chant}</p>
        <div class="quote-box">${languageMode === "zh" ? "家长引导：请孩子用自己的话讲一遍今天从开始到结束做了什么。重点不是背答案，而是说出过程、方法和下次怎么用。" : "Parent guide: ask the child to explain the whole lesson in their own words. Focus on process, method, and how to use it next time."}</div>
      </div>
      <div class="teacher-card">
        <h3>${languageMode === "zh" ? "完整复盘" : "Full Reflection"}</h3>
        <div class="teacher-grid">${stepData.recap.map((item, index) => `<div><strong>${index + 1}</strong><span>${item}</span></div>`).join("")}</div>
      </div>
    </div>
    ${tips}
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
      card.querySelector("span").textContent = correct ? (languageMode === "zh" ? "选得好" : "Good choice") : (languageMode === "zh" ? "再想一想" : "Think again");
      card.querySelector("strong").textContent = button.dataset.feedback;
      playSfx(correct ? "correct" : "wrong");
    });
  });
  document.querySelectorAll("[data-builder] .chip").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("selected");
      const chips = Array.from(document.querySelectorAll("[data-builder] .chip.selected")).map((item) => item.textContent.trim());
      document.querySelector("[data-prompt-output]").textContent = chips.length ? `${chips.join(languageMode === "zh" ? "，" : ", ")}${languageMode === "zh" ? "。" : "."}` : (languageMode === "zh" ? "点选拼图，组成一句完整指令。" : "Tap blocks to build a complete prompt.");
      playSfx(chips.length >= 4 ? "complete" : "click");
    });
  });
  document.querySelectorAll("[data-reset-builder]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-builder] .chip").forEach((item) => item.classList.remove("selected"));
      document.querySelector("[data-prompt-output]").textContent = languageMode === "zh" ? "点选拼图，组成一句完整指令。" : "Tap blocks to build a complete prompt.";
      playSfx("click");
    });
  });
  document.querySelectorAll(".flip-card").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("revealed");
      button.textContent = button.classList.contains("revealed") ? button.dataset.answer : button.dataset.original;
      playSfx("click");
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
