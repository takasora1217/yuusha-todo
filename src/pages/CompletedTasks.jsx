import React, { useState, useEffect } from "react"

const CompletedTasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storedTasks = localStorage.getItem("completedTasks")
    if (storedTasks) {
      try {
        setTasks(JSON.parse(storedTasks))
      } catch (error) {
        console.error("Error parsing completedTasks:", error)
      }
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl m-20">完了したタスク</div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex justify-center border-2 border-black mx-auto w-64 p-2"
          >
            {task.name}
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