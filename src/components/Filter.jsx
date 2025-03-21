

const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="incompleted">Incompleta</option>
                    </select>
                </div>
                <div className="asc-desc">
                    <p>Ordem alfabética:</p>
                    <div className="button-filter">
                        <button onClick={() => setSort("Asc")}>Asc</button>
                    <button  onClick={() => setSort("Desc")}>Desc</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Filter