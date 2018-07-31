module.exports = [
  {
    source: {
      service: "LINE",
      group: "C3a08fbcbd1c7c3dc4c68d42fb46bd112",
    },
    destination: {
      service: "Slack",
      channels: ["zatsudan"],
    }
  },
  {
    source: {
      service: "LINE",
      group: "C9f8b2790f3eefe3f70379f25301a8e34",
    },
    destination: {
      service: "Slack",
      channels: ["lines"],
    }
  },
  {
    source: {
      service: "LINE",
      group: "Ca2bc1feca39e0f4513216e72af91863a",
    },
    destination: {
      service: "Slack",
      channels: ["z_lb"],
    },
  },
  {
    source: {
      service: "LINE",
      group: "C3a08fbcbd1c7c3dc4c68d42fb46bd112",
    },
    destination: {
      service: "Slack",
      channels: ["zatsudan_en"],
    },
    transforms: [
      {
        plugin: "translate",
        lang: { from: "ja", to: "en" }
      },
    ],
  },
  {
    source: {
      service: "LINE",
      group: "C3a08fbcbd1c7c3dc4c68d42fb46bd112",
    },
    destination: {
      service: "Slack",
      channels: ["zatsudan_es"],
    },
    transforms: [
      {
        plugin: "translate",
        lang: { from: "ja", to: "es" }
      },
    ],
  },
];