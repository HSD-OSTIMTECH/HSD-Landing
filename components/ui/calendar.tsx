
import React, { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameMonth,
  isSameDay,
  getDay,
  isToday,
} from 'date-fns';
import Button from './button';


const turkishMonths = [
  'OCAK', 'ŞUBAT', 'MART', 'NİSAN', 'MAYIS', 'HAZİRAN',
  'TEMMUZ', 'AĞUSTOS', 'EYLÜL', 'EKİM', 'KASIM', 'ARALIK'
];
const weekDays = ['PZT', 'SAL', 'ÇAR', 'PER', 'CU', 'CUM', 'PAZA'];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Example: dots for events
  const eventDays = [20, 24];

  const renderHeader = () => {
    const monthIndex = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    return (
      <div className="flex items-center justify-between px-4 pt-4">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="text-white text-2xl px-2"
          aria-label="Previous month"
        >
          &#60;
        </button>
        <span className="text-white text-2xl font-semibold font-poppins">
          {turkishMonths[monthIndex]} {year}
        </span>
        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="text-white text-2xl px-2"
          aria-label="Next month"
        >
          &#62;
        </button>
      </div>
    );
  };

  const renderDays = () => (
    <div className="grid grid-cols-7 gap-2 mt-4">
      {weekDays.map((day, idx) => (
        <div key={idx} className="text-neutral-400 text-center font-poppins text-base">
          {day}
        </div>
      ))}
    </div>
  );

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isSelected = selectedDate && isSameDay(day, selectedDate);
        const isEvent = eventDays.includes(Number(formattedDate)) && isCurrentMonth;
        days.push(
          <div
            key={day.toString()}
            className={`relative flex items-center justify-center h-12 w-12 rounded-xl font-poppins text-lg cursor-pointer transition-all
              ${isCurrentMonth ? 'bg-neutral-800 text-white' : 'bg-neutral-700 text-neutral-400'}
              ${isSelected ? 'border-2 border-primary' : ''}
              ${isToday(day) ? 'font-bold !text-blue border-2 border-blue' : ''}
              ${isSelected && isToday(day) ? 'bg-primary text-white' : ''}
              ${isSelected && !isToday(day) ? 'bg-neutral-900 border-primary text-primary' : ''}
              ${isCurrentMonth && Number(formattedDate) === 1 ? 'bg-primary text-white' : ''}
            `}
            onClick={() => isCurrentMonth && setSelectedDate(cloneDay)}
          >

            <span>{formattedDate}</span>
            {isEvent && (
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
            )}

          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-2 py-2" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="mt-2">{rows}</div>;
  };

  return (
    <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg w-full max-w-md font-poppins">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      <div className="flex items-center justify-between gap-4 mt-6">
        <Button variant="outline" className="w-1/2">
          Vazgeç
        </Button>
        <Button variant="primary" className="w-1/2">
          Tarihi Seç
        </Button>
      </div>
    </div>
  );
};

export default Calendar;