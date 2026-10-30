const data = window.BRIEF;
document.querySelector('#date').textContent = data.date;
document.querySelector('#vibe').textContent = data.vibe;

document.querySelector('#metrics').innerHTML = data.metrics.map((m, i) => `
  <article class="metric" style="--delay:${i * 50}ms">
    <div class="metric-value">${m.value}</div>
    <div><strong>${m.label}</strong><small>${m.detail}</small></div>
  </article>`).join('');

const max = Math.max(...data.categories.map(item => item.value));
document.querySelector('#chart').innerHTML = data.categories.map(item => `
  <div class="bar-row">
    <span>${item.label}</span>
    <div class="track"><i style="--w:${Math.max(14, item.value / max * 100)}%"></i></div>
    <b>${item.value}</b>
  </div>`).join('');

document.querySelector('#stories').innerHTML = data.stories.map((s, i) => `
  <a class="story ${s.hot ? 'hot' : ''}" href="${s.url}" target="_blank" rel="noopener" style="--delay:${i * 45}ms">
    <div class="rank">${String(s.rank).padStart(2, '0')}</div>
    <div class="story-body">
      <div class="story-top"><span class="tag">${s.category}</span>${s.hot ? '<span class="signal">重点</span>' : ''}<span class="source">${s.source} ↗</span></div>
      <h3>${s.title}</h3>
      <p>${s.summary}</p>
      <div class="impact">为什么重要：${s.impact}</div>
    </div>
  </a>`).join('');
