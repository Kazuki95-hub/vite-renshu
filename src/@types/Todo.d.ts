declare type Todo = {
    value: string;
    readonly id : number;
    checked: boolean;
    removed:boolean;
}

//アンビエント宣言(declare)
// 既存のJavaScriptライブラリやモジュールがTypeScriptで 
// 型付けされていない場合にその型を定義する ために使用されます。
// アンビエント宣言を使うと TypeScriptコンパイラは型チェックを実行できるようになり、
// 開発者の皆さんは安心してコードを書くことができますね