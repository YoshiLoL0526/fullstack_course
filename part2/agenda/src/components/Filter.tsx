export interface FilterProps {
    filterName: string,
    setFilterName: React.Dispatch<React.SetStateAction<string>>
}

const Filter: React.FC<FilterProps> = ({ filterName, setFilterName }) => {

    const handlefilterNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterName(event.target.value)
    }

    return (
        <div>
            filter shown with <input value={filterName} onChange={handlefilterNameChange} />
        </div>
    )
}

export default Filter