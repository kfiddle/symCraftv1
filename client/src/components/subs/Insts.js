import { Fragment } from 'react';
import Inst from './inst/Inst';

const Insts = ({ insts, searchText, clicker, clickedInst }) => {

  const filteredInsts = searchText ? insts.filter((inst) => inst.name.toLowerCase().includes(searchText.toLowerCase())) : insts;

  return (
    <Fragment>
      {filteredInsts.map((inst) => (
        <Inst key={inst.id} inst={inst} clicker={clicker} isClicked={inst === clickedInst} />
      ))}
    </Fragment>
  );
};

export default Insts;
