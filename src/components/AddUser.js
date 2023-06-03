import { templateAddUser, cssAddUser } from '../config';
import { postData } from '../helpers';

class AddUser extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' });
    this.container = this.shadow.appendChild(document.createElement('main'));
    this.container.innerHTML = templateAddUser;
    const styleSheet = this.shadow.appendChild(document.createElement('style'));
    styleSheet.textContent = cssAddUser;
  }

  connectedCallback() {
    const submit = this.container.querySelector('#submit');

    const elems = [
      '#user-name',
      '#user-age',
      '#user-email',
      '#user-phone',
      '#user-hobby',
    ].reduce((acc, id) => {
      acc[id.slice(6)] = this.container.querySelector(id);
      return acc;
    }, {});

    submit.onclick = async function (event) {
      const user = {};
      for (const elem in elems) {
        user[elem] = elems[elem].value;
        elems[elem].value = '';
      }
      const result = await postData(user);
      const eventForParent = new Event('user-has-been-added');
      eventForParent.data = result;
      this.parentElement.dispatchEvent(eventForParent);
    }.bind(this);
  }
}

customElements.define('add-user', AddUser);

export default document.createElement('add-user');
