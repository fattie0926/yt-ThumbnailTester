const puppeteer = require('puppeteer');
const fs = require('fs');
const moment = require('moment');
const { exec } = require('child_process');
const path = require('path');
const imageFilePath = './image/thumbnail.png';

// 使用者需要更改的變數
const videoTitle = 'Your Video Title Here';
const channelName = 'Your Channal Name';
const channelIconUrl = 'https://yt3.googleusercontent.com/ytc/AOPolaSFWJP-tJrwEL5PjWwlLLzVLY0ta9hV2kJHKlXuoIc=s176-c-k-c0x00ffffff-no-rj'; // Replace with your Profile Picture Link


async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--window-size=1920,1080'] // 設定視窗大小
    });

    const page = await browser.newPage();
    await page.goto('https://www.youtube.com');

    await page.waitForSelector('ytd-rich-item-renderer');

    // 取得介於 0 和 3 之間的隨機索引
    const randomIndex = Math.floor(Math.random() * 4);

    // 讀取圖片檔案並轉換為 Base64
    const imageFile = fs.readFileSync(path.join(__dirname, imageFilePath));
    const base64Image = imageFile.toString('base64');

    // 替換隨機選擇的視頻的標題、縮圖、頻道名稱和頻道圖標
    await Promise.all([
        page.evaluate((index, videoTitle) => {
            let elements = document.querySelectorAll('ytd-rich-item-renderer #video-title');
            if (elements[index]) elements[index].textContent = videoTitle;
        }, randomIndex, videoTitle),
        page.evaluate((index, base64Image) => {
            let thumbnails = document.querySelectorAll('ytd-rich-item-renderer ytd-thumbnail img');
            if (thumbnails[index]) thumbnails[index].src = `data:image/jpeg;base64,${base64Image}`;
        }, randomIndex, base64Image),
        page.evaluate((index, channelName) => {
            let channelNames = document.querySelectorAll('ytd-rich-item-renderer ytd-channel-name a');
            if (channelNames[index]) channelNames[index].textContent = channelName;
        }, randomIndex, channelName),
        page.evaluate((index, channelIconUrl) => {
            let channelIcons = document.querySelectorAll('ytd-rich-item-renderer img#img');
            if (channelIcons[index]) channelIcons[index].src = channelIconUrl;
        }, randomIndex, channelIconUrl)
    ]);

    await page.waitForTimeout(1000); // 等待 1 秒後進行屏幕截圖

    // 如果 "screenshot" 目錄不存在，則創建該目錄
    const screenshotDirectory = path.join(__dirname, 'screenshot');
    if (!fs.existsSync(screenshotDirectory)) {
        fs.mkdirSync(screenshotDirectory);
    }

    // 生成帶有時間戳的屏幕截圖檔名
    const timestamp = moment().format('YYYYMMDD_HHmm');

    // 從修改後的頁面獲取視頻標題
    const modifiedVideoTitle = await page.evaluate((index) => {
        let elements = document.querySelectorAll('ytd-rich-item-renderer #video-title');
        if (elements[index]) {
            return elements[index].textContent.trim();
        }
        return '';
    }, randomIndex);

    const screenshotPath = path.join(screenshotDirectory, `${timestamp}_${modifiedVideoTitle}.png`);
    await page.screenshot({ path: screenshotPath });

    exec(`open ${screenshotPath.substring(0, screenshotPath.lastIndexOf('/'))}`);

    await browser.close();
}

run();
