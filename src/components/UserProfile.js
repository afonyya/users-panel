import { templateUserProfile, cssUserProfile } from '../config'
import { putData, deleteData } from '../helpers'

class UserProfile extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({ mode: 'closed' })
    this.wrapper = shadow.appendChild(document.createElement('main'))
    this.wrapper.innerHTML = templateUserProfile
    const styleSheet = shadow.appendChild(document.createElement('style'))
    styleSheet.textContent = cssUserProfile
  }

  connectedCallback () {
    const [
      edit,
      deleteBtn,
      submit
    ] = ['#edit', '#delete', '#submit'].map(id => this.wrapper.querySelector(id))

    const elems = [
      '#user-name',
      '#user-age',
      '#user-email',
      '#user-phone',
      '#user-hobby'
    ].reduce((acc, id) => {
      acc[id.slice(6)] = this.wrapper.querySelector(id)
      return acc
    }, {})

    let userId = null

    this.addEventListener('user-has-been-selected', function (event) {
      for (const elem in elems) {
        elems[elem].value = event.data[elem] || ''
      }
      userId = event.data.id
      edit.disabled = false
      deleteBtn.disabled = false
    })

    edit.onclick = function (event) {
      submit.disabled = false
      for (const elem in elems) {
        elems[elem].disabled = false
      }
    }

    deleteBtn.onclick = function (event) {
      deleteData(userId)

      for (const elem in elems) {
        elems[elem].value = ''
      }

      const eventForParent = new Event('user-has-been-deleted')
      eventForParent.data = userId
      this.parentElement.dispatchEvent(eventForParent)

      event.target.disabled = true
    }.bind(this)

    submit.onclick = function (event) {
      const user = {}

      for (const elem in elems) {
        user[elem] = elems[elem].value
        elems[elem].disabled = true
      }

      const eventForParent = new Event('user-has-been-edited')
      eventForParent.data = Object.assign({}, { id: userId, name: user.name })
      this.parentElement.dispatchEvent(eventForParent)

      putData(userId, user)

      event.target.disabled = true
    }.bind(this)
  }
}

customElements.define('user-profile', UserProfile)

const elem = document.createElement('user-profile')
elem.id = "user-profile"

export default elem
