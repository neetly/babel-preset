module.exports = (api, options) => {
  const env = api.env();

  return {
    presets: [
      [require.resolve("."), options],
      [
        require.resolve("@babel/preset-react"),
        {
          runtime: "automatic",
          development: env === "development",
        },
      ],
    ],
  };
};
