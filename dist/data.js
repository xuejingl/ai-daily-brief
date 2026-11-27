window.BRIEF = {
  date: "2026-11-27",
  vibe: "今日 AI 主线从专用芯片上的高效生成，扩展到机器人自主执行、科研智能体与金融系统风险治理。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "视频生成", value: "22–23秒", detail: "10 秒带声画面" },
    { label: "机器人实测", value: "9/10", detail: "实体机械臂叠块" },
    { label: "AI 债券发行", value: "$3050亿+", detail: "2026 超大规模云厂商" }
  ],
  categories: [
    { label: "产业", value: 2 },
    { label: "工具", value: 2 },
    { label: "研究", value: 2 },
    { label: "政策", value: 2 },
    { label: "芯片", value: 2 }
  ],
  stories: [
    { rank: 1, category: "芯片", title: "Trainium3 跑通 LTX-2.5 视频生成", summary: "Hugging Face 在半台 trn3.48xlarge 上用 32 个 NeuronCore 生成 10 秒 2048×1024 带声视频，模型加载后耗时 22–23 秒。", impact: "专用 AI 加速器已能承接高分辨率多模态生成，并以张量与序列并行逼近商业 API 的端到端速度。", source: "Hugging Face", url: "https://huggingface.co/blog/video-trainium3", hot: true },
    { rank: 2, category: "产业", title: "Anthropic 将 Messages API 迁至 Rust", summary: "Claude 协助把核心 API 从 Python 迁到 Rust，并用生产流量影子验证新旧行为一致性。", impact: "迁移让每次请求 CPU 用量降低约 70%、首 token 中位延迟下降约 20%，展示智能体参与高风险生产重写的可行路径。", source: "Anthropic", url: "https://www.anthropic.com/research/migrating-api-to-rust", hot: true },
    { rank: 3, category: "产业", title: "RoboRSI-27B 走出模拟器", summary: "SenseTime 的 270 亿参数模型可在 VLA 与代码控制间自主切换，并以同一组模拟训练权重驱动实体机械臂。", impact: "模型在实体叠块中 10 次成功 9 次、抓放成功 6 次，显示低成本机器人策略可通过模拟训练直接迁移。", source: "SenseTime", url: "https://sensetime.com/en/news/sensenova-roborsi-27b-full-release-20261126-1138", hot: true },
    { rank: 4, category: "政策", title: "英格兰银行警示 AI 金融联动风险", summary: "最新金融稳定报告指出，AI 融资正跨越股票、债券与私募信贷，且结构日益复杂、循环和不透明。", impact: "报告预计超大规模云厂商 2026 年发债超过 3050 亿美元，AI 冲击更可能从单一资产传导至整个金融系统。", source: "Bank of England", url: "https://www.bankofengland.co.uk/financial-stability-report/2026/november-2026", hot: true },
    { rank: 5, category: "工具", title: "Nemotron 3.5 Parse 开放数据与加速器", summary: "NVIDIA 发布近 1900 万条合成图表、表格和多语 OCR 数据，并开源微调方案与 DFlash2 推测解码器。", impact: "文档解析在单并发 H200 上提速 7.62 倍，为 RAG 与智能体处理复杂页面降低吞吐瓶颈。", source: "Hugging Face / NVIDIA", url: "https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin", hot: true },
    { rank: 6, category: "研究", title: "REE 用百道开放题考科研智能体", summary: "REE 覆盖 5 大科学领域、23 个学科，让智能体在 12 小时内迭代改进真实研究起始方案。", impact: "Claude Opus 5.5 与 GPT-6.1 Sol 分别在 86% 和 81% 的任务上超过专家方案，为自主科研提供统一过程评测。", source: "arXiv", url: "https://arxiv.org/abs/2611.34646", hot: true },
    { rank: 7, category: "工具", title: "多智能体协作进入可训练阶段", summary: "Hugging Face 用四个共享模型的智能体和可验证任务，演示如何训练沟通协议并评估群体表现。", impact: "多智能体增益不再只依赖提示工程，而可作为独立能力接受强化训练、归因和复现实验。", source: "Hugging Face", url: "https://huggingface.co/blog/training-swarms" },
    { rank: 8, category: "芯片", title: "llama.cpp 上线 AMD 推理基准看板", summary: "公开看板持续追踪 Ryzen 与 Radeon 上不同模型、量化和 llama.cpp 构建的提示处理及生成吞吐。", impact: "开发者可用公开工作流和原始数据定位本地推理回归，更透明地比较 AMD 硬件与软件优化。", source: "Hugging Face / ggml", url: "https://huggingface.co/blog/ggml-org/llamacpp-amd-bench" },
    { rank: 9, category: "研究", title: "TASK Memory 抑制‘记得却答错’", summary: "TASK 把文本记忆、激活引导与知识编辑绑定到同一地址，将十组模型数据中的忽略记忆错误压到最高 1.5%。", impact: "外部记忆系统可从只优化检索，转向控制模型何时采用、如何应用已取回事实。", source: "arXiv", url: "https://arxiv.org/abs/2611.34762" },
    { rank: 10, category: "政策", title: "美国启动 AI 出口按需联盟通道", summary: "美国商务部在 American SI Exports Program 下设立 On-Demand Consortia，为具体海外项目组织企业联合申报。", impact: "11 月 30 日起滚动收件的机制，把 AI 全栈出口从单项许可推进到政府协调的项目级产业联盟。", source: "U.S. Department of Commerce", url: "https://public-inspection.federalregister.gov/2026-24107.pdf" }
  ]
};
