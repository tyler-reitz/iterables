// // Iterator
// const iCountdown = {
//   value: 10,
//   done: false,
//   next() {
//     this.done = this.done || this.value <= 0

//     if (this.done) {
//       return { done: this.done }
//     } else {
//       return { done: false, value: this.value-- }
//     }
//   }
// }

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()

// iCountdown.next()


// Iterable
const countdown = {
  [Symbol.iterator]() {
    const iterator = {
      value: 10,
      done: false,
      next() {
        this.done = this.done || this.done <= 0

        if (this.done) {
          return { done: this.done }
        } else {
          return { done: this.done, value: this.value-- }
        }
      }
    }
    
    return iterator
  }
}

for (const count of countdown) {
  console.log(count)
}