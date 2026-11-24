window.BRIEF = {
  date: "2026-11-24",
  vibe: "今日 AI 焦点落在可验证的智能体能力：从机器人实机迁移、在线自升级到风险可控的数据库与供应链工具。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "并行仿真环境", value: "16,384", detail: "Microduck 避障训练" },
    { label: "实机任务成功", value: "17/20", detail: "RoboTrack 移液测试" },
    { label: "缓存迁移加速", value: "68.98×", detail: "LiveLoRA 中位发布速度" }
  ],
  categories: [
    { label: "产品", value: 2 },
    { label: "研究", value: 6 },
    { label: "政策", value: 1 },
    { label: "芯片", value: 1 }
  ],
  stories: [
    { rank: 1, category: "政策", title: "OpenAI 倡议用困惑度约束前沿开发", summary: "OpenAI 公开自 GPT-3.5 以来的预训练损失趋势，并提议以困惑度等共同指标设定跨实验室安全节奏。", impact: "统一且可审计的能力尺度，可能把前沿模型的开发边界从原则承诺推进到可量化协作。", source: "OpenAI", url: "https://openai.com/index/perplexity-and-intelligence/", hot: true },
    { rank: 2, category: "芯片", title: "黄仁勋恢复执掌 NVIDIA", summary: "NVIDIA 董事会一致恢复黄仁勋的总裁、CEO 与董事职务，同时继续独立调查并强化出口管制监督。", impact: "AI 芯片龙头恢复创始人领导，但国家安全与贸易合规已成为董事会级长期议题。", source: "NVIDIA", url: "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director", hot: true },
    { rank: 3, category: "产品", title: "Microduck 打通仿真到实机避障", summary: "NVIDIA 与 Hugging Face 发布 Isaac Lab 工作流，用 8×8 ToF 感知和 Newton 仿真训练独立避障控制器，并部署到实体机器人。", impact: "冻结行走策略、单独训练导航层，降低了机器人新增感知技能的迭代和迁移成本。", source: "Hugging Face", url: "https://huggingface.co/blog/nvidia/microduck-obstacle-avoidance", hot: true },
    { rank: 4, category: "产品", title: "RoboTrack 用点追踪提升精细操作", summary: "AllenAI 推出机器人点追踪基准与 RoboTracker，在单次示范移液任务中完成 17/20 次，明显领先掩码和光流方案。", impact: "稳定跟踪遮挡下的同一物体，为少样本机器人操作提供了比目标掩码更可靠的视觉表示。", source: "Hugging Face", url: "https://huggingface.co/blog/allenai/robotrack", hot: true },
    { rank: 5, category: "研究", title: "模型会被“不确定”提示纠偏，却不会自查", summary: "对四个开放模型、15,200 次数学尝试的实验显示，自报信心几乎识别不了错误，但外部注入低置信标签可将纠错率提升 3.7–22.5 个百分点。", impact: "推理时自我修正的瓶颈更像错误检测而非修复能力，智能体需要独立验证器而非只靠自省。", source: "arXiv", url: "https://arxiv.org/abs/2611.31228", hot: true },
    { rank: 6, category: "研究", title: "ActSpace-Bench 测试 VLM 主动找证据", summary: "新基准包含 72 个真实室内场景的 994 个问题，并以随机游走和预言路线区分空间推理与有目的探索。", impact: "23 个模型的结果表明，强模型已会主动搜证，但记忆与证据落地仍是空间智能的主要短板。", source: "arXiv", url: "https://arxiv.org/abs/2611.31215", hot: true },
    { rank: 7, category: "研究", title: "具身智能体开始改写自己的权重", summary: "一项研究让 27B 智能体夜间复盘任务记录、无梯度改写单个权重张量，并用自测机制筛掉有害更新。", impact: "若结果可复现，持续学习可从昂贵再训练转向部署中的低成本权重编辑，但稳定性边界仍需严格验证。", source: "arXiv", url: "https://arxiv.org/abs/2611.31117" },
    { rank: 8, category: "研究", title: "LiveLoRA 让在线智能体无缝换适配器", summary: "LiveLoRA 精确迁移最终层 KV 缓存，在 32 个各 8K token 的会话上，发布新适配器比全历史重算快 68.98 倍。", impact: "长期运行的智能体可在不中断上下文的前提下更新能力，为个性化与持续服务降低切换成本。", source: "arXiv", url: "https://arxiv.org/abs/2611.31105" },
    { rank: 9, category: "研究", title: "Preflight 在运行前审计依赖行为", summary: "Preflight 针对应用实际调用的符号生成受限测试，在四类真实供应链事件中识别恶意路径，并对 100 个良性包保持零观测误报。", impact: "面向具体程序的动态验证能补足包级信誉与静态扫描，尤其适合 AI 自动生成代码的依赖链。", source: "arXiv", url: "https://arxiv.org/abs/2611.31110" },
    { rank: 10, category: "研究", title: "Text-to-SQL 学会在高风险查询前弃答", summary: "研究用独立批评模型、结构特征与保形校准估计查询风险，在 15% 风险预算下平均接受 52.4% 查询，实测错误率 9.1%。", impact: "可证明的拒答阈值让自然语言数据库工具从“能执行”迈向“知道何时不该执行”。", source: "arXiv", url: "https://arxiv.org/abs/2611.31190" }
  ]
};
