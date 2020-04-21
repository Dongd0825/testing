
function min(a,b) {
    const  c = 3;
    return (b - a) * c;
}


module.exports = {
    add: (...args) => {
        return args.reduce((pre , cur) => {
            return pre + cur
        })
    },
    
    mul: (...args) => {
        return args.reduce((pre , cur) => {
            return pre * cur
        })
    },

    cover: (a, b) => {
        if (a > b) {
            return a - b;
        } else if (a == b) {
            return b + a;
        } else {
            return  min(a, b)
        }
    }
}