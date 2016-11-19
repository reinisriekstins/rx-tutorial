export function createSubscriber(tag) {
  return {
    next(item) {
      console.log(`${ tag }.next ${ item }`)
    },
    error(err) {
      console.log(`${ tag }.error ${ err.stack }`)
    },
    complete() {
      console.log(`${ tag }.complete`)
    }
  }
}