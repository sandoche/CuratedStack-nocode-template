<p align="center">
  <img src="/curatedstack.gif" width="175">
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
<br><br>
![screenshot](/docs/design/screenshots/Product%20Hunt.png)
### 👉 [Check the demo website](https://curatedstacktemplate.learn.uno/)
<br>

## 💡 Features

CuratedStack Nocode Template comes with pre-installed features and options:
- 📋 List all your favorite websites by category
- 🙅🏻 No-code friendly using Netlify CMS (check the below tutorial)
- 🔎 Search bar and index generated automatically (using Lunr.js)
- 🌓 Automatic dark theme
- 🚀 Floating Prompt (for Product Hunt or anything else)
- 📈 Google Analytics (gtag)
- 📱 Installable as a Progressive Web App
- 📊 Script to analyze your links & categories
- 💠 Script to download websites logos automatically


## ✨ Demo

Check out websites using the CuratedStack Nocode Template:

- https://undesign.learn.uno
- https://curatedstacktemplate.learn.uno/ (demo website)

## 📖 How to use

### The no-code way - Easy way

1. Go to https://t3mpl.n4no.com/editor/#manifest=../templates/curated-stack/template.yaml
2. Use the right panel to edit the content
3. Press "Publish" then "Save website as .zip"
4. The full website will be inside the zip, you can host it wherever you want

### The no-code way - Advanced way (with Netlify CMS)

Take advantage of Netlify CMS for hosting and updating your website without code.
Nevertheless a few options needs to be activated in order to get started, just follow the instructions below.

1. Add your project in Netlify using this button (and follow the steps): [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sandoche/CuratedStack-nocode-template)

   1.1. Once done you will see the link to your website, you can later on customize your website name or even add your own domain name.

2. Enable Identity and Git Gateway by following these instructions (full instructions here: https://www.netlifycms.org/docs/add-to-your-site/#enable-identity-and-git-gateway)

   2.1. Go to Netlify and go to your brand new deployed website, then **Settings > Identity**, and select **Enable Identity service**.

   2.2. Under **Registration preferences**, select **Invite only**.

   2.3. Click on **Invite users** and add your email, press **Send** you will receive a link by email to create an account.

3. Go to **Services > Git Gateway**, and click **Enable Git Gateway**. This authenticates with your Git host and generates an API access token. In this case, we're leaving the Roles field blank, which means any logged in user may access the CMS.

4. Go to your website name and add `/admin` at the end of the url, you will be redirected to the admin panel where you need to login with your email and password defined at step 

5. From this admin panel you will be able to change anything, name, description, logos, websites, categories, and you will have to click on "Publish" once done and wait a few minutes before it is updated!

### The coders way

1. Fork this project
2. Edit `content/config.json`
3. Add your categories in `content/categories.json` (after deleting the demo categories)
4. Add your links in `content/links.json` (after deleting the demo links)
5. Edit your strings in `locales/en.json` (optional)
6. Change your icon in `static/images/logos/icon.png`
7. Use `npm run analyze` to check analyze your links and `npm run get-logos` to try to download logos of websites (do not forget to remove the `static/images/logos` demo content)
8. Generate with `npm run generate`
9. Deploy the generated files from the `dist` folder (on netlify, gitpages or surge, they are all free)

## ⚙️ How to run

### Pre-requisites

- NodeJS

### Install

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run generate
```

### Analyze links & categories

```sh
# To check how many links you have in each category and if there are links in double
npm run analyze
```

### Downloads logos

```sh
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

- PayPal: https://www.paypal.me/kanbanote
- Bitcoin: 19JiNZ1LkMaz57tewqJaTg2hQWH4RgW4Yp
- Ethereum: 0xded81fa4624e05339924355fe3504ba9587d5419
- Monero: 43jqzMquW2q989UKSrB2YbeffhmJhbYb2Yxu289bv7pLRh4xVgMKj5yTd52iL6x1dvCYs9ERg5biHYxMjGkpSTs6S2jMyJn
- Motive: MOTIV-25T5-SD65-V7LJ-BBWRD (Get Motive Now: https://motive.network)
