window.BRIEF = {
  date: "2026-11-25",
  vibe: "今日 AI 焦点从更可审计的前沿开发，延伸到更省成本、更懂证据边界的智能体与推理基础设施。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "前沿调用降本", value: "67%", detail: "Delegent 编码任务" },
    { label: "缓存容量提升", value: "1.4×", detail: "LoomKV 无损压缩" },
    { label: "临床错误检出", value: "97%", detail: "LLM + 规则检查器" }
  ],
  categories: [
    { label: "产品", value: 1 },
    { label: "工具", value: 2 },
    { label: "研究", value: 5 },
    { label: "政策", value: 1 },
    { label: "芯片", value: 1 }
  ],
  stories: [
    { rank: 1, category: "政策", title: "OpenAI 倡议用困惑度约束前沿开发", summary: "OpenAI 公开自 GPT-3.5 以来的预训练损失趋势，并提议以困惑度等共同指标设定跨实验室安全节奏。", impact: "统一且可审计的能力尺度，可能把前沿模型的开发边界从原则承诺推进到可量化协作。", source: "OpenAI", url: "https://openai.com/index/perplexity-and-intelligence/", hot: true },
    { rank: 2, category: "芯片", title: "黄仁勋恢复执掌 NVIDIA", summary: "NVIDIA 董事会恢复黄仁勋的总裁、CEO 与董事职务，同时继续独立调查并加强出口管制监督。", impact: "AI 芯片龙头恢复创始人领导，但国家安全与贸易合规已成为董事会级长期议题。", source: "NVIDIA", url: "https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director", hot: true },
    { rank: 3, category: "产品", title: "CUGA 打造印度多语种语音助手", summary: "IBM Research 用 CUGA 将语音识别、跨语言检索与语音合成串联，让农民以本地语言查询 154 页英文手册。", impact: "多语嵌入与可核验页码让语音智能体更容易服务低资源语言和主权部署场景。", source: "Hugging Face", url: "https://huggingface.co/blog/ibm-research/an-indic-voice-agent-with-cuga", hot: true },
    { rank: 4, category: "工具", title: "Delegent 用本地小模型分担智能体任务", summary: "Delegent 让前沿模型保持主导、把检索和测试等子任务交给本地小模型，使长程编码调用成本下降 67%。", impact: "无需训练路由器即可显著削减智能体成本，2B 级模型也能承担高频基础工作。", source: "arXiv", url: "https://arxiv.org/abs/2611.33098", hot: true },
    { rank: 5, category: "工具", title: "LoomKV 无损压缩 GPU 到 SSD 缓存", summary: "LoomKV 在不修改推理引擎的前提下压缩 KV 缓存，使外部缓存等效容量增至 1.4 倍、GPU 可容纳 token 增至约 1.34 倍。", impact: "长会话与智能体服务可减少缓存驱逐和首 token 延迟，同时避免有损压缩改变输出。", source: "arXiv", url: "https://arxiv.org/abs/2611.32954", hot: true },
    { rank: 6, category: "研究", title: "临床智能体评审必须看到真实证据", summary: "对 416 条注入错误的轨迹测试显示，结合完整病历证据的 LLM 与规则检查器可发现 97% 的故障。", impact: "只看最终答案或模型推理不足以保障临床安全，评审系统必须接入原始工具返回和确定性规则。", source: "arXiv", url: "https://arxiv.org/abs/2611.33012", hot: true },
    { rank: 7, category: "研究", title: "RLVB 教智能体等证据够了再回答", summary: "可验证信念强化学习直接奖励继续搜证或及时作答，在九项设置中平均提升基础模型 17.1%。", impact: "训练信号从“猜中结果”转向“基于充分证据行动”，可减少长任务中的过早承诺。", source: "arXiv", url: "https://arxiv.org/abs/2611.32884" },
    { rank: 8, category: "研究", title: "生成式验证器只读分支即可预警", summary: "Prefill1 让 2B 验证器只生成关键分支 token，在 2,015 条代码智能体响应上将常驻服务开销降低 84.84%，F1 基本不变。", impact: "许多在线审核只需先判断“是否有错”，无需完整生成错误定位文本。", source: "arXiv", url: "https://arxiv.org/abs/2611.32931" },
    { rank: 9, category: "研究", title: "HUB-J 从人机分歧中审计评审偏见", summary: "HUB-J 自动提炼可解释偏见因素、量化其强度，并用免训练回归校正受偏见影响的模型判断。", impact: "LLM 评审可从依赖预设偏见清单，转向依据真实人类偏好持续发现和修正系统性误差。", source: "arXiv", url: "https://arxiv.org/abs/2611.33065" },
    { rank: 10, category: "研究", title: "量化模型评测可能把测量误差当退化", summary: "对八个小模型的实验发现，4-bit 有害服从增幅会随评分方式显著变化，int8 结果甚至受批次与填充影响。", impact: "压缩模型的安全结论必须控制评测器、批次和响应偏置，否则可能制造或反转量化效应。", source: "arXiv", url: "https://arxiv.org/abs/2611.32848" }
  ]
};
