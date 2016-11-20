/*---------------------------------
 *
 * Section 3, Lecture 17: Hot vs Cold Observables
 *
 *---------------------------------*/

import Rx from 'rxjs/Rx'
import { createSubscriber } from './lib/util'

/*---------------------------------
 * One
 *---------------------------------*/
// const interval$ = Rx.Observable
// .interval(1000)
// .take(10)
// .publish() // makes the observable hot

// interval$.connect()

// setTimeout(() => {
//   interval$.subscribe(createSubscriber('one'))
// }, 1200)

// setTimeout(() => {
//   interval$.subscribe(createSubscriber('two'))
// }, 3000)

/*---------------------------------
 * Two
 *---------------------------------*/
// const socket = { on: () => {}}

// const chatMessages$ = new Rx.Observable(observer => {
//   console.log('subscribed!')
//   socket.on('chat:message', message => observer.next(message))
// }).publish()

// chatMessages$.connect()

// chatMessages$.subscribe(createSubscriber('one'))
// chatMessages$.subscribe(createSubscriber('two'))

/*---------------------------------
 * Three
 *---------------------------------*/
const simple$ = new Rx.Observable(observer => {
  observer.next('eins')
  observer.next('zwei')
  observer.next('drei')
  //observer.complete()

  return () => console.log('disposed')
})

const published$ = simple$.share() // .share() = .publish().refCount()

const sub1 = published$.subscribe(createSubscriber('one'))
const sub2 = published$.subscribe(createSubscriber('two'))

sub1.unsubscribe()
sub2.unsubscribe()

