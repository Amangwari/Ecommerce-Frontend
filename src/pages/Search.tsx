import { useState } from "react"
import ProductCard from "../components/ProductCard";


const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxprice, setMaxprice] = useState(1000000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {

  }


  const isprevpage = page > 1;
  const isnextpage = page < 4;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filter</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Low to High</option>
            <option value="dsc">High to Low</option>
          </select>
        </div>


        <div>
          <h4>Max Price: {maxprice || ""}</h4>
          <input type="range" value={maxprice} min={100} max={100000} onChange={(e) => setMaxprice(Number(e.target.value))} />
        </div>

        <div>
          <h4>Category</h4>
          <select value={sort} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="">Camera</option>
            <option value="">Game</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input placeholder="Search by name..." type="text" value={search} onChange={(e) => setSearch(e.target.value)} />


        <div className="search-product-list">
          <ProductCard productId="sdfdsfsf" name="Macbook" price={8786} stock={545} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/71-D1xCuVwL._SX679_.jpg" />
        </div>


        <article>
          <button disabled={!isprevpage} onClick={() => setPage(prev => prev - 1)}>Prev</button>
          <span>{page} of {4}</span>
          <button  disabled={!isnextpage} onClick={() => setPage(prev => prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  )
}

export default Search