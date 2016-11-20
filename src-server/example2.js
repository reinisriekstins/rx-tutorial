/*---------------------------------
 *
 * Section 3, Lecture 14
 *
 *---------------------------------*/

import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'
import fs from 'fs'


/*---------------------------------
 * The NodeJS Way
 *---------------------------------*/
// fs.readdir('./src-server', (err, items) => {
//   if (err) console.error(err)
//   else {
//     console.log(items)
//   }
// })

/*---------------------------------
 * The RxJS Way
 *---------------------------------*/
// const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir)
// readdir$('./src-server')
// .mergeMap(files => Rx.Observable.from(files))
// .map(file => `MANIPULATED ${ file }`)
// .subscribe(createSubscriber('readdir'))

/*---------------------------------
 * Observable from promise
 *---------------------------------*/
// const getItem = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('HELLO')
//     }, 500 + (Math.random() * 300))
//   })
// }
// Rx.Observable
// .fromPromise(getItem())
// .subscribe(createSubscriber('promise'))
