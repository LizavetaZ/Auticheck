import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state]
            if (action.payload === 'down') {
                return copyState.sort((a,b) => a.age - b.age)
            } else return copyState.sort((a, b) => b.age - a.age)
        }
        case 'check': {
            return state.filter(a => a.age >= action.payload)
        }
        default:
            return state
    }
}
