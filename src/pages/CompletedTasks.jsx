import React, { useState } from "react"

const CompletedTasks = () => {
  const [completedTasks] = useState(JSON.parse(localStorage.getItem("completedTasks"))||[ ])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-5xl m-6">完了したタスク</div>
      <div className="max-w-2xl mx-auto">
        {completedTasks.length> 0 ?(
          <ul className="space-y-4">
            {completedTasks.map((task)=>(
              <li key={task.id}className="flex justify-center border-2 border-black mx-auto w-64">
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
            className="flex justify-center border-2 border-black mx-auto w-64">
            {task.title}
          </div>
        ))}
      </div>
      <button
        className="fixed bottom-6 py-2 px-6 border-2 border-black rounded-lg top-0 right-0 w-50 h-16 bg-blue-300 mt-8 mr-20 hover:bg-blue-400"
        onClick={() => (window.location.href = "/")}
      >
        トップページに戻る
      </button>
    </div>
  )
}

export default CompletedTasks