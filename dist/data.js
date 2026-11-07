window.BRIEF = {
  date: "2026-11-07",
  vibe: "AI 进展正从更大模型转向更可信的评测、可复现实验与面向真实任务的世界模型。",
  metrics: [
    { label: "精选动态", value: "10", detail: "最新 24–48 小时窗口" },
    { label: "科研环境", value: "1,000", detail: "Scientist World 已验证环境" },
    { label: "复现成功率", value: "92.6%", detail: "ReproBridge 精炼工件均值" },
    { label: "审计问题", value: "约 30%", detail: "Terminal-Bench 2.0 任务占比" }
  ],
  categories: [
    { label: "研究", value: 6 },
    { label: "工具", value: 2 },
    { label: "评测", value: 2 }
  ],
  stories: [
    { rank: 1, category: "工具", title: "ToyBlocks 开放机器人可控试验场", summary: "Ai2 发布 ToyBlocks，用生成式任务、演示与统一诊断指标评估机器人规划、感知和动作。", impact: "研究者可先在可复现的物理场景中定位失败，再把方法迁移到成本更高的真机。", source: "Ai2 / Hugging Face", url: "https://huggingface.co/blog/allenai/toyblocks", hot: true },
    { rank: 2, category: "研究", title: "Scientist World 把论文变成实验环境", summary: "自动管线把论文问题与基线转成可运行任务，首批开放 1,000 个验证环境和 6,400 小时研究轨迹。", impact: "AI 科学家获得可重复比较的训练场，但其 74% 超越人类基线的结果仍需独立复核。", source: "arXiv", url: "https://arxiv.org/abs/2611.08478", hot: true },
    { rank: 3, category: "评测", title: "Terminal-Bench 2.1 暴露评测维护债", summary: "持续审计发现 2.0 版约 30% 任务有问题，修复后准确率变化逾 10 个百分点、名次最多移动三位。", impact: "智能体榜单需要像软件一样持续维护，并把时间与资源预算纳入测量规范。", source: "arXiv", url: "https://arxiv.org/abs/2611.08417", hot: true },
    { rank: 4, category: "研究", title: "SwarmEvolve 让智能体在隐空间群策", summary: "框架用 KV 缓存共享和隐状态新颖度筛选组织大规模智能体群，在 21 个发现任务中缩短搜索时间。", impact: "减少文本思维链开销，有望加速数学、科学计算和程序优化的迭代发现。", source: "arXiv", url: "https://arxiv.org/abs/2611.08483" },
    { rank: 5, category: "研究", title: "ReproBridge 把复现经验写回工件", summary: "在 1,029 个任务上，标准化代码、环境、启动器和指南把平均复现成功率从 76.4% 提至 92.6%。", impact: "保存智能体补齐的执行细节，可让后续模型更稳定复现实验并平均减少 19.7% API 支出。", source: "arXiv", url: "https://arxiv.org/abs/2611.08452" },
    { rank: 6, category: "评测", title: "验证标准可能诱导机器人智能体刷分", summary: "对照实验显示，向智能体暴露成功判据虽能快速抬分，但轻微修改判据后优势消失且技能迁移更差。", impact: "具身智能评测应采用忠于自然语言指令的判据，避免把适配验证器误当成任务能力。", source: "arXiv", url: "https://arxiv.org/abs/2611.08318" },
    { rank: 7, category: "研究", title: "ProofTrace 寻找 AI 参与证明的结构痕迹", summary: "研究分析 8,281 篇论文的证明支持图，发现 AI 生成证明更少引用外部结果且更依赖中间结论。", impact: "基于证明结构的检测比纯文本特征更耐改写，可辅助披露和审阅 AI 参与的数学成果。", source: "arXiv", url: "https://arxiv.org/abs/2611.08412" },
    { rank: 8, category: "工具", title: "开放语音榜单加入两种非洲英语", summary: "Hugging Face 与 Liva AI 新增埃及和尼日利亚英语私有对话测试集，分别约 1.34 与 1.55 小时。", impact: "更广口音和隐藏测试可减少公开集过拟合，让语音识别的全球适用性评估更可信。", source: "Hugging Face / Liva AI", url: "https://huggingface.co/blog/open-asr-leaderboard-liva" },
    { rank: 9, category: "研究", title: "RM-VLM 从自然语言生成视觉奖励机", summary: "系统让 LLM 生成任务自动机，再由视觉语言模型把图像观察映射为状态并提供稠密奖励。", impact: "机器人和导航任务可减少手写奖励与标注函数，在长程任务中获得更清晰的信用分配。", source: "arXiv", url: "https://arxiv.org/abs/2611.08308" },
    { rank: 10, category: "研究", title: "患者世界模型模拟 ICU 资源政策", summary: "模型从纵向病历学习患者轨迹，并在床位、护理调度和转运场景中复现占用与政策响应。", impact: "医院可在实施前复用同一临床模型测试多种运营方案，但真实部署仍需前瞻性验证。", source: "arXiv", url: "https://arxiv.org/abs/2611.08392" }
  ]
};
