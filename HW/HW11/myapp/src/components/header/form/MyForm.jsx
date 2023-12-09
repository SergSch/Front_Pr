import React from 'react';
import s from './MyForm.module.css';

export default function MyForm({ newTask }) {
  const newTaskObj = (event) => {
    event.preventDefault();
    const day = event.target.day.value;
    const priority = event.target.priority.value;
    const title = event.target.description.value;

    if (!day || !priority || !title) {
      alert('Please fill in all fields');
      return;
    }

    const newObj = { day, priority, title };
    newTask(newObj);
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={newTaskObj}>
        <div className={s.selectBlock}>
          <select className={s.select} name="day" id="">
            <option selected>Select day</option>
            <option key="1" value="Mo">
              Mo
            </option>

            <option key="2" value="Tu">
              Tu
            </option>

            <option key="3" value="We">
              We
            </option>

            <option key="4" value="Th">
              Th
            </option>

            <option key="5" value="Fr">
              Fr
            </option>

            <option key="6" value="Sa">
              Sa
            </option>

            <option key="7" value="Su">
              Su
            </option>
          </select>
          <select className={s.select} name="priority" id="">
            <option selected>Select importance</option>
            <option key="1" value="wichtig">
              Important
            </option>
            <option key="2" value="not-wichtig">
              Not important
            </option>
          </select>
        </div>
        <div className={s.bottom_block}>
          <input
            className={s.input}
            type="text"
            placeholder="Description"
            name="description"
          />
          <button className={s.myBtn}>Add</button>
        </div>
      </form>
    </div>
  );
}
