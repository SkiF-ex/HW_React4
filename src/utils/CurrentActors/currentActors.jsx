const currentActors = (block, allAct) => {
    let actorsArray = [];

    if (block.length !== 0) {
        for (let i = 0; i < block.actorsIds.length; i++) {
            allAct.forEach((el) => {
                if (el.id === block.actorsIds[i]) {
                    actorsArray.push([el.name])
                };
            });
        };
    };

    return actorsArray;
};

export default currentActors;