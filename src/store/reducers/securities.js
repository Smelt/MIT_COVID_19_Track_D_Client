import { SET_TICKER, SET_TICKER_PRICE, SET_OPTION_CHAIN } from '../actions/securities'

const initialOptionChain = {
    '2020-01-01': {
        c: {
            0: {l: "0", b: "1", a: "2"},
            10: {l: "0", b: "1", a: "2"},
            20: {l: "0", b: "1", a: "2"},
        },
        p: {
            0: {l: "0", b: "1", a: "2"},
            10: {l: "0", b: "1", a: "2"},
            20: {l: "0", b: "1", a: "2"},
        }
    },
    '2020-02-01': {
        c: {
            0: {l: "0", b: "1", a: "2"},
            10: {l: "0", b: "1", a: "2"},
            20: {l: "0", b: "1", a: "2"},
        },
        p: {
            0: {l: "0", b: "1", a: "2"},
            10: {l: "0", b: "1", a: "2"},
            20: {l: "0", b: "1", a: "2"},
        }
    },
    '2020-03-01': {
        c: {
            0: {l: "0", b: "1", a: "2"},
            10: {l: "0", b: "1", a: "2"},
            20: {l: "0", b: "1", a: "2"},
        },
        p: {
            0: {l: "0", b: "1", a: "2"},
            10: {l: "0", b: "1", a: "2"},
            20: {l: "0", b: "1", a: "2"},
        }
    }
}

const securitiesReducer = {
    tickerPrice : "0.00",
    optionChain : initialOptionChain
}

export default (state = securitiesReducer, action) => {
    switch (action.type) {
        case SET_TICKER_PRICE:
            return { ...state, tickerPrice: action.price }
        case SET_OPTION_CHAIN:
            return { ...state, optionChain: action.optionChain }
        default:
            return state;
    }
};
