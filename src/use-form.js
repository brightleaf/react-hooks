/**
 * useForm Hook.
 * Use Form Hook to allow for better form management
 */
const useForm = () => {
  const formElements = []

  const addToForm = function(ref) {
    formElements.push(ref)
  }

  return {
    addToForm,
    onSubmit: fn => {
      return submitEvent => {
        submitEvent.preventDefault()
        const data = formElements.reduce((formValues, current) => {
          if (current.type === 'checkbox') {
            formValues[current.name] = current.checked
          } else if (current.type === 'radio') {
            if (current.checked) {
              formValues[current.name] = current.value
            }
          } else {
            formValues[current.name] = current.value
          }

          return formValues
        }, {})

        fn(data)
      }
    },
  }
}

export default useForm
