import UserProfile from './UserProfile';
import UsersNavigator from './UsersNavigator';
import AddUser from './AddUser';
import { cssUserInfo } from '../config';

class UserInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });
    this.wrapper = shadow.appendChild(document.createElement('main'));
    const styleSheet = shadow.appendChild(document.createElement('style'));
    styleSheet.textContent = cssUserInfo;
    this.wrapper.className = 'flex';
    this.add = this.wrapper.appendChild(AddUser);
    this.add.className = 'in-flex100';
    this.navigator = this.wrapper.appendChild(UsersNavigator);
    this.navigator.className = 'in-flex50';
    this.profile = this.wrapper.appendChild(UserProfile);
    this.profile.className = 'in-flex50';
  }

  connectedCallback() {
    this.wrapper.addEventListener(
      'user-has-been-selected',
      function (event) {
        const eventForProfile = new Event(event.type);
        eventForProfile.data = event.data;
        this.profile.dispatchEvent(eventForProfile);
      }.bind(this),
    );

    this.wrapper.addEventListener(
      'user-has-been-added',
      function (event) {
        const eventForNavigator = new Event(event.type);
        eventForNavigator.data = event.data;
        this.navigator.dispatchEvent(eventForNavigator);
      }.bind(this),
    );

    this.wrapper.addEventListener(
      'user-has-been-deleted',
      function (event) {
        const eventForNavigator = new Event(event.type);
        eventForNavigator.data = event.data;
        this.navigator.dispatchEvent(eventForNavigator);
      }.bind(this),
    );

    this.wrapper.addEventListener(
      'user-has-been-edited',
      function (event) {
        const eventForNavigator = new Event(event.type);
        eventForNavigator.data = event.data;
        this.navigator.dispatchEvent(eventForNavigator);
      }.bind(this),
    );
  }
}

customElements.define('user-info', UserInfo);

export default document.createElement('user-info');
