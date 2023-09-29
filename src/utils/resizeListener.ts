import debounce from 'lodash.debounce';

const HANDLER_NAME_SPACE: string = '__react-grid-carousle-resize-handler';

const handleResize = debounce(e => {
  Object.values((window as any)[HANDLER_NAME_SPACE]).forEach(handler => {
    if (typeof handler === 'function') {
      handler(e);
    }
  })
}, 16)

const setupListener = () => {
  window.addEventListener('resize', handleResize)
}

const removeListener = () => {
  window.removeEventListener('resize', handleResize)
}

export const addResizeHandler = (key: any, handler: Window) => {
  if (typeof (window as any)[HANDLER_NAME_SPACE] !== 'object') {
    (window as any)[HANDLER_NAME_SPACE] = {}
    setupListener()
  }

  (window as any)[HANDLER_NAME_SPACE][key] = handler
}

export const removeResizeHandler = (key: any) => {
  delete (window as any)[HANDLER_NAME_SPACE][key]

  if (!Object.keys((window as any)[HANDLER_NAME_SPACE])) {
    delete (window as any)[HANDLER_NAME_SPACE]
    removeListener()
  }
}