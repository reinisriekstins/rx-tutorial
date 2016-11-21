/*---------------------------------
 *
 * Section 4, Lecture 2: Concat, Merge
 *
 *---------------------------------*/

import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// merge1
// Rx.Observable
// .interval(1000)
// .merge(Rx.Observable.interval(500))
// .take(10)
// .subscribe(createSubscriber('merge1'))

// merge2
// Rx.Observable
// .merge(
//   Rx.Observable.interval(500).map(i => `${i} half seconds`),
//   Rx.Observable.interval(1000).map(i => `${i} seconds`),
//   Rx.Observable.interval(2000).map(i => `${i} two seconds`)
// )
// .take(20)
// .subscribe(createSubscriber('merge2'))

// concat1: http://rxmarbles.com/#concat
// Rx.Observable.interval(500).take(3)
// .concat( Rx.Observable.range(10, 3) )
// .subscribe(createSubscriber('concat1'))

// concat2: http://rxmarbles.com/#concat
Rx.Observable
.concat( 
  Rx.Observable.interval(1000).map(i => `${i} seconds`).take(3), 
  Rx.Observable.interval(500).map(i => `${i} half seconds`).take(6)
)
.subscribe(createSubscriber('concat2'))