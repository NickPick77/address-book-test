
const SearchBar = ({ setSearchInput }) => {


    return (
        <>
            <form>
                <input type="text" placeholder="cerca contatto" onChange={(e) => setSearchInput(e.target.value)} />
            </form>
        </>
    )
}

export default SearchBar