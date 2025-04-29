import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livros',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: false
        }, {
            _id: 2,
            description: 'Reunião com equipe',
            done: true
        }, {
            _id: 3,
            description: 'Consulta medica',
            done: false
        }]
    })
})

export default rootReducer;