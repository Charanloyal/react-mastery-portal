import { Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

export default function App() {
  const { state, dispatch } = useContext(AppContext);
  const bgClass = state.theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bgClass} font-sans`}>
      <nav className="p-5 shadow-lg bg-slate-950 text-white flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          ReactEngine v4.0
        </h1>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-blue-400 transition-colors font-medium">Home Manager</Link>
          <Link to="/dashboard" className="hover:text-blue-400 transition-colors font-medium">Data Dashboard</Link>
          <button 
            onClick={() => dispatch({type: 'TOGGLE_THEME'})} 
            className="bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-white/20 transition-all font-medium">
            🌓 Toggle Theme
          </button>
        </div>
      </nav>
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}