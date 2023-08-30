document.addEventListener('DOMContentLoaded', () => {
  // если у пользователя есть аккаунт, то...
  if (window.session) {
    const { user } = window.session

    if (user.isConfirm) {
      // если почта подтверждена, то переход на домашнюю страницу
      location.assign('/home')
    } else {
      // если почта НЕ подтверждена, то переход на подтверждение
      location.assign('/signup-confirm')
    }
  } else {
    // если у пользователя нет аккаунта, то надо зарегистрироваться
    location.assign('/signup')
  }
})
