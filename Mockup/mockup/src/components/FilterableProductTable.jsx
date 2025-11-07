import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({product}){
    return (
        <div>
            <SearchBar />
            <ProductTable products={product}/>
        </div>
    )
}

export default FilterableProductTable;