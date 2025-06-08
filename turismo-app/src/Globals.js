import { createContext, useState } from "react";

export const Globals = createContext();

export function GlobalsProvider({ children }) {
    const [pontuacao, setPontuacao] = useState(0);
    const [destinoG, setDestino] = useState(Map);

    return (
    <Globals.Provider value={{ pontuacao, setPontuacao, destinoG, setDestino }}>
        {children}
    </Globals.Provider>
    );
}
