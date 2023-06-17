const ADD_NOTE = "ADD-NOTE";

export const addNoteAC = (note) => {
    return {
        type: ADD_NOTE,
        note
    }
}

export const NotesReducer = (state, action) => {
    if(action.type === ADD_NOTE) {
        return ({
            ...state,
            notesPage: [
                ...state.notesPage,
                {
                    ...action.note
                }
            ]
        })
    }
    else {
        return state;
    }
}