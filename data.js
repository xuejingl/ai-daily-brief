window.BRIEF = {
  date: "2026-11-05",
  vibe: "端侧模型与专用小模型继续压低落地门槛，智能体研究则把重点转向可验证的效率、安全与真实任务价值。",
  metrics: [
    { label: "精选动态", value: "10", detail: "最新 24–48 小时窗口" },
    { label: "端侧语音模型", value: "31M", detail: "Phonon 英文版参数量" },
    { label: "文档抽取模型", value: "2B", detail: "Dharma 专用模型规模" },
    { label: "服务效率", value: "4.87×", detail: "ServerBench 超越 vLLM" }
  ],
  categories: [
    { label: "研究", value: 2 },
    { label: "安全", value: 2 },
    { label: "模型", value: 2 },
    { label: "工具", value: 1 },
    { label: "芯片", value: 1 },
    { label: "基础设施", value: 1 },
    { label: "机器人", value: 1 }
  ],
  stories: [
    { rank: 1, category: "模型", title: "Phonon 把高质量语音留在端侧", summary: "31M 参数的 Phonon 英文模型以 Apache 2.0 开放，可在手机、浏览器和单板机离线运行，并在德语、西语可懂度及 CPU 首帧速度榜单领先。", impact: "小型开放语音模型正把隐私、离线能力和低延迟从云端功能变成设备默认能力。", source: "Hugging Face / Gradium", url: "https://huggingface.co/blog/phonon-tts", hot: true },
    { rank: 2, category: "工具", title: "2B 模型直接把文档变成 JSON", summary: "Dharma Field Extractor 用同一检查点按开放或指定模式抽取字段，在 1,638 个测试案例中胜过其测试的四种通用前沿模型配置。", impact: "垂直小模型可把高频文档流程从昂贵提示工程转成更便宜、结构稳定的专用推理。", source: "Dharma AI / Hugging Face", url: "https://huggingface.co/blog/Dharma-AI/dharma-field-extractor", hot: true },
    { rank: 3, category: "机器人", title: "Cosmos 变成实时物理世界模拟器", summary: "NVIDIA 将 Cosmos 世界基础模型改造成随动作和场景控制连续生成视觉反馈的框架，覆盖机器人操作、相机导航和自动驾驶多视角模拟。", impact: "可交互世界模型为具身智能提供了统一的训练与评测环境，减少真机数据和危险测试成本。", source: "NVIDIA / arXiv", url: "https://arxiv.org/abs/2611.06627", hot: true },
    { rank: 4, category: "基础设施", title: "编程智能体开始自行设计推理服务", summary: "ServerBench 让智能体在延迟、成本与正确性约束下构建完整服务系统，其中 Claude Sonnet 5.5 在 Gemma E4B 上达到 vLLM 参考方案的 4.87 倍。", impact: "AI 不只优化应用代码，也开始以可验证指标自动改造支撑自身运行的推理基础设施。", source: "arXiv", url: "https://arxiv.org/abs/2611.06841" },
    { rank: 5, category: "研究", title: "智能体自主压缩模型接受实测", summary: "CompressionBench 要求六类智能体在容量和时间限制内提交压缩权重与推理代码，36 次尝试中有 29 次通过独立验证。", impact: "模型压缩成为可量化的递归改进任务，也暴露只看困惑度会遗漏生成与执行故障。", source: "arXiv", url: "https://arxiv.org/abs/2611.06858" },
    { rank: 6, category: "研究", title: "LifeVal 衡量 AI 能否处理真实生活事务", summary: "LifeVal 从 3,800 多名消费者调研和真实个人材料构建评测，覆盖求职、搬家、财务与托育等 148 类个性化代理任务。", impact: "智能体评测正从通用题库转向有真实经济价值、需要长期个人上下文的消费者任务。", source: "arXiv", url: "https://arxiv.org/abs/2611.06687" },
    { rank: 7, category: "安全", title: "GraphRail 逐步审计搜索智能体", summary: "GraphRail 把问题、证据与推理拆成结构化主张，无需生成式裁判或标准答案即可发现多跳搜索中的中间错误。", impact: "即使最终答案正确，系统也能追踪证据链缺口，为在线纠错和合规审计提供可解释路径。", source: "arXiv", url: "https://arxiv.org/abs/2611.06662" },
    { rank: 8, category: "安全", title: "删除关键神经元反而加固安全对齐", summary: "Addition by Subtraction 在微调时逐步移除安全关键神经元并重新建立对齐，使四个模型对多类攻击更稳健，部分攻击成功率最高下降 90%。", impact: "让安全行为分散到更多模型组件，可降低单一拒答方向或少量神经元被破坏后的失守风险。", source: "arXiv", url: "https://arxiv.org/abs/2611.06553" },
    { rank: 9, category: "芯片", title: "AMD 数据中心营收同比增长 97%", summary: "AMD 第三季度营收达 134 亿美元，其中数据中心业务创下 85 亿美元纪录，由 EPYC 与 Instinct MI450 系列需求推动。", impact: "AI 基础设施支出继续扩大第二供应商规模，也强化 GPU、CPU 与机架级方案的整合竞争。", source: "AMD", url: "https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results" },
    { rank: 10, category: "模型", title: "Claude Opus 5.5 将成本再降 40%", summary: "Anthropic 发布面向智能体编程、电脑操作与知识工作的 Opus 5.5，典型负载成本较 Opus 5 降低 40%。", impact: "前沿模型竞争持续从单次能力得分转向长任务可靠性、速度与单位任务成本。", source: "Anthropic", url: "https://www.anthropic.com/claude-opus-5-5" }
  ]
};
