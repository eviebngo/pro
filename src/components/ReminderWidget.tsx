import { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export function ReminderWidget() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Pick up arts & crafts supplies', completed: false },
    { id: 2, text: 'Send cookie recipe to Rigo', completed: false },
    { id: 3, text: 'Book club prep', completed: false },
    { id: 4, text: 'Hike with Darla', completed: false },
    { id: 5, text: 'Schedule car maintenance', completed: false },
    { id: 6, text: 'Cancel membership', completed: false },
    { id: 7, text: 'Check spare tire', completed: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const incompleteTasks = tasks.filter(t => !t.completed).length;

  return (
    <div className="bg-[rgba(0,0,0,0)] h-[305.19px] relative rounded-[14.656px] w-[291.396px]">
      <div className="absolute backdrop-blur-[50px] bg-[rgba(28,28,30,0.29)] content-stretch flex flex-col gap-[3.448px] h-[305.19px] items-start left-[calc(50%+0.3px)] overflow-clip pb-0 pt-[14.656px] px-[13.794px] rounded-[18.967px] top-0 translate-x-[-50%] w-[291.396px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        
        {/* Header Container */}
        <div className="content-stretch flex flex-col gap-[12.07px] h-[54.313px] items-start relative shrink-0 w-[263.808px]">
          <div className="h-[40.52px] relative shrink-0 w-full">
            {/* Text Container */}
            <div className="absolute content-stretch flex flex-col gap-[12.932px] items-start leading-[0] left-0 not-italic top-0 w-[64.659px]">
              <div className="flex flex-col font-['SF_Pro_Rounded',sans-serif] justify-center relative shrink-0 text-[25.864px] text-[rgba(255,255,255,0.77)] tracking-[0.2586px] w-full drop-shadow-lg">
                <p className="leading-[13.794px]">{incompleteTasks}</p>
              </div>
              <div className="flex flex-col font-['SF_Pro_Rounded',sans-serif] justify-center relative shrink-0 text-[13.363px] text-[rgba(226,14,0,0.66)] tracking-[0.0862px] w-full drop-shadow-lg">
                <p className="leading-[13.794px]">Reminders</p>
              </div>
            </div>

            {/* Symbol Container - Animated plus button */}
            <div className="absolute right-[-0.19px] size-[29.312px] top-[3.45px] transition-transform hover:scale-110 cursor-pointer">
              <div className="bg-[rgba(226,14,0,0.6)] backdrop-blur-sm rounded-full size-full flex items-center justify-center border border-white/20 shadow-lg">
                <svg className="w-4 h-4 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="h-[1.724px] relative shrink-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Task List Container */}
        <div className="flex-1 overflow-y-auto w-full custom-scrollbar pr-1">
          <div className="space-y-[1.724px]">
            {tasks.map((task, index) => (
              <div key={task.id} className="group">
                <div className="flex items-center gap-[8.621px] py-[6.897px] px-[5.173px] rounded-[8.621px] transition-all hover:bg-white/5">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`flex-shrink-0 size-[17.242px] rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 shadow-md
                      ${task.completed ? 'border-[#00c853] bg-[#00c853]/30' : 'border-white/50 hover:border-white/70'}`}
                  >
                    {task.completed && (
                      <svg className="w-[10px] h-[10px] text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Task Text */}
                  <span 
                    className={`flex-1 font-['SF_Pro_Text',sans-serif] text-[12.932px] leading-[17.242px] transition-all drop-shadow-md
                      ${task.completed 
                        ? 'text-white/30 line-through' 
                        : 'text-white'
                      }`}
                  >
                    {task.text}
                  </span>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-100 flex-shrink-0 w-[22px] h-[22px] hover:bg-[rgba(226,14,0,0.3)] backdrop-blur-sm rounded-lg flex items-center justify-center transition-all border border-white/10"
                  >
                    <svg className="w-[12px] h-[12px] text-[#e20e00] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Task Separator */}
                {index < tasks.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-[5.173px]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Task Count */}
        <div className="h-[50px] relative shrink-0 w-full flex flex-col items-center justify-center border-t border-white/10 mt-2 gap-1">
          <p className="font-['SF_Pro_Text',sans-serif] text-[10.345px] text-white/50 text-center drop-shadow-md">
            {tasks.filter(t => t.completed).length} of {tasks.length} completed
          </p>
          <p className="font-['SF_Pro_Text',sans-serif] text-[11px] text-white/70 text-center drop-shadow-md italic">
            Monday - How will you make tomorrow meaningful?
          </p>
        </div>
      </div>
    </div>
  );
}