import { useDebouncedInputValue } from "./hooks/useDebounceInputValue"
function App() {
  const [value, debouncedValue, inputOnChange]= useDebouncedInputValue('')
  
  return (
    <div>
      -- Use Debounce && useReducer --
      <input value={value} onChange={inputOnChange}/>
     <div>
      <div>Value: {value}</div>
      <div>Debounced: {debouncedValue}</div>
     </div>
    </div>
  )
}

export default App
