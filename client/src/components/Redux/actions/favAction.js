export const addBook = (data) => {
    return {
        type: "SAVE_BOOK",
        payload: data,
    };
};

export const deleteBook = (index) => {
    return {
        type: "DEL_BOOK",
        payload: index,
    };
};
