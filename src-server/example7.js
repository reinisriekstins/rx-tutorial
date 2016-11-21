/*---------------------------------
 *
 * Section 4, Lecture 3: Map, MergeMap, SwitchMap
 *
 *---------------------------------*/

import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// map
// Rx.Observable
// .interval(1000)
// .take(3)
// .map(a => a * a)
// .subscribe(createSubscriber('map'))

/*-----------------------------------------------------------
 * Comparison of map vs mergeMap
 *-----------------------------------------------------------*/
// function arrayMap(array, projection) {
//   const returnArr = []
//   for (let item of array) {
//     const projected = projection(item)
//     returnArr.push(projected)
//   }

//   return returnArr
// }

// function arrayMergeMap(array, projection) {
//   const returnArr = []
//   for (let item of array) {
//     const projectedArray = projection(item)

//     for (let projected of projectedArray) {
//       returnArr.push(projected)
//     }
//   }

//   return returnArr
// }

// const albums = [
//   {title: 'Album1', tracks: [{id: 1, title: 'Track1'}, {id: 2, title: 'Track2'}]},
//   {title: 'Album2', tracks: [{id: 1, title: 'Track43'}, {id: 2, title: 'Track44'}]}
// ]

// const tracksWrong = arrayMap(albums, album => album.tracks)
// const tracks = arrayMergeMap(albums, album => album.tracks)

// console.log(`tracksWrong: ${ JSON.stringify(tracksWrong) }`)
// console.log(`tracks: ${ JSON.stringify(tracks) }`)


/*-----------------------------------------------------------
 * mergeMap a.k.a. flatMap, equivalent of selectMany in LINQ
 *-----------------------------------------------------------*/
Rx.Observable
.range(2, 3)
.mergeMap(i => Rx.Observable.timer(i * 2000).map(() => `After ${i * 2} seconds`))
.subscribe(createSubscriber('mergeMap'))

/*-----------------------------------------------------------
 * switchMap
 *-----------------------------------------------------------*/