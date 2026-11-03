window.BRIEF = {
  date: "2026-11-03",
  vibe: "开源工具把模型开发与内容生产做得更可测、更可控，研究前沿则同时推进智能体、具身系统与动态架构。",
  metrics: [
    { label: "精选动态", value: "10", detail: "最新 24–48 小时窗口" },
    { label: "研究论文", value: "8", detail: "arXiv 最新批次" },
    { label: "推理成本", value: "-39%", detail: "Strategist 对比强基线" },
    { label: "攻击成功率", value: "22.9%", detail: "MCP 跨框架实测" }
  ],
  categories: [
    { label: "研究", value: 4 },
    { label: "工具", value: 3 },
    { label: "产业", value: 1 },
    { label: "安全", value: 1 },
    { label: "机器人", value: 1 }
  ],
  stories: [
    { rank: 1, category: "工具", title: "20B 开源模型学会按企业风格做幻灯片", summary: "IBM 的 Palette 用约 1,000 份合成演示稿、双角色流程与渲染修复器微调 20B 模型，在 PresentBench 两个领域排名第一。", impact: "企业可在本地保留机密内容，并把品牌规范直接固化进演示稿生成流程。", source: "IBM Research / Hugging Face", url: "https://huggingface.co/blog/ibm-research/palette-deck-building", hot: true },
    { rank: 2, category: "工具", title: "Transformers 引入模型集成契约", summary: "Hugging Face 提议用缩小模型、真实使用路径和冻结基线，在 CPU 上为模型架构建立可复现的快速回归测试。", impact: "大型模型库有望在合并代码前发现静默精度退化，而无需为每次提交运行完整 GPU 测试。", source: "Hugging Face", url: "https://huggingface.co/blog/transformers-mic", hot: true },
    { rank: 3, category: "安全", title: "MCP 工具投毒在跨框架实测中得手 22.9%", summary: "研究者对 12 个框架、18 个模型和 45 类攻击运行 9,720 组测试，其中 12.1% 的成功样本可验证泄露了秘密。", impact: "智能体平台需要在工具元数据、调用和网络出口层建立系统防护，单靠提示拒绝并不够。", source: "arXiv", url: "https://arxiv.org/abs/2611.03555", hot: true },
    { rank: 4, category: "工具", title: "WebHarbor 复刻 153 个真实网站训练 GUI 智能体", summary: "WebHarbor 提供 153 个可执行、容器化网站与 3,518 个任务，并让 4B 级智能体通过强化学习迁移到未见任务。", impact: "网页智能体可在稳定、可审计的环境中训练和评测，减少对易变在线网站的依赖。", source: "arXiv", url: "https://arxiv.org/abs/2611.03634" },
    { rank: 5, category: "研究", title: "Strategist 让智能体自动进化推理策略", summary: "元智能体把推理流程写成可复用蓝图，在 30 个基准中胜过最强基线 24 次，并以低 39% 的成本达到相近平均准确率。", impact: "智能体优化开始从更换基础模型转向自动搜索、验证和复用推理程序。", source: "arXiv", url: "https://arxiv.org/abs/2611.03618" },
    { rank: 6, category: "机器人", title: "Pixel-UMI 从人类演示学习全身移动操作", summary: "系统结合场景几何重定向、误差感知遮罩与在线纠正，在五类高难任务上取得 87.0% 平均进度。", impact: "机器人数据采集可更多依赖人类自然演示，同时降低视角错位和机体差异带来的训练损失。", source: "arXiv", url: "https://arxiv.org/abs/2611.03647" },
    { rank: 7, category: "研究", title: "Sonar-MoE 边反传边释放专家梯度", summary: "新方法在反向传播时逐层更新专家张量，使峰值显存下降 19% 至 22%，单步训练还快 17% 至 23%。", impact: "MoE 微调可在更小显存预算下运行，并减少梯度裁剪带来的额外耗时。", source: "arXiv", url: "https://arxiv.org/abs/2611.03577" },
    { rank: 8, category: "研究", title: "Transformer 开始按任务动态重排层", summary: "Library of Layers 在推理时自行选择层顺序，并在迷宫、数独、多语言和安全任务中形成不同计算路径。", impact: "模型架构可能从固定流水线转向可组合计算图，在效率与可控推理之间提供新权衡。", source: "arXiv", url: "https://arxiv.org/abs/2611.03526" },
    { rank: 9, category: "研究", title: "量化 VLM 在 Jetson 上离线诊断作物", summary: "PlantVLM-Edge 的 4 位版本保留 98.6% 全精度质量，2B 模型权重仅需 2.01 GiB，首 token 约 0.12 秒。", impact: "视觉语言诊断可在无云连接的边缘设备运行，为农业现场提供低延迟、本地化支持。", source: "arXiv", url: "https://arxiv.org/abs/2611.03557" },
    { rank: 10, category: "产业", title: "企业交付智能体仍卡在需求发现", summary: "对 15 个模型的 Text-to-SQL 实验显示，最强模型能发现逾 80% 隐藏需求，但交付阶段仅 25% 运行通过全部验收。", impact: "企业部署需要把人工需求复核、执行监控和算力约束写进智能体工作流，而非只看基准分数。", source: "arXiv", url: "https://arxiv.org/abs/2611.03551" }
  ]
};
