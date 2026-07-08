import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ task: '' });
  const [tasks, setTasks] = useState([
    { text: 'Design database schema', completed: false },
    { text: 'Set up API endpoints', completed: false }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.task.trim()) {
      setTasks([...tasks, { text: formData.task, completed: false }]);
      setFormData({ task: '' });
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercentage = tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="p-8 max-w-xl mx-auto bg-black/40 rounded-xl shadow-2xl backdrop-blur-md border border-yellow-500/30 text-white">
      <h2 className="text-3xl font-bold mb-2 text-yellow-400">Development Planner</h2>
      
      {/* Visual Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1 text-gray-300">
          <span>Milestone Progress</span>
          <span>{progressPercentage}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-400 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={formData.task}
          onChange={(e) => setFormData({task: e.target.value})}
          placeholder="Enter a new development task..."
          className="p-3 rounded-lg border-2 border-transparent focus:border-yellow-500 outline-none text-gray-100 bg-gray-800"
        />
        <button type="submit" className="bg-yellow-600 text-white font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors">
          Add Task
        </button>
      </form>
      
      <ul className="mt-6 space-y-2">
        {tasks.map((t, i) => (
          <li key={i} 
              onClick={() => toggleTask(i)}
              className={`p-3 border rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 ${t.completed ? 'bg-green-900/40 border-green-500/50 opacity-70' : 'bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-400'}`}>
            <span className="font-bold">{t.completed ? '✅' : '⏳'}</span> 
            <span className={t.completed ? 'line-through text-gray-400' : ''}>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

