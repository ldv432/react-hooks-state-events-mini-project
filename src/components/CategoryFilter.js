import React from "react";

function CategoryFilter( {categories, filterCategory, chosenCategory} ) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category =>{
        const handleFilter = () => {
          filterCategory(category)
        }
        return <button key={category} onClick={handleFilter} className={category === chosenCategory ? "selected" : ""}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
