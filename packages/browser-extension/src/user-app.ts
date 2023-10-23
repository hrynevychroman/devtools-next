import { Bridge } from '../../core/src/bridge'
import { prepareInjection } from '../../core/src/injection'

window.addEventListener('message', handshake)

function handshake(e: MessageEvent) {
  if (e.data.source === '__VUE_DEVTOOLS_PROXY__' && e.data.payload.event === 'init') {
    window.removeEventListener('message', handshake)

    const listeners: ((event: unknown) => void)[] = []
    const bridge = new Bridge({
      tracker(fn) {
        const listener = (event) => {
          if (event.data.source === '__VUE_DEVTOOLS_PROXY__' && event.data.payload)
            fn(event.data.payload)
        }
        window.addEventListener('message', listener)
        listeners.push(listener)
      },
      trigger(data) {
        window.postMessage({
          source: '__VUE_DEVTOOLS_USER_APP__',
          payload: data,
        }, '*')
      },
    })
    bridge.removeAllListeners()

    bridge.on('shutdown', () => {
      listeners.forEach((listener) => {
        window.removeEventListener('message', listener)
      })
      listeners.length = 0
      bridge.removeAllListeners()
      window.addEventListener('message', handshake)
    })

    prepareInjection(bridge)
  }
}
