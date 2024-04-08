import React from 'react'

const Category = ({handleChange, categories, category}) => {
  return (
    <div>
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          value={category}
          onChange={(ev) => handleChange(ev.target.value, "category")}
        >
          <option value="">Choose a Category</option>
          {categories.map((category) => {
            return (
              <option key={category} value={`${category.toLowerCase()}`}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
  )
}

export default Category