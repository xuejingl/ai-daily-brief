window.BRIEF = {
  date: "2026-10-29",
  vibe: "开放权重与科学基础设施继续提速，稀疏模型、本地工具和实用研究成为今天的主线。",
  metrics: [
    { label: "精选动态", value: "10", detail: "过去 24–48 小时" },
    { label: "开源/开放", value: "6", detail: "今日最强信号" },
    { label: "本地部署", value: "4", detail: "端侧与单卡" },
    { label: "研究论文", value: "3", detail: "值得细读" }
  ],
  categories: [
    { label: "模型", value: 3 },
    { label: "研究", value: 3 },
    { label: "工具", value: 2 },
    { label: "产业", value: 1 },
    { label: "政策", value: 1 }
  ],
  stories: [
    { rank: 1, category: "模型", title: "Mistral Large 4：万亿参数开放权重 MoE", summary: "约 1T 总参数、49B 激活参数与 1M 上下文，把前沿级能力继续推向自托管。", impact: "企业部署开放模型的上限再次被抬高。", source: "Hugging Face", url: "https://huggingface.co/blog/mistral-large4", hot: true },
    { rank: 2, category: "研究", title: "Timestral：小体量时间序列模型冲上榜首", summary: "四个 5M–209M 参数模型覆盖概率预测，作者报告其在多个基准取得领先。", impact: "生产级预测不再必须依赖巨型模型。", source: "arXiv", url: "https://arxiv.org/abs/2610.37585", hot: true },
    { rank: 3, category: "科学", title: "AI for Science 扩展至研究机构", summary: "多家基金会与科研机构获得机构级 AI 支持，覆盖生物、气候、天文和数学。", impact: "AI 辅助科研开始从个人工具走向机构基础设施。", source: "Anthropic", url: "https://www.anthropic.com/news/ai-for-science-expands-foundations-research-institutions" },
    { rank: 4, category: "工具", title: "Granite Switch 4.1.1：适配器像软件补丁一样更新", summary: "IBM 更新语音识别与决策适配器，同时保持基础模型兼容。", impact: "模块化模型维护更接近传统软件发布。", source: "Hugging Face", url: "https://huggingface.co/blog/ibm-granite/granite-switch-4-1-1" },
    { rank: 5, category: "端侧", title: "Apple 平台迎来本地语音与决策模型", summary: "Swift 应用可在 Core ML、MLX 与 llama.cpp 间切换开放模型并保持本地执行。", impact: "开发者获得更便宜、更私密的云端替代方案。", source: "Hugging Face", url: "https://huggingface.co/blog/anydecisionmodel" },
    { rank: 6, category: "政策", title: "Project ProtoStar 让公共科研数据更适合 AI", summary: "开放科学伙伴启动气候风险挑战，推动公共资助成果机器可读和可复用。", impact: "更好的公共数据将提升可复现性与科研普惠。", source: "Hugging Face", url: "https://huggingface.co/blog/announcing-project-protostar" },
    { rank: 7, category: "芯片", title: "Nemotron 3.5 Transcribe 覆盖 Blackwell 到边缘设备", summary: "30B/4B 激活的开放语音模型统一处理转写、翻译、说话人识别与音频问答。", impact: "一套语音栈可跨边缘与数据中心部署。", source: "Hugging Face", url: "https://huggingface.co/blog/nvidia/nemotron-transcribe-granary" }
  ]
};
