window.BRIEF = {
  date: "2026-11-14",
  vibe: "今日 AI 更像一场工程校准：从识别用户真实意图、动态世界决策到技能路由与可信引用，评测开始追问系统是否真的帮对了忙。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方与论文原文核验" },
    { label: "XYBench", value: "8,115", detail: "真实与合成误区问题" },
    { label: "技能增益", value: "+11.43", detail: "平均成功率百分点" },
    { label: "引用错配", value: "15.7%", detail: "最高参数记忆占比" }
  ],
  categories: [
    { label: "评测", value: 1 },
    { label: "工具", value: 3 },
    { label: "智能体", value: 3 },
    { label: "研究", value: 2 },
    { label: "安全", value: 1 }
  ],
  stories: [
    { rank: 1, category: "评测", title: "XYBench 检查 AI 是否答错了问题", summary: "AI2 发布含 8,115 个问题的 XYBench，测试助手能否识别用户方案背后的误区并转向真实目标。", impact: "五个前沿模型在 Stack Overflow 子集仅有 35%–41% 的回答主要聚焦真实目标，暴露‘会判断但不会这样回答’的差距。", source: "AI2 / Hugging Face", url: "https://huggingface.co/blog/allenai/xybench", hot: true },
    { rank: 2, category: "工具", title: "SimReady 把机器人资产做成可验证积木", summary: "NVIDIA 展示如何用带碰撞、质量与关节属性的 OpenUSD 资产，在 Isaac Sim 中组装机械臂抓取任务。", impact: "标准化资产与配置验证可减少仿真场景的重复工程，但示例仍是固定位置、脚本轨迹，不能代表真实硬件鲁棒性。", source: "NVIDIA / Hugging Face", url: "https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place", hot: true },
    { rank: 3, category: "智能体", title: "GeoWorld 让地理智能体面对变化中的世界", summary: "GeoWorld 与 LiveGeo 用可追溯的动态地理状态，要求智能体主动取证、检查旧证据并随环境变化修订计划。", impact: "实验显示静态任务表现强并不等于动态可靠，持续验证证据将成为真实世界智能体的核心能力。", source: "arXiv", url: "https://arxiv.org/abs/2611.17267", hot: true },
    { rank: 4, category: "安全", title: "RAG 引用可能来自模型记忆", summary: "研究通过替换检索段落中的事实发现，部分带引用主张实际源于参数记忆，而非所标注的上下文。", impact: "跨模型有 1.2%–15.7% 的可引用主张出现来源错配，常用自然语言推断验证对此接近随机。", source: "arXiv", url: "https://arxiv.org/abs/2611.17161", hot: true },
    { rank: 5, category: "智能体", title: "Skill Adapter 在线改写并路由技能", summary: "Skill Adapter 把个人偏好与执行反馈存成适配器，并随子任务进度动态挑选通用技能和本地修改。", impact: "它在三个基准上较 SkillRL 平均提高 11.43 个成功率百分点，技能池扩至 1,000 项仍保持优势。", source: "arXiv", url: "https://arxiv.org/abs/2611.17007", hot: true },
    { rank: 6, category: "研究", title: "不会行动的模型也可能会教学", summary: "研究把决策模型分别当演员、裁判和教师，发现事后评估整段轨迹能识别行动时忽略的关键子目标。", impact: "JEV 教师把 1.5B 策略在 ALFWorld 的成功率从 72.8% 提至 82.9%，在 WebShop 从 56.8% 提至 71.4%。", source: "arXiv", url: "https://arxiv.org/abs/2611.17167", hot: true },
    { rank: 7, category: "智能体", title: "联邦学习用智能体撮合协作", summary: "Cortex-FL 让用户用自然语言描述目标，再由智能体寻找数据伙伴、协商协议并协调分布式训练与结算。", impact: "四节点原型打通从组队、合约训练到验证交付的全流程，同时把数据与计算授权保留在各所有者手中。", source: "arXiv", url: "https://arxiv.org/abs/2611.17186" },
    { rank: 8, category: "研究", title: "金融 LoRA 不一定需要推理轨迹", summary: "针对 Qwen3-8B 的消融显示，仅训练答案标签的 LoRA 比加入教师推理轨迹更好地改善金融域内表现。", impact: "结果提醒团队别默认长推理监督更优：简单响应训练已能保留通用能力，双适配器也未带来额外收益。", source: "arXiv", url: "https://arxiv.org/abs/2611.17072" },
    { rank: 9, category: "工具", title: "Primer 让教师主导 AI 教学模拟", summary: "开源 Primer 用多智能体把教师的课程意图转成可适应学生回应的教育模拟，并支持本地与开放模型。", impact: "它把教师置于内容与治理中心，为不同学校按自身材料搭建情境练习提供可复用起点。", source: "arXiv", url: "https://arxiv.org/abs/2611.16986" },
    { rank: 10, category: "工具", title: "llama.cpp 1.0 稳定本地推理接口", summary: "ggml-org 发布 llama.cpp 与 ggml v1.0.0，以语义化版本明确公共 C API 和 ABI 的兼容边界。", impact: "覆盖超过 150 种架构的本地 AI 生态获得更清晰的升级契约，应用集成与长期维护成本有望下降。", source: "ggml-org / Hugging Face", url: "https://huggingface.co/blog/ggml-org/llama-cpp-v1" }
  ]
};
