const dummyCall = (options, delay = 2100) => {
    console.log(options);
    return new Promise(resolve => setTimeout(resolve, delay));
}

export default dummyCall;