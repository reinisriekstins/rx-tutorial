import $ from 'jquery'
import Rx from 'rxjs/Rx'

const
  $title = $('#title'),
  $results = $('#results')

const getItems = title => {
  console.log( `Querying ${title}` )
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([title, 'item2', `Another ${ Math.random() }`])
    }, 500 + (Math.random() * 300))
  })
}

/*---------------------------------
 *
 * Reactive implementation
 *
 *---------------------------------*/

Rx.Observable.fromEvent($title, 'keyup')
.do(() => $results.empty())
.map(e => e.target.value)
.distinctUntilChanged()
.debounceTime(300)
.switchMap(getItems)
.subscribe(items => {
  $results.empty()
  $results.append(items.map(i => $(`<li />`).text(i)))
})

/*---------------------------------*
 *
 * Traditional implementation
 *
 *---------------------------------*/

// let lastQuery = null
// let lastTimeout = null
// let nextQueryId = 0
// $title.on('keyup', e => {
//   const title = e.target.value
//   if (title === lastQuery) return
//   lastQuery = title

//   if (lastTimeout) clearTimeout(lastTimeout)

//   let ourQueryId = ++nextQueryId
//   lastTimeout = setTimeout(() => {
//     getItems(title)
//     .then(items => {
//       if (ourQueryId !== nextQueryId) return

//       $results.empty()

//       const $items = items.map(i => $('<li />').text(i))
//       $results.append($items)
//     })
//     }, 500)
// })

