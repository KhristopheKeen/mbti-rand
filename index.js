const randomNumberGenerator = (min = 1, max =16 ) => {
    return Math.round((Math.random() * (max - min) + min));
}

export default randomNumberGenerator;