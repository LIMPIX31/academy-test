import { getPayload } from './handlerPayload'

export const body = (window: Window) => getPayload(window)
