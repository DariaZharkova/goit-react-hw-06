import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';

export const Contact = () => {
  return (
    <>
      <div>
        <p className={css.text}>
          <FaUser className={css.icon} />
          name
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} /> number
        </p>
      </div>
      <button className={css.btn}>Delete</button>
    </>
  );
};
