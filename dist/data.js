window.BRIEF = {
  date: "2026-11-02",
  vibe: "资本继续扩建算力底座，研究端则把长上下文、电脑操作与具身智能推向更高效率和可验证性。",
  metrics: [
    { label: "精选动态", value: "10", detail: "最新 24–48 小时窗口" },
    { label: "研究论文", value: "7", detail: "arXiv 最新批次" },
    { label: "基础设施", value: "$2.6B", detail: "HUMAIN 新增现金投入" },
    { label: "最长上下文", value: "10M", detail: "稀疏注意力实测" }
  ],
  categories: [
    { label: "研究", value: 4 },
    { label: "工具", value: 2 },
    { label: "产业", value: 1 },
    { label: "政策", value: 1 },
    { label: "安全", value: 1 },
    { label: "机器人", value: 1 }
  ],
  stories: [
    { rank: 1, category: "产业", title: "沙特为 HUMAIN 注入 26 亿美元", summary: "Aramco 收购 HUMAIN 49% 股权并投入约 26 亿美元现金，目标到 2030 年部署 3GW AI 数据中心。", impact: "主权资本与能源巨头正把 AI 竞争扩展到超大规模算力和全栈基础设施。", source: "Aramco", url: "https://www.aramco.com/en/news-media/news/2026/pif-and-aramco-close-humain-transaction-to-accelerate-humains-global-growth", hot: true },
    { rank: 2, category: "工具", title: "4B 模型在桌面操作中学会点击与编码", summary: "微软开源 Mage-VL-Cowork，可在 GUI 与终端间自主切换，并在 OSWorld-Verified 达到 66.0%。", impact: "小型多模态模型开始把电脑操作智能体推向本地部署与更低使用成本。", source: "Microsoft / Hugging Face", url: "https://huggingface.co/microsoft/Mage-VL-Cowork", hot: true },
    { rank: 3, category: "政策", title: "OpenAI 将遵守统一 AI 训练偏好信号", summary: "OpenAI 宣布将在未来数月支持 robots.txt 中的通用训练偏好信号，同时保留现有爬虫控制。", impact: "网站无需逐家配置机器人规则，内容授权正向跨平台标准化迈进。", source: "OpenAI", url: "https://openai.com/index/helping-websites-express-ai-training-preferences/", hot: true },
    { rank: 4, category: "研究", title: "稀疏注意力把上下文拉到千万级", summary: "LSA 用层级聚类检索关键键值，在 10M token 上将单层预填相对全注意力加速 72.4 倍。", impact: "超长任务和科研智能体有望获得更实用的记忆窗口。", source: "arXiv", url: "https://arxiv.org/abs/2610.42147" },
    { rank: 5, category: "研究", title: "不同规模模型开始复用上下文缓存", summary: "ACCT 在同一家族模型间转换稀疏 KV 缓存，缩减 75% 缓存后仍保持目标模型表现。", impact: "多模型路由可避免重复预填，让长上下文推理更省时省算力。", source: "arXiv", url: "https://arxiv.org/abs/2610.42116" },
    { rank: 6, category: "机器人", title: "世界模型分离动作因果与场景噪声", summary: "CWAM 为动作头加入稀疏路由，只提取真正驱动动作的潜变量，并在真实机器人上验证闭环效率。", impact: "具身智能可减少对无关视觉因素的依赖，提升跨环境控制稳定性。", source: "arXiv", url: "https://arxiv.org/abs/2610.42096" },
    { rank: 7, category: "安全", title: "同一健康问题会因用户身份得到不同答案", summary: "对六款模型的 2,880 次测试显示，戒烟建议中的关键事实会随年龄、专业背景等人设显著变化。", impact: "医疗助手需要经验证的事实底线，不能只依赖个性化提示。", source: "arXiv", url: "https://arxiv.org/abs/2610.42039" },
    { rank: 8, category: "研究", title: "谈判智能体开始用执行结果而非成交率计分", summary: "TradeWar 将对话承诺结算为关税和贸易份额，TACTIC 的最终经济健康指数从 58.2 提升到 73.2。", impact: "智能体评测正从“说成了”转向“执行后是否创造价值”。", source: "arXiv", url: "https://arxiv.org/abs/2610.42004" },
    { rank: 9, category: "研究", title: "单张 H200 完成 7B 模型九成稀疏剪枝", summary: "ETAPS 以渐进剪枝和稀疏适配，在 50% 至 90% 稀疏率均优于强基线并减少 49% GPU 小时。", impact: "高稀疏模型的训练与部署门槛可能显著下降。", source: "arXiv", url: "https://arxiv.org/abs/2610.41968" },
    { rank: 10, category: "工具", title: "开源库统一采集手术机器人多模态数据", summary: "Sensorium 基于 ROS/ROS2 完成记录、处理、标注和数据集生成，并在 1,516 次手术实验中评估。", impact: "可复现的数据管线将加快具身医疗 AI 的训练与比较。", source: "arXiv", url: "https://arxiv.org/abs/2610.41946" }
  ]
};
