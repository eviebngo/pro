import { useState, useEffect } from 'react';

export function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  const today = currentDate.getDate();
  const currentMonth = currentDate.getMonth();

  const renderCalendar = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <div key={`empty-${i}`} className="w-[15.518px] h-[15.518px]"></div>
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today;
      const isWeekend = (startingDayOfWeek + day - 1) % 7 === 0 || (startingDayOfWeek + day - 1) % 7 === 6;
      
      days.push(
        <div
          key={day}
          className={`content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15.518px] transition-all
            ${isToday ? 'bg-[#ff4539] rounded-[17.242px] shadow-lg' : ''}
            ${!isToday && !isWeekend ? 'hover:bg-white/10 rounded-[17.242px]' : ''}
          `}
        >
          <p className={`font-['SF_Pro_Text',sans-serif] h-[6.035px] leading-[normal] not-italic relative shrink-0 text-[8.621px] text-center uppercase w-full drop-shadow-md
            ${isToday ? 'text-white' : ''}
            ${!isToday && isWeekend ? 'text-[#8e8d93]' : ''}
            ${!isToday && !isWeekend ? 'text-white' : ''}
          `}>
            {day}
          </p>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="relative size-[136.215px]">
      <p className="text-shadow-[rgba(0,0,0,0.5)_0px_0px_12.932px] absolute bottom-[-4.1px] font-['SF_Pro_Text',sans-serif] leading-[13.794px] left-0 not-italic right-[0.21px] text-[10.345px] text-center text-white translate-y-[100%]">
        Calendar
      </p>
      <div className="absolute backdrop-blur-[50px] bg-[rgba(28,28,30,0.29)] content-stretch flex flex-col gap-[5.173px] items-center left-[calc(50%-0.11px)] overflow-clip pb-[13.794px] pt-[14.656px] px-[10.345px] rounded-[18.967px] size-[136.215px] top-0 translate-x-[-50%] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        <div className="relative shrink-0 w-full">
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start pb-0 pl-[3.448px] pr-0 pt-[1.724px] relative w-full">
              <p className="font-['SF_Pro_Text',sans-serif] h-[6.897px] leading-[normal] not-italic relative shrink-0 text-[#ff4539] text-[9.483px] uppercase w-full drop-shadow-lg">
                {monthNames[currentMonth]}
              </p>
            </div>
          </div>
        </div>

        {/* Day names */}
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-[115.524px]">
          {dayNames.map((day, index) => {
            const isWeekend = index === 0 || index === 6;
            return (
              <div
                key={day + index}
                className={`content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[15.518px]`}
              >
                <p className={`font-['SF_Pro_Text',sans-serif] h-[6.035px] leading-[normal] not-italic relative shrink-0 text-[8.621px] text-center uppercase w-full drop-shadow-md
                  ${isWeekend ? 'text-[#8e8d93]' : 'text-white'}`}>
                  {day}
                </p>
              </div>
            );
          })}
        </div>

        {/* Calendar grid */}
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="grid grid-cols-7 gap-0 w-[115.524px]">
            {renderCalendar()}
          </div>
        </div>
      </div>
    </div>
  );
}