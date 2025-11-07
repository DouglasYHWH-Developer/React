function SearchBar() {
  return (
    <form>
        <input type="text" placeholder='search...'/>
        <label>
            <input type="checkbox"/>
            {' '}
            only show products in stock
        </label>
    </form>
  )
}

export default SearchBar;