
export type StateType = {
    collapsed: boolean
}

export const reducerUncontrolledAccordion = (state: StateType, action: ChangeCollapsedAC): StateType => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED': {
            return {
                ...state,
                collapsed: !state.collapsed
            }
        }
        default: return state
    }
};

export type ChangeCollapsedAC = ReturnType<typeof changeCollapsedAC>

export const changeCollapsedAC = () => {
    return {
        type: 'TOGGLE-COLLAPSED'
    } as const
}