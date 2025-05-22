import React, { useState } from "react"

const CompletedTasks = () => {
  const [completedTasks] = useState(JSON.parse(localStorage.getItem(CompletedTasks))||[ ])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl m-20">完了したタスク</div>
      <div className="max-w-2xl mx-auto">
        {completedTasks.length> 0 ?(
          <ul className="space-y-4">
            {completedTasks.map((task)=>(
              <li key={task.id}className="bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <span className="text-gray-700">{task.title}</span>
                </div>
              </li>
            ))}
          </ul>
        ):(
          <p className="text-center text-gray-500">完了したタスクはありません</p>
        )}
      </div>

      <div className="space-y-2">
        {completedTasks.map((task)=>(
          <div
            key={task.id}
            className="flex justify-center border-2 border-black mx-auto w-64 p-2">
            {task.title}
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-6 border-2 border-black rounded-lg"
        onClick={() => (window.location.href = "/")}
      >
        トップページに戻る
      </button>
    </div>
  )
}

export default CompletedTasks