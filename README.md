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
1. tailwing css: 執行完後會自動生成tailwindcss.js和postcss.js檔案，這裡我用的tailwindcss是 v3.4.17 版本。
``` cmd
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```
2. --legacy-peer-deps: 標誌是在v7中引入的，目的是繞過peerDependency自動安裝；它告訴 NPM 忽略項目中引入的各個modules之間的相同modules但不同版本的問題並繼續安裝，保證各個引入的依賴之間對自身所使用的不同版本modules共存。
3. @react-three/fiber: This is a React based three.js library thats going to allow us to create three.js code in a React fasion.
4. @react-three/drei
5. maath: For math utility functions.
6. react-tilt
7. react-verticle-timeline-component
8. @emailjs/browser
9. framer-motion
10. react-router-dom
## Plugin 版本衝突解決
我在npm install 各個插件的時候出現了 modules 間的版本衝突問題，這裡記錄一下解決方法：
- 在項目 terminal 進行 npm install 前要加上 --lagacy-peer-deps，具體細節如下：
``` cmd
npm install ----lagacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-verticle-timeline-component @emailjs/browser framer-motion react-router-dom
```
- 此時項目可以在本地正常運行，但是部署還存在問題，我在網上找到了幾種解決方法，這裡我全都用了：
  - 在 package.json 中加入："engines": {"node": ">=18"},
  - 在 deploy.yml 中把 node-version 改成 18
  - 同樣在 deploy.yml 中把
  ``` cmd
  - name: Install dependencies
        run: | 
          npm ci
  ```
  改成：
  ``` cmd
  - name: Install dependencies
        run: | 
          rm -f package-lock.json
          npm install --legacy-peer-deps
  ```
  這樣就能順利部署上去了