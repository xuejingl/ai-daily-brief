window.BRIEF = {
  date: "2026-11-16",
  vibe: "今日 AI 的焦点从单点能力转向系统约束：芯片访问规则收紧，智能体开始学习自己的运行脚手架，推理服务则把尾延迟当成核心指标。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方公告与论文原文" },
    { label: "推理吞吐", value: "2.4–4.4×", detail: "尾延迟调度提升 SLO goodput" },
    { label: "数学推理", value: "+5.51", detail: "ARCHER 宏平均百分点" },
    { label: "导航数据", value: "1,000", detail: "VLAN 多用户场景" }
  ],
  categories: [
    { label: "政策", value: 2 },
    { label: "工具", value: 1 },
    { label: "智能体", value: 2 },
    { label: "安全", value: 1 },
    { label: "研究", value: 2 },
    { label: "基础设施", value: 1 },
    { label: "机器人", value: 1 }
  ],
  stories: [
    { rank: 1, category: "政策", title: "美国把远程调用纳入先进芯片管制", summary: "美国商务部 BIS 发布临时最终规则，针对经第三国数据中心远程使用先进 AI 芯片与服务器的规避路径。", impact: "出口管制正从硬件跨境延伸到算力访问方式，云服务商与全球 AI 基础设施的合规边界将更复杂。", source: "美国商务部 BIS", url: "https://media.bis.gov/sites/default/files/documents/BIS%20Issues%20Rule%20Addressing%20Remote%20Access%20to%20American%20Super%20Intelligence%20Technology.pdf", hot: true },
    { rank: 2, category: "工具", title: "E4S 26.11 扩充 AI 与 HPC 软件栈", summary: "Extreme-scale Scientific Software Stack 发布 26.11 版，集合逾 125 个 HPC 与 AI 软件包，并加入多款智能体工具与更新后的 GPU 运行时。", impact: "科研团队可在统一、可复现的软件栈中组合本地模型、编程智能体与加速库，降低异构集群部署成本。", source: "E4S", url: "https://e4s.io/news/NEWS_RELEASE_E4S_26.11.pdf", hot: true },
    { rank: 3, category: "智能体", title: "智能体开始学习自己的运行脚手架", summary: "ModHarness-RL 把上下文压缩与行为引导写成可学习程序，并随强化学习训练从轨迹中持续演化。", impact: "在代码搜索、ALFWorld 与 BIRD SQL 多数设置中优于固定脚手架，说明系统层策略也应和模型共同训练。", source: "arXiv", url: "https://arxiv.org/abs/2611.18533", hot: true },
    { rank: 4, category: "智能体", title: "单人示范也能启动多智能体协作", summary: "IBMARL 让示范策略与强化学习策略共同提出动作，再由集中式评论器为协作团队选择组合。", impact: "四项基准中，它在两项上快 2.6–4.2 倍超越示范策略，并在另外两项成为唯一完成超越的方法。", source: "arXiv", url: "https://arxiv.org/abs/2611.18543", hot: true },
    { rank: 5, category: "安全", title: "网页智能体的幻觉可预测却难解释", summary: "研究用线性探针在生成前预测网页元素幻觉，AUC 达 0.80，并通过方向干预修正 85% 的错误动作。", impact: "轻微提示格式变化就会削弱干预效果，表明现有机械可解释性工具距离稳定诊断真实智能体故障仍有差距。", source: "arXiv", url: "https://arxiv.org/abs/2611.18514", hot: true },
    { rank: 6, category: "研究", title: "ARCHER 让小模型输出可执行推理", summary: "ARCHER 把自由文本思维链编译成含计算器调用、运行观察与验证动作的类型化轨迹，再用分层强化学习优化。", impact: "在五个 10B 以下模型上较最强工具基线宏平均提升 5.51 个百分点，为本地低成本数学推理提供可审计路径。", source: "arXiv", url: "https://arxiv.org/abs/2611.18494", hot: true },
    { rank: 7, category: "基础设施", title: "推理调度开始专治解码抖动", summary: "新调度器按迭代延迟尾部分布校准每步预填充预算，并在分离式服务中控制新请求进入节奏。", impact: "其 SLO goodput 在多种模型上提高 2.4–4.4 倍以上，说明 P99 令牌间隔比平均吞吐更决定交互体验。", source: "arXiv", url: "https://arxiv.org/abs/2611.18392" },
    { rank: 8, category: "机器人", title: "VLAN 用不同身体重做导航评测", summary: "VLAN 提供 1,000 个场景、2 万条轨迹和 16 万关键帧，分别标注轮式、足式及残障用户的可达性。", impact: "现有视觉语言模型难以随用户身体条件稳定调整风险判断，机器人导航需要超越统一‘可通行’标签。", source: "arXiv", url: "https://arxiv.org/abs/2611.18346" },
    { rank: 9, category: "研究", title: "腕部肌电把连续打字实时解码", summary: "因果状态空间模型融合肌电与自回归语言模型，在无未来信息下连续预测按键、退格与换行。", impact: "它以少 6.7 倍参数取得 25.13% 字符错误率、较前最佳相对提升 5.4%，推进无键盘输入走向实时。", source: "arXiv", url: "https://arxiv.org/abs/2611.18464" },
    { rank: 10, category: "政策", title: "美联储把 AI 风险带入金融稳定讨论", summary: "美联储理事 Michael Barr 在 AI 金融会议上讨论人工智能对市场与金融稳定的潜在影响。", impact: "这虽非新监管，却显示政策关注正从单机构模型风险扩展到市场集中、共同依赖与系统性传导。", source: "美国联邦储备委员会", url: "https://www.federalreserve.gov/newsevents/speech/files/barr20261116a.pdf" }
  ]
};
