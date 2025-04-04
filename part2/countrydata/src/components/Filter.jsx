const Filter = ({ filter, setFilter }) => {
    const onFilterChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <div>
            <label for="filter">Find conuntries</label>
            <input type="text" id="filter" placeholder="Search for a country..." value={filter} onChange={onFilterChange} />
        </div>
    );
}

export default Filter;