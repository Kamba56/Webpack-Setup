import { toDoList } from './elements.js'

const populate = ({description, completed, index}) => {
  const listItem = document.createElement('li');
  listItem.classList.add('border', 'list-flex');
  toDoList.appendChild(listItem);
  const div = document.createElement('div');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkout');
  checkbox.classList.add('check-list');
  const text = document.createElement('input');
  text.setAttribute('placeholder', description);
  text.setAttribute('type', 'text');
  text.setAttribute('disabled');
}

export default populate;

<li class="border list-flex">
          <div>
            <input type="checkbox" class="check-list">
            <input type="text" placeholder="Cook food" disabled>
          </div>
          <button type="button" class="edit">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
        </li>