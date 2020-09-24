const starCount = (stars) => {
    if (stars === 1) {
        return 'one--star';
    };
    if (stars === 2) {
        return 'two--stars';
    };
    if (stars === 3) {
        return 'three--stars';
    };
    if (stars === 4) {
        return 'four--stars';
    };
    if (stars === 5) {
        return 'five--stars';
    };
};

export default starCount;