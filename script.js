const pageMeta = {
  zh: {
    title: "彭若鑫 | Data & AI Portfolio",
    description: "彭若鑫 Peng Ruoxin 的个人求职作品集，聚焦 AI 应用开发、数据分析、算法实习、机器视觉与科研项目展示。",
  },
  en: {
    title: "Peng Ruoxin | Data & AI Portfolio",
    description: "Peng Ruoxin's portfolio for AI application development, data analysis, algorithm internships, computer vision, and visual project demos.",
  },
};

const textTranslations = {
  "彭若鑫": "Peng Ruoxin",
  "作品": "Work",
  "履历": "Resume",
  "能力": "Skills",
  "成果": "Results",
  "联系": "Contact",
  "联系我": "Contact Me",
  "数据科学与大数据技术本科，人工智能与大数据计算硕士在读。关注 AI 应用、机器视觉、数据分析与可视化，把算法项目做成可运行、可展示、可复盘的作品。": "B.S. in Data Science and Big Data Technology, currently pursuing an M.Sc. in Artificial Intelligence and Big Data Computing. I focus on AI applications, computer vision, data analysis, and visualization, turning algorithm projects into runnable, reviewable, and demonstrable products.",
  "查看作品": "View Work",
  "看履历": "View Resume",
  "目标岗位": "Target Roles",
  "AI 应用开发 / 数据分析 / 算法实习": "AI Application Development / Data Analysis / Algorithm Internships",
  "目标城市": "Target Cities",
  "深圳 / 成都": "Shenzhen / Chengdu",
  "可展示项目": "Portfolio Projects",
  "7+ 个项目案例": "7+ Project Cases",
  "当前状态": "Current Status",
  "寻梦": "Xunmeng",
  "记录梦境、整理故事、追问线索，并把梦变成漫画分镜。": "Record dreams, structure narratives, ask follow-up questions, and turn dreams into comic storyboards.",
  "加载在线体验": "Load Live Experience",
  "点击任意处开启真实在线体验": "Click anywhere to open the live experience",
  "打开完整产品": "Open Full Product",
  "论文上传后，答案带证据回来": "Upload a paper and get answers with evidence",
  "求职方向": "Career Focus",
  "AI 应用开发、数据分析、算法实习；目标城市深圳 / 成都。": "AI application development, data analysis, and algorithm internships; target cities: Shenzhen / Chengdu.",
  "作品证据": "Evidence of Work",
  "寻梦 AI 产品、RAG 系统、视觉识别、票务 Dashboard 与数据库系统都有界面、视频或交互入口。": "Xunmeng, the RAG tool, vision systems, ticketing dashboard, and database projects all include interfaces, videos, or interactive entry points.",
  "成果入口": "Result Links",
  "中文简历、英文 Resume、GitHub、Google Scholar、CSDN 与联系方式集中保留在页尾。": "Chinese resume, English resume, GitHub, Google Scholar, CSDN, and contact information are grouped at the bottom.",
  "项目可以直接看运行状态。": "Projects are shown as working products.",
  "每个项目都尽量保留界面、录屏、Dashboard 或论文入口，先看运行状态，再看方法和结果。": "Each project keeps a UI, screen recording, dashboard, or paper link, so recruiters can see the running result before reading the method.",
  "全部": "All",
  "视觉": "Vision",
  "数据": "Data",
  "产品": "Product",
  "系统": "System",
  "毕业设计（进行中）｜双分区两阶段 DeRy 架构重组搜索": "Graduation Project in Progress | Dual-Partition Two-Stage DeRy Architecture Reassembly Search",
  "拆分 CNN/ResNet、RegNet、ViT、Swin 等预训练 blocks，结合 coarse/fine partition、两阶段重组搜索与 zero-shot 评估输出候选架构。": "Decomposes pretrained CNN/ResNet, RegNet, ViT, and Swin blocks, then combines coarse/fine partitioning, two-stage reassembly search, and zero-shot evaluation to output candidate architectures.",
  "查看案例": "View Case",
  "打开流程图": "Open Workflow",
  "寻梦 Xunmeng｜AI 梦境记录与漫画生成产品": "Xunmeng | AI Dream Journal and Comic Generation Product",
  "基于 React、FastAPI、SQLite 与 Capacitor 构建，支持梦境记录、AI 整理/解读/追问、情绪关键词统计、漫画分镜与 Android APK 下载。": "Built with React, FastAPI, SQLite, and Capacitor. It supports dream journaling, AI rewriting, interpretation, follow-up questions, emotion and keyword analytics, comic storyboarding, and Android APK download.",
  "移动端体验": "Mobile Demo",
  "打开产品": "Open Product",
  "下载 APK": "Download APK",
  "轻量级学术论文 RAG 系统": "Lightweight Academic Paper RAG System",
  "串联 PDF 预处理、FAISS 向量检索、Ollama/qwen2 推理与 Streamlit 前端，实现本地论文语料问答和评测展示。": "Connects PDF preprocessing, FAISS vector retrieval, Ollama/qwen2 inference, and a Streamlit frontend for local paper QA and evaluation display.",
  "动画介绍": "Motion Intro",
  "打开视频": "Open Video",
  "票务分析与可视化平台": "Ticketing Analysis and Visualization Platform",
  "通过 Python 爬取 12306 票务数据，利用 MySQL、Python 与 Tableau 建立可视化平台，支持车票查询与关联分析。": "Crawled 12306 ticketing data with Python and built a MySQL, Python, and Tableau visualization platform for ticket lookup and relational analysis.",
  "查看 Dashboard": "View Dashboard",
  "基于机器视觉的智慧作物选种研究": "Smart Crop Selection Based on Machine Vision",
  "使用 ANN、YOLO、ConvNeXt 与聚类算法完成大米分类、实时检测、残缺度评估与垩白区域面积计算，产出论文 2 篇。": "Used ANN, YOLO, ConvNeXt, and clustering algorithms for rice classification, real-time detection, defect evaluation, and chalkiness area calculation, resulting in two papers.",
  "生猪聚集行为智能识别": "Intelligent Recognition of Live Pig Aggregation Behavior",
  "主持项目并构建 3000 张生猪图像数据集；YOLOv12 改进后 FPS 84.03→153.84（+83%），Params -48%，聚集识别准确率达 93.79%。": "Led the project and built a 3,000-image live-pig dataset. The improved YOLOv12 raised FPS from 84.03 to 153.84 (+83%), reduced parameters by 48%, and reached 93.79% aggregation recognition accuracy.",
  "博物馆藏品管理系统": "Museum Collection Management System",
  "作为课设队长，利用 MySQL、Java 与 Spring Boot 完成数据库管理系统，实现权限管理、输入拦截、弹窗提醒和图片路径存储。": "Led the course project and built a MySQL, Java, and Spring Boot database management system with permission control, input validation, pop-up reminders, and image path storage.",
  "受损记录": "Damage Records",
  "展出管理": "Exhibition",
  "修复记录": "Restoration",
  "票务分析可视化平台": "Ticketing Analysis Visualization Platform",
  "这是已接入的 Tableau Public 交互式作品，可以直接在页面里查看五一票务数据的可视化分析，也可以打开 Tableau Public 查看完整版本。": "This embedded Tableau Public dashboard lets viewers explore the May Day ticketing analysis directly on the page, with a link to the full Tableau version.",
  "打开完整 Dashboard": "Open Full Dashboard",
  "双分区两阶段 DeRy 架构重组搜索": "Dual-Partition Two-Stage DeRy Architecture Reassembly Search",
  "毕业设计进行中，围绕预训练模型 blocks 的可解释重组搜索，构建从模型拆分、双分区映射、两阶段架构搜索到 zero-shot 评估的完整流程。": "An ongoing graduation project on interpretable reassembly search over pretrained model blocks, covering model decomposition, dual-partition mapping, two-stage architecture search, and zero-shot evaluation.",
  "拆分 CNN/ResNet、RegNet、ViT、Swin 等预训练 blocks，记录 stage、group、Params、FLOPs 和特征形状。": "Decomposes pretrained CNN/ResNet, RegNet, ViT, and Swin blocks and records stage, group, parameters, FLOPs, and feature shapes.",
  "使用 coarse partition（K=6）稳定主干路径，使用 fine partition（K=8）扩展局部 2D 分支选择空间。": "Uses coarse partitioning (K=6) to stabilize the backbone path and fine partitioning (K=8) to expand the local 2D branch search space.",
  "Stage-I 搜索主干架构，Stage-II 保留主干并重组局部 2D 分支，通过 zero-shot 评估筛选候选结构。": "Stage I searches the backbone architecture; Stage II preserves the backbone and reassembles local 2D branches, then filters candidates with zero-shot evaluation.",
  "构建模型结构知识图谱，利用 LLM 学习结构规律与 FLOPs/Params 约束，形成可解释的重组策略结论。": "Builds a model-structure knowledge graph and uses an LLM to learn structural patterns under FLOPs and parameter constraints for interpretable reassembly strategies.",
  "重置": "Reset",
  "K=6 主干 / K=8 分支": "K=6 Backbone / K=8 Branches",
  "两阶段结构重组": "Two-stage reassembly",
  "Zero-Shot 评分输出": "Zero-shot scoring output",
  "视频项目用轻量动画先讲清楚看点。": "Video projects start with lightweight animations.",
  "每个动画只保留一个核心链路：输入、方法、输出。想看真实界面时，再打开对应视频。": "Each animation keeps one core path: input, method, and output. Open the video to inspect the real interface.",
  "动画表达“上传论文 - 检索片段 - 本地模型回答”的链路，视频负责展示真实界面。": "The animation explains the upload -> retrieval -> local answer path, while the video shows the actual interface.",
  "动画表达“视觉扫描 - 分类检测 - 质量指标输出”，对应视频里的检测与评估演示。": "The animation explains vision scanning -> classification/detection -> quality metrics, matching the detection and evaluation demo in the video.",
  "3000 张图像、每张 6 头猪标注；最终模型 mAP 提至 96%，FPS 提升 83%，聚集行为准确率 93.79%。": "3,000 images with 6 pigs annotated per image; the final model reached 96% mAP, improved FPS by 83%, and achieved 93.79% aggregation behavior accuracy.",
  "动画表达“藏品记录 - 状态变更 - 展出/修复闭环”，视频展示后台管理操作。": "The animation explains the collection record -> status update -> exhibition/restoration loop, while the videos show the admin workflow.",
  "教育和项目经历按时间线展开。": "Education and project experience in chronological order.",
  "中国农业大学 · 数据科学与大数据技术（本科）": "China Agricultural University | B.S. in Data Science and Big Data Technology",
  "GPA 3.76/4，Rank 5/29；主修人工智能、机器学习、大数据存储与处理、大数据可视化分析、数据挖掘。": "GPA 3.76/4, Rank 5/29. Major coursework: artificial intelligence, machine learning, big data storage and processing, big data visualization and analysis, and data mining.",
  "校级大创项目 · 基于机器视觉的智慧作物选种研究": "University Innovation Project | Smart Crop Selection Based on Machine Vision",
  "使用 ANN、YOLO、ConvNeXt 与聚类算法完成大米分类、实时检测、残缺度评估与垩白区域面积计算，产出 Google Scholar 收录论文 2 篇。": "Used ANN, YOLO, ConvNeXt, and clustering algorithms for rice classification, real-time detection, defect evaluation, and chalkiness area calculation; produced two Google Scholar-indexed papers.",
  "数据库原理与实践课设（队长） · 博物馆藏品管理系统": "Database Course Project Lead | Museum Collection Management System",
  "使用 MySQL、Java 与 Spring Boot 实现藏品数据库管理系统，完成权限管理、错误输入拦截、弹窗提醒和图片路径存储方案。": "Built a collection database management system with MySQL, Java, and Spring Boot, including permission control, invalid-input interception, pop-up reminders, and image path storage.",
  "校级大创项目（主持人） · 生猪聚集行为智能识别": "University Innovation Project Lead | Live Pig Aggregation Recognition",
  "基于 3000 张图像训练 YOLOv12-FasterNet-SCSA，Params 2.82M→1.46M、FLOPs 10.4G→7.1G、FPS 84.03→153.84、mAP 提至 96%；KNN+LOF 聚集算法准确率 93.79%，误检率下降 57.14%。": "Trained YOLOv12-FasterNet-SCSA on 3,000 images: parameters 2.82M -> 1.46M, FLOPs 10.4G -> 7.1G, FPS 84.03 -> 153.84, mAP 96%. The KNN+LOF aggregation algorithm reached 93.79% accuracy and reduced false detections by 57.14%.",
  "大数据分析与可视化项目 · 票务分析": "Big Data Analysis and Visualization Project | Ticketing Analysis",
  "通过 Python 爬取 12306 票务数据，利用 MySQL、Python 与 Tableau 建立可视化平台，支持车票信息交互查询与关联分析。": "Crawled 12306 ticketing data with Python and built a MySQL, Python, and Tableau visualization platform for interactive ticket queries and relational analysis.",
  "香港理工大学 · 人工智能与大数据计算（硕士）": "The Hong Kong Polytechnic University | M.Sc. in Artificial Intelligence and Big Data Computing",
  "硕士在读，持续关注 AI 应用、数据计算、检索增强、模型评估与可视化表达。": "Current master's student focusing on AI applications, data computing, retrieval augmentation, model evaluation, and visual communication.",
  "2025/09 - 至今": "2025/09 - Present",
  "硕士课程项目 · 轻量级学术论文 RAG 系统": "Master's Course Project | Lightweight Academic Paper RAG System",
  "负责交互 APP 与系统整合，串联 PDF 预处理、FAISS 向量检索、Ollama/qwen2 推理与 Streamlit 前端，实现本地论文语料问答和评测结果展示。": "Owned the interactive app and system integration, connecting PDF preprocessing, FAISS vector retrieval, Ollama/qwen2 inference, and a Streamlit frontend for local paper QA and evaluation results.",
  "2025/12 - 至今": "2025/12 - Present",
  "毕业设计（进行中） · 双分区两阶段 DeRy 架构重组搜索": "Graduation Project in Progress | Dual-Partition Two-Stage DeRy Reassembly Search",
  "拆分 CNN/ResNet、RegNet、ViT、Swin 等预训练 blocks，结合 coarse/fine partition、两阶段重组搜索、zero-shot 评估与 LLM 结构知识图谱，形成可解释的架构重组策略。": "Decomposes pretrained CNN/ResNet, RegNet, ViT, and Swin blocks and combines coarse/fine partitioning, two-stage reassembly search, zero-shot evaluation, and an LLM-based structure knowledge graph to form interpretable architecture reassembly strategies.",
  "2026/05 - 至今": "2026/05 - Present",
  "个人上线 AI 产品 · 寻梦 Xunmeng": "Personal Live AI Product | Xunmeng",
  "基于 React、FastAPI、SQLite 与 Capacitor 构建梦境记录产品，已部署 dream.rxpeng.com；支持 AI 整理/解读/追问、情绪关键词统计、漫画分镜与 Android APK 打包展示。": "Built and deployed dream.rxpeng.com with React, FastAPI, SQLite, and Capacitor. The product supports dream recording, AI rewriting, interpretation, follow-up questions, emotion and keyword analytics, comic storyboarding, and Android APK packaging.",
  "经历重点": "Experience Highlights",
  "时间线覆盖硕士 / 本科教育、毕业设计、科研项目、课程项目和系统开发课设。": "Timeline covers master's and undergraduate education, graduation project, research projects, course projects, and system-development coursework.",
  "项目方向集中在 AI 产品、AI 应用、机器视觉、数据分析、可视化 Dashboard 和数据库系统。": "Projects focus on AI products, AI applications, computer vision, data analysis, visualization dashboards, and database systems.",
  "成果包括 Google Scholar 收录论文、会议论文、软件著作权和可交互作品展示。": "Outputs include Google Scholar-indexed papers, conference papers, software copyrights, and interactive project demos.",
  "中文简历 PDF": "Chinese Resume PDF",
  "能力来自已经做过的项目。": "Skills backed by shipped projects.",
  "AI 应用": "AI Applications",
  "已完成上线 AI 产品和 RAG 工具：寻梦串联梦境记录、AI 整理/追问、漫画生成与 APK 打包，RAG 系统支持论文证据问答。": "Built a live AI product and a RAG tool: Xunmeng connects dream journaling, AI rewriting/follow-up, comic generation, and APK packaging; the RAG system supports evidence-grounded paper QA.",
  "看 AI 产品": "View AI Product",
  "视觉算法落地": "Applied Vision Algorithms",
  "在 3000 张生猪图像上优化 YOLOv12-FasterNet-SCSA，FPS 提升 83%、mAP 达 96%，并用 KNN+LOF 输出聚集行为指标。": "Optimized YOLOv12-FasterNet-SCSA on 3,000 live-pig images, improving FPS by 83%, reaching 96% mAP, and using KNN+LOF to output aggregation behavior metrics.",
  "看视觉项目": "View Vision Project",
  "数据产品表达": "Data Product Communication",
  "从 12306 数据采集、MySQL 存储到 Tableau Dashboard，做成可筛选、可交互的票务分析页面。": "Turned 12306 data crawling, MySQL storage, and Tableau visualization into a filterable, interactive ticketing analysis page.",
  "看 Dashboard": "View Dashboard",
  "科研表达": "Research Communication",
  "把研究整理成论文、软著和可展示作品：Google Scholar 已收录 2 篇大米视觉论文，生猪项目产出 ECPLF 2024 会议论文。": "Converted research into papers, software copyrights, and displayable work: two rice-vision papers are indexed by Google Scholar, and the pig project produced an ECPLF 2024 conference paper.",
  "看成果链接": "View Result Links",
  "科研成果、竞赛与证书集中展示。": "Research outputs, awards, and certificates in one place.",
  "科研成果": "Research Outputs",
  "An overall real-time mechanism for classification and quality evaluation of rice，排序共 1/7。": "An overall real-time mechanism for classification and quality evaluation of rice, ranked 1/7 overall.",
  "Google Scholar 论文页": "Google Scholar Paper",
  "An Improved Pure Fully Connected Neural Network for Rice Grain Classification，排序 2/8。": "An Improved Pure Fully Connected Neural Network for Rice Grain Classification, ranked 2/8.",
  "Intelligent recognition of live pig aggregation behavior based on convolutional neural network，排序 1/2；配套猪只聚集程度计算软件 V1.0，聚集行为识别准确率 93.79%。": "Intelligent recognition of live pig aggregation behavior based on convolutional neural network, ranked 1/2; paired with Pig Aggregation Degree Calculation Software V1.0 and 93.79% aggregation recognition accuracy.",
  "软件著作权": "Software Copyrights",
  "大米品质检测软件 V1.0；猪只聚集程度计算软件 V1.0。": "Rice Quality Detection Software V1.0; Pig Aggregation Degree Calculation Software V1.0.",
  "竞赛与基础能力": "Awards and Core Skills",
  "全国大学生数学竞赛": "National College Student Mathematics Competition",
  "2022、2023 三等奖。": "Third Prize in 2022 and 2023.",
  "全国大学生计算机设计大赛北京市级“朔日杯”赛": "Beijing-level Shuori Cup, Chinese Collegiate Computing Design Competition",
  "2024 三等奖。": "Third Prize, 2024.",
  "中国农业大学大数据技能竞赛": "China Agricultural University Big Data Skills Competition",
  "2022 二等奖。": "Second Prize, 2022.",
  "英语与工具": "English and Tools",
  "雅思 6.5；Python、MySQL、PyTorch、Tableau、FineBI、Coze。": "IELTS 6.5; Python, MySQL, PyTorch, Tableau, FineBI, and Coze.",
  "欢迎聊 AI 应用、数据分析或算法实习。": "Open to AI application, data analysis, and algorithm internship conversations.",
  "目前关注深圳 / 成都实习机会。可通过邮箱或微信联系，也可以继续查看代码、技术博客、学术主页，以及中文 / 英文两版简历。": "I am currently seeking internship opportunities in Shenzhen or Chengdu. You can contact me by email or WeChat, or review my code, technical blog, academic profile, and Chinese / English resumes.",
  "微信：rxpeng1777": "WeChat: rxpeng1777",
};

