
import { Select } from './components'
import Input from './components/atoms/Input'

function App() {
  
  return (
    <>

      <Input name="name" label="Your name" type="text" step="0.1"/>
      <Input name="name" label="Your age" type="number" step="0.1"/>
      <Select />
    </>
  )
}

export default App
