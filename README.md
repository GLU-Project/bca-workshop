# Grocery Shop

This project is intended for BCA Workshop project. You just simply clone this project to begin.
For full code you can see the [main branch](https://github.com/janice-laksana/hardhat-grocery-shop)

## Requirements
- [Metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en) browser extension installed
- [Alchemy](https://www.alchemy.com/)
  - Register to [Alchemy](https://www.alchemy.com/) to get Alchemy `url`
- [Etherscan](https://etherscan.io/)
  - Register to [Etherscan](https://etherscan.io/) to get Etherscan API Key
- [Coinmarketcap](https://coinmarketcap.com/api/)
  - Register to [Coinmarketcap](https://coinmarketcap.com/api/) to get Coin Private Key
---

## Development Guide
- Grocery Shop Quickstart
```
git clone https://github.com/janice-laksana/hardhat-grocery-shop
cd hardhat-grocery-shop
yarn

```
- create `.env` file based on `.env.example`
- input your `GOERLI_RPC_URL`
- input your `PRIVATE_KEY` of your metamask wallet
- input your `ETHERSCAN_API_KEY` of your etherscan
- input your `COINMARKETCAP_API_KEY` of your coinmarketcap
- see how to get those value [in resource link below]()

```
GOERLI_RPC_URL=""
PRIVATE_KEY=""
ETHERSCAN_API_KEY=""
COINMARKETCAP_API_KEY=""

```

## Usage
#### Compile
```
yarn hardhat compile
```

#### Deploy
- Using hardhat network
```
yarn hardhat run scripts/deploy.ts --network hardhat 
```
- Using goerli network
```
yarn hardhat run scripts/deploy.ts --network goerli 
```
#### Testing
```
yarn hardhat test
```

## Resources

- [How to Set Up Alchemy Account & Get Alchemy API URL](https://www.youtube.com/watch?v=tfggWxfG9o0&ab_channel=Alchemy)
- [How to Get Metamask Private Key](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key)
- [How to Get Etherscan API Key](https://docs.etherscan.io/getting-started/viewing-api-usage-statistics)
- [How to Get Coinmarketcap API Key](https://www.appypie.com/faqs/sitename-how-to-obtain-coinmarketcap-api-key)
