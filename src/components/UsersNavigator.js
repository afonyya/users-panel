import { storeData } from '../helpers';

class UsersNavigator extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'closed' });
    this.container = this.shadow.appendChild(document.createElement('main'));
    this.container.appendChild(document.createElement('h2')).innerText =
      'Navigator';
  }

  async connectedCallback() {
    const users = await this.showData();

    this.addEventListener('user-has-been-edited', function (event) {
      users.find((user) => {
        if (user.key === event.data.id) {
          user.link.innerText = event.data.name;
        }
      });
    });

    this.addEventListener('user-has-been-added', function (event) {
      const elem = this.container.appendChild(document.createElement('p'));
      elem.innerText = event.data.name;
      elem.key = event.data.id;
      elem.onclick = function (event) {
        const eventForParent = new Event('user-has-been-selected');
        eventForParent.data = JSON.parse(
          localStorage.getItem(event.target.key),
        );
        this.parentElement.dispatchEvent(eventForParent);
      }.bind(this);
      users.push({ key: elem.key, link: elem });
    });

    this.addEventListener('user-has-been-deleted', function (event) {
      users.find((user) => {
        user.key === event.data && user.link.remove();
      });
    });
  }

  async showData() {
    const result = await storeData();
    if (!result) return;
    const links = result.map((user) => {
      const elem = this.container.appendChild(document.createElement('p'));
      elem.innerText = user.name;
      elem.key = user.id;
      elem.onclick = function (event) {
        const eventForParent = new Event('user-has-been-selected');
        eventForParent.data = JSON.parse(
          localStorage.getItem(event.target.key),
        );
        this.parentElement.dispatchEvent(eventForParent);
      }.bind(this);
      return { key: user.id, link: elem };
    });
    return links;
  }
}

customElements.define('users-navigator', UsersNavigator);

export default document.createElement('users-navigator');
