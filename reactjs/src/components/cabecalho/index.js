
import { Barra, ContainerCabecalho, BotaoSair } from './styled'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router'

export default function Cabecalho() {

    const navigation = useHistory();

    const logoff = () => {
        Cookies.remove('usuario-logado')
        navigation.push('/')
    }
    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <BotaoSair onClick={logoff}> Sair </BotaoSair>
        </ContainerCabecalho>
    )
}
