# yt-ThumbnailTester

![demo](https://github.com/fattie0926/yt-ThumbnailTester/assets/77534161/90a99f47-d57c-4e8f-8de8-5f17823f1f0d)

## 專案介紹
yt-ThumbnailTester 是一款專為 YouTube 內容創作者設計的工具，用於快速模擬和測試影片標題和縮圖在 YouTube 上的顯示效果。這個工具使用 Puppeteer 來自動化瀏覽器操作，讓使用者可以在不上傳影片到 YouTube 的情況下，預覽他們的影片標題和縮圖。

## 功能特色
- **快速預覽**：即時模擬 YouTube 影片標題和縮圖的顯示效果。
- **易於使用**：透過簡單的命令行操作即可進行測試。
- **自定義選項**：允許自定義影片標題、縮圖等參數。

## 安裝指南
要使用 yt-ThumbnailTester，您需要先安裝 Node.js 和 Puppeteer。請按照以下步驟進行：

1. 安裝 Node.js：
   - 請訪問 [Node.js 官網](https://nodejs.org/) 並下載安裝。

2. 安裝 Puppeteer 和其他依賴項：
   - 打開終端機，切換到您的專案目錄。
   - 執行 `npm install` 安裝所有必要的依賴項。

## 使用說明
1. **修改 JavaScript 檔案中的變數**:
   - 打開 `yt-ThumbnailTester.js`。
   - 找到以下變數並進行替換：
     - `const videoTitle = 'Your Video Title Here';` - 將 `'Your Video Title Here'` 替換為您想要測試的影片標題。
     - `const channelName = 'Your Channel Name';` - 將 `'Your Channel Name'` 替換為您的 YouTube 頻道名稱。
     - `const channelIconUrl = '...';` - 將這裡的 URL 替換為您的頻道頭像的連結。

2. **替換縮圖圖片**:
   - 在您的專案資料夾中，應該會有一個用於存放縮圖的資料夾 `image`，
   - 請將你的縮圖命名為 `thumbnail.png`，或是自行在 `yt-ThumbnailTester.js` 修改 `imageFilePath`。 
   - 將您想要測試的縮圖圖片放入該資料夾。
   - 確保在 JavaScript 檔案中正確引用了這個縮圖圖片的路徑。

3. 開啟終端機，切換到專案目錄。

4. 執行 `node yt-ThumbnailTester.js` 來啟動模擬器。

5. 檢查自動開啟的資料夾 `screenshot` 以查看模擬結果。

## 使用範例

![20231113_1620_Your Video Title Here](https://github.com/fattie0926/yt-ThumbnailTester/assets/77534161/5718c1c2-6031-4c5a-a3a0-b2089ffa39f2)

## 貢獻指南
歡迎各位對 yt-ThumbnailTester 提出改進意見或直接參與貢獻。請提交 Pull Request 或開 Issue 與我們討論。

## 授權協議
此專案採用 MIT 授權協議。詳情請參閱 `LICENSE` 文件。

## 聯繫方式
若您有任何問題、建議或想要進一步了解此專案，歡迎透過以下方式聯繫我們：

- **電子郵件**: [fattie@fattie.io]

我們非常期待您的反饋和建議！

---
