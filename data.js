window.BRIEF = {
  date: "2026-11-23",
  vibe: "今日 AI 主线从单纯追逐模型分数转向可验证的智能体评测、更高效推理、科学模拟与更严格的治理证据链。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "HF 评测数据集", value: "17K", detail: "过去一年增长约 16 倍" },
    { label: "推理吞吐增益", value: "+24.6pp", detail: "DICE 对强基线" },
    { label: "汽车工程智能体", value: "250+", detail: "SDVault.ai 覆盖 12 个领域" }
  ],
  categories: [
    { label: "产品", value: 2 },
    { label: "研究", value: 5 },
    { label: "政策", value: 2 },
    { label: "芯片", value: 1 }
  ],
  stories: [
    { rank: 1, category: "政策", title: "OpenAI 提议用困惑度对齐前沿安全节奏", summary: "OpenAI 公布自 GPT-3.5 以来的内部预训练损失趋势，并主张以困惑度作为开发者间可比较的共同指标。", impact: "若行业共享统一测量基础，模型能力进展与安全门槛可从主观判断转向更可审计的协同节奏。", source: "OpenAI", url: "https://openai.com/index/perplexity-and-intelligence/", hot: true },
    { rank: 2, category: "芯片", title: "黄仁勋恢复执掌 NVIDIA", summary: "NVIDIA 董事会一致通过黄仁勋立即恢复总裁、CEO 与董事职务，同时继续独立调查并强化出口管制监督。", impact: "全球 AI 芯片龙头恢复创始人领导，但国家安全、合规与出口风险已进入董事会级长期治理。", source: "NVIDIA", url: "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director", hot: true },
    { rank: 3, category: "产品", title: "SDVault.ai 集成 250 多个汽车工程智能体", summary: "L&T Technology Services 推出覆盖 12 个工程领域的汽车研发工具链，试点称可释放 30%–40% 的额外工程产能。", impact: "垂直智能体正从单点助手升级为贯穿需求、设计、验证与合规的工程协作层。", source: "L&T Technology Services", url: "https://nsearchives.nseindia.com/corporate/LTTS_23112026085541_23112026LTTSPRessreleasesd.pdf", hot: true },
    { rank: 4, category: "产品", title: "Hugging Face 给智能体评测做全链路体检", summary: "Hugging Face 发布开放指南，拆解任务、环境、轨迹、验证器与报告等八个环节，并指出仅更换 harness 就可能带来 29.9 个百分点差异。", impact: "智能体排行榜的可信度越来越取决于可复现环境、公开轨迹和评分器审计，而不只是最终分数。", source: "Hugging Face", url: "https://huggingface.co/blog/agentic-evals", hot: true },
    { rank: 5, category: "研究", title: "BioEmu2 加速原子级生物分子动力学", summary: "BioEmu2 统一结构预测、平衡采样与时间演化，支持蛋白质、核酸、配体和离子，并比传统分子动力学快多个数量级。", impact: "可扩展的生成式动力学有望把药物结合、构象变化和稀有状态研究从昂贵模拟推向更广泛筛选。", source: "arXiv", url: "https://arxiv.org/abs/2611.27924", hot: true },
    { rank: 6, category: "研究", title: "DICE 让推测解码更少“碰运气”", summary: "DICE 预先固定采样随机数并同步草稿与验证，在不重训草稿模型、不改变目标分布的前提下提升吞吐，最高领先强基线 24.6 个百分点。", impact: "把已知采样信息用于候选树分配，为大模型服务提供了低改造成本的推理加速路径。", source: "arXiv", url: "https://arxiv.org/abs/2611.27891", hot: true },
    { rank: 7, category: "研究", title: "预训练会逐步“组织”层间协作", summary: "研究用精确的容斥分解追踪 Pythia、OLMo 与 Amber，发现真正依赖多层共同完成的计算会随预训练持续增强。", impact: "这为解释 Transformer 深度为何有效提供了因果证据，也能帮助设计更可靠的剪枝与层删除策略。", source: "arXiv", url: "https://arxiv.org/abs/2611.27911" },
    { rank: 8, category: "研究", title: "多模态 AI 把搜索体验评估压到小时级", summary: "双层框架用 Gemini XS 监测用户情绪回归、用 Gemini 3.0 Pro 诊断页面布局，每日处理约 10 万条实验查询。", impact: "自动化评测可把数周调查缩短到数小时，但生产指标仍需防止模型判断替代真实用户反馈。", source: "arXiv", url: "https://arxiv.org/abs/2611.27899" },
    { rank: 9, category: "研究", title: "SLP-Bench 逐句核验临床语音推理", summary: "SLP-Bench 以临床专家评分核验音频模型推理链中的声学主张；十个开放模型的平衡准确率仅为 0.52–0.58。", impact: "医疗语音模型不能只看最终答案，推理中每个关于患者声音的判断也需要事实性与稳定性审计。", source: "arXiv", url: "https://arxiv.org/abs/2611.27810" },
    { rank: 10, category: "政策", title: "ChildAI-Gov 审计教育科技的儿童数字权利", summary: "系统把 57 份真实 EdTech 政策按安全、隐私、透明、自主和非歧视评分，并将每项判断链接到欧盟 AI 法案等依据。", impact: "证据链接让政策筛查更严格且可追溯，但结果仍是决策支持，不能替代真实行为审计或法律结论。", source: "arXiv", url: "https://arxiv.org/abs/2611.27799" }
  ]
};
