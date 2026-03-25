import React from 'react'

export const TextInput = ({label = "" , onChange, value , placeholder=""}) => {
  return (
   <label
        className="block mb-2.5 text-sm font-medium text-heading"
      >
       {label}
          <input
          value={value}
          onChange={onChange}
          className="w-full bg-white border border-gray-200 text-gray-700 text-sm 
               rounded-xl px-3 py-2 shadow-sm 
               focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400
               placeholder-gray-400 transition mt-2"
          placeholder={placeholder}
        />
      </label>
  )
}
