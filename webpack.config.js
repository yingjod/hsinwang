const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

console.log('API Base URL in config: ', process.env.REACT_APP_API_BASE_URL)
console.log("Environment variables from process.env:", process.env),

module.exports = {
  entry: './src/index.js',  // 指定你的進入點文件
  output: {
    path: path.resolve(__dirname, 'dist'),  // 指定輸出目錄
    filename: 'bundle.js',  // 輸出的檔案名稱
    clean: true,
    publicPath: '/',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',  // 使用 Webpack 5 的資源模塊
        generator: {
          filename: 'img/[name][ext]',   // 圖片輸出路徑
        },
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),  // 指定靜態文件的資料夾
    },
    allowedHosts: 'all',// 禁用 Host header 檢查
    host: '0.0.0.0',
    port: 8080, // 開發伺服器執行的 port
    open: true, // 自動打開瀏覽器
    hot: true,
    historyApiFallback: true,  // 防止 SPA 路由錯誤
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',  // 使用您自定義的 index.html 模板
      filename: 'index.html',        // 輸出的 HTML 文件名稱
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new Dotenv()
  ],
}
