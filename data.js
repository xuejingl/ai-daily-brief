window.BRIEF = {
  date: "2026-11-09",
  vibe: "今日 AI 焦点从堆大模型转向提效：合成数据、MoE 裁剪、低比特推理与多智能体协作同时推进。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方与论文原文核验" },
    { label: "合成人物", value: "900万", detail: "日本金融数据集规模" },
    { label: "推理吞吐", value: "3.0×", detail: "FP4 KV 峰值提升上限" },
    { label: "调用成本", value: "低至 1/291", detail: "CPU 推理缓存对比源模型" }
  ],
  categories: [
    { label: "数据", value: 1 },
    { label: "模型", value: 1 },
    { label: "系统/芯片", value: 2 },
    { label: "智能体", value: 3 },
    { label: "研究", value: 2 },
    { label: "评测", value: 1 }
  ],
  stories: [
    { rank: 1, category: "数据", title: "日本金融 AI 获得 900 万合成人物", summary: "NVIDIA 与 Elith 开放基于官方统计构建的日语金融人物数据集，含 50 个字段并采用 CC BY 4.0。", impact: "银行和保险团队可在不接触真实客户资料的前提下训练、模拟和公平性测试金融智能体。", source: "NVIDIA / Hugging Face", url: "https://huggingface.co/blog/nvidia/nemotron-personas-finance-japan", hot: true },
    { rank: 2, category: "模型", title: "HOPE 裁剪 MoE 时保住专家搭档", summary: "Amazon 的二阶裁剪方法把专家协作关系纳入选择，在裁掉 50% 专家时，智能体编程任务最高领先次优方法 6.1%。", impact: "大规模 MoE 有望在无需重训的情况下显著减小显存占用，同时减少激进裁剪造成的能力损失。", source: "Amazon / Hugging Face", url: "https://huggingface.co/blog/amazon/higher-order-pruning-experts", hot: true },
    { rank: 3, category: "系统/芯片", title: "FP4 KV 缓存把 B300 吞吐推高 3 倍", summary: "BitDecoding-FP4 通过量化与内核协同设计，在接近 BF16 精度下把 Qwen3 服务峰值吞吐提升 2.4–3.0 倍。", impact: "长上下文推理可更充分利用 Blackwell 的 FP4 Tensor Core，并降低 KV 缓存的带宽与容量压力。", source: "arXiv", url: "https://arxiv.org/abs/2611.09825", hot: true },
    { rank: 4, category: "系统/芯片", title: "推理轨迹可编译成 CPU 缓存", summary: "CPU-ARC 把模型推理轨迹转成可解释、可持续训练的 CPU 执行缓存，在多项数理任务上达到前沿模型相近表现。", impact: "重复性任务的推理结果可被复用，单次调用成本据报可降至源模型的 1/16–1/291。", source: "arXiv", url: "https://arxiv.org/abs/2611.09891" },
    { rank: 5, category: "智能体", title: "小队并行优于百人智能体大群", summary: "在 12 项长程任务中，多支十人小队并行后择优，比独立采样更常胜出，也在已测试任务上全面超过单支百人队。", impact: "测试时算力应在协作增益与采样多样性之间分配，而非只增加独立尝试或无限扩张单队。", source: "arXiv", url: "https://arxiv.org/abs/2611.09798", hot: true },
    { rank: 6, category: "智能体", title: "智能体审计开始衡量干预因果效应", summary: "新框架用少量随机干预轨迹，估计验证、筛查或人工接管在不同动作和状态下对最终结果的影响。", impact: "安全审计可从静态榜单转向按风险优先级介入真实运行轨迹。", source: "arXiv", url: "https://arxiv.org/abs/2611.09792" },
    { rank: 7, category: "智能体", title: "放射科智能体瓶颈不只在模型", summary: "模拟研究发现，基于已获 FDA 许可工具的编排器只能找回不到三分之一可行动发现，缺工具与漏调用共同限制覆盖。", impact: "医疗 AI 产品化需要同时扩充合规工具目录并提升编排能力，单独升级大模型不足以补齐报告。", source: "arXiv", url: "https://arxiv.org/abs/2611.09836" },
    { rank: 8, category: "研究", title: "FlowAlign 对齐多模态又保住目标空间", summary: "方法以条件流匹配作为训练信号，在图文与单细胞任务中兼顾成对对应关系和目标分布的全局结构。", impact: "固定目标嵌入空间的跨模态分析可减少只顾局部配对或只顾总体分布的取舍。", source: "arXiv", url: "https://arxiv.org/abs/2611.09863" },
    { rank: 9, category: "研究", title: "测试时强化学习给伪标签降温", summary: "PC-DR DPO 根据每道提示的投票可靠度做鲁棒重加权，并用缓存减少在线自监督遗忘，在 30 组设置中有 24 组追平或超过强基线。", impact: "没有人工标签的领域适配可降低有限采样波动带来的错误强化。", source: "arXiv", url: "https://arxiv.org/abs/2611.09872" },
    { rank: 10, category: "评测", title: "选项顺序让决策模型四分之一翻答案", summary: "对 951 道题穷举轮换后，Laya 有 25.8% 的回答随选项位置改变；加入顺序打乱训练后降至 7.2%。", impact: "多选评测必须轮换选项或采用并行布局，否则位置偏差会被误判为知识与推理能力。", source: "arXiv", url: "https://arxiv.org/abs/2611.09803" }
  ]
};
