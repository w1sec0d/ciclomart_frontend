const SearchPage = (params) => {

    console.log(params.searchResults);
    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {params.searchResults.map((result, index) => (
                <li key={index}>{result.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;