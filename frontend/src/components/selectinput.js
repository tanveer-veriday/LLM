export const SelectInput = ({ label, options = [] , onChange , value}) => {
  return (
    <div>
      <label
        for="s_id"
        class="block mb-2.5 text-sm font-medium text-heading"
      >
        {label}
      </label>
      <select
        id="s_id"
        value={value}
        className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg px-3 py-1.5 
             focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 
             transition"
        onChange={onChange}
      >
        <option selected value={options[0]}>{options[0]}</option>
        {options
          .filter((option, index) => index !== 0)
          .map((option) => (
            <option value={option}>{option}</option>
          ))}
      </select>
    </div>
  );
};
