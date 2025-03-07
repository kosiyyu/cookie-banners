const dummyCall = (args, delay = 2100) => {
    return new Promise(resolve => setTimeout(resolve, delay));
}

export default dummyCall;