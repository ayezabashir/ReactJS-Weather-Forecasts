/* eslint-disable react/prop-types */
import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { options, url } from "../../api";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    async function loadOptions(inputValue) {
        try {
            const response = await fetch(`${url}?minPopulation=1000000&namePrefix=${inputValue}`, options);
            const result = await response.json();
            return {
                options: result.data.map(city => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
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
