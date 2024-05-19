import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import TemporaryDrawer from "./pages/Drawer/TemporaryDrawer";
import PersistentDrawerLeft from "./pages/Drawer/PersistentDrawerLeft";
function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <TemporaryDrawer />
      <PersistentDrawerLeft/>
    </div>
  );
}

export default App;