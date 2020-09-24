import axios from 'axios';

const dispatchGetFilms = (payload) => ({
    type: 'GET_MOVIES',
    payload,
});

export const getFilms = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/movies');

    dispatch(dispatchGetFilms(data))
};

const dispatchGetActors = (payload) => ({
    type: 'GET_ACTORS',
    payload,
});

export const getActors = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/actors');

    dispatch(dispatchGetActors(data))
};

export const sortByLike = () => ({
    type: 'SORT_BY_LIKES',
});

export const sortByStars = () => ({
    type: 'SORT_BY_STARS',
});

export const searchByName = (payload) => ({
    type: 'SEARCH_BY_NAME',
    payload,
});

export const searchReset = () => ({
    type: 'SEARCH_RESET',
});

export const selectMovie = (payload) => ({
    type: 'SELECT_MOVIE',
    payload,
});

export const back = () => ({
    type: 'BACK',
});

export const selectActor = (payload) => ({
    type: 'SELECT_ACTOR',
    payload,
});

const login = payload => ({
    type: 'LOGIN',
    payload,
});

export const getDataIsLogin = () => async (dispatch) => {
    const { data } = await axios.get('http://localhost:3000/isLogin');
    
    dispatch(login(data));
};

const treatmentUsersData = payload => ({
    type: 'GET_USERS_DATA',
    payload,
});


export const getUsersData = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/users');

    dispatch(treatmentUsersData(data));
};

const updateMovies = (payload) => ({
    type: 'UPDATE_MOVIES',
    payload,
})

const getNewMovies = () => async (dispatch) => {
    const {data} = await axios.get('http://localhost:3000/movies');

    dispatch(updateMovies(data))
}

export const deleteData = () => async (dispatch) => {
    const targetId = document.querySelector('.homepage_right-block-rating-title').id;

    await axios.delete(`http://localhost:3000/movies/${targetId}`);
        
    dispatch(getNewMovies());
};

export const editMovie = () => async (dispatch) => {
    const targetId = document.querySelector('.editor_block-title').id;

    const changedTitle = document.getElementById('title').value;
    const changedImg = document.getElementById('imgUrl').value;
    const changedDirector = document.getElementById('director').value;
    const changedGenres = document.getElementById('genres').value;
    const changedDescription = document.getElementById('description').value;

    const {data} = await axios.get(`http://localhost:3000/movies/${targetId}`);

    await axios.put(`http://localhost:3000/movies/${targetId}`, {
        "id": targetId,
        "title": changedTitle,
        "posterUrl": changedImg,
        "genres" : [changedGenres],
        "stars": data.stars,
        "likes": data.likes,
        "actorsIds": data.actorsIds,
        "director": changedDirector,
        "description": changedDescription  
    });

    dispatch(getNewMovies());
};

export const registr = () => async () => {
    const regName = document.getElementById('regName')
    const regPassword = document.getElementById('regPassword');

    await axios.post('http://localhost:3000/users', {
        "name": regName.value,
        "password": regPassword.value,
    });

    regName.value = '';
    regPassword.value = '';

    alert('You have ragistered!');
}