class Confirm {
  // список кодов
  static #list = []

  constructor(data) {
    this.code = Confirm.generateCode()
    this.data = data
  }

  static generateCode = () => {
    return Math.floor(Math.random() * 9000) + 1000
  }

  static create = (data) => {
    // const confirm = new Confirm(data)
    this.#list.push(new Confirm(data))

    console.log('список с кодами:', this.#list)

    setTimeout(() => {
      this.delete(code)
    }, 1000 * 60 * 60 * 24)
  }

  static delete = (code) => {
    const length = this.#list.length

    this.#list = this.#list.filter(
      (obj) => obj.code !== code,
    )

    return length > this.#list.length
  }

  static getData = (code) => {
    const obj = this.#list.find(
      (item) => item.code === code,
    )

    return obj ? obj.data : null
  }
}

module.exports = {
  Confirm,
}
