import React from 'react'

const Search = ({productName, setProductName, difficulty, setDifficulty}) => {
  return (
        <div className='my-10 flex justify-center gap-4 flex-wrap mx-3'>
            <label className="input ">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Search item name..." />
            </label>
            <label className="select" id='select'>
                <span className="label">Type</span>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value === "All" ? "" : e.target.value)}>
                    <option>All</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                    <option>Expert</option>
                </select>
            </label>
        </div>
  )
}

export default Search