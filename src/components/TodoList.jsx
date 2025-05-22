import React from "react";
import { LuSwords } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";

export const TodoList = ({
  //TodoListコンポーネントにTaskListとsetTaskList,completedCount, setCompletedCountを引数に加える
  taskList,
  setTaskList,
  completedCount,
  setCompletedCount,
}) => {
  const handleDelete = (id) => {
    //handleDelete関数を定義（定義内容：指定した”id”を削除する/tasklistはタスクの一覧表/filter()は条件に合うものだけを残す/task.id !==idはidと一致しないもの/setTaskListはTaskListの中身を更新する役割）
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleDone = (id) => {
    //handleDone関数を定義（定義内容：指定した”id”を完了にする）
    const updatedTasks = taskList.map((task) => {
      //updateTasksを定義（定義内容：taskListはタスクの一覧表/.map()配列の各要素を変更して、新しい配列を作る）
      if (id === task.id) {
        return { ...task, completed: true };
        //現在見ているidとtask.idが一致した場合、そのタスクオブジェクトをコピーしてcompleted:trueにして完了にする・...taskは元のタスクをそのまま保持する（コピーしているだけ）
      }
      return task;
      //一致しない場合はそのままのタスクを返す
    });

    const completedTasks = updatedTasks.find((task) => task.id === id);
    //completedTasksを定義（定義内容：updateTasksから完了したタスクを取得してcompletedTasksに代入している/find()は条件に合う最初の要素を返す）
    const newTaskList = updatedTasks.filter((task) => task.id !== id);
    //newTaskListを定義（定義内容：完了したタスクを除いた新しいタスクリストを作成する）
    const newCompletedCount = completedCount + 1;
    //newCompletedCountを定義（定義内容：完了したタスクの数をカウントする）

    const completedTasksFromStorage =
      //completedTasksFromStorageを定義（定義内容：完了したタスクをローカルストレージに保存する）
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    //ローカルストレージのcompleatedTasksから完了したタスクを取得して、completedTasksFromStorageに代入する/もしローカルストレージが空の場合は空の配列を代入する・JSON.parse()は文字列をオブジェクトに変換する（データを保存したり読み込んだりする時に重要）
    completedTasksFromStorage.push(completedTasks);
    //completedTasksFromStorageに今回完了したタスク（completed)を追加する
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(completedTasksFromStorage)
    );
    //ローカルストレージにcompletedTasksFromStorageを保存する（変更を保存）/JSON.stringify()はオブジェクトを文字列に変換する
    localStorage.setItem("completedCount", newCompletedCount.toString());
    //ローカルストレージに完了した件数を保存する（変更を保存）/toString()は数値を文字列に変換する
    setTaskList(newTaskList);
    setCompletedCount(newCompletedCount);
    console.log("completedCount", completedCount);
  };

  return (
    <>
      {taskList.map((task) => (
        <div key={task.id} className="flex items-center space-x-2">
          <div className="border-solid border-2 border-black w-64 h-6 grid-rows-1">
            <span>{task.title}</span>
          </div>
          <div className="flex space-x-1">
            <button onClick={() => handleDone(task.id)}>
              <LuSwords />
            </button>
            <button onClick={() => handleDelete(task.id)}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
