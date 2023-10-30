
import Inst from "./inst/Inst";

const Insts = ({ insts, searchText }) => {

  const filteredInsts = insts.filter((name) =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ul>
      {filteredInsts.map((inst) => (
      <Inst key={inst.id} inst={inst} clicker={clickedInstHandler} isClicked={inst === clickedInst} />
      ))}
    </ul>
  );
}

export default Insts;
