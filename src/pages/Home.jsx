import { useState } from 'react';

// Reusable Component with Props
const Greeting = ({ title }) => <h2 className="text-3xl font-bold mb-4">{title}</h2>;

export default function Home() {
  const [formData, setFormData] = useState({ task: '' });
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.task.trim()) {
      setTasks([...tasks, formData.task]);
      setFormData({ task: '' });
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white/10 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-500/30">
      <Greeting title="Interactive Task Manager" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={formData.task}
          onChange={(e) => setFormData({task: e.target.value})}
          placeholder="Enter a new development milestone..."
          className="p-3 rounded-lg border-2 border-transparent focus:border-blue-500 outline-none text-gray-900 bg-gray-50"
        />
        <button type="submit" className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Add Milestone
        </button>
      </form>
      <ul className="mt-6 space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center gap-3">
            <span className="text-blue-400 font-bold">✓</span> {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
