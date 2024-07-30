import React from 'react';

interface DateInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  min?: string;
  max?: string;
  width?: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, placeholder, value, onChange, min, max, width = 'w-full' }) => {
  return (
    <div
      className={`${width} border-draft relative flex h-[50px] flex-row items-center gap-2 overflow-hidden rounded-[8px] bg-[#1A1B23] px-2`}
    >
      <label htmlFor={placeholder} className="text-draft text-sm lg:text-base">
        {label}:{' '}
      </label>
      <div className="relative flex-grow">
        <input
          id={placeholder}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          className="w-full appearance-none bg-transparent text-white focus:outline-none"
          placeholder={placeholder}
        />
        <svg
          className="pointer-events-none absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default DateInput;
