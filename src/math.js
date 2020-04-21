

module.exports = {
    add: function add(...args) {
        return args.reduce((pre , cur) => {
            return pre + cur
        })
    },
    
    mul: function mul(...args) {
        return args.reduce((pre , cur) => {
            return pre * cur
        })
    }
}