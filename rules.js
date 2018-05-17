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
  }
];