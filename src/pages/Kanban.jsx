import React, { useState } from 'react';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const initialColumns = {
  todo: {
    title: 'To Do',
    color: '#6366f1',
    items: [
      { id: 1, title: 'Design new landing page', tag: 'Design', priority: 'High' },
      { id: 2, title: 'Fix payment gateway bug', tag: 'Dev', priority: 'High' },
      { id: 3, title: 'Write API documentation', tag: 'Docs', priority: 'Low' },
    ],
  },
  inProgress: {
    title: 'In Progress',
    color: '#f59e0b',
    items: [
      { id: 4, title: 'Build dashboard UI', tag: 'Dev', priority: 'High' },
      { id: 5, title: 'User testing for v2', tag: 'QA', priority: 'Medium' },
    ],
  },
  testing: {
    title: 'Testing',
    color: '#a855f7',
    items: [
      { id: 6, title: 'Cross-browser testing', tag: 'QA', priority: 'Medium' },
    ],
  },
  done: {
    title: 'Done',
    color: '#10b981',
    items: [
      { id: 7, title: 'Setup CI/CD pipeline', tag: 'DevOps', priority: 'High' },
      { id: 8, title: 'Database migration', tag: 'Dev', priority: 'Medium' },
    ],
  },
};

const priorityColors = { High: '#ef4444', Medium: '#f59e0b', Low: '#10b981' };
const tagColors = { Design: '#6366f1', Dev: '#3b82f6', Docs: '#8b5cf6', QA: '#f59e0b', DevOps: '#10b981' };

const Kanban = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [dragging, setDragging] = useState(null);
  const { currentColor } = useStateContext();

  const onDragStart = (colId, itemId) => setDragging({ colId, itemId });
  const onDrop = (targetColId) => {
    if (!dragging || dragging.colId === targetColId) return;
    const item = columns[dragging.colId].items.find((i) => i.id === dragging.itemId);
    setColumns((prev) => ({
      ...prev,
      [dragging.colId]: { ...prev[dragging.colId], items: prev[dragging.colId].items.filter((i) => i.id !== dragging.itemId) },
      [targetColId]: { ...prev[targetColId], items: [...prev[targetColId].items, item] },
    }));
    setDragging(null);
  };

  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <Header category="App" title="Kanban Board" />
      <p className="text-sm text-gray-400 mb-8">Drag and drop cards between columns</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {Object.entries(columns).map(([colId, col]) => (
          <div
            key={colId}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 min-h-64"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(colId)}
          >
            {/* Column header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: col.color }} />
                <span className="text-sm font-bold text-gray-700 dark:text-gray-200">{col.title}</span>
              </div>
              <span className="text-xs font-bold text-gray-400 bg-white dark:bg-gray-700 px-2 py-1 rounded-lg">
                {col.items.length}
              </span>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {col.items.map((item) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={() => onDragStart(colId, item.id)}
                  className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">{item.title}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: tagColors[item.tag] || '#6366f1' }}
                    >
                      {item.tag}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: priorityColors[item.priority] }} />
                      <span className="text-xs text-gray-400">{item.priority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add card placeholder */}
            <button className="w-full mt-3 py-2 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 text-gray-400 text-sm hover:border-indigo-300 hover:text-indigo-400 transition-colors">
              + Add card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
