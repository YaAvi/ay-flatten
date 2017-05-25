const flatten = (obj, prefix = '') => {
    let flat = {};
    for (let prop in obj) {
        const pre = Number(prop) >= 0 ? `${prefix.substring(0, prefix.length - 1)}[${prop}]` : (prefix + prop);
        if (typeof obj[prop] === 'object')
            Object.assign(flat, flatten(obj[prop], pre + '.'));
        else flat[pre] = obj[prop];
    }
    return flat;
}
module.exports = flatten;