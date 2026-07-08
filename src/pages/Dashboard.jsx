import { useEffect, useState, useMemo } from 'react';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data Fetching Side Effect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=4')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // Performance Optimization Hook (Calculates only when 'users' changes)
  const userCount = useMemo(() => users.length, [users]);

  if (loading) return <div className="text-center text-xl animate-pulse mt-10">Fetching API Data...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <div className="col-span-full border-b border-gray-500/30 pb-4 mb-4">
        <h2 className="text-3xl font-bold">Live API Dashboard</h2>
        <p className="text-gray-400 mt-2">Active Data Pipelines: {userCount}</p>
      </div>
      {users.map(user => (
        <div key={user.id} className="p-6 border rounded-xl bg-white/5 border-gray-500/30 hover:border-blue-400 transition-colors">
          <h3 className="font-bold text-xl text-blue-400">{user.name}</h3>
          <p className="text-sm mt-2 opacity-80">📧 {user.email}</p>
          <p className="text-sm opacity-80">🏢 {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}
