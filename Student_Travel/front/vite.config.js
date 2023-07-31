import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }, rules: [{
    // 使用babel-loader将ES6语法转换为ES5
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }]
})
