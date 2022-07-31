import { useState } from "react";

export const Resultado: React.FC = ({ dados }: any) => {
    return (
        <>
            
            {dados?.map((info) => {
                return (
                    <p>{info.name}</p>
                )
            })}
        </>
    );
}