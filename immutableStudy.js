const {green, red, yellow} = require('chalk');
const { Map, List } = require('immutable');

console.log('Immutable Study-----');
// Immutable collections should be treated as values rather than objects
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50);
console.log(`${map1.get('b')} vs. ${map2.get('b')}`); // 2 vs. 50

// Should use .equals or Immutable.is() function instead of ===
const map3 = Map( {a: 1, b: 2, c: 3 });
const map4 = map3.set('b', 2);
console.log(map3.equals(map4));
console.log(map3 === map4);

console.log('               ');
console.log('               ');
console.log(green('-----LIST------     '));
const list1 = List([1,2]);
console.log(list1);
const list2 = List.of(1,2,3);
console.log(red(`list2 using List.of() method=> ${list2}`));
console.log(yellow(`set(index: number, value: T) method =>${list2.set(2,20)}`));
console.log(yellow(`If index -1 then last element get replaced =>${list2.set(-1,30)}`));
console.log(yellow(`delete(index: number) method =>${list2.delete(1)}`));
console.log(yellow(`insert(index: number,value: T) method =>${list2.insert(1,40)}`));
console.log(yellow(`push method =>${list2.push(50)}`));
console.log(yellow(`pop method =>${list2.pop()}`));
console.log(yellow(`unshift method =>${list2.unshift(50)}`));
console.log(yellow(`shift method =>${list2.shift()}`));
console.log(yellow(`update(1, val => val * 2 => ${list2.update(1, value => value * 2 )}`));

function sum(collection) {
    return collection.reduce((sum, x) => sum + x, 0)
}
console.log(yellow(`Chaining of List [1,2,3]---> ${list2.map(x => x + 1).filterNot( x => x %2 === 0)}`));
console.log(yellow(`Sum using Chaining of List [1,2,3]---> ${list2.map(x => x + 1).filter( x => x %2 === 0).update(sum)}`));

const list3 = List([1,2,List([2,4])]);
console.log(red(`List3 values - ${list3}`));
console.log(yellow(`Use of setIn methods ${list3.setIn([2, 0],40)}`));

// If you need to apply a series of mutations locally before returning, 
// Immutable.js gives you the ability to create a temporary mutable (transient) copy of a collection 
// and apply a batch of mutations in a performant manner by using withMutations
const list4 = list2.withMutations(function (list) {
    list.push(4).push(5).push(6);
});
console.log(yellow(`Use of withMutation of transient changes ${list4}`));

const list5 = list3.mergeIn([2,0],[10, 20, 30]);
console.log(yellow(`Use of mergedIn method ${list5}`));

const list6 = list3.mergeDeepIn([0],[10, 20, 30]);
console.log(yellow(`Use of mergeDeepIn method ${list6}`));; // What is difference between mergeIn and mergeDeepIn
console.log(yellow(`Use of map() ${List([ 1, 2 ]).map(x => 10 * x)}`));


console.log(green('-----Immutable.js can treat any JavaScript Array or Object as a Collection------     '));
const map5 = Map ({a:1, b:2, c:3});
const map6 = Map ({c:30, e:50});
const obj = {b:20, d:40};
const map7 = map6.merge(map5, obj);
console.log(`map7 - ${map7} => ${map7.get('c')}`);

// A few power-tools allow for reading and operating on nested data. 
// The most useful are mergeDeep, getIn, setIn, and updateIn, found on List, Map and OrderedMap. Example:

const { fromJS } = require('immutable')
const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } });
console.log(`Immutable nested object => ${nested}`);
const nested2 = nested.merge({ a: { b: { d: 6 } } });
console.log(`Here merge method will replace existing c value => ${nested2}`);
const nested3 = nested.mergeDeep({ a: { b: { d: 6 } } });
console.log(`Here mergeDeep method will keep existing c value => ${nested3}`);

console.log(`Use of getIn() ===> ${nested2.getIn(['a','b','d'])}`);
const nested4 = nested2.updateIn([ 'a', 'b', 'd' ], value => value + 20);// d value will get changed with +20
console.log(`nested4 => ${nested4}`);
// Map { "a": Map { "b": Map { "d": 26 } } }

