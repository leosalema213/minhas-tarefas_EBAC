import Formulario from '../../containers/Formulario'
import SideBar from '../../containers/SideBar'

const Cadastro = () => (
  <>
    {/* Barra Lateral */}
    <SideBar mostrarFiltros={false} />

    <Formulario />
  </>
)
export default Cadastro
