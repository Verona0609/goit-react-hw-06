import styles from "./SearchBox.module.css";

const SearchBox = ({ searchContact, handleChange }) => {
  return (
    <>
      <label htmlFor="findContact">
        Find contact by name
        <input
          className={styles.input}
          name="findContact"
          type="text"
          placeholder="Rosie Simpson"
          value={searchContact}
          onChange={handleChange}
          required
        />
      </label>
    </>
  );
};

export default SearchBox;
