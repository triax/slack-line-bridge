module.exports = [
  {
    source: {
      service: "Slack",
      channel: "tech-test"
    },
    destination: {
      service: "LINE",
      to: ["C3a08fbcbd1c7c3dc4c68d42fb46bd112"],
    },
  },
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