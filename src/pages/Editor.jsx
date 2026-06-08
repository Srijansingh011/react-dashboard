import React, { useState, useRef } from 'react';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const toolbarItems = [
  { cmd: 'bold', icon: 'B', style: 'font-bold', title: 'Bold' },
  { cmd: 'italic', icon: 'I', style: 'italic', title: 'Italic' },
  { cmd: 'underline', icon: 'U', style: 'underline', title: 'Underline' },
  { cmd: 'strikeThrough', icon: 'S̶', style: 'line-through', title: 'Strikethrough' },
];

const blockItems = [
  { cmd: 'formatBlock', value: 'h1', label: 'H1' },
  { cmd: 'formatBlock', value: 'h2', label: 'H2' },
  { cmd: 'formatBlock', value: 'p', label: '¶' },
];

const listItems = [
  { cmd: 'insertUnorderedList', icon: '• List' },
  { cmd: 'insertOrderedList', icon: '1. List' },
];

const Editor = () => {
  const { currentColor } = useStateContext();
  const editorRef = useRef(null);
  const [wordCount, setWordCount] = useState(0);

  const exec = (cmd, value = null) => {
    document.execCommand(cmd, false, value);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    const text = editorRef.current?.innerText || '';
    setWordCount(text.trim() ? text.trim().split(/\s+/).length : 0);
  };

  return (
    <div className="m-4 md:m-10 mt-6 p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-card border border-gray-50 dark:border-gray-800">
      <Header category="App" title="Rich Text Editor" />

      <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-1 p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          {/* Text style */}
          <div className="flex items-center gap-1 pr-3 border-r border-gray-200 dark:border-gray-700">
            {toolbarItems.map((t) => (
              <button
                key={t.cmd}
                title={t.title}
                onMouseDown={(e) => { e.preventDefault(); exec(t.cmd); }}
                className="w-8 h-8 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-sm transition-all"
              >
                {t.icon}
              </button>
            ))}
          </div>

          {/* Block format */}
          <div className="flex items-center gap-1 px-3 border-r border-gray-200 dark:border-gray-700">
            {blockItems.map((b) => (
              <button
                key={b.value}
                onMouseDown={(e) => { e.preventDefault(); exec(b.cmd, b.value); }}
                className="px-2.5 h-8 rounded-lg text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all"
              >
                {b.label}
              </button>
            ))}
          </div>

          {/* Lists */}
          <div className="flex items-center gap-1 px-3 border-r border-gray-200 dark:border-gray-700">
            {listItems.map((l) => (
              <button
                key={l.cmd}
                onMouseDown={(e) => { e.preventDefault(); exec(l.cmd); }}
                className="px-2.5 h-8 rounded-lg text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-all"
              >
                {l.icon}
              </button>
            ))}
          </div>

          {/* Alignment */}
          <div className="flex items-center gap-1 px-3">
            {['justifyLeft', 'justifyCenter', 'justifyRight'].map((cmd, i) => (
              <button
                key={cmd}
                onMouseDown={(e) => { e.preventDefault(); exec(cmd); }}
                className="w-8 h-8 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 transition-all flex items-center justify-center"
              >
                {['≡', '≡', '≡'][i]}
              </button>
            ))}
          </div>

          {/* Color */}
          <input
            type="color"
            title="Text color"
            defaultValue={currentColor}
            onChange={(e) => exec('foreColor', e.target.value)}
            className="w-8 h-8 rounded-lg cursor-pointer border-0 p-0.5"
          />
        </div>

        {/* Editable area */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          suppressContentEditableWarning
          className="min-h-64 p-6 text-gray-700 dark:text-gray-200 text-sm leading-relaxed outline-none"
          data-placeholder="Start writing..."
          style={{ caretColor: currentColor }}
        >
          <h2>Welcome to the Rich Text Editor</h2>
          <p>This is a fully functional editor built with <strong>zero</strong> third-party dependencies. You can <em>format text</em>, create lists, change alignment, and more!</p>
          <p>Try selecting text and using the toolbar above to format it.</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <span className="text-xs text-gray-400">{wordCount} words</span>
          <div className="flex gap-2">
            <button
              onMouseDown={(e) => { e.preventDefault(); if (editorRef.current) editorRef.current.innerHTML = ''; setWordCount(0); }}
              className="text-xs text-gray-400 hover:text-red-400 transition-colors"
            >
              Clear
            </button>
            <button
              className="text-xs font-semibold text-white px-3 py-1 rounded-lg hover:opacity-90 transition-opacity"
              style={{ background: currentColor }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
