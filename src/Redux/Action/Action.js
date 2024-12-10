const increment = ({payload})=>{
    return ({
        type:'INCREMENT',
        payload:{text:payload}
    });
};

const decrement = ({payload})=>{
    return ({
        type:'DECREMENT',
        payload:{text:payload}
    });
};

export {increment,decrement};
