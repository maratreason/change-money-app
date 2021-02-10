import * as UserActionCreators from "./user";
import * as TodoActionCreators from "./todo";
import * as CurrencyActionCreators from "./currency";

export default {
    ...UserActionCreators,
    ...TodoActionCreators,
    ...CurrencyActionCreators,
}