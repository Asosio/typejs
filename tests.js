const Type = require('./Type.js')

const obj = {}
const arr = []
const str = "new String()" // should not use contructor
const num = 123
const func = ()=>{}
const map = new Map()
const set = new Set()
const bool = true

const allTypes = [obj,arr,str,num,func,map,set,bool]
const annotatedTypes = {object:obj,array:arr,string:str,number:num,function:func,map,set, boolean:bool}

const tests = [
    {label:"Test Type.is.{x} for all annotatedTypes", test: () => Object.keys(annotatedTypes).forEach(key => console.log(`got ${key}, Type.is.${key} is ${Type.is[key](annotatedTypes[key])}`))},
    {label:"Test Type.detect for allTypes", test:() => allTypes.forEach(t => console.log(Type.detect(t)))}
]

tests.forEach(test => {
    console.log('====================')
    console.log(test.label)
    console.log('===== Results ======')
    console.log(test.test())
})