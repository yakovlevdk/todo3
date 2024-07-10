export const handleSearch = (
  event,
  { search, setIsSearching, setFoundedItems, todos }
) => {
  event.preventDefault();
  searchData(search, setIsSearching, setFoundedItems, todos);
};

const searchData = (searchText, setIsSearching, setFoundedItems, todos) => {
  setIsSearching(true);
  const items = Object.entries(todos).filter(([todo]) =>
    todo.title.includes(searchText)
  );
  setFoundedItems(items);
  console.log(items);
};
