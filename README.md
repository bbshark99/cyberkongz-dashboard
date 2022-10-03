# Cyberkongz Community Dashboard

- Figma (https://www.figma.com/file/SpwInqbvooS3SWdIMw0kwT/Admin-Dashboard-(Community))
- Dashboard app (https://github.com/bbshark99/cyberkongz-dashboard)


- How to run locally

```
yarn
yarn start
```

### Explains about this repo


1. Frameworks:
- Next.js - Typescript
- Tailwindcss - for UI
- Axios - For api integration
- @web3-react/core - For metamask wallet connection
- @ethersproject - for blockchain call integration

2. Architecture
- assets
    + images - images including cyberkongz logo & other images
    + css - fonts & tailwindcss config & global css config

- context
    + connector - Metamask wallet connector context api
    + user - Connect wallet info context api
    + providers - Wrapper context api wrapping all context providers

- design-systems
    + Atoms - minor reusable ui components
    + Moleclues - medium sized components which are using Atoms components
    + Organisms - big sized components accessing context api & api integration

- hooks
    + useSales - Resovior Api integration hooks
    + useShallowState - State handler hook which is better than useState to prevent useless renders

- services
    + CoreApiService - CoreModule for api integration
    + CoreChainService - CoreModule for blockchain call integration
    + ReservoirService - Reservoir api integration

- tailwind.config.js
