/*---------------------------------
 *
 * Section 3, Lecture 13
 *
 *---------------------------------*/

import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

// Rx.Observable
// .interval(500)
// .take(5)
// .subscribe(createSubscriber('one'))

// Rx.Observable
// .timer(5000, 500)
// .take(3)
// .subscribe(createSubscriber('timer'))

// Rx.Observable
// .of('hello world', 42, 'yo', ...[1,2,3])
// .subscribe(createSubscriber('of'))

// Rx.Observable
// .from([1, 2, [3, 4], {e: 5, f: 6}])
// .subscribe(createSubscriber('from'))

// Rx.Observable
// .from('qwerty')
// .subscribe(createSubscriber('from'))

// Rx.Observable
// .throw(new Error('yo'))
// .subscribe(createSubscriber('error'))

// Rx.Observable
// .from([new Error('yo')])
// .subscribe(createSubscriber('error'))

// Rx.Observable
// .empty()
// .subscribe(createSubscriber('empty'))

// let sideEffect = 0
// const defer$ = Rx.Observable
// .defer(() => {
//   sideEffect++
//   return Rx.Observable.of(sideEffect)
// })
// defer$.subscribe(createSubscriber('defer$.one'))
// defer$.subscribe(createSubscriber('defer$.two'))
// defer$.subscribe(createSubscriber('defer$.three'))

// Rx.Observable
// .never()
// .subscribe(createSubscriber('never'))

Rx.Observable
.range(10, 30)
.subscribe(createSubscriber('range'))
