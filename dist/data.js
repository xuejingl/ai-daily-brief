window.BRIEF = {
  date: "2026-11-06",
  vibe: "AI 前沿正从单点能力竞赛转向可复现评测、低成本推理与可控的真实世界实验。",
  metrics: [
    { label: "精选动态", value: "10", detail: "最新 24–48 小时窗口" },
    { label: "科研环境", value: "1,000", detail: "Scientist World 已验证环境" },
    { label: "复现实验", value: "92.6%", detail: "ReproBridge 精炼工件成功率" },
    { label: "推理节省", value: "41.26%", detail: "StepBack 最高 token 降幅" }
  ],
  categories: [
    { label: "研究", value: 5 },
    { label: "模型", value: 2 },
    { label: "工具", value: 2 },
    { label: "安全", value: 1 }
  ],
  stories: [
    { rank: 1, category: "工具", title: "ToyBlocks 给机器人学习一座可控试验场", summary: "Ai2 发布开放仿真框架 ToyBlocks，可自动生成任务与演示，并用统一指标拆解机器人规划、感知和动作失败。", impact: "机器人研究可在接近真实物理的窄场景中复现实验、定位泛化瓶颈，再把方法迁移到真机。", source: "Ai2 / Hugging Face", url: "https://huggingface.co/blog/allenai/toyblocks", hot: true },
    { rank: 2, category: "模型", title: "Claude Opus 5.5 主打能力与成本并进", summary: "Anthropic 称 Opus 5.5 在智能体编程、电脑操作和知识工作上领先，典型负载成本较 Opus 5 下降 40%、输出速度提高逾 30%。", impact: "前沿模型竞争进一步转向长任务可靠性、安全边界与单位任务成本，而不只看单项榜单。", source: "Anthropic", url: "https://www.anthropic.com/claude-opus-5-5", hot: true },
    { rank: 3, category: "研究", title: "Scientist World 把论文变成可运行实验", summary: "Scientist World 用自动管线将论文问题与基线方法转成环境，首批开放 1,000 个经验证任务及 6,400 小时研究轨迹。", impact: "AI 科学家首次获得可重复、可比较的训练场，但其宣称的 74% 超越人类基线仍需独立复核。", source: "arXiv", url: "https://arxiv.org/abs/2611.08478", hot: true },
    { rank: 4, category: "研究", title: "Terminal-Bench 2.1 揭示评测也会欠债", summary: "持续审计发现 Terminal-Bench 2.0 约 30% 任务存在问题，修复后准确率变化超过 10 个百分点、名次最多移动三位。", impact: "智能体榜单必须像软件一样持续维护，并把时间等资源预算纳入可复现的测量规范。", source: "arXiv", url: "https://arxiv.org/abs/2611.08417" },
    { rank: 5, category: "研究", title: "SwarmEvolve 让数百智能体在隐空间协作", summary: "该框架用 KV 缓存共享与隐状态新颖度筛选组织低成本智能体群，在 21 个发现任务中用 3–8 分钟追平其他方法 60 分钟的最佳分数。", impact: "减少文本化思维链开销，可能显著加速数学、科学计算与程序优化的迭代搜索。", source: "arXiv", url: "https://arxiv.org/abs/2611.08483" },
    { rank: 6, category: "研究", title: "ReproBridge 把实验复现知识写回工件", summary: "在 1,029 个任务上，标准化代码、环境、启动器与复现指南把四种模型的平均成功率从 76.4% 提升到 92.6%，API 支出降低 19.7%。", impact: "保存智能体补齐的执行细节，可让后续模型更便宜、更稳定地复现机器学习论文。", source: "arXiv", url: "https://arxiv.org/abs/2611.08452" },
    { rank: 7, category: "研究", title: "StepBack 只重采样推理的可疑步骤", summary: "StepBack 先定位草稿轨迹中的首个潜在错误，再重采样该步及后缀，在七项数学与多跳问答中保持自洽采样精度并最多节省 41.26% token。", impact: "测试时算力可从重复整条推理转向修补高风险环节，降低复杂推理的延迟和成本。", source: "arXiv", url: "https://arxiv.org/abs/2611.08403" },
    { rank: 8, category: "工具", title: "开放语音榜单新增埃及与尼日利亚英语", summary: "Hugging Face 与 Liva AI 加入两套私有对话语音测试，分别覆盖 1.34 小时埃及口音和 1.55 小时尼日利亚口音。", impact: "更广口音与隐藏测试集可减少公开集过拟合，让语音识别的全球适用性评估更可信。", source: "Hugging Face / Liva AI", url: "https://huggingface.co/blog/open-asr-leaderboard-liva" },
    { rank: 9, category: "模型", title: "Cosmos 3 开放交互式世界模型", summary: "NVIDIA 发布 Cosmos 3 系列开放模型，让视觉世界可随动作和场景控制连续演化，面向机器人、导航与自动驾驶模拟。", impact: "可实时交互的生成环境能扩大具身智能训练覆盖面，并减少昂贵或危险的真机采样。", source: "NVIDIA / Hugging Face", url: "https://huggingface.co/blog/nvidia/cosmos-interactive-world-simulation" },
    { rank: 10, category: "安全", title: "对话隐私取决于谁在什么场景提问", summary: "一项生成式情境完整性研究让两个模型扮演信息持有者与询问者，发现系统会向正当接收者分享，也会泄露给无权获得信息的人。", impact: "隐私评测需要超越静态拒答率，检验角色、目的与对话过程共同决定的信息流边界。", source: "arXiv", url: "https://arxiv.org/abs/2611.08284" }
  ]
};
