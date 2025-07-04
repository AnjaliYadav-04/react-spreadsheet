import React, { useState } from 'react';
import { columns, data as initialData } from '../data/sampleData';

const Spreadsheet: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const updated = data.map((row, i) =>
      i === rowIndex ? row.map((cell, j) => (j === colIndex ? value : cell)) : row
    );
    setData(updated);
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-5xl mx-auto mt-6">

      <div className="overflow-x-auto">
       <table className="min-w-full border border-gray-300 border-collapse">

          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="border p-2 text-left text-sm font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {row.map((cell, colIndex) => (
                  <td key={colIndex} className="border p-2 text-sm">
                    <input
                      value={cell}
                      onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                      className="w-full bg-transparent focus:outline-none"
                      aria-label={`Row ${rowIndex + 1} Column ${colIndex + 1}`}

                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex gap-2">
        <button
        
          onClick={() =>{
            alert('Data has been logged to the console!');
             console.log(data);
            }}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Log Data
        </button>
      </div>
    </div>
  );
};

export default Spreadsheet;
