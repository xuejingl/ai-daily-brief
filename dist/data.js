window.BRIEF = {
  date: "2026-11-04",
  vibe: "更强的智能体模型正在降本提速，工具链、安全评测、机器人数据与推理基础设施也同步走向可验证、可部署。",
  metrics: [
    { label: "精选动态", value: "10", detail: "最新 24–48 小时窗口" },
    { label: "模型成本", value: "-40%", detail: "Opus 5.5 对比 Opus 5" },
    { label: "数据中心营收", value: "+97%", detail: "AMD 同比增长" },
    { label: "推理吞吐", value: "6.1×", detail: "LoopVQ 峰值提升" }
  ],
  categories: [
    { label: "研究", value: 2 },
    { label: "工具", value: 2 },
    { label: "安全", value: 2 },
    { label: "模型", value: 1 },
    { label: "芯片", value: 1 },
    { label: "基础设施", value: 1 },
    { label: "机器人", value: 1 }
  ],
  stories: [
    { rank: 1, category: "模型", title: "Claude Opus 5.5 降本 40%", summary: "Anthropic 发布 Claude 5.5 系列首款模型 Opus 5.5，主打智能体编程、电脑操作与知识工作，典型负载成本较 Opus 5 低 40%。", impact: "前沿模型竞争从单纯追分转向长任务可靠性、速度与单位任务成本的综合优化。", source: "Anthropic", url: "https://www.anthropic.com/claude-opus-5-5", hot: true },
    { rank: 2, category: "芯片", title: "AMD 数据中心营收同比近翻倍", summary: "AMD 第三季度营收达 134 亿美元，其中数据中心业务创下 85 亿美元纪录、同比增长 97%，由 EPYC 与 MI450 系列需求推动。", impact: "AI 算力需求正加速扩大 AMD 在 GPU、CPU 与整机基础设施市场的规模。", source: "AMD", url: "https://ir.amd.com/news-events/press-releases/detail/1303/amd-reports-third-quarter-2026-financial-results", hot: true },
    { rank: 3, category: "工具", title: "同一模型换框架，任务通过率从 30% 到 81%", summary: "IBM 用同一 GLM-5.3-flash 跑 90 个 AppWorld 任务，CUGA、Hermes 与 Deep Agents 的通过率分别为 81.1%、46.7% 和 30.0%。", impact: "企业智能体的规划、验证、反思与策略执行框架，可能和底座模型本身一样决定成败。", source: "IBM Research / Hugging Face", url: "https://huggingface.co/blog/ibm-research/cuga-harness", hot: true },
    { rank: 4, category: "安全", title: "CyberArena 让安全智能体实时攻防", summary: "新基准让 12 个前沿智能体在 40 项挑战中完成 466 场三回合攻防赛，并由外部设施验证夺旗与服务健康状态。", impact: "动态对手比静态漏洞题更能检验智能体的修补、攻击与持续运行能力。", source: "2077AI / Hugging Face", url: "https://huggingface.co/blog/2077AIDataFoundation/cyberarena" },
    { rank: 5, category: "工具", title: "TRL 支持多教师在策略蒸馏", summary: "Hugging Face TRL 的 AsyncDistillationTrainer 已支持 MOPD，可把数学、代码、工具使用等领域的强化学习专家蒸馏回一个通用模型。", impact: "开源团队可复用前沿实验室的多专家合并路线，降低跨领域后训练的工程门槛。", source: "Hugging Face", url: "https://huggingface.co/blog/sergiopaniego/mopd-trl" },
    { rank: 6, category: "研究", title: "DreamX 把视频扩散模型变成动作编码器", summary: "DreamX 将每帧表示从 1,200 个 token 压到 4 个，并在 LARY-Bench 上实现领先的跨人类、机器人与环境动作迁移。", impact: "视频生成模型可进一步充当通用动作接口，为跨机体策略学习压缩数据与算力成本。", source: "arXiv", url: "https://arxiv.org/abs/2611.05377" },
    { rank: 7, category: "安全", title: "PEARL 让行为纠偏更耐后续训练", summary: "研究在 Qwen3-4B 与 GPT-OSS-20B 上用中间状态扩展强化学习轨迹，压制窄触发与广触发失准行为，同时保持任务准确率。", impact: "模型安全需要经得住后续微调，而不只是一次性消除当前测试中的有害输出。", source: "arXiv", url: "https://arxiv.org/abs/2611.05358" },
    { rank: 8, category: "研究", title: "让草稿模型在关键点故意被拒", summary: "对抗式推测推理训练仅 0.06% 至 0.28% 的托管参数，在关键决策点触发目标模型重采样，从而提升长程智能体编程成功率。", impact: "推测解码不再只是加速器，也能成为长任务中分配推理精度的新控制杆。", source: "arXiv", url: "https://arxiv.org/abs/2611.05345" },
    { rank: 9, category: "基础设施", title: "LoopVQ 将 KV 缓存压到每元素 0.5 比特", summary: "LoopVQ 联合量化循环 Transformer 多轮缓存，在 32K 上下文中近乎减半解码延迟，峰值吞吐最高提升 6.1 倍。", impact: "循环架构的主要显存瓶颈被显著压缩，有利于低成本部署长上下文推理服务。", source: "arXiv", url: "https://arxiv.org/abs/2611.05304" },
    { rank: 10, category: "机器人", title: "编程智能体接手机器人数据采集", summary: "PyRUA-DataFarm 只用一次校准演示就自动重建仿真任务，合成数据策略在五项真机任务中取得 93/100 次成功。", impact: "机器人新任务的数据成本可从反复遥操作转向一次性场景搭建与低价自动渲染。", source: "arXiv", url: "https://arxiv.org/abs/2611.05320" }
  ]
};