const attributeTranslations = {
  "Back to top": "Back to top",
  "加载寻梦在线体验": "Load the Xunmeng live experience",
  "双分区两阶段 DeRy 架构重组搜索流程图": "Dual-partition two-stage DeRy architecture reassembly workflow",
  "Dual-Partition Two-Stage Reassembly for DeRy Architecture Search 流程图": "Dual-Partition Two-Stage Reassembly for DeRy Architecture Search workflow",
  "寻梦 Xunmeng AI 产品移动端预览": "Xunmeng AI product mobile preview",
  "轻量级学术论文 RAG 系统视频预览": "Lightweight academic paper RAG system video preview",
  "票务分析与可视化平台截图": "Ticketing analysis and visualization dashboard screenshot",
  "票务分析与可视化平台 Tableau Dashboard 截图": "Ticketing analysis and visualization Tableau dashboard screenshot",
  "智慧作物选种研究视频预览": "Smart crop selection research video preview",
  "生猪聚集行为智能识别视频预览": "Live pig aggregation recognition video preview",
  "博物馆藏品管理系统视频预览": "Museum collection management system video preview",
  "五一去哪呢票务分析 Tableau Dashboard": "May Day travel ticketing analysis Tableau dashboard",
  "寻梦 Xunmeng AI 产品移动端交互演示": "Xunmeng AI product mobile interactive demo",
};

