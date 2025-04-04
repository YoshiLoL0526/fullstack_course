import { useState } from 'react'
import Filter from './components/Filter'
import CountryList from './components/CountryList'

function App() {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <CountryList filter={filter} />
    </div>
  )
}

export default App
