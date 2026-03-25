import { useEffect, useRef } from "react";

export const Textarea = ({ label, value, onChange, placeholder }) => {
  const textareaRef = useRef(null);

  // Auto resize height
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  }, [value]);

  return (
    <label className="block mb-2.5 text-sm font-medium text-heading">
      {label}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        rows={1}
        className="w-full bg-white border border-gray-200 text-gray-700 text-sm 
             rounded-xl px-3 py-2 shadow-sm 
             resize-y overflow-auto
             focus:outline-none focus:ring-2 focus:ring-pink-400 "
        placeholder={placeholder}
      />
    </label>
  );
};
