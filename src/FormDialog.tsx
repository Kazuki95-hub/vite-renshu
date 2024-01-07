
//名前付きエクスポート

type Props = {
  text: string;
  onSubmit: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormDialog = (props: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit();
      }}
    >
      <input type="text"
        //text  ステートが持っている入力中テキストの値をvalueとして表示
        value={props.text}
        //JSX分の中でJS変数の値を展開するには、{}で囲む必要がある。
        //""とかで囲むと通常の文字列として評価されてしまうため。
        //onChange イベント(=入力テキストの変化)をtextステートとして表示
        onChange={(e) => props.onChange(e)} />
      <input
        type="submit"
        value="追加"
        onSubmit={props.onSubmit}
      />
    </form>
  )
}

//React では、イベントを処理する関数定義（イベントハンドラー）には handle[Event] を、
// それを受け取る props には on[Event] を使用するのが通例です。