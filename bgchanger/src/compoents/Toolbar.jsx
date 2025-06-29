import React from 'react';

function Toolbar({ bgcolors, setcolor }) {
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-2">
      {
        bgcolors.map((i) => (
          <button
            onClick={() => setcolor(i)}
            className="px-4 py-2 rounded-full  font-semibold shadow-lg transition-all"

            style={{ backgroundColor: 'black' , color: i, border: `2px solid ${i}` }}
          >
            {i}
          </button>
        ))
      }
    </div>
  );
}

export default Toolbar;
