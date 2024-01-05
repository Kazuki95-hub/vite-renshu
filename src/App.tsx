import { useState } from 'react';
//reactからuseStateフックをインポート
import {FormDialog} from './FormDialog';
import {ActionButton} from './ActionButton';
import {SideBar} from './SideBar';
import { TodoItem} from './TodoItem';
import {ToolBar} from './ToolBar';


// type Todo = {
//   value: string;
//   readonly id:number;
//   checked: boolean;
//   removed: boolean;
// };

// type Filter = 'all' | 'checked' |'unchecked' | 'removed';

export const App = () => {
  //初期値: 空文字列 ''
  const [text,setText] = useState('');
  const [todos,setTodos] = useState<Todo[]>([]);
  //useState
  const [filter, setFilter] = useState<Filter>('all');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const handleSubmit = () => {
    if(!text) return;

    const newTodo: Todo = {
      value: text,      
      id: new Date().getTime(),
      checked: false,
      removed: false,
    };

    setTodos((todos) => [newTodo, ...todos]);
    setText('');
  };

  // const handleRemove = (id: number, removed: boolean) => {
  //   setTodos((todos) => {
  //     const newTodos = todos.map((todo) => {
  //       if(todo.id === id) {
  //         return {...todo, removed};
  //       }
  //       return todo;
  //     });

  //     return newTodos;
  //   })
  // };

  const handleSort = (filter: Filter) => {
    setFilter(filter);
  };

  // const filteredTodos = todos.filter((todo) => {
  //   switch (filter) {
  //     case 'all': 
  //      return !todo.removed;
  //     //削除されていないもの
  //     case 'checked' :
  //      return todo.checked && !todo.removed;
  //     //完了済み　かつ　削除されていないもの
  //     case 'unchecked':
  //      return !todo.checked && !todo.removed;
  //     // 未完了　かつ　削除されていないもの
  //     case 'removed':
  //      return todo.removed;
  //     //削除済みのもの
  //     default:
  //      return todo;
  //   }
  // })

  const handleEmpty = () => {
    setTodos((todos) => todos.filter((todo) => !todo.removed));
  }

  const handleTodo = <K extends keyof Todo, V extends Todo[K]>(
    id: number,
    key: K,
    value: V
  ) => {
    setTodos ((todos) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, [key]: value};
        }else {
          return todo;
        }
      });
      return newTodos;
    })

  }
  //Todoオブジェクトのプロパティをkeyof演算子で取得している
  //V extends Todo[K]で　V型の新しい値を代入
  // <K: '書き換えたいプロパティ', V: '新しい値'>
  return (
    <div>
     <ToolBar />
     <SideBar onSort = {handleSort} />
     <FormDialog text = {text} onChange = {handleChange} onSubmit= {handleSubmit} />
     <TodoItem todos={todos} filter={filter} onTodo={handleTodo} />
     <ActionButton todos={todos} onEmpty={handleEmpty} />
    </div>
  )
}

//アロー関数 (引数,...)=>{...関数の本体...}

//onChangeイベントは、フォーム内のエレメント（要素）である、
//input、select、textareaの値がユーザーの操作によって変更された際に発生するイベントです。

//コンポーネント...システムの構成要素
//モジュール...全体の中での部分的なプログラム
//ライブラリ...よく利用する関数や機能をまとめたファイル
//イベントリスナーに渡す関数のことをコールバック関数という