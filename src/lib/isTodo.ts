const isTodo = (arg: any): arg is Todo => {
    return (
        typeof arg === 'object' &&
        typeof arg.id === 'number' &&
        typeof arg.value === 'string' &&
        typeof arg.checked === 'boolean' &&
        typeof arg.removed === 'boolean'
    )
};

export const isTodos = (arg: any): arg is Todo[] => {
    return Array.isArray(arg) && arg.every(isTodo);
}

//*arg is Todo は Type predicate と呼ばれる、booleanを返す関数の戻り値を
//x is Tと書くことで、trueを返せばxがT型、falseを返せばそうでないことを表す機能

