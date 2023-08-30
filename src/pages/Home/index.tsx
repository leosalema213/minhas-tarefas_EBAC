import BotaoAdicionar from '../../components/BotaoAdicionar'
import SideBar from '../../containers/SideBar'
import TodoList from '../../containers/TodoList'

const Home = () => (
  <>
    <SideBar mostrarFiltros={true} />
    <TodoList />
    <BotaoAdicionar />
  </>
)

export default Home
