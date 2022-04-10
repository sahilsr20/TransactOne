import { Outlet } from 'react-router-dom'
import { CenterGrid } from '../components/GridItem'
function App() {
  return (
	<CenterGrid>
		<Outlet/>
	</CenterGrid>
  )
}

export default App