const textNodeKeys = new WeakMap();

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function collectLocalizableTextNodes() {
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const key = normalizeText(node.nodeValue);
      return textTranslations[key] ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    textNodeKeys.set(node, normalizeText(node.nodeValue));
    nodes.push(node);
  }

  return nodes;
}

function collectLocalizableAttributes() {
  const items = [];
  document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    ["aria-label", "alt", "title"].forEach((attribute) => {
      const key = normalizeText(element.getAttribute(attribute) || "");
      if (attributeTranslations[key]) {
        items.push({ element, attribute, key });
      }
    });
  });
  return items;
}

const localizableTextNodes = collectLocalizableTextNodes();
const localizableAttributes = collectLocalizableAttributes();
const languageButtons = document.querySelectorAll("[data-lang-switch]");

function setStoredLanguage(lang) {
  try {
    localStorage.setItem("portfolio_lang", lang);
  } catch {
    // Ignore private-mode storage failures; the visible language still changes.
  }
}

function getStoredLanguage() {
  try {
    return localStorage.getItem("portfolio_lang");
  } catch {
    return null;
  }
}

function updateLanguageUrl(lang) {
  const url = new URL(window.location.href);
  if (lang === "en") {
    url.searchParams.set("lang", "en");
  } else {
    url.searchParams.delete("lang");
  }
  window.history.replaceState({}, "", url);
}

