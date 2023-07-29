
const email = (e: InputEvent): void => {
  const field = e.target as HTMLInputElement
  const validation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  if (!validation.test(field.value)) {
    field.setCustomValidity("Please enter a valid email.")
    return
  } else {
    field.setCustomValidity("")
    return
  }
}

const phone = (e: KeyboardEvent): void => {
  const { code } = e
  const field = e.target as HTMLInputElement
  const numExp = new RegExp(/^[0-9]$/)
  const isNumber = numExp.test(e.key)
  const isBackspace = code === 'Backspace'
  const maxLength = 14
  if (!isNumber && !isBackspace || maxLength === field.value.length && !isBackspace) {
    return
  }

  if (isBackspace) {
    switch (field.value.length) {
      case 2:
        field.value = '';
        break;
      case 7:
        field.value = field.value.slice(0, 4);
        break;
      case 11:
        field.value = field.value.slice(0, 9);
        break;
      default:
        field.value = field.value.slice(0, field.value.length - 1)
    }
  } else {
    switch (field.value.length) {
      case 0:
        field.value += '(' + e.key
        break
      case 4:
        field.value += ') ' + e.key
        break;
      case 9:
        field.value += '-' + e.key
        break;
      default:
        field.value += e.key;
    }
  }

  if (field.value.length < maxLength) {
    field.setCustomValidity("Please enter a valid phone number.")
    return
  } else {
    field.setCustomValidity("")
  }
}



export default {
  email,
  phone,
}
