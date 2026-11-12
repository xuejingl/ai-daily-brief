window.BRIEF = {
  date: "2026-11-12",
  vibe: "今日 AI 的主线是能力上探与落地降本并行：前沿模型继续突破技术任务，科学模型、本地智能体和可复用工作流同步走向实用。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方与论文原文核验" },
    { label: "代码评测", value: "49.1%", detail: "Fable 5.2 FrontierCode" },
    { label: "变异召回", value: "近 2×", detail: "AlphaGenome 2 对比前代" },
    { label: "3D 适配参数", value: "9.3M", detail: "TRELLIS.2 双阶段 LoRA" }
  ],
  categories: [
    { label: "模型", value: 2 },
    { label: "工具", value: 2 },
    { label: "研究", value: 3 },
    { label: "智能体", value: 2 },
    { label: "产业", value: 1 }
  ],
  stories: [
    { rank: 1, category: "模型", title: "Anthropic 推出 Fable 5.2 与 Mythos 5.2", summary: "两款模型共享底模并强化编码、推理与视觉，Fable 面向广泛用户配置网络与生物安全防护，Mythos 向经验证组织开放。", impact: "Fable 5.2 在 FrontierCode 2.0 达 49.1%，输出最高快 30%，标准价格降至每百万输入与输出 token 8/40 美元。", source: "Anthropic", url: "https://www.anthropic.com/claude-fable-and-mythos-5-2", hot: true },
    { rank: 2, category: "研究", title: "AlphaGenome 2 把 DNA 预测细化到细胞", summary: "Google DeepMind 的条件式基因组模型用超过 1.07 亿个单细胞样本训练，可预测特定细胞类型与状态中的变异效应。", impact: "模型在 TenK10K 数据集识别 30% 因果变异，接近前代 16% 的两倍，并已通过 API 向非商业研究开放。", source: "Google DeepMind", url: "https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/", hot: true },
    { rank: 3, category: "工具", title: "TRELLIS.2 迎来可复用的 3D LoRA 流程", summary: "Hugging Face 发布微调脚本、容器与本地或 Jobs 工作流，分别适配 TRELLIS.2 的稀疏结构和几何生成阶段。", impact: "示例仅训练约 930 万个适配参数，并用 188 个鞋类对象改善鞋底几何，降低垂直 3D 生成定制门槛。", source: "Hugging Face", url: "https://huggingface.co/blog/3d-lora-finetuning", hot: true },
    { rank: 4, category: "模型", title: "0.8B BotPsy 把工具智能体塞进设备", summary: "Tether AI Research 发布基于 Qwen3.5-0.8B 的 BotPsy，支持函数调用、多轮工具任务以及 BF16、Q8、Q4 本地部署。", impact: "它在六项工具与智能体评测中的五项领先受测模型，说明隐私敏感的日常自动化可由亚十亿参数模型承担。", source: "Hugging Face / QVAC", url: "https://huggingface.co/blog/qvac/botpsy", hot: true },
    { rank: 5, category: "产业", title: "Scribe v3 同步升级批处理与实时转写", summary: "ElevenLabs 推出录音版 Scribe v3 与实时版 v3 Live，覆盖 102 种语言，并强化说话人分离、轮次检测与术语控制。", impact: "官方测试称批处理词错率比 v2 低 27%，实时语义词错率低 43%，现已接入 ElevenAPI 与 ElevenAgents。", source: "ElevenLabs", url: "https://elevenlabs.io/blog/scribe-v3", hot: true },
    { rank: 6, category: "工具", title: "ReTrace 把智能体轨迹编译成工作流", summary: "ReTrace 从少量智能体运行记录提炼条件规则，再生成由代码选择下一步、无需逐步调用规划模型的可执行流程。", impact: "在 τ²-Bench 上运行时间由 170 秒降至 1.3 秒；生产流程完成率达 93.8%，单任务成本低 24%。", source: "arXiv", url: "https://arxiv.org/abs/2611.14492", hot: true },
    { rank: 7, category: "研究", title: "多向量检索以四分之一存储保住质量", summary: "Hugging Face 展示 token pooling 感知训练，让编码器在合并相似文档向量时主动保留检索关键信息。", impact: "文档向量减少 4 倍时，NanoBEIR nDCG@10 保留率从普通训练的 94.6% 提高到 97.8%，有利于压缩大规模索引。", source: "Hugging Face", url: "https://huggingface.co/blog/token-pooling", hot: true },
    { rank: 8, category: "研究", title: "科学智能体用竞争解释替代单点假设", summary: "Contrastive Discovery 让智能体同时维护互斥且完备的解释集合，并按实验结果重新分配各解释的可信度。", impact: "在相同实验预算下，可解答问题比逐点惊讶度方法多 67%，把“假设被否定”转化为更明确的替代解释。", source: "arXiv", url: "https://arxiv.org/abs/2611.14514" },
    { rank: 9, category: "智能体", title: "先证伪，再把经验写进长期记忆", summary: "FGSE 把每条经验视作待验证假设，先在临时状态执行迁移、证伪和回归测试，再决定提交、修订或拒绝。", impact: "该机制把回归损害压至 1.3%、有害记忆提交压至 3.6%，为持续自我改进增加可审计闸门。", source: "arXiv", url: "https://arxiv.org/abs/2611.14326" },
    { rank: 10, category: "智能体", title: "DrugCoding 编排药物发现工具链", summary: "DrugCoding 结合科研任务规划、模型路由、多智能体协作与代码执行，覆盖分子设计、性质预测和虚拟筛选。", impact: "完整基准会话级 Pass@1 达 97.35%，比最强基线高 9.24%，显示专业模型编排可提升多阶段科研自动化。", source: "arXiv", url: "https://arxiv.org/abs/2611.13651" }
  ]
};
