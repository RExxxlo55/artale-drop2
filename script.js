fetch("artale_event_data.json")
  .then((res) => res.json())
  .then((data) => {
    const tbody = document.querySelector("#event-table tbody");

    data.forEach((item, index) => {
      const row = document.createElement("tr");

      // 判斷是否已完成（從 localStorage）
      const isChecked = localStorage.getItem("event_done_" + index) === "true";

      row.innerHTML = `
        <td>${item["重要性"] || ""}</td>
        <td>${item["活動/任務名稱"] || ""}</td>
        <td>${item["任務內容"] || ""}</td>
        <td>${item["頻率"] || ""}</td>
        <td>${item["NPC/位置"] || ""}</td>
        <td>${item["備註"] || ""}</td>
        <td><input type="checkbox" data-index="${index}" ${isChecked ? "checked" : ""}></td>
      `;

      tbody.appendChild(row);
    });

    // 綁定事件
    tbody.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
      checkbox.addEventListener("change", (e) => {
        const index = e.target.getAttribute("data-index");
        localStorage.setItem("event_done_" + index, e.target.checked);
      });
    });
  });
