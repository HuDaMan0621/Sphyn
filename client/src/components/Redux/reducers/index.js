const initialState = [];

//if state does not exist, set it to the empty state
function favReducer(state = initialState, action) {
    switch (
    action.type //change state based on the action type
    ) {
        case "SAVE_BOOK":
            return [...state, action.payload]; //this part is coming from the redux/actions
        default:
            //if the action type does not match, we are not going to change state
            return state;

        case "DEL_BOOK":
            console.log(action.payload);
            let filteredBooks = state.filter(
                (book, index) => index !== action.payload
            );
            return [...filteredBooks];
    }
}

export default favReducer;