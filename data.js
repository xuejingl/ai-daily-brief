window.BRIEF = {
  date: "2026-11-15",
  vibe: "今日 AI 的主线从‘更大模型’转向‘更可靠系统’：评测真实意图、压缩代理成本、约束工具写入，并重算算力基础设施的时间价值。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方与论文原文核验" },
    { label: "XYBench", value: "8,115", detail: "真实与合成误区问题" },
    { label: "AgentSSL", value: "+21.8%", detail: "最高超越人工基线" },
    { label: "攻击拦截", value: "13,935", detail: "CapLite 测试回合" }
  ],
  categories: [
    { label: "评测", value: 1 },
    { label: "工具", value: 3 },
    { label: "智能体", value: 2 },
    { label: "研究", value: 1 },
    { label: "安全", value: 1 },
    { label: "治理", value: 1 },
    { label: "产业", value: 1 }
  ],
  stories: [
    { rank: 1, category: "评测", title: "XYBench 检查 AI 是否帮错了忙", summary: "AI2 发布含 8,115 个问题的 XYBench，测试助手能否识别用户方案背后的误区并转向真实目标。", impact: "五个前沿模型在 Stack Overflow 子集仅有 35%–41% 的回答主要聚焦真实目标，显示‘会判断’不等于‘会纠偏’。", source: "AI2 / Hugging Face", url: "https://huggingface.co/blog/allenai/xybench", hot: true },
    { rank: 2, category: "工具", title: "SimReady 把机器人资产做成可验证积木", summary: "NVIDIA 展示如何用带碰撞、质量与关节属性的 OpenUSD 资产，在 Isaac Sim 中组装机械臂抓取任务。", impact: "标准化资产与配置验证能减少仿真场景的重复工程，但固定位置和脚本轨迹仍不能代表真机鲁棒性。", source: "NVIDIA / Hugging Face", url: "https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place", hot: true },
    { rank: 3, category: "工具", title: "llama.cpp 1.0 稳定本地推理接口", summary: "ggml-org 发布 llama.cpp 与 ggml v1.0.0，以语义化版本明确公共 C API 和 ABI 的兼容边界。", impact: "覆盖逾 150 种架构的本地 AI 生态获得更清晰的升级契约，应用集成与长期维护成本有望下降。", source: "ggml-org / Hugging Face", url: "https://huggingface.co/blog/ggml-org/llama-cpp-v1", hot: true },
    { rank: 4, category: "智能体", title: "AgentSSL 用未标注数据自动拼训练方案", summary: "AgentSSL 把半监督学习视为程序搜索，让机器学习智能体在标签稀缺时组合并改写既有方法。", impact: "它在 12 种设置中的 8 种超过最强人工基线、最高提升 21.8%，但错误的程序选择可让性能下滑 47%。", source: "arXiv", url: "https://arxiv.org/abs/2611.17323", hot: true },
    { rank: 5, category: "智能体", title: "CoReMem 给代码记忆算清成本", summary: "CoReMem 用后续任务的实测价值筛选仓库位置与可执行检查，让编码智能体只保留真正有用的记忆。", impact: "在 ChainSWE 上，27B 智能体解决率从 21.0% 升至 25.7%，步骤减少 17%，缓存感知总 token 减少 11%。", source: "arXiv", url: "https://arxiv.org/abs/2611.17316", hot: true },
    { rank: 6, category: "研究", title: "经典能量模型千倍提速推理训练", summary: "CRAM 以可学习能量下降解决数独和迷宫，并用难度自适应计算替代反复循环的神经网络。", impact: "单 GPU 训练仅需 42–132 毫秒，至少快 1,000 倍且推理 FLOPs 少 282 倍，也提醒业界别用过易谜题夸大推理扩展性。", source: "arXiv", url: "https://arxiv.org/abs/2611.17309", hot: true },
    { rank: 7, category: "工具", title: "Ballad 动态路由不同档位模型", summary: "Ballad 用在线多臂老虎机在启发式搜索过程中动态挑选前沿、免费或开放权重模型。", impact: "它在五类 NP 难题上匹配或超过最佳单模型，并较始终调用最强模型最多节省 65.6% API 成本。", source: "arXiv", url: "https://arxiv.org/abs/2611.17241" },
    { rank: 8, category: "安全", title: "CapLite 不让小模型自写安全规则", summary: "CapLite 直接从工具 schema 推导权限，并要求影响写入对象的参数必须由用户明确给出。", impact: "在 13,935 个受攻击的 AgentDojo 回合中无一次攻击成功，且每回合 token 仅为 CaMeL 的 18%。", source: "arXiv", url: "https://arxiv.org/abs/2611.17115" },
    { rank: 9, category: "治理", title: "自主 AI 需要可编程制度", summary: "研究提出互惠、问责、分工、认知多元、纠错、人类方向与制度适应七项多智能体治理原则。", impact: "随着智能体形成持续群体，可靠性不再只是单模型对齐问题，交互规则本身也需要可观察、可实验和可追责。", source: "arXiv", url: "https://arxiv.org/abs/2611.17114" },
    { rank: 10, category: "产业", title: "AI 数据中心开始给通电速度定价", summary: "美国大陆技术经济分析把并网、燃气与光储方案的建设时间折算为错失算力成本。", impact: "计入部署速度后，直流耦合微电网在 85% 地点成为最低成本方案，说明‘何时通电’可能比每度电价格更关键。", source: "arXiv", url: "https://arxiv.org/abs/2611.17098" }
  ]
};
