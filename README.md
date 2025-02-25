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
## 解決 ✘ [ERROR] Could not resolve "three" 問題
我在導入 three.js 模型時，發現 import { Canvas } from '@react-three/fiber' 會報錯。這個錯誤提示說在構建時無法解析 "three"，而 @react-three/fiber 依賴這個模塊。此時我們可以通过安装 three 包來解決這個問題。在控制台輸入安裝命令就可以正常運行了：
``` cmd
npm install --legacy-peer-deps three
```
# Three.js 使用範例(React.js 項目)

``` javascript
import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = () => {
  // load the Three.js module in /public 
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    // mesh: Container for <preimitive />
    <mesh>
      {/* this is use to scroll the module throw mouse, we set the angle to Math.Pi/2 so it only spins horizontally. */}
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
      {/* we use it to provide light, without light we cannot see the module */}
      <hemisphereLight intensity={1} groundColor="black"/>
      {/* this create a ray of light shot at the module */}
      <pointLight intensity={1}/>
      {/* this provide a light source that we can customize it position [x-position, y-position, z-position] */}
      <spotLight intensity={1} position={[-20, 50, 10]} angle={0.12} penumbra={1} castShadow/>
      {/* container that we use the render gltf module */}
      <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.65} position={isMobile ? [0, -3, -2.2]:[0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    // Canvas: the root container to all element of Three.js
    // camera is an important feature in Canvas, it determines where are we looking at the module.
    // gl={{ preserveDrawingBuffer: true }}: 用來正確 render 模型，不添加好像就沒法正常展示
    <Canvas frameloop='demand' shadows 
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true } }
    >
      {/* this can add loading component while loading the module using "fallback" */}
      <Suspense fallback={ <CanvasLoader /> }>
        <Computers />
      </Suspense>
      {/* WebGLRenderer只有在遇到挫折時才會編譯材料，這可能會導致堵塞。 Preload 使用gl.compile預編譯場景，可以確保應用程式從開始就響應 */}
      {/* 預設情況下，gl.compile只會預載入可見物件，使用 all 就可以預加載所有物件 */}
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas
```
* 如果對這些標籤不熟悉的話，可以到 React Three Fiber.docs (https://r3f.docs.pmnd.rs/getting-started/introduction) 網站查看詳細說明。 *
