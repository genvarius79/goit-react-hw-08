import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        name="filters"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
}
