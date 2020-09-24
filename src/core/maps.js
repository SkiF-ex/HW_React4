import {
    getActors,
    getFilms,
    sortByLike,
    sortByStars,
    searchByName,
    searchReset,
    selectMovie,
    registr,
    back,
    selectActor,
    getUsersData,
    getDataIsLogin,
    deleteData,
    editMovie,
} from './actions';

const mapState = (state) => {
    return {
        allFilms: state.reducer.allFilms,
        currentFilms: state.reducer.currentFilms,
        allActors: state.reducer.allActors,
        selectedMovie: state.reducer.selectedMovie,
        isLogined: state.reducer.isLogined,
        currentActor: state.reducer.currentActor,
        allUsers: state.reducer.allUsers,
    };
};

const mapDispatch = {
    getFilms,
    sortByLike,
    sortByStars,
    searchByName,
    searchReset,
    selectMovie,
    getActors,
    registr,
    back,
    selectActor,
    getUsersData,
    getDataIsLogin,
    deleteData,
    editMovie,
};

export {mapState, mapDispatch};