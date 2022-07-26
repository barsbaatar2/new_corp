import {atom, selector} from "recoil"

const collapsedState = atom({
    key: "collapsedState",
    default: false
})

const cartState = atom({
    key: "cartState",
    default: []
})

export {collapsedState, cartState} 