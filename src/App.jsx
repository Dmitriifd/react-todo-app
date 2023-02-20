import React, { useState } from "react";
import { ReactComponent as ButtonTaskIcon } from "./assets/icons/list.svg";
import { ReactComponent as AddTodoListIcon } from "./assets/icons/add.svg";
import removeIcon from "./assets/icons/remove.svg";
import editIcon from "./assets/icons/edit.svg";
import newTaskIcon from "./assets/icons/add.svg";
import closeIcon from "./assets/icons/close.svg";

import "./badge.scss";

const colorsState = [
  {
    id: 1,
    hex: "#C9D1D3",
    name: "grey",
  },
  {
    id: 2,
    hex: "#42B883",
    name: "green",
  },
  {
    id: 3,
    hex: "#64C4ED",
    name: "blue",
  },
  {
    id: 4,
    hex: "#FFBBCC",
    name: "pink",
  },
  {
    id: 5,
    hex: "#B6E6BD",
    name: "lime",
  },
  {
    id: 6,
    hex: "#C355F5",
    name: "purple",
  },
  {
    id: 7,
    hex: "#110133",
    name: "black",
  },
  {
    id: 8,
    hex: "#FF6464",
    name: "red",
  },
];

function App() {
  const [colors, setColors] = useState(colorsState);
  const [selectedColor, selectColor] = useState(1);

  return (
    <main className='todo'>
      <aside className='todo__sidebar'>
        <button className='todo__sidebar-button'>
          <ButtonTaskIcon />
          <span>Все задачи</span>
        </button>

        <ul className='todo__list'>
          <li className='todo__list-item active'>
            <i className='badge badge--blue'></i>
            <span>Личное (5)</span>
            <img
              className='todo__list-remove-icon'
              src={removeIcon}
              alt='Remove icon'
            />
          </li>
          <li className='todo__list-item'>
            <i className='badge badge--lime'></i>
            <span>Спорт (5)</span>
            <img
              className='todo__list-remove-icon'
              src={removeIcon}
              alt='Remove icon'
            />
          </li>
        </ul>

        <div className='todo__actions'>
          <button className='todo-button'>
            <AddTodoListIcon className='todo-button__icon' />
            <span>Добавить список</span>
          </button>
          <div className='add-list__popup'>
            <img
              src={closeIcon}
              alt='Close button'
              className='add-list__popup-close-btn'
            />
            <input
              className='add-list__popup-input'
              type='text'
              placeholder='Название списка'
            />
            <div className='add-list__popup-colors'>
              {colors.map((badge) => (
                <i
                  key={badge.id}
                  onClick={() => selectColor(badge.id)}
                  className={`badge badge--${badge.name} ${
                    selectedColor === badge.id ? "active" : ""
                  }`}
                />
              ))}
            </div>
            <button className='todo__button'>Добавить</button>
          </div>
        </div>
      </aside>
      <section className='todo__tasks'>
        <div className='tasks'>
          <a href='#'>
            <h2 className='tasks__title'>
              Книги
              <img src={editIcon} alt='Edit icon' />
            </h2>
          </a>
          <div className='tasks__items'>
            <div className='tasks__items-row'>
              <div className='checkbox'>
                <input className='task-checkbox' id='task-1' type='checkbox' />
                <label className='task-label' htmlFor='task-1'>
                  <svg
                    className='task-checkbox__icon'
                    width='11'
                    height='8'
                    view-box='0 0 11 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001'
                      stroke='#000'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </label>
              </div>
              <p>Прочитать чтонибудь</p>
              <div className='tasks__items-row-actions'>
                <div>
                  <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z'
                      fill='black'
                    ></path>
                  </svg>
                </div>
                <div>
                  <svg
                    width='11'
                    height='11'
                    view-box='0 0 11 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z'
                      fill='black'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='tasks__form'>
              <div className='tasks__form-new' tabIndex={0}>
                <img src={newTaskIcon} alt='Add icon' />
                <span>Новая задача</span>
              </div>
              <div className='tasks__form-block'>
                <input
                  className='tasks__form-input'
                  type='text'
                  placeholder='Текст задачи'
                />
                <button className='tasks__form-button'>Добавить задачу</button>
                <button className='tasks__form-button button--grey'>
                  Отмена
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

