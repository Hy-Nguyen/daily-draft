export default function FilterItem({
  label,
  options,
  selected,
  setSelected,
  id,
}: {
  label: string;
  options: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}) {
  return (
    <div
      id="filter"
      className="mb-4 flex w-full items-center rounded-[8px] border border-white/5 bg-[#1A1B23] transition-all"
    >
      <label htmlFor={id} className="ml-4 whitespace-nowrap text-xs text-[#5A5C6F]">
        {label}:
      </label>
      <select
        name={label}
        id={id}
        defaultValue={options[0]}
        onChange={(e) => setSelected(e.target.value)}
        className="ml-2 h-[40px] w-full rounded-[8px] bg-inherit text-xs text-white focus:outline-none"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
