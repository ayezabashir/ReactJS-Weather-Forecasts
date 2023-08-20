import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { options, url } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    async function loadOptions(inputValue) {
        try {
            const response = await fetch(`${url}?minPopulation=1000000&namePrefix=${inputValue}`, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search here..."
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search
