window.BRIEF = {
  date: "2026-11-22",
  vibe: "周末 AI 动态的主线是模型能力继续向本地与智能体场景下沉，同时安全、评测、政策和算力融资加速工程化。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "本地模型上下文", value: "1M", detail: "Inkling 2 Mini" },
    { label: "智能体任务成功率", value: "55%", detail: "Pi + 专用 LoRA" },
    { label: "Anthropic 融资规模", value: "$119.5B", detail: "IPO 与同步私募毛额" }
  ],
  categories: [
    { label: "产品", value: 2 },
    { label: "研究", value: 3 },
    { label: "安全", value: 2 },
    { label: "行业", value: 1 },
    { label: "政策", value: 1 },
    { label: "芯片", value: 1 }
  ],
  stories: [
    { rank: 1, category: "产品", title: "Inkling 2 Mini 把百万上下文搬到本地", summary: "Thinking Machines Lab 发布约 260 亿总参数、每 token 激活 30 亿参数的多模态模型，支持图文输入和 100 万 token 上下文。", impact: "循环层与 MoE 让较小检查点兼顾容量和本地可运行性，并已接入 Transformers、llama.cpp、MLX 与 SGLang。", source: "Hugging Face", url: "https://huggingface.co/blog/inkling2mini", hot: true },
    { rank: 2, category: "行业", title: "Anthropic 完成 IPO 与同步私募", summary: "Anthropic 以每股 83 美元完成 11.27 亿股 IPO，并向 AMD、Google、微软、英伟达等完成约 260 亿美元同步私募。", impact: "IPO 与私募合计毛额约 1195 亿美元，前沿模型公司的算力投入和商业回报将接受公开市场持续检验。", source: "Anthropic", url: "https://www.anthropic.com/news/ipo-close", hot: true },
    { rank: 3, category: "研究", title: "MedChemBench 测试 AI 的药物化学推理", summary: "OpenAI 发布含 99 道题、761 个分子结构的 MedChemBench，GPT-6.2 Astra 在 xhigh 设置取得 84.5% 得分。", impact: "评测把结构复原、证据解释、化合物选择与性质预测拆开衡量，也暴露模型在数值预测和候选选择上的短板。", source: "OpenAI", url: "https://openai.com/index/introducing-medchembench/", hot: true },
    { rank: 4, category: "安全", title: "OpenAI 加固对抗式蒸馏防线", summary: "OpenAI 将训练、分类器、API 控制与协同调查结合；内部自适应评测中，受保护推理提取成功率降至 0.2%。", impact: "前沿模型安全正从单次拒答扩展到请求、账户和模型家族之间的全链路能力防盗与滥用追踪。", source: "OpenAI", url: "https://openai.com/index/combatting-adversarial-distillation/", hot: true },
    { rank: 5, category: "产品", title: "专用 LoRA 让模型适配智能体框架", summary: "Hugging Face 为 Qwen3.8-27B 分别训练 Pi、OpenCode 与 Hermes Agent 的 LoRA，Pi 上 Terminal-Bench 2.1 pass@1 从 39% 升至 55%。", impact: "面向实际执行框架训练轻量适配器，可同时提高任务成功率并把平均 token 用量从 2.9K 压到 1.5K。", source: "Hugging Face", url: "https://huggingface.co/blog/harness-adapters-at-scale", hot: true },
    { rank: 6, category: "芯片", title: "SpaceX 为 Vera Rubin 算力设施融资", summary: "Apollo 与 Goldman Sachs 公布为 SpaceX 地面计算基础设施定价融资，资金将支持采购 NVIDIA Vera Rubin GPU。", impact: "AI 基础设施竞争继续从芯片供给外溢到项目融资，超大规模算力建设越来越依赖资本市场协同。", source: "Apollo", url: "https://ir.apollo.com/_assets/_96154d71700d7cd17bf1075ac49d39bf/apollo/news/2026-11-20_Apollo_and_Goldman_Sachs_Announce_Pricing_of_44_662.pdf" },
    { rank: 7, category: "政策", title: "GAO 给 AI 网络安全列出 16 个政策选项", summary: "美国政府问责局评估 AI 放大钓鱼、深伪与自主攻击链的风险，并提出覆盖指南、研究、全生命周期治理和人才的 16 项政策选项。", impact: "监管焦点正转向测试环境、身份管理、人类授权、确定性回退与采购验证，关键系统采用 AI 的门槛可能提高。", source: "U.S. GAO", url: "https://www.gao.gov/products/gao-27-108458" },
    { rank: 8, category: "安全", title: "Sakana AI 组建独立安全研究组", summary: "Sakana AI 成立面向公共利益的 Security Research Group，研究群体式 AI 网络防御与 AI 系统自身安全。", impact: "攻防双方都在采用智能体后，安全重点正从事后补丁前移到设计质量、权限约束和跨机构协同。", source: "Sakana AI", url: "https://sakana.ai/security-research-group/" },
    { rank: 9, category: "研究", title: "GLiDE 用一次前向传播吸收推理能力", summary: "GLiDE 将推理教师蒸馏进 0.4B–27B 决策模型，27B 版本在单 GPU 上实现 92.9 毫秒中位延迟。", impact: "无需生成长思维链也能获得推理收益，为排序、审核和候选选择等高频决策提供低延迟路径。", source: "arXiv", url: "https://arxiv.org/abs/2611.26509" },
    { rank: 10, category: "研究", title: "智能体开始学习何时保持沉默", summary: "FLUID 用真实人类协作数据，把多模态任务指导拆为证据、必要性与时机弹性，用于评估实时指导智能体。", impact: "把“不开口也可能是最佳动作”纳入基准，有助于减少穿戴式助手和现场指导系统的抢话与无效打断。", source: "arXiv", url: "https://arxiv.org/abs/2611.26491" }
  ]
};
