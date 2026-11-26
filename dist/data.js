window.BRIEF = {
  date: "2026-11-26",
  vibe: "今日 AI 主线从生产系统提效，延伸到可训练的智能体协作、可信科研边界与更可靠的长期记忆。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "API CPU 降幅", value: "70%", detail: "Anthropic Rust 迁移" },
    { label: "文档解析提速", value: "7.62×", detail: "Nemotron 单并发" },
    { label: "超越专家方案", value: "86%", detail: "REE 科研任务" }
  ],
  categories: [
    { label: "产业", value: 1 },
    { label: "工具", value: 3 },
    { label: "研究", value: 4 },
    { label: "政策", value: 1 },
    { label: "芯片", value: 1 }
  ],
  stories: [
    { rank: 1, category: "产业", title: "Anthropic 将 Messages API 迁至 Rust", summary: "Claude 协助把核心 API 从 Python 迁到 Rust，并用生产流量影子验证新旧行为一致性。", impact: "迁移让每次请求 CPU 用量降低约 70%、首 token 中位延迟下降约 20%，展示智能体参与高风险生产重写的可行路径。", source: "Anthropic", url: "https://www.anthropic.com/research/migrating-api-to-rust", hot: true },
    { rank: 2, category: "工具", title: "Nemotron 3.5 Parse 开放训练数据与加速器", summary: "NVIDIA 发布近 1900 万条合成图表、表格和多语 OCR 数据，并开源微调方案与 DFlash2 推测解码器。", impact: "文档解析在单并发 H200 上提速 7.62 倍，为 RAG 与智能体处理复杂页面降低吞吐瓶颈。", source: "Hugging Face / NVIDIA", url: "https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin", hot: true },
    { rank: 3, category: "研究", title: "REE 用百道开放题考科研智能体", summary: "REE 覆盖 5 大科学领域、23 个学科，让智能体在 12 小时内迭代改进真实研究起始方案。", impact: "Claude Opus 5.5 与 GPT-6.1 Sol 分别在 86% 和 81% 任务上超过专家方案，为自主科研提供统一过程评测。", source: "arXiv", url: "https://arxiv.org/abs/2611.34646", hot: true },
    { rank: 4, category: "工具", title: "Hugging Face 发布多智能体训练实战", summary: "新系列从四个共享模型的智能体出发，用可验证任务演示如何训练协作沟通，复现实验约需两张 H200 和五小时。", impact: "多智能体增益不再被视为提示工程的自然结果，而成为可训练、可评估的系统能力。", source: "Hugging Face", url: "https://huggingface.co/blog/training-swarms", hot: true },
    { rank: 5, category: "芯片", title: "llama.cpp 上线 AMD 推理基准看板", summary: "公开看板持续追踪 Ryzen 与 Radeon 上不同模型、量化和 llama.cpp 构建的提示处理及生成吞吐。", impact: "开发者可用公开工作流和原始数据定位本地推理回归，更透明地比较 AMD 硬件与软件优化。", source: "Hugging Face / ggml", url: "https://huggingface.co/blog/ggml-org/llamacpp-amd-bench", hot: true },
    { rank: 6, category: "政策", title: "科研人员为 AI 智能体划出责任边界", summary: "Ai2 访谈 17 位科学家，归纳验证、隐私、客观性、问责与透明度五项科研信任维度。", impact: "科研智能体评测需覆盖证据遗漏、越权访问与方法复现，并让各领域研究者共同制定准入规范。", source: "Hugging Face / Ai2", url: "https://huggingface.co/blog/allenai/where-scientists-draw-the-line-on-ai-agents" },
    { rank: 7, category: "研究", title: "TASK Memory 抑制‘记得却答错’", summary: "TASK 把文本记忆、激活引导与知识编辑绑定到同一地址，将十组模型数据中的忽略记忆错误压到最高 1.5%。", impact: "外部记忆系统可从只优化检索，转向控制模型何时采用、如何应用已取回事实。", source: "arXiv", url: "https://arxiv.org/abs/2611.34762" },
    { rank: 8, category: "研究", title: "ZeroHero 从零训练 5000 万参数智能体", summary: "框架先模仿大模型成功轨迹，再用 PPO 和推理对齐训练不足 5000 万参数的专用语言智能体。", impact: "小模型在网页购物和家庭对话等多步环境接近或超过示范专家，证明专用智能体未必依赖大规模预训练。", source: "arXiv", url: "https://arxiv.org/abs/2611.34635" },
    { rank: 9, category: "工具", title: "HoMe 自动优化长期记忆系统", summary: "HoMe 通过版本化会话、执行轨迹与自适应抽样，迭代修改记忆构建、维护、检索和回答组件。", impact: "智能助理的记忆工程可从手工调参转向评测驱动的结构搜索，同时减少正式评测和查询 token。", source: "arXiv", url: "https://arxiv.org/abs/2611.34624" },
    { rank: 10, category: "研究", title: "理论提示让数学求解更快更准", summary: "向 Qwen3-14B 提供正确理论后，概率题 pass@1 从 0.37 升至 0.83，正确解的中位 token 从 1.02 万降至 6300。", impact: "研究显示模型能从多份不完整笔记中合并部分新理论，提示‘先归纳理论再求解’可节省推理预算。", source: "arXiv", url: "https://arxiv.org/abs/2611.34751" }
  ]
};
