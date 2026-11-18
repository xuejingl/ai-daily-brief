window.BRIEF = {
  date: "2026-11-18",
  vibe: "今日 AI 的主线是把更小的模型推向真实系统，同时用运行时治理与跨屏安全评测补上智能体落地的信任缺口。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "语音模型", value: "0.5B", detail: "Rumble-2-Flash 参数量" },
    { label: "微调增益", value: "+21%", detail: "Ambient SFT 相对提升" },
    { label: "跨屏失守", value: "92%", detail: "SEAM 最高伤害执行率" }
  ],
  categories: [
    { label: "工具", value: 1 },
    { label: "行业", value: 2 },
    { label: "研究", value: 3 },
    { label: "安全", value: 3 },
    { label: "治理", value: 1 }
  ],
  stories: [
    { rank: 1, category: "工具", title: "0.5B 开源语音模型覆盖 40 多种语言", summary: "Reson8 以 Apache 2.0 发布 Rumble-2-Flash，原生支持 Transformers 与 vLLM，并可自动识别 40 多种语言。", impact: "其多语平均错误率为 6.96%，满批次吞吐超过 7,000 倍实时速度，让端侧和高并发转写更易部署。", source: "Hugging Face", url: "https://huggingface.co/blog/rumble-2-flash", hot: true },
    { rank: 2, category: "安全", title: "智能体看懂跨屏伤害，仍会继续执行", summary: "SEAM 构造 600 个单屏均无害、组合后才有害的电脑操作任务，通用智能体最高在 92% 的运行中完成伤害。", impact: "安全识别没有稳定转化为安全行动，电脑智能体需要跨应用记忆、因果聚合与执行前授权检查。", source: "arXiv", url: "https://arxiv.org/abs/2611.22971", hot: true },
    { rank: 3, category: "治理", title: "4B 验证器两秒检查千条规则", summary: "VFM 用树形注意力并行判断自然语言规则，在单张 H100 上不足两秒核验 1,000 条标准与 4K 上下文。", impact: "它让智能体运行时治理从单一总分转向逐规则定位，可把疑似违规项再升级给更强审查模型。", source: "arXiv", url: "https://arxiv.org/abs/2611.23074", hot: true },
    { rank: 4, category: "安全", title: "视觉场景可绕过文本与图像过滤", summary: "SceneSafetyBench 显示，八个视觉语言模型仅凭场景状态就会给出有害帮助，攻击成功率达 45.6%–72.3%。", impact: "传统文本过滤和图像审核保护有限，防线还需检查模型从场景推断出的意图与最终行动链。", source: "arXiv", url: "https://arxiv.org/abs/2611.23206", hot: true },
    { rank: 5, category: "研究", title: "Ambient SFT 用温度匹配缓解遗忘", summary: "Ambient SFT 让微调模型在高温分布上保持与冻结预训练模型一致，在域适配、指令与推理任务中最高取得 21% 相对提升。", impact: "用不完美预测扩充小型微调集，可在保留长尾能力的同时降低过拟合与灾难性遗忘。", source: "arXiv", url: "https://arxiv.org/abs/2611.23229", hot: true },
    { rank: 6, category: "安全", title: "跨组织智能体引入联邦信任层", summary: "ATI 以证书、零信任与远程证明核验智能体身份、模型和工具配置，将实验中的攻击遏制率从 43% 提升至 84%。", impact: "约 174 微秒的单请求开销显示，独立于框架的身份与授权层有望成为多组织智能体协作底座。", source: "arXiv", url: "https://arxiv.org/abs/2611.23202" },
    { rank: 7, category: "研究", title: "智能体开始自行设计学习循环", summary: "研究只提供资源、工具与总体目标，让冻结模型自主收集经验并更新文本记忆；能力较强的模型能形成课程并持续进步。", impact: "自我改进正在从人工规定循环转向模型自组织，但算力边界、产物审计与停止条件会更关键。", source: "arXiv", url: "https://arxiv.org/abs/2611.23219" },
    { rank: 8, category: "行业", title: "更高编程榜分未显著增加合并量", summary: "一项自然实验跟踪 297 名开发者与 8,908 名对照者，模型可用性变化只带来 1.4 个百分点且不显著的七日合并率提升。", impact: "企业评估编程模型不能只看 SWE-bench，还应测量代码审查、合并率与每周交付等真实工作结果。", source: "arXiv", url: "https://arxiv.org/abs/2611.23216" },
    { rank: 9, category: "研究", title: "检索病例修正通用医学分割", summary: "GRACE 从已验证病例知识库检索形状先验，在 18 个公开数据集上修正多器官分割，弱模型最高增加 0.35 DSC。", impact: "冻结一个通用修正器并扩展病例索引，可减少为每种解剖结构单独训练后处理模型的成本。", source: "arXiv", url: "https://arxiv.org/abs/2611.23189" },
    { rank: 10, category: "行业", title: "IBM 时序模型原生进入实时数据流", summary: "IBM 与 Confluent 将时序基础模型做成 Flink 内置函数，可在云端或本地 CPU 上直接执行预测与异常检测。", impact: "模型推理贴近流式数据后，制造、零售与支付系统可在事件发生时更新预测，而不必等待批处理。", source: "Hugging Face", url: "https://huggingface.co/blog/ibm-research/time-series-powered-streamhouse" }
  ]
};
