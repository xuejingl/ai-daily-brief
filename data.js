window.BRIEF = {
  date: "2026-11-17",
  vibe: "今日 AI 的主线从模型分数转向系统可信度：开放模型路由加速落地，而基准污染、科学判断与智能体安全正在重写评测标准。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方公告与论文原文" },
    { label: "开放模型份额", value: "71.7%", detail: "OpenRouter 9 月末令牌占比" },
    { label: "基准泄漏", value: "96%", detail: "某基础模型 HumanEval 泄漏率" },
    { label: "医疗评测", value: "17.5–49.1", detail: "InclusionMed 百分制区间" }
  ],
  categories: [
    { label: "行业", value: 1 },
    { label: "安全", value: 3 },
    { label: "研究", value: 3 },
    { label: "工具", value: 1 },
    { label: "治理", value: 1 },
    { label: "教育", value: 1 }
  ],
  stories: [
    { rank: 1, category: "行业", title: "Hugging Face 推理切换至 OpenRouter", summary: "Hugging Face 将语言模型 Inference Providers 路由迁至 OpenRouter，可在 80 多家提供商间按价格、速度与可靠性自动选择并失败重试。", impact: "开放权重模型已占 OpenRouter 9 月末令牌量的 71.7%，统一令牌与兼容 API 将进一步降低多模型部署门槛。", source: "Hugging Face", url: "https://huggingface.co/blog/openrouter", hot: true },
    { rank: 2, category: "安全", title: "Benchleaking 污染已下沉到基础模型", summary: "研究发现部分公开基础模型可续写训练中未给出的完整测试题与答案，其中 ERNIE-5.5-Flash-Base 的 HumanEval 泄漏率达 96%。", impact: "论文提出 Anti-Hack 分数后，受污染最重模型平均少 16.6 分，说明排行榜需要强制披露去污染流程与校正成绩。", source: "arXiv", url: "https://arxiv.org/abs/2611.21315", hot: true },
    { rank: 3, category: "研究", title: "科学智能体会对错误模拟器过度自信", summary: "SciResearch-Eval 让智能体自主设计热传导实验；多数模型遇到缺失物理机制的模拟器时，95% 区间实际仅覆盖真值 20%–62%。", impact: "更宽区间并不能修复判断，评测应把实验设计、模型失配诊断与不确定性校准纳入自主科研智能体的核心指标。", source: "arXiv", url: "https://arxiv.org/abs/2611.21541", hot: true },
    { rank: 4, category: "安全", title: "文本相似度守不住智能体注入传播", summary: "三智能体邮件中继实验里，相似度分类器漏掉 19 个有效注入中的 8 个，同时误报 192 条正常回复中的 70 条。", impact: "提示注入防线不能只看措辞重合，必须转向行为结果与授权策略约束的联合评估。", source: "arXiv", url: "https://arxiv.org/abs/2611.21520", hot: true },
    { rank: 5, category: "工具", title: "小模型成败高度取决于智能体脚手架", summary: "研究在 0.75B 至 4.7B 模型上比较五套本地脚手架，Mingbird 在每个尺寸都取得最高平均分，关键优势是推动任务真正产出文件。", impact: "模型榜单若固定单一脚手架会低估系统设计影响，部署评测还应检查产物而非仅凭退出码判定成功。", source: "arXiv", url: "https://arxiv.org/abs/2611.21407", hot: true },
    { rank: 6, category: "治理", title: "拒绝理由正确，不等于申诉建议有效", summary: "新研究提出“补救有效性”：在多条规则同时拒绝请求时，只解释一个真实理由，用户修正后通常仍无法改变决定。", impact: "福利资格与访问控制等高风险场景应从决策函数生成完整解释，并以行动后能否改变结果来审计，而非只核对理由真假。", source: "arXiv", url: "https://arxiv.org/abs/2611.21545" },
    { rank: 7, category: "教育", title: "“防 AI”大学试题仍被模型拿下八成", summary: "研究收集 17 个学科的 75 道真实大学题，其中 61 道由教师刻意设计为难以用 LLM 解答，最佳模型仍取得约 83%–85%。", impact: "靠改写题目难以守住学术诚信，课程评价需要更多现场过程、口试与可追溯推理证据。", source: "arXiv", url: "https://arxiv.org/abs/2611.21476" },
    { rank: 8, category: "安全", title: "真实碎片也能诱导智能体制造谣言", summary: "Generative Montage 用真实社媒片段拼接误导叙事，14 个模型中有 12 个对谣言的接受率超过 65%，多数投票后仍常失守。", impact: "原型监控器核查结论的直接证据后提升 5.6–29.0 个百分点，说明智能体需要验证推断关系而不只是来源真伪。", source: "arXiv", url: "https://arxiv.org/abs/2611.21235" },
    { rank: 9, category: "研究", title: "InclusionMed 重做包容性医疗 AI 评测", summary: "InclusionMed 从 388 个候选基准中审计并复现四个公开基准，再加入私有诊断任务，前沿模型综合得分仅为 17.5–49.1/100。", impact: "模型排名会随医疗角色和能力维度变化，医院选型应按具体诊疗与沟通场景评估，而非依赖单一总榜。", source: "arXiv", url: "https://arxiv.org/abs/2611.21218" },
    { rank: 10, category: "研究", title: "多智能体推理寻找“信念平衡点”", summary: "Stream of Belief 让多个智能体维持连续潜在信念，并通过交流与反思迭代，直到新增沟通不再带来有效信息。", impact: "这一框架把多智能体扩展目标从增加轮次改为寻找稳定集体状态，为控制冗余通信提供新方向。", source: "arXiv", url: "https://arxiv.org/abs/2611.21250" }
  ]
};
