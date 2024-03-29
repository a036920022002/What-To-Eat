# 每天要吃什麼

### 開啟方式

- 於終端機執行程式碼

```js
 git clone https://github.com/a036920022002/What-To-Eat
```

- 於資料夾中增加.env 檔
  並新增以下環境參數

```js
My_ENV= "mongodb+srv://alpha:camp@cluster0.fye8rmm.mongodb.net/whattoeat?retryWrites=true&w=majority"`
```

- 於終端機執行
  `npm i express@4.18.1`
  及
  `npm i dotenv@16.0.2`

- 執行腳本
  `npm run dev`

- 進入主畫面

- 未來預計可放上 heroku or 其他可免費佈署網站

### 請安裝以下工具

| Tool               | Version |
| ------------------ | ------- |
| Express            | 4.18.1  |
| Express-handlebars | 4.0.2   |
| body-parser        | 1.20.0  |
| dotenv             | 16.0.2  |
| mongoose           | 5.9.7   |
| method-override    | 3.0.0   |
| bootstrap.css      | 4.3.1   |
| bootstrap.js       | 5.0.2   |
| popper             | 2.9.1   |

# 功能

#### 可在首頁看到所有餐廳：

餐廳照片/名稱/分類/評分

#### 點選餐廳即可檢視詳細資訊：

類別/地址/電話/描述/圖片

#### 可快速搜尋餐廳名稱/類別

#### 可新增/修改/刪除餐廳

#### 可每天隨機選出一間餐廳

# 更新紀錄

- 2022/11/15 根據餐廳專案，copy 過來成新要吃什麼專案
- 2022/09/19 更新 README 使用方式
- 2022/09/08 可新增/編輯/刪除/查詢
- 2022/09/08 RESTful API/重構 Router/Mongoose
