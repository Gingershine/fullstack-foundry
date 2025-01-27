import Logo from '../Logo/Logo';
import css from './Page.module.css';
import PropTypes from 'prop-types';


const Page = ({ children }) => {
  return (
    <div className={css.page}>
      <Logo />
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
