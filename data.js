window.BRIEF = {
  date: "2026-11-20",
  vibe: "今日 AI 的主线是语音与智能体继续产品化，同时安全、政策和高效推理开始围绕可部署性补齐基础设施。",
  metrics: [
    { label: "精选动态", value: "10", detail: "官方发布与论文原文" },
    { label: "语音待机价", value: "$0.02/分", detail: "GPT-Live API 待机模式" },
    { label: "智能体成绩", value: "55%", detail: "适配器后 Terminal-Bench" },
    { label: "单次决策", value: "92.9ms", detail: "GLiDE-27B 中位延迟" }
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
    { rank: 1, category: "产品", title: "GPT-Live-1.1 进入 API", summary: "OpenAI 开放 GPT-Live-1.1，强化多语言口音、字母数字识别和指令遵循，并新增 5–60 秒可设的 Standby 待机模式。", impact: "语音智能体可在不断开 WebRTC 通话的前提下降低静默成本，待机费率为每分钟 0.02 美元，低于活跃时的 0.05 美元。", source: "OpenAI Developer Community", url: "https://community.openai.com/t/gpt-live-1-1-has-arrived-in-the-api/1418537", hot: true },
    { rank: 2, category: "产品", title: "强化学习把智能体适配到具体框架", summary: "Hugging Face 为 Qwen3.8-27B 分别训练 Pi、OpenCode 与 Hermes Agent 的 LoRA，在 Pi 上把 Terminal-Bench 2.1 pass@1 从 39% 提至 55%，平均用量从 2.9K 降至 1.5K token。", impact: "模型与执行框架可以像软硬件一样联合优化，企业无需重训全模型也能同时提高任务成功率并压低推理成本。", source: "Hugging Face", url: "https://huggingface.co/blog/harness-adapters-at-scale", hot: true },
    { rank: 3, category: "行业", title: "Anthropic 以 83 美元定价 IPO", summary: "Anthropic 将 9.8 亿股 A 类普通股定价为每股 83 美元，股票 ANT 已于 11 月 19 日登陆纳斯达克，交易预计 11 月 20 日完成。", impact: "前沿模型公司进入公开市场后，收入质量、巨额算力投入与安全承诺将接受持续的投资者检验。", source: "Anthropic", url: "https://www.anthropic.com/news/anthropic-prices-initial-public-offering", hot: true },
    { rank: 4, category: "安全", title: "Sakana AI 组建独立安全研究组", summary: "Sakana AI 成立面向公共利益的 Security Research Group，研究群体式 AI 网络防御与 AI 系统自身安全，并计划发布可复现实验、基准和实践指南。", impact: "攻防双方都在采用智能体后，防御重点正从事后补丁前移到安全设计、开发质量与跨机构协作。", source: "Sakana AI", url: "https://sakana.ai/security-research-group/", hot: true },
    { rank: 5, category: "政策", title: "GAO 给 AI 网络安全列出 16 个政策选项", summary: "美国政府问责局评估 AI 放大钓鱼、深伪和自主攻击链的风险，同时提出覆盖指南、研究、全生命周期治理与人才的 16 项政策选项。", impact: "监管关注点从是否使用 AI 转向测试环境、身份管理、威胁信息共享和工具全生命周期治理，采购与合规标准可能随之收紧。", source: "U.S. GAO", url: "https://www.gao.gov/products/gao-27-108458" },
    { rank: 6, category: "安全", title: "前沿模型治理下沉到 35 秒急停", summary: "OpenAI 公布从隔离训练、持续监控到外部部署的纵深防御，并称 Control Room 可在收到指令后 35 秒内停止研究负载继续输出。", impact: "模型安全正从拒答策略扩展到网络隔离、全量监控与基础设施级停机，可审计的运行时控制成为前沿实验硬门槛。", source: "OpenAI", url: "https://openai.com/index/managing-frontier-ai-risk/" },
    { rank: 7, category: "芯片", title: "三星重组 HBM 与系统芯片领导层", summary: "三星任命黄祥俊掌管存储业务、赵相延领导 System LSI，并由李钟明出任设备解决方案 CTO，覆盖 DRAM、HBM、NAND 与代工工艺。", impact: "AI 算力竞争把组织调整直接压到高带宽内存、系统芯片与先进制程三条主线，三星试图加快客户拓展和技术执行。", source: "Samsung Newsroom", url: "https://news.samsung.com/global/samsung-electronics-announces-new-leadership-5" },
    { rank: 8, category: "研究", title: "GLiDE 用一次前向传播吸收推理能力", summary: "GLiDE 将推理教师蒸馏进 0.4B–27B 决策模型，27B 版本在单 GPU 上实现 92.9 毫秒中位延迟、71.52 分和 2.0% 校准误差。", impact: "无需生成思维链也能获得推理收益，为排序、审核和候选选择等高频决策提供更低延迟、更可校准的路径。", source: "arXiv", url: "https://arxiv.org/abs/2611.26509" },
    { rank: 9, category: "研究", title: "分层图像生成快了 19.1 倍", summary: "ProtoDiffusion 用一个共享空间原型和逐层候选向量生成可编辑 RGBA 图层，文本到设计速度比同骨干的先生成再分层流程快 19.1 倍。", impact: "生成式设计若能直接产出可选择、移动和复用的图层，就更容易进入真实编辑工作流，而不再停留在扁平图片导出。", source: "arXiv", url: "https://arxiv.org/abs/2611.26586" },
    { rank: 10, category: "研究", title: "FLUID 教智能体判断何时保持沉默", summary: "FLUID 用真实的人类协作数据，把多模态任务指导拆为证据、必要性与时机弹性，并据此评估实时指导智能体。", impact: "把“不说话也可能是最佳动作”纳入基准，有助于减少穿戴式助手和现场指导系统的打断、抢话与无效提示。", source: "arXiv", url: "https://arxiv.org/abs/2611.26491" }
  ]
};
