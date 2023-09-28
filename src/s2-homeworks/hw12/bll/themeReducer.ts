const initState = {
    themeId: 1,
}

type InitStateType = {
    themeId: number
}

export const themeReducer = (state = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): { type: 'SET_THEME_ID', id: number }  => ({ type: 'SET_THEME_ID', id } as const) // fix any
type changeThemeIdType = ReturnType<typeof changeThemeId>

type ActionType = changeThemeIdType
