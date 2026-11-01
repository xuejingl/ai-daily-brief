window.BRIEF = {
  date: "2026-11-01",
  vibe: "周末没有大厂重磅发布，前沿信号集中在可验证智能体、自动科研与本地多模态系统。",
  metrics: [
    { label: "精选动态", value: "10", detail: "最新 24–48 小时窗口" },
    { label: "研究论文", value: "9", detail: "最新 cs.AI 批次" },
    { label: "智能体", value: "7", detail: "今日核心主题" },
    { label: "可验证性", value: "6", detail: "安全与科学" }
  ],
  categories: [
    { label: "研究", value: 4 },
    { label: "智能体", value: 2 },
    { label: "科学", value: 2 },
    { label: "安全", value: 1 },
    { label: "工具", value: 1 }
  ],
  stories: [
    { rank: 1, category: "科学", title: "AI 智能体闭环完成量子实验", summary: "多智能体从提出问题、推导理论到设计实验，并在发现信号漂移后主动修订测量方案。", impact: "自动科研开始展示自我质疑与纠错，而不只是生成结论。", source: "arXiv", url: "https://arxiv.org/abs/2610.40589", hot: true },
    { rank: 2, category: "安全", title: "在智能体泄密前一刻发出预警", summary: "线性探针在 5% 良性误报阈值下识别出 82% 的即将泄密调用，明显超过零样本监控。", impact: "智能体安全防线可从事后过滤前移到生成前干预。", source: "arXiv", url: "https://arxiv.org/abs/2610.40588", hot: true },
    { rank: 3, category: "研究", title: "Ramanujan 挑战把 AI 数学推向研究级", summary: "参赛系统给出不同于官方解法的正确证明，并解决一项已公开猜想。", impact: "AI 数学评测正从竞赛题转向开放研究问题。", source: "arXiv", url: "https://arxiv.org/abs/2610.40551", hot: true },
    { rank: 4, category: "智能体", title: "代数世界模型从探索走向形式化证明", summary: "AWM 从陌生环境归纳可执行规则，再用 Lean 证明目标可达或不可能。", impact: "智能体获得可检查的世界模型，比纯轨迹试错更可靠。", source: "arXiv", url: "https://arxiv.org/abs/2610.40503" },
    { rank: 5, category: "科学", title: "FARMS 为自动计算科学建立可验证知识层", summary: "系统把计算数学来源转为带上下文、算法含义和定量保证的 AI 可读知识。", impact: "自动科研可在低成本下复用带证明约束的数值方法。", source: "arXiv", url: "https://arxiv.org/abs/2610.40560" },
    { rank: 6, category: "医疗", title: "105 项技能协同临床基因分析", summary: "ClinGeX 在 223 个时间隔离病例上达到 71.7% 任务一致率，强基线为 45.7%。", impact: "可执行专业技能有望缓解临床基因解读的人力瓶颈。", source: "arXiv", url: "https://arxiv.org/abs/2610.40556" },
    { rank: 7, category: "研究", title: "工具智能体评测不再只看最终成功", summary: "Prefix Executability 逐步检查工具调用前缀，揭示终局分数掩盖的无效轨迹。", impact: "开发者可更早定位智能体在哪一步破坏状态或依赖。", source: "arXiv", url: "https://arxiv.org/abs/2610.40444" },
    { rank: 8, category: "工具", title: "Nemotron 驱动单机实时多模态角色", summary: "语音识别、小模型、TTS、视觉与动画在 Blackwell 工作站上组成完整互动角色。", impact: "开放模型已能把低延迟多模态体验落到本地硬件。", source: "Hugging Face", url: "https://huggingface.co/blog/nvidia/nemotron-halloween" },
    { rank: 9, category: "研究", title: "状态化检索用局部遍历替代反复全局搜索", summary: "价值索引记忆让智能体沿持久地址空间移动，并在小型环境中更快学到高回报。", impact: "长上下文记忆可能从无状态搜索转向可持续导航。", source: "arXiv", url: "https://arxiv.org/abs/2610.40545" },
    { rank: 10, category: "智能体", title: "多智能体把个性化学习组织成持续流程", summary: "Agentic University 连接目标、活动与评估，用户平均测评分数提升高于对照组。", impact: "教育智能体的价值从一次问答扩展到长期学习编排。", source: "arXiv", url: "https://arxiv.org/abs/2610.40492" }
  ]
};
