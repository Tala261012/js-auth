class Session {
  // список токенов
  static #list = []

  constructor(user) {
    this.token = Session.generateCode()
    this.user = {
      email: user.email,
      // подтвердил ли юзер свою почту?
      isConfirm: user.isConfirm,
      role: user.role,
      id: user.id,
    }
  }

  // генерация токена
  static generateCode = () => {
    // длинна токена
    const length = 6
    // доступные символы
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    let result = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(
        Math.random() * characters.length,
      )

      result += characters[randomIndex]
    }

    return result
  }

  static create = (user) => {
    const session = new Session(user)

    this.#list.push(session)

    return session
  }

  static get = (token) => {
    return (
      this.#list.find((item) => item.token === token) ||
      null
    )
  }
}

module.exports = {
  Session,
}

console.log(Session.generateCode())