function applyLanguage(lang, shouldUpdateUrl = true) {
  const activeLang = lang === "en" ? "en" : "zh";
  document.documentElement.lang = activeLang === "en" ? "en" : "zh-CN";
  document.body.dataset.lang = activeLang;
  document.title = pageMeta[activeLang].title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = pageMeta[activeLang].description;
  }

  localizableTextNodes.forEach((node) => {
    const key = textNodeKeys.get(node);
    const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
    const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
    node.nodeValue = `${leading}${activeLang === "en" ? textTranslations[key] : key}${trailing}`;
  });

  localizableAttributes.forEach(({ element, attribute, key }) => {
    element.setAttribute(attribute, activeLang === "en" ? attributeTranslations[key] : key);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === activeLang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  setStoredLanguage(activeLang);
  if (shouldUpdateUrl) {
    updateLanguageUrl(activeLang);
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

const urlLanguage = new URLSearchParams(window.location.search).get("lang");
const initialLanguage = urlLanguage === "en" ? "en" : getStoredLanguage() === "en" ? "en" : "zh";
applyLanguage(initialLanguage, urlLanguage === "en");

const previewButtons = document.querySelectorAll("[data-preview]");
const visualStage = document.querySelector(".visual-stage");

function setPreviewStage(stage) {
  if (!visualStage) return;

  visualStage.dataset.stage = stage;
  previewButtons.forEach((item) => {
    item.classList.toggle("is-active", item.dataset.preview === stage);
  });
}

previewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setPreviewStage(button.dataset.preview);
  });
});

