// 闭包提权
var o = (function() {
var obj = {
    a: 1,
    b: 2
};
// 防御
Object.setPrototypeOf(obj, null);

return {
    get: function(k){
        return obj[k];
    }
};
})();

Object.defineProperty(Object.prototype, 'hack', {
    get() {
        return this;
    }
});
// 如何在不改变上面的代码的情况下， 修改obj 对象
console.log('info:', o.get('hack'));
const obj = o.get('hack');
// obj.a = 100;
// obj.b = 100;
// console.log('info:', o.get('hack'));

// 创建没有原型的对象
const obj2 = Object.create(null);
console.log('obj2:',obj2);

const obj3 = Object.create({});
console.log('obj3:',obj3);

var testClass = {
    protoA: 'A',
    funcA: function(){
        console.log('funcA:', this.protoA);
    }
};
const obj4 = Object(testClass);
console.log('obj4:',obj4);
obj4.funcA();

const obj5 = Object.create(testClass, {
    protoB: {
        value:'B',
        writable: true,
        enumerable:true
    }
});
 
console.log('obj5:',obj5);
obj5.funcA();
console.log(obj5.protoA);


var props = {
  name: "John",
  age: 30
};
const obj6 = Object.create(props);
console.log('obj6:',obj6.name);


