class FieldSelect {
  static toggle = (target) => {
    const options = target.nextElementSibling

    options.toggleAttribute('active')

    setTimeout(() => {
      window.addEventListener(
        'click',
        (e) => {
          if (!options.parentElement.contains(e.target))
            options.removeAttribute('active')
        },
        { once: true },
      )
    })
  }

  static change = (target) => {
    // если был выбран другой элемент списка, убрать это...
    const active =
      target.parentElement.querySelector('*[active]')
    if (active) active.toggleAttribute('active')

    // и переназначить на тот, по которому был клик
    target.toggleAttribute('active')

    // найти ПРА-родителя
    const parent = target.parentElement.parentElement

    // внутри пра-родителя найти ребенка с  .field__value
    const label = parent.querySelector('.field__value')

    if (label) {
      label.innerText = target.innerText
      label.classList.remove('field__value--placeholder')
    }

    // закрыть выпадающее меню
    const list = target.parentElement
    list.toggleAttribute('active')
  }
}

window.fieldSelect = FieldSelect
