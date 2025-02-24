# Deployment Process
1. npm create vite@latest ./ -- --template react
2. npm install (npm run dev可以預覽本地運行的效果)
3. 創建新的GitHub Repository
    - 如果使用command line:
    - git init
    - git add README.md
    - git commit -m “first commit”
    - git branch -M main
    - git remote add origin https://github.com/ZhangChingYu/<repository name>.git
    - git push -u origin main
4. 前往“https://vite.dev”，點擊Get Started，在左方導航欄中選擇“Deploying a Static Site”
5. 然後在右方導航欄中選擇GitHub Page，這裡寫了如何部署Vite項目到GitHub Pages上
6. 在項目中找到檔案vite.config.js，加入
``` js
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<repository name>/'
})
```
7. 在GitHub repository的Setting 裡找到”Pages”，在Source of Deployment中選擇GitHub Action
8. 然後點擊“create your own”，將文件命名為deploy.yml
9. 將文件內容全部刪除，然後複製https://vitejs.dev 之前頁面中的yml內容到上面，點擊commit
10. 之後到repository的Actions頁面可以看到剛剛commit的結果
11. 成功後可以到Action裡面看到GitHub Page的網址，點擊後就可以瀏覽部署好的網頁了
12. 到項目terminal中pull代碼，這樣整個初始部署就完成了

# 項目用到的Package/Plugin
1. tailwing css
``` cmd
npm install tailwindcss @tailwindcss/vite
```
2. --legacy-peer-deps: 標誌是在v7中引入的，目的是繞過peerDependency自動安裝；它告訴 NPM 忽略項目中引入的各個modules之間的相同modules但不同版本的問題並繼續安裝，保證各個引入的依賴之間對自身所使用的不同版本modules共存。