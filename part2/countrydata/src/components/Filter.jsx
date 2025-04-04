const Filter = ({ filter, setFilter }) => {
    const onFilterChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <div>
            <label htmlFor="filter">Find countries</label>
            <input type="text" id="filter" placeholder="Search for a country..." value={filter} onChange={onFilterChange} />
        </div>
    );
}

export default Filter;