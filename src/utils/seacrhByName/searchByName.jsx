import { Component } from 'react';
import { mapState, mapDispatch } from '../../core/maps';
import { connect } from 'react-redux';

export class SearchBy extends Component {
    resultArray = [];

    searchByName (target, allMovies) {
        this.resultArray = [];

        const find = (arr, find) => {
            return arr.filter((value) => {
                return (value + '').indexOf(find) !== -1;
            });
        };

        const iteratingOverAnArray = () => {
            allMovies.forEach((el) => {
                const titleArray = [el.title.toLowerCase()];

                if (find(titleArray, target.value.toLowerCase()).length === 1) {
                    this.resultArray.push(el);
                };
            });
            
            return this.resultArray;
        };
        return iteratingOverAnArray();
    };
};

export default connect(mapState, mapDispatch);