import "./SearchBox.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-box">
      <p>Find contacts by name:</p>
      <input
        type="text"
        placeholder="Search contacts"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
