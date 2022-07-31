import { useState } from "react";

const [dados, setDados] = useState();

export const useGetData = (dados: any) => {
    setDados(dados)
}