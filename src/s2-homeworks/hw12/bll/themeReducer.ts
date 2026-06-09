const initState = {
    themeId: 1,
}

export type themeIdType = {
    themeId: number
}

export const themeReducer = (state = initState, action: changeThemeIdTC): themeIdType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
           return {...state, themeId: action.id}
        default:
            return state
    }
}
type changeThemeIdTC = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): { type: string, id: number } => ({type: 'SET_THEME_ID', id}) // fix any
