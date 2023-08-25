export const REG_EXP_EMAIL = new RegExp(
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
)

export const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
)

export class Form {
  // тут - названия полей в верстке
  FIELD_NAME = {}
  // тут - заготовленные тексты на случай ошибок при валидации
  FIELD_ERROR = {}

  // именем ключа будет имя инпута name, значением - его value
  value = {}
  error = {}
  disabled = false

  change = (name, value) => {
    const error = this.validate(name, value)
    this.value[name] = value

    if (error) {
      this.setError(name, error)
      this.error[name] = error
    } else {
      delete this.error[name]
      this.setError(name, null)
    }
  }

  setError = (name, error) => {
    const span = document.querySelector(
      `.form__error[name="${name}"]`,
    )

    const field = document.querySelector(
      `.validation[name="${name}"]`,
    )

    if (span) {
      span.classList.toggle(
        'form__error--active',
        Boolean(error),
      )
      span.innerText = error || ''
    }

    if (field) {
      field.classList.toggle(
        'validation--active',
        Boolean(error),
      )
    }
  }

  checkDisabled = () => {
    let disabled = false

    Object.values(this.FIELD_NAME).forEach((name) => {
      const error = this.validate(name, this.value[name])

      if (error) {
        this.setError(name, error)
        disabled = true
      }
    })

    const el = document.querySelector('.button')

    if (el) {
      el.classList.toggle(
        'button--disabled',
        Boolean(disabled),
      )
    }

    this.disabled = disabled
  }
}
