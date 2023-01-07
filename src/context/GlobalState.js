import React, {createContext, useReducer} from "react"

const initialState = {
    transactions: [
        {id: 1, text: "Flower", amount: -50},
        {id: 2, text: "Salary", amount: +1500},
        {id: 3, text: "Drinks", amount: -30},
        {id: 4, text: "Camera", amount: +300},
    ]
}