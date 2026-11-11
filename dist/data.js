window.BRIEF = {
  date: "2026-11-11",
  vibe: "今日 AI 继续向高难技术任务与低成本落地两端扩张：前沿模型刷新能力上限，本地小模型、压缩检索和固化工作流同步降本。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方与论文原文核验" },
    { label: "代码评测", value: "49.1%", detail: "Fable 5.2 FrontierCode" },
    { label: "本地智能体", value: "0.8B", detail: "BotPsy 参数规模" },
    { label: "向量压缩", value: "4×", detail: "仍保留 97.8% 检索质量" }
  ],
  categories: [
    { label: "模型", value: 2 },
    { label: "工具", value: 2 },
    { label: "研究", value: 3 },
    { label: "智能体", value: 2 },
    { label: "产业", value: 1 }
  ],
  stories: [
    { rank: 1, category: "模型", title: "Anthropic 推出 Fable 5.2 与 Mythos 5.2", summary: "两款模型基于同一底模，面向高难技术任务，Fable 配置网络与生物安全防护，Mythos 则向经验证组织开放。", impact: "Fable 5.2 在 FrontierCode 2.0 达 49.1%，输出最高快 30%，并把标准价格降至每百万输入与输出 token 8/40 美元。", source: "Anthropic", url: "https://www.anthropic.com/claude-fable-and-mythos-5-2", hot: true },
    { rank: 2, category: "模型", title: "0.8B BotPsy 把工具智能体塞进设备", summary: "Tether AI Research 发布基于 Qwen3.5-0.8B 的 BotPsy，支持函数调用、多轮工具任务以及 BF16、Q8、Q4 本地部署。", impact: "它在六项工具与智能体评测中的五项领先受测模型，说明隐私敏感的日常自动化可由亚十亿参数模型承担。", source: "Hugging Face / QVAC", url: "https://huggingface.co/blog/qvac/botpsy", hot: true },
    { rank: 3, category: "工具", title: "ReTrace 把智能体轨迹编译成工作流", summary: "ReTrace 从少量智能体运行记录提炼条件规则，再生成由代码选择下一步、无需逐步调用规划模型的可执行流程。", impact: "在 τ²-Bench 上运行时间由 170 秒降至 1.3 秒；生产流程完成率达 93.8%，单任务成本低 24%。", source: "arXiv", url: "https://arxiv.org/abs/2611.14492", hot: true },
    { rank: 4, category: "研究", title: "多向量检索以四分之一存储保住质量", summary: "Hugging Face 展示 token pooling 感知训练，让编码器在合并相似文档向量时主动保留检索关键信息。", impact: "文档向量减少 4 倍时，NanoBEIR nDCG@10 保留率从普通训练的 94.6% 提高到 97.8%，有利于压缩大规模索引。", source: "Hugging Face", url: "https://huggingface.co/blog/token-pooling", hot: true },
    { rank: 5, category: "研究", title: "科学智能体用竞争解释替代单点假设", summary: "Contrastive Discovery 让智能体同时维护互斥且完备的解释集合，并按实验结果重新分配各解释的可信度。", impact: "在相同实验预算下，可解答问题比逐点惊讶度方法多 67%，把“假设被否定”转化为更明确的替代解释。", source: "arXiv", url: "https://arxiv.org/abs/2611.14514", hot: true },
    { rank: 6, category: "智能体", title: "先证伪，再把经验写进长期记忆", summary: "FGSE 把每条经验视作待验证假设，先在临时状态执行迁移、证伪和回归测试，再决定提交、修订或拒绝。", impact: "该机制把回归损害压至 1.3%、有害记忆提交压至 3.6%，为持续自我改进增加可审计闸门。", source: "arXiv", url: "https://arxiv.org/abs/2611.14326" },
    { rank: 7, category: "智能体", title: "DrugCoding 编排药物发现工具链", summary: "DrugCoding 结合科研任务规划、模型路由、多智能体协作与代码执行，覆盖分子设计、性质预测和虚拟筛选。", impact: "完整基准会话级 Pass@1 达 97.35%，比最强基线高 9.24%，显示专业模型编排可提升多阶段科研自动化。", source: "arXiv", url: "https://arxiv.org/abs/2611.13651" },
    { rank: 8, category: "研究", title: "动态升精度给本地推理按需加算力", summary: "研究让 0.6B 模型默认读取 4 位权重，只在熵高或候选接近的不确定步骤重新以 8 位计算。", impact: "约 16% 步骤升精度即可用 87% 的全高精度权重读取量取得 62.7% GSM8K 分数，接近全 8 位的 64.0%。", source: "arXiv", url: "https://arxiv.org/abs/2611.14418" },
    { rank: 9, category: "工具", title: "智能体基准的瓶颈可能是评分尺", summary: "研究重评八套基准，发现二元通过率会掩盖顶尖智能体间的细小差异，也把超过参考答案的表现截平。", impact: "Terminal-Bench 中原本并列的模型在被丢弃的连续指标上相差逾十倍，提示评测应采用分级得分并单列成本。", source: "arXiv", url: "https://arxiv.org/abs/2611.13541" },
    { rank: 10, category: "产业", title: "Hugging Face 接入 Google Cloud 统一采购", summary: "企业可把 Hugging Face 组织绑定 Google Cloud Marketplace，用现有云账单支付订阅、推理、Jobs、GPU Spaces 与存储。", impact: "统一供应商准入与计费可缩短开源模型平台进入企业的采购链路，并让按量 AI 支出直接纳入云成本治理。", source: "Hugging Face", url: "https://huggingface.co/blog/hub-gcp-marketplace" }
  ]
};
