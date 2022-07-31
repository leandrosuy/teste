import { useState } from "react";
import { Pesquisa } from "../../components/Pesquisa";
import { Resultado } from "../../components/Resultado";

export const Home: React.FC = () => {
    const [dados, setDados] = useState();
    
    const pegarDados = (dados: any) => {
        setDados(dados)
        // console.log('No pai' + dados)
    }

    return (
        <>
            <Pesquisa pegarDados={pegarDados} />
            <Resultado dados={ dados } />
        </>
    );
}