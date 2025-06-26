import { LuSwords } from "react-icons/lu";
import { FaTrashAlt } from "react-icons/fa";
import React, { useState } from "react";
//import ReactとuseStateをインポート（ReactはReactのライブラリ、useStateは状態管理のためのフック）

export const TodoList = ({
  //TodoListコンポーネントにTaskListとsetTaskList,completedCount, setCompletedCountを引数に加える
  taskList,
  setTaskList,
  completedCount,
  setCompletedCount,
  setTasksCompletedCount,
}) => {
  const [animatingtask, setAnimatingTask] = useState(null);
  const handleDelete = (id) => {
    //handleDelete関数を定義（定義内容：指定した”id”を削除する/tasklistはタスクの一覧表/filter()は条件に合うものだけを残す/task.id !==idはidと一致しないもの/setTaskListはTaskListの中身を更新する役割）
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleDone = (id) => {
    //handleDone関数を定義（定義内容：指定した”id”を完了にする）
    setAnimatingTask(id);
    //setAnimatingTaskを定義（定義内容：完了したタスクのidを取得する）
    setTimeout(() => {
      setAnimatingTask(null);
      //setTimeoutを定義（定義内容：完了したタスクのidを取得して、アニメーションを終了する）
      const updatedTasks = taskList.map((task) => {
        //updateTasksを定義（定義内容：taskListはタスクの一覧表/.map()配列の各要素を変更して、新しい配列を作る）
        if (id === task.id) {
          return { ...task, completed: true };
          //現在見ているidとtask.idが一致した場合、そのタスクオブジェクトをコピーしてcompleted:trueにして完了にする・...taskは元のタスクをそのまま保持する（コピーしているだけ）
        }
        return task;
        //一致しない場合はそのままのタスクを返す
      });

      const completedTask = updatedTasks.find((task) => task.id === id); // Renamed to avoid conflict
      const damage = completedTask.weight * 10; // タスクの重さかけ10ダメ
      const newTaskList = updatedTasks.filter((task) => task.id !== id);
      const newCompletedCount = completedCount + damage; // ダメージを累積

      const newTasksCompletedCount =
        (JSON.parse(localStorage.getItem("tasksCompletedCount")) || 0) + 1; // 達成した数を1増やす

      const completedTasksFromStorage =
        //completedTasksFromStorageを定義（定義内容：完了したタスクをローカルストレージに保存する）
        JSON.parse(localStorage.getItem("completedTasks")) || [];
      //ローカルストレージのcompleatedTasksから完了したタスクを取得して、completedTasksFromStorageに代入する/もしローカルストレージが空の場合は空の配列を代入する・JSON.parse()は文字列をオブジェクトに変換する（データを保存したり読み込んだりする時に重要）
      completedTasksFromStorage.push(completedTask);
      //completedTasksFromStorageに今回完了したタスク（completed)を追加する
      localStorage.setItem(
        "completedTasks",
        JSON.stringify(completedTasksFromStorage)
      );
      //ローカルストレージに完了した件数を保存する（変更を保存）/JSON.stringify()はオブジェクトを文字列に変換する
      localStorage.setItem("completedCount", newCompletedCount.toString());
      //ローカルストレージに完了した件数を保存する（変更を保存）/toString()は数値を文字列に変換する
      localStorage.setItem("tasksCompletedCount", newTasksCompletedCount.toString()); // 新しい総数をローカルストレージに保存
      setTaskList(newTaskList);
      setCompletedCount(newCompletedCount);
      setTasksCompletedCount(newTasksCompletedCount); // 新しい総数を更新
      console.log("completedCount", completedCount);
    }, 1000);
  };

  return (
    <>
      {taskList.map((task) => (
        <div
          key={task.id}
          className={`flex items-center space-x-2 transition-all duration-500 ${
            animatingtask === task.id ? "transform translate-x-full" : ""
          }`}
        >
          <div className="border-solid border-2 border-black w-80 h-8 items-center justify-between px-4 bg-gray-100 rounded-md shadow-md text-lg mt-4">
            <span>{task.title} (重さ: {task.weight})</span> {/* 重さを表示 */}
          </div>
          <div className="flex space-x-1">
            <button onClick={() => handleDone(task.id)}className="mt-4">
              <LuSwords size={28}/>
            </button>
            <button onClick={() => handleDelete(task.id)}className="mt-4">
              <FaTrashAlt size={28}/>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;