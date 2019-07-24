export type Dispatcher = (a: string, b?: string, c?: number) => void

export type MessageObject = {
  text: string
  type?: string
  timeout?: number
}
