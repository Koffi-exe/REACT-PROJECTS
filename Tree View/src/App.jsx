
import './App.css'
import TreeView from './components/TreeView/TreeView'
import menus from './components/TreeView/data'

function App() {

  return (
    <>
      <TreeView menu={menus} />
    </>
  )
}

export default App
