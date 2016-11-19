import moment from 'moment'
import Rx from 'rxjs/Rx'

/*---------------------------------
 *
 * Section 3, Lecture 11, start
 *
 *---------------------------------*/

// const simple$ = new Rx.Observable(observer => {
//   console.log('generating observable')
//   setTimeout(() => {
//     observer.next('item')
//     setTimeout(() => {
//       observer.next('item2')
//       observer.complete()
//     }, 1000)
//   }, 1000)
// })

// simple$.subscribe(
//   item => console.log(`one.next: ${ item }`), // next
//   err => console.error(`one.error: ${ err }`), // error
//   () => console.log('complete') // complete
// )

// const error$ = new Rx.Observable(observer => {
//   observer.error(new Error('WHOA!!'))
// })

// setTimeout(() => {
//   error$.subscribe({
//     next: item => console.log(`two.next: ${ item }`), // next
//     error(err) { console.error(`two.error: ${ err.stack }`) }, // error
//     complete() { console.log('complete') } // complete
//   })
// }, 3000)

/*---------------------------------
 *
 * Section 3, Lecture 11, time: 11:40 - Lecture 12, end
 *
 *---------------------------------*/

// function createInterval$ (time) {
//   return new Rx.Observable(observer => {
//     let index = 0
//     let interval = setInterval(() => {
//       console.log(`generating ${ index }`)
//       observer.next(index++)
//     }, time)

//     return () => {
//       clearInterval(interval)
//     }
//   })
// }

// function createSubscriber(tag) {
//   return {
//     next(item) {
//       console.log(`${ tag }.next ${ item }`)
//     },
//     error(err) {
//       console.log(`${ tag }.error ${ err.stack }`)
//     },
//     complete() {
//       console.log(`${ tag }.complete`)
//     }
//   }
// }

// function take$(sourceObservable$, amount) {
//   return new Rx.Observable(observer => {
//     let count = 0;
//     const subscription = sourceObservable$.subscribe({
//       next(item) {
//         observer.next(item)
//         if (++count >= amount) observer.complete()
//       },
//       error(err) { observer.error(err) },
//       complete() { observer.complete() }
//     })

//     return () => subscription.unsubscribe()
//   })
// }

// const everySecond$ = createInterval$(1000)
// const firstFiveSeconds$ = take$(everySecond$, 5)
// const subscription = firstFiveSeconds$.subscribe(createSubscriber('one'))

// setTimeout(() => {
//   subscription.unsubscribe()
// }, 3500)

