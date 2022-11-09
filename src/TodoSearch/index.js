import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

import './TodoSearch.css';

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange  = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <input 
        className="TodoSearch" 
        placeholder="Cebolla"
        onChange={onSearchValueChange}
        value={searchValue}
      />
      <p>{searchValue}</p>
    </>
  )
}

export default TodoSearch;