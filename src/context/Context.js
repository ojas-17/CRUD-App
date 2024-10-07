import { createContext, useContext } from "react";

export const MyContext = createContext({
    details:[],

    lastId: 0,

    inputName: '',
    inputEmail: '',
    inputContact: '',

    addDetails: () => {},
    editDetails: () => {},
    deleteDetails: () => {}
})

export const useMyContext = () => {
    return useContext(MyContext)
}

export const MyProvider = MyContext.Provider