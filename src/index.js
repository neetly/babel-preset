module.exports = (api, { targets }) => {
  const isWeb = api.caller((caller) => caller?.target === "web");

  return {
    presets: [
      [
        require.resolve("@babel/preset-env"),
        {
          targets: targets ?? (isWeb ? {} : { node: "current" }),
          ignoreBrowserslistConfig: !isWeb,
          bugfixes: true,
          shippedProposals: true,
        },
      ],
    ],

    overrides: [
      {
        test: /\.(ts|tsx|mts|cts)$/,
        presets: [
          [
            require.resolve("@babel/preset-typescript"),
            {
              allowDeclareFields: true,
              onlyRemoveTypeImports: true,
            },
          ],
        ],
      },

      {
        test: /node_modules/,
        compact: true,
      },
    ],
  };
};
