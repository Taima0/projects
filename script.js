function getCampaigns() {
  const uniqueCampaigns = [...new Set(adsData.map(d => d.campaign))];
  const select = document.getElementById("campaignSelect");
  uniqueCampaigns.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    select.appendChild(option);
  });
  select.addEventListener("change", () => renderCharts(select.value));
  renderCharts(uniqueCampaigns[0]);
}

function renderCharts(campaign) {
  const filtered = adsData.filter(d => d.campaign === campaign);
  const dates = filtered.map(d => d.date);
  const ctr = filtered.map(d => d.clicks / d.impressions);
  const cpc = filtered.map(d => d.spend / d.clicks);

  Plotly.newPlot("ctrChart", [{
    x: dates,
    y: ctr,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'CTR'
  }], { title: `${campaign} - Click Through Rate (CTR)` });

  Plotly.newPlot("cpcChart", [{
    x: dates,
    y: cpc,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'CPC'
  }], { title: `${campaign} - Cost Per Click (CPC)` });
}

getCampaigns();
