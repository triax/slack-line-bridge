module.exports = [
  // generalの全体連絡はLINEに流したい
  {
    source: {
      service: "Slack",
      channel: "general"
    },
    destination: {
      service: "LINE",
      to: ["C3a08fbcbd1c7c3dc4c68d42fb46bd112"],
    },
  }
];