window.BRIEF = {
  date: "2026-11-13",
  vibe: "今日 AI 的主线从‘更大模型’转向‘更稳系统’：本地推理接口、安全上下文、智能体记忆与算力基础设施同时补齐工程底座。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方与论文原文核验" },
    { label: "本地架构", value: "150+", detail: "llama.cpp 已支持变体" },
    { label: "路由降本", value: "65.6%", detail: "Ballad 最高 API 节省" },
    { label: "快速供电胜出", value: "85%", detail: "美国地点中的最低成本方案" }
  ],
  categories: [
    { label: "工具", value: 2 },
    { label: "安全", value: 2 },
    { label: "研究", value: 4 },
    { label: "产业", value: 1 },
    { label: "芯片", value: 1 }
  ],
  stories: [
    { rank: 1, category: "工具", title: "llama.cpp 迈入 1.0", summary: "ggml-org 发布 llama.cpp 与 ggml v1.0.0，并以语义化版本明确公共 C API、ABI 的兼容边界。", impact: "超过 150 种架构与多平台发行渠道获得更稳定的集成契约，本地与隐私 AI 产品更容易长期维护。", source: "Hugging Face / ggml-org", url: "https://huggingface.co/blog/ggml-org/llama-cpp-v1", hot: true },
    { rank: 2, category: "安全", title: "Granite 用 LLMON 分开指令与数据", summary: "IBM 发布 Granite 4.1 3B、8B 的 LLMON 预览版，用专用标记和执行绑定显式表达上下文结构。", impact: "官方测试称其在静态间接提示注入基准上比最佳受测前沿模型多避开 47% 攻击，同时维持常规能力。", source: "IBM Granite / Hugging Face", url: "https://huggingface.co/blog/ibm-granite/llmon-an-llm-native-markup-language-now-in-granite", hot: true },
    { rank: 3, category: "研究", title: "AgentSSL 让智能体自己组合半监督学习", summary: "AgentSSL 把半监督学习视为程序搜索，让机器学习工程智能体在标签稀缺时生成并组合训练策略。", impact: "它在 12 个设置中的 8 个超过最强人工基线、最高提升 21.8%，但也暴露程序选择仍是关键瓶颈。", source: "arXiv", url: "https://arxiv.org/abs/2611.17323", hot: true },
    { rank: 4, category: "研究", title: "代码智能体开始给记忆算成本", summary: "CoReMem 用下一任务的实测价值筛选仓库位置与可执行检查，并让智能体按需使用记忆。", impact: "在 ChainSWE 上，27B 模型解决率从 21.0% 升至 25.7%，步骤少 17%、缓存感知 token 少 11%。", source: "arXiv", url: "https://arxiv.org/abs/2611.17316", hot: true },
    { rank: 5, category: "研究", title: "经典能量模型千倍加速简单推理", summary: "CRAM 用可学习的 Hopfield–Tank 能量函数求解数独与迷宫，并按难度自适应计算、支持提前停止。", impact: "论文报告训练速度至少快 1,000 倍，数独达到基线最高准确率时推理 FLOPs 至少少 282 倍。", source: "arXiv", url: "https://arxiv.org/abs/2611.17309", hot: true },
    { rank: 6, category: "工具", title: "Ballad 用多臂老虎机动态路由模型", summary: "Ballad 在自动启发式搜索中按候选谱系、稀有高分结果和时效性，动态选择不同成本的 LLM。", impact: "它在五个 NP 难问题上匹配或超过最佳单模型，较始终调用最强模型最高节省 65.6% API 成本。", source: "arXiv", url: "https://arxiv.org/abs/2611.17241", hot: true },
    { rank: 7, category: "安全", title: "CapLite 不让小模型自写安全策略", summary: "CapLite 从工具 schema 推导写入权限，并要求决定收件人、金额或目标的参数必须来自用户原始请求。", impact: "13,935 次受攻击 AgentDojo 运行中无攻击成功，单回合 token 仅为 CaMeL 的 18%。", source: "arXiv", url: "https://arxiv.org/abs/2611.17115", hot: true },
    { rank: 8, category: "产业", title: "AI 数据中心供电更看重速度", summary: "一项全美技术经济分析比较电网、天然气及光储微电网，并把更早上线所释放的算力纳入成本。", impact: "计入部署速度后，直流耦合微电网在 85% 的美国地点成为最低成本方案，平均生命周期能源成本也低 18%。", source: "arXiv", url: "https://arxiv.org/abs/2611.17098" },
    { rank: 9, category: "研究", title: "视觉模型意外读懂脑电图", summary: "SeeEEG 把 EEG 渲染成图像，只训练最多 1,113 个显示参数，让冻结的视觉基础模型直接编码脑电。", impact: "DINOv3 在八个数据集的平衡准确率全部超过七个专用 EEG 基础模型，提示跨模态预训练可复用。", source: "arXiv", url: "https://arxiv.org/abs/2611.17031" },
    { rank: 10, category: "芯片", title: "模拟芯片版图智能体迎来开放基准", summary: "AnalogLayoutWorld 提供 40 个专家审核任务，并用物理、电气验证评测智能体从网表生成 GDS 版图。", impact: "13 种模型与框架组合虽有 91.1% 能产出 GDS，只有 23.0% 通过验收，揭示芯片工程代理的现实差距。", source: "arXiv", url: "https://arxiv.org/abs/2611.16991" }
  ]
};
