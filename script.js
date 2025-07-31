fetch('artale_event_data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('event-container');

    data.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = `card ${item.重要性.includes("高") ? "high" : "low"}`;

      card.innerHTML = `
        <label>
          <input type="checkbox" id="check-${index}" /> 完成
        </label>
        <h3>${item["活動/任務名稱"]} (${item.頻率})</h3>
        <p><strong>任務內容：</strong>${item["任務內容"]}</p>
        <p><strong>NPC/位置：</strong>${item["NPC/位置"] || "-"}</p>
        <p><strong>備註：</strong>${item["備註"] || "-"}</p>
      `;

      container.appendChild(card);
    });
  });