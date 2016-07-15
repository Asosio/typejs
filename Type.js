"use strict";
(function() {
    const Type = {
        is: {
            arrayLike:  (t) => Type.is.array(t) || Type.is.set(t),
            valueLike:  (t) => Type.is.string(t) || Type.is.number(t),
            
            object:     (t) => Object.prototype.toString.call(t) === '[object Object]',
            function:   (t) => (typeof t) === "function",
            array:      (t) => Object.prototype.toString.call(t) === '[object Array]',
            map:        (t) => t instanceof Map,
            set:        (t) => t instanceof Set,
            number:     (t) => ! isNaN(parseFloat(t)),
            string:     (t) => (typeof t) === "string",
            boolean:    (t) => (typeof t) === "boolean",
        },
        detect: (t) => {
            let foundType
            Object.keys(Type.is).forEach(k => Type.is.function(Type.is[k]) ? Type.is[k](t) ? foundType = k : false : false)
            if ( ! foundType) throw new Error('Could not detect type')
            return foundType
        },
        to: {
            number: (t) => Type.is['number'](t) ? parseInt(t) : t,
            string: (t) => String(t)
        }
    }
    
    Type.is['not'] = (() => {
        let not = {}
        Object.keys(Type.is).forEach(t => not[t] = (i) => ! Type.is[t](i))
        return not
    })()

    Object.freeze(Type)
    
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Type;
    }
    // export default Type
})()