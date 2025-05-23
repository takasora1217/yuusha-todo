import React, { useState } from "react"

const CompletedTasks = () => {
  const [completedTasks] = useState(JSON.parse(localStorage.getItem("completedTasks"))||[ ])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-5xl m-6">完了したタスク</div>
      <div className="max-w-2xl mx-auto mb-32">
        {completedTasks.length > 0 ? (
          <ul className="space-y-4">
            {completedTasks.map((task) => (
              <li key={task.id} className="flex justify-center border-2 border-black mx-auto w-64">
                <div className="flex items-center">
                  <span className="text-gray-700">{task.title}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">完了したタスクはありません</p>
        )}
      </div>
      <button
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 py-2 px-6 border-2 border-black rounded-lg bg-blue-300 hover:bg-blue-400"
        onClick={() => (window.location.href = "/")}
      >
        トップページに戻る
      </button>
    </div>
  )
}

export default CompletedTasks