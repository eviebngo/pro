import { useState } from 'react';
import { BookOpen, Plus, X } from 'lucide-react';

interface JournalEntry {
  id: string;
  date: string;
  content: string;
}

export function JournalWidget() {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      content: 'Monday - How will you make tomorrow meaningful?'
    }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        content: newEntry.trim()
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
      setIsAdding(false);
    }
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  return (
    <div className="w-full h-full rounded-[20px] bg-white/10 backdrop-blur-xl border border-white/20 p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-white/90" />
          <h2 className="text-white/90">Journal</h2>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center"
        >
          <Plus className="w-4 h-4 text-white/90" />
        </button>
      </div>

      {/* Add Entry Form */}
      {isAdding && (
        <div className="mb-3 space-y-2">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Write your thoughts..."
            className="w-full h-20 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white/90 placeholder:text-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <div className="flex gap-2">
            <button
              onClick={handleAddEntry}
              className="flex-1 px-3 py-1.5 bg-blue-500/80 hover:bg-blue-500 text-white rounded-lg transition-all"
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsAdding(false);
                setNewEntry('');
              }}
              className="flex-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white/90 rounded-lg transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Entries List */}
      <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        {entries.length === 0 ? (
          <div className="text-center text-white/40 py-8">
            No entries yet. Start writing!
          </div>
        ) : (
          entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-3 transition-all group"
            >
              <div className="flex items-start justify-between mb-1">
                <span className="text-xs text-white/60">{entry.date}</span>
                <button
                  onClick={() => handleDeleteEntry(entry.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-3.5 h-3.5 text-white/60 hover:text-red-400" />
                </button>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">{entry.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}