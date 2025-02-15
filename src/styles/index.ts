import { createGlobalStyle, styled } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  fonst-size: 18px;
  font-weight: bold;
  margin: 40px 0;
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  color: #666666;
  border-color: #666666;
  border-radius: 8px;
  font-weight: bold;
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
