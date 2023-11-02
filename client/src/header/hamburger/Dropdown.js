import DropdownNav from './DropdownNav';

const Dropdown = (props) => {
  return (
    <div className={props.styles.dropdown} onClick={props.resetHover}>
      <DropdownNav />
    </div>
  );
};

export default Dropdown;
