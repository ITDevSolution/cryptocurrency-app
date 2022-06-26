import { useState } from "react"
import CoinItem from "./CoinItem"

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("")
  // console.log(coins)
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        {/* Form Search */}
        <form>
          <input
            onChange={(e) => {
              console.log(e.target.value)
              setSearchText(e.target.value)
            }}
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>
      {/* Table */}
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24 Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value
              } else if (
                value.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              ) {
                return value
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch
