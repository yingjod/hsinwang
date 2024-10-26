const path = require('path')

module.exports = {
  entry: './src/index.js',  // 指定你的進入點文件
  output: {
    path: path.resolve(__dirname, 'dist'),  // 指定輸出目錄
    filename: 'bundle.js',  // 輸出的檔案名稱
  },
  mode: 'development', // 可以設為 'development' 或 'production'
  module: {
    rules: [
      {
        test: /\.js$/, // 正則匹配所有 .js 結尾的文件
        exclude: /node_modules/, // 排除 node_modules 目錄
        use: {
          loader: 'babel-loader', // 使用 babel-loader 來處理 JavaScript 文件
        },
      },
      {
        test: /\.css$/,  // 處理 .css 檔案
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname), // 指定靜態文件的資料夾
    port: 8080, // 開發伺服器執行的 port
    open: true, // 自動打開瀏覽器
  },
};
