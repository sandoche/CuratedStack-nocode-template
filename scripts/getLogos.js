/* eslint-disable */
import { getLinks } from '../services/getLinks.js'
import { LogoScrape } from 'logo-scrape';
import download from 'download'
import fs from 'fs'

var URL = require('url').URL;
var scrape = require('html-metadata');

const getLogos = async (links) => {
  console.log('[Get Logos] - Starting')
  for (let link of links) {
    const path = './static' + link.icon
    const url = link.url
    if (!isLogoAlreadyDownloaded(path)) {
      console.log('[Get Logo] - Downloading logo from ' + url)
      try {
        // const logos = await LogoScrape.getLogos(url)
        const urlLogo = await getLogoUrl(url)
        download(urlLogo).then(data => {
          fs.writeFileSync(path, data);
          console.log('[Get Logo] - Logo saved in ' + path)
        }).catch(e => {
          console.log('[Get Logo] - Download error of ' + urlLogo)
        })
      } catch (error) {
        console.log('[Get Logo] - Failed')
      }
    }
  }
}

const isLogoAlreadyDownloaded = (path) => {
  if (fs.existsSync(path)) {
    return true
  } else {
    return false
  }
}

const getLogoUrl = async (url) => {
  const metadata = await scrape(url)
  const imageUrl = metadata.general.icons[0].href
  const host = new URL(url).origin
  return imageUrl.includes('http') ? imageUrl : host + '/' + imageUrl
}

const links = getLinks();
getLogos(links)


 