document.querySelectorAll("[data-open-preview]").forEach((link) => {
  link.addEventListener("click", () => {
    setPreviewStage(link.dataset.openPreview);
  });
});

function loadXunmengExperience(panel) {
  const iframe = panel?.querySelector("iframe");
  const launch = panel?.querySelector("[data-xunmeng-launch]");

  if (!iframe || !panel) return;

  panel.classList.add("is-online");
  panel.classList.remove("is-fallback-ready");
  iframe.hidden = false;
  launch?.setAttribute("hidden", "");

  if (!iframe.src) {
    window.requestAnimationFrame(() => {
      iframe.src = iframe.dataset.src;
    });
  }

  window.setTimeout(() => {
    panel.classList.add("is-fallback-ready");
  }, 6000);
}

document.querySelectorAll("[data-xunmeng-launch]").forEach((launch) => {
  launch.addEventListener("click", () => {
    loadXunmengExperience(launch.closest(".xunmeng-hero-panel"));
  });

  launch.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    loadXunmengExperience(launch.closest(".xunmeng-hero-panel"));
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

document.querySelectorAll("[data-play-card]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    card.classList.remove("is-playing");
    window.requestAnimationFrame(() => {
      card.classList.add("is-playing");
    });

    window.setTimeout(() => {
      card.classList.remove("is-playing");
    }, 1500);
  });
});