const nested5 = nested3.updateIn([ 'a', 'b', 'c' ], list => list.push(6))
console.log(`nested5 => ${nested5}`);
// Map { "a": Map { "b": Map { "c": List [ 3, 4, 5, 6 ], "d": 6 } } }

const nested6 = nested2.setIn([ 'a', 'b', 'd' ], 20);
console.log(`nested6 => ${nested6}`);

const obj1 = { a: 1, b: 2, c: 3 }
const obj2 = { a: 1, b: 2, c: 3 }
console.log(`obj1 === obj2 => ${obj1 === obj2}`); // two different instances are always not equal with ===

const { is } = require('immutable')
const map8 = Map({ a: 1, b: 2, c: 3 })
const map9 = Map({ a: 1, b: 2, c: 3 })
console.log(`map8 === map9 => ${map8 === map9}`); // two different instances are not reference-equal
console.log(`map8.equals(map9) => ${map8.equals(map9)}`) // but are value-equal if they have the same values
console.log(`is(map8, map9) => ${is(map8, map9)}`) // alternatively can use the is() function

const { Set } = require('immutable')
const map10 = Map({ a: 1, b: 2, c: 3 })
const map11 = Map({ a: 1, b: 2, c: 3 })
const set = Set().add(map10)
console.log(`set.has(map11) => ${set.has(map11)}`); // true because these are value-equal

// Seq is immutable — Once a Seq is created, it cannot be changed, appended to, rearranged or otherwise modified. 
// Instead, any mutative method called on a Seq will return a new Seq.
// Seq is lazy
// Seq allows for the efficient chaining of operations, allowing for the expression of logic that can otherwise be very tedious:

const { Seq } = require('immutable')
const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x => x % 2 !== 0)
  .map(x => x * x)

console.log(oddSquares);

console.log(green('Conversion to JavaScript types'));
console.log(red('toJS, toArray, toObject, toJson, get, has, etc.'));

console.log(yellow(`Map map8  => ${map8}`));
console.log(yellow(`Use of get method map8.get('a')} => ${map8.get('a')}`));
console.log(yellow(`Use of get method map8.has('d')} => ${map8.has('d')}`));
console.log(yellow(`Use of get method map8.includes(2)} => ${map8.includes(2)}`));
console.log(yellow(`Use of get method map8.includes('2')} => ${map8.includes('2')}`));
console.log(yellow(`Use of get method map8.first()} => ${map8.first()}`));
console.log(yellow(`Use of get method map8.toSeq()} => ${map8.toSeq()}`));

console.log(green('Search for value'));
console.log(red('indexOf, lastIndexOf(), findIndex(), findLastIndex(), find(), findLast()'));
// console.log(map8.findIndex('2'));  // Not working
console.log(red('findEntry(), findLastEntry(), findKey(), findLastKey(), keyOf(), lastKeyOf()'));
console.log(red('max(), maxBy(), min(), minBy()'));
console.log(map8.min());

console.log(green('Value equality'));
console.log(red('equals(), hashCode(), findIndex(), findLastIndex(), find(), findLast()'));

console.log(green('Reading deep values'));
console.log(red('getIn(), hasIn()'));

console.log(green('Conversion to Collections'));
console.log(red('toMap, toOrderedMap(), toSet(), toOrderedSet(), toList(), toStack()'));

console.log(green('Iterators'));
console.log(red('keys(), values(), entries()'));
console.log(map8.values()); // How to use?
console.log(green('Creating subsets'));
console.log(red('slice(), rest(), butLast(), skip(), skipLast(), skipWhile()'));
console.log(yellow(`List3 values - ${list3}`));
console.log(yellow(`skipWhile returns - ${List([ 'dog', 'cat', 'frog', 'hat', 'god' ]).skipWhile( x => x.match(/dog/))}`));

console.log(green('Reducing a value'));
console.log(red('reduce(), reduceRight(), every(), some(), join(), isEmpty(), count(), countBy()'));
const list7 = List(['Sucess','Error','Test']);
console.log(yellow(`List3 values - ${list7}`));
const reducedValue = list7.reduce((a,b) => ({
    a,
    [b]: `Request_${b}`
}), {});

console.log(reducedValue);


console.log(green('Comparison'));
console.log(red('isSubset(), isSuperset()'));













