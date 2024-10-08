import Style from "./searchbar.module.css";

const SearchBar = ({ setSearch, search, text }: SearchProps) => {
  return (
    <div className={Style.searchBar}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={text}
        className={Style.input}
      />
    </div>
  );
};

export default SearchBar;
