<p align="center">
  <img src="/static/images/logos/icon.png" width="150">
</p>
<h1 align="center">CuratedStack Nocode Template</h1>
<p>
  <a href="/LICENSE"><img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="MIT"></a>
  <a href="https://medium.com/@sandoche" target="_blank"><img src="https://badgen.net/badge/icon/medium?icon=medium&label" alt="medium: sandoche"></a>
  <a href="https://twitter.com/sandochee">
    <img alt="Twitter: sandochee" src="https://img.shields.io/twitter/follow/sandochee.svg?style=social" target="_blank" />
  </a>
</p>

📑 Free & open-source template to create a curated directory of websites without (or with) code

## 💡 Features
CuratedStack Nocode Template comes with pre-installed features and options:
- List all your favorite websites by category
- No-code friendly using Netlify CMS (check the below tutorial)
- Search bar and index generated automatically (using Lunr.js)
- Automatic dark theme
- Google Analytics
- Script to analyze your links & categories
- Script to download websites logos automatically

## ✨ Demo
Check out websites using the CuratedStack Nocode Template:
- https://undesign.learn.uno
- https://curatedstack.learn.uno (demo website)

## 📖 How to use

### The no-code way

Todo

### The coders way

1. Fork this project
2. Edit `content/config.json`
3. Add your categories in `content/categories.json`
4. Add your links in `content/links.json`
5. Edit your strings in `locales/en.json` (optional)
6. Change your icon in `static/images/logos/icon.png`
7. Use `npm run analyze` to check analyze your links and `npm run get-logos` to try to download logos of websites
8. Generate with `npm run generate` and 
9. Deploy the generated files from the `dist` folder  (on netlify, gitpages or surge, they are all free)

## ⚙️ How to run

### Pre-requisites
- NodeJS

### Install
```
npm install
```

### Development
```
npm run dev
```

### Build
```
npm run generate
```

### Analyze links & categories
```
# To check how many links you have in each category and if there are links in double
npm run analyze
```

### Downloads logos
```
npm run get-logos
```

### Deploy to netlify (for free)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sandoche/CuratedStack-nocode-template)

## 🤝 Contributing
Contributions, issues and feature requests are welcome!

## ⭐️ Show your support
Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/sandoche">[![patreon.png](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/sandoche)</a>

## 🍺 Buy me a beer 
If you like this project, feel free to donate:
* PayPal: https://www.paypal.me/kanbanote
* Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
* Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
* Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
* Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)
