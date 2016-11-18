import moment from 'moment'
import Rx from 'rxjs/Rx'

/*---------------------------------
 *
 * Section 3, Lecture 11 end
 *
 *---------------------------------*/

const simple$ = new Rx.Observable(observer => {
  console.log('generating observable')
  setTimeout(() => {
    observer.next('item')
    setTimeout(() => {
      observer.next('item2')
      observer.complete()
    }, 1000)
  }, 1000)
})

simple$.subscribe(
  item => console.log(`one.next: ${ item }`), // next
  err => console.error(`one.error: ${ err }`), // error
  () => console.log('complete') // complete
)

const error$ = new Rx.Observable(observer => {
  observer.error(new Error('WHOA!!'))
})

setTimeout(() => {
  error$.subscribe({
    next: item => console.log(`two.next: ${ item }`), // next
    error(err) { console.error(`two.error: ${ err.stack }`) }, // error
    complete() { console.log('complete') } // complete
  })
}, 3000)