const demoRange = document.querySelector("#demo-range");
const journeyCards = document.querySelectorAll(".journey-card");
const resetDemo = document.querySelector("#reset-demo");

function setDemoStep(step) {
  journeyCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.step === String(step));
  });
}

demoRange.addEventListener("input", (event) => {
  setDemoStep(event.target.value);
});

resetDemo.addEventListener("click", () => {
  demoRange.value = 1;
  setDemoStep(1);
});

const tableauContainer = document.querySelector("#ticketTableauViz");

if (tableauContainer) {
  const tableauFrame = document.querySelector("#ticketTableauFrame");
  const vizElement = tableauContainer.getElementsByTagName("object")[0];
  const dashboardWidth = 1800;
  const dashboardHeight = 927;

  function resizeTableauViz() {
    const frameWidth = tableauFrame.offsetWidth;
    const scale = Math.min(1, frameWidth / dashboardWidth);
    const scaledHeight = Math.ceil(dashboardHeight * scale);

    tableauFrame.style.height = `${scaledHeight}px`;
    tableauContainer.style.width = `${dashboardWidth}px`;
    tableauContainer.style.height = `${dashboardHeight}px`;
    tableauContainer.style.transform = `scale(${scale})`;
    vizElement.style.width = `${dashboardWidth}px`;
    vizElement.style.height = `${dashboardHeight}px`;
  }

  resizeTableauViz();
  window.addEventListener("resize", resizeTableauViz);

  const tableauScript = document.createElement("script");
  tableauScript.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode.insertBefore(tableauScript, vizElement);
}
