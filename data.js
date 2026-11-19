window.BRIEF = {
  date: "2026-11-19",
  vibe: "今日 AI 的主线是智能体从演示走进生产闭环，同时模型开始直接优化芯片，安全治理也转向可监控、可急停的运行时防线。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "芯片增益", value: "+14%", detail: "OpenAI 与 AMD 的 PPA 提升" },
    { label: "急停时延", value: "35秒", detail: "前沿研究负载停止输出" },
    { label: "训练降耗", value: "4×", detail: "Meta 智能体中位算力缩减" }
  ],
  categories: [
    { label: "产品", value: 2 },
    { label: "行业", value: 2 },
    { label: "芯片", value: 2 },
    { label: "研究", value: 2 },
    { label: "治理", value: 1 },
    { label: "政策", value: 1 }
  ],
  stories: [
    { rank: 1, category: "芯片", title: "模型把旗舰 GPU 设计再推高 14%", summary: "OpenAI 披露模型为 Jalapeño 芯片缩减 10%–13% 标准单元面积，并与 AMD 在高度优化的旗舰 GPU IP 上取得最高 14% PPA 提升。", impact: "生成式 AI 已从写代码进入生产级电路优化，可能压缩芯片迭代周期并反向降低未来模型的算力成本。", source: "OpenAI", url: "https://openai.com/index/advancing-chip-design-with-our-models/", hot: true },
    { rank: 2, category: "产品", title: "Genie 4 开放实时改写交互世界", summary: "Google 向符合条件的 AI Ultra 用户推出 Genie 4，可在探索途中用文本改天气、角色与行动，并生成实时原生音频。", impact: "世界模型正从一次性视频生成转向可编辑、可分享的互动空间，为游戏原型、仿真与具身训练提供新入口。", source: "Google", url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/", hot: true },
    { rank: 3, category: "行业", title: "Anthropic 以 83 美元定价 IPO", summary: "Anthropic 将 A 类普通股发行价定为每股 83 美元，预计 11 月 19 日以 ANT 为代码登陆纳斯达克。", impact: "前沿模型公司进入公开市场后，资本开支、收入质量与安全承诺将接受更持续的投资者审视。", source: "Anthropic", url: "https://www.anthropic.com/news/anthropic-prices-initial-public-offering", hot: true },
    { rank: 4, category: "治理", title: "前沿模型治理加入 35 秒基础设施急停", summary: "OpenAI 公布从隔离训练到外部部署的纵深防御，并称 Control Room 可在收到指令后 35 秒内停止研究负载继续输出。", impact: "安全控制正从模型拒答扩展到网络隔离、全量监控和基础设施级停机，运行时治理成为前沿实验的硬门槛。", source: "OpenAI", url: "https://openai.com/index/managing-frontier-ai-risk/", hot: true },
    { rank: 5, category: "行业", title: "Meta 用智能体扩散广告排序创新", summary: "Meta 让智能体发现、适配并上线广告排序技术，基于数百万次训练记录把部分技术—模型组合的训练算力中位数降低 4 倍。", impact: "智能体开始承担大规模机器学习研发中的判断型工作，企业价值将更多来自跨模型复用与持续实验，而非单次代码生成。", source: "Meta Engineering", url: "https://engineering.fb.com/2026/11/18/ml-applications/ai-agents-to-scale-ml-innovations-across-ads-ranking-models/" },
    { rank: 6, category: "产品", title: "Stitch Loop 让产品智能体常驻生产环境", summary: "Google Labs 推出长时运行的 Stitch Loop，连接代码库和线上指标，持续发现安全、延迟与无障碍问题并提交待审核 PR。", impact: "编码智能体的边界从合并代码延伸到上线后优化，但人工批准、指标权限和回滚机制会直接决定其可用性。", source: "Google Labs", url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/" },
    { rank: 7, category: "芯片", title: "1 PFLOP 桌面机瞄准全天候本地智能体", summary: "NVIDIA RTX Spark 紧凑型桌面机配备 20 核 Grace CPU、6,144 个 CUDA 核和最高 128GB 统一内存，可本地运行 120B 参数模型。", impact: "独立本地 AI 主机把隐私、固定成本与 24/7 智能体带到个人和小团队桌面，推动端云混合推理成为默认形态。", source: "NVIDIA", url: "https://blogs.nvidia.com/blog/rtx-spark-desktop-local-ai-available-now/" },
    { rank: 8, category: "研究", title: "千个布尔监控器几乎不拖慢推理", summary: "GateWatch 用平均 3.8 个稀疏特征和 3.5 个逻辑门监控模型，在 vLLM 中并行部署 1,000 个分类器仍保留 97%–98% 基线吞吐。", impact: "可解释、低开销的激活监控有望覆盖更多在线智能体行为，而不必用大型审查模型为每次调用增加显著延迟。", source: "arXiv", url: "https://arxiv.org/abs/2611.24619" },
    { rank: 9, category: "研究", title: "1,200 个任务把 27B 智能体成绩翻倍", summary: "DaisyRose-27B 用 1,200 个精选长程任务训练 18 天，将 Terminal-Bench 4.1 pass@1 从 5.6% 提升到 12.0%，并以 Apache 2.0 开放权重。", impact: "高质量任务、可靠沙箱和长轨迹强化学习显示，小而精的后训练集也能显著提升开放模型的工具使用能力。", source: "Hugging Face", url: "https://huggingface.co/blog/RadixArk/daisyrose-27b-pushing-the-frontier-of-post-trainin" },
    { rank: 10, category: "政策", title: "美国机构文件改称“超级智能”", summary: "美国行政会议拟按行政命令要求，在非成文法文件与公共沟通中以“Super Intelligence（SI）”替代“Artificial Intelligence（AI）”。", impact: "这首先是联邦行政术语调整而非技术定义或新监管义务，但会影响政府报告、网站与政策沟通的一致性。", source: "Federal Register", url: "https://public-inspection.federalregister.gov/2026-23539.pdf" }
  ]
};
