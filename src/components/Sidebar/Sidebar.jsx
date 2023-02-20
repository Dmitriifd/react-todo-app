import { useState } from "react";

import { ReactComponent as ButtonTaskIcon } from "../../assets/icons/list.svg";
import { ReactComponent as AddTodoListIcon } from "../../assets/icons/add.svg";
import removeIcon from "../../assets/icons/remove.svg";
import closeIcon from "../../assets/icons/close.svg";

import "./Sidebar.scss";

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

const Sidebar = () => {
  const [colors, setColors] = useState(colorsState);
  const [selectedColor, setSelectedColor] = useState(1);

  return (
    <aside className='todo__sidebar sidebar'>
      <button className='sidebar__button'>
        <ButtonTaskIcon />
        <span>Все задачи</span>
      </button>

      <ul className='sidebar__list'>
        <li className='sidebar__list-item active'>
          <i className='badge badge--blue'></i>
          <span>Личное (5)</span>
          <img
            className='sidebar__list-remove-icon'
            src={removeIcon}
            alt='Remove icon'
          />
        </li>
      </ul>

      <div className='sidebar__actions'>
        <button className='todo-button'>
          <AddTodoListIcon className='sidebar-button__icon' />
          <span>Добавить список</span>
        </button>
        <div className='sidebar__popup'>
          <img
            src={closeIcon}
            alt='Close button'
            className='sidebar__popup-close-btn'
          />
          <input
            className='sidebar__popup-input'
            type='text'
            placeholder='Название списка'
          />
          <div className='sidebar__popup-colors'>
            {colors.map((badge) => (
              <i
                key={badge.id}
                onClick={() => setSelectedColor(badge.id)}
                className={`badge badge--${badge.name} ${
                  selectedColor === badge.id ? "active" : ""
                }`}
              />
            ))}
          </div>
          <button className='sidebar__actions-button'>Добавить</button>
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
