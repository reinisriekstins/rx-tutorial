/*---------------------------------
 *
 * Section 4, Lecture 1: Do, Finally, StartWith, Filter
 *
 *---------------------------------*/

import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// do
Rx.Observable
.range(1, 10)
.do(a => console.log(`from do ${a}`))
.map (a => a * a)
.subscribe(createSubscriber('simple'))

// finally
Rx.Observable
.range(1, 10)
.finally(() => console.log(`from finally`))
.map (a => a * 2)
.subscribe(createSubscriber('finally'))

// filter
Rx.Observable
.range(1, 10)
.filter(a => a < 3 || a > 5)
.subscribe(createSubscriber('filter'))

// interval
// Rx.Observable
// .interval(1000)
// .take(10)
// .subscribe(createSubscriber('interval'))

// startWith
Rx.Observable
.interval(1000)
.startWith(-5)
.take(10)
.subscribe(createSubscriber('startWith'))