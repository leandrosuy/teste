import axios from "axios";
import { useEffect, useState } from "react";

export const Pesquisa: React.FC = ({ pegarDados }: any) => {
    const [page, setPage] = useState<Number>(1)
    const buscar = () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${page}`)
            .then((response) => {
                // console.log(response.data)
                pegarDados(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        buscar()
    }, [page])

    return (
        <>
            <button onClick={buscar}>Buscar</button>
            <button onClick={() => setPage(1)}>1</button>
            <button onClick={() => setPage(2)}>2</button>
            <button onClick={() => setPage(3)}>3</button>
            <button onClick={() => setPage(4)}>4</button>
            <button onClick={() => setPage(5)}>5</button>
        </>
    );
}