import { createContext, useState } from "react";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
    //2. Создаю КОМПОНЕНТ с приставкой Provider, который принимает Children, возвращает Provider контекста
    const [inputValue, setInputValue] = useState(""); //3. Прописываю какую-то логику, какие-то состояния в нашем контексте
    const inputHandler = (e) => {
        setInputValue(e.target.value);
    };

    const value = {
        inputValue,
        inputHandler
    }; //4. Формирую какие-то данные на выход, что бы они были доступны из любого места в нашем приложении

    return (
        <InputContext.Provider value={value}>{children}</InputContext.Provider>
    ); //5. Передаю эти данные
};
