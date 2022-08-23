require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/KtE631CHN5W8i4pvrOAIVDoUVhnfxZF-',
      accounts: ['7b102b2bf05b00397d4beaa628bffb85280b87e740197a9f1cd9139698848435'],
    },
  },
};