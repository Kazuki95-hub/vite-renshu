import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//他のファイルからインポートしてる。

import { App } from "./App";


const root = createRoot(document.getElementById("root") as Element);
//createrootでルートを作成してブラウザDOMノード内にReactコンポーネントを表示できる。
//ルートを作成したらroot.renderでその中にあるコンポーネントを表示するために呼び出しを行う必要がある。
//getElementByIdで取得したもの(DOM要素)を、呼び出す。



root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

//root.renderでブラウザDOMノードにJSXを表示する。