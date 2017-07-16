import { h, app } from 'hyperapp'

app({
  state: "Hi.",
  view: state => h("h1", {}, state)
})
