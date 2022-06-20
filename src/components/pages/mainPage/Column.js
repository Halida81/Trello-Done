import styled from "styled-components";
import { useDispatch} from "react-redux";
import { uiColumnActions } from "../../../store/slices/uiColumn";

const Container = styled.form`
  display: flex;
  justify-content: space-evenly;
  margin: 50px;
  input {
    width: 273px;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    outline: none;
    color: red;
    border-radius: 6px;
    font-size: 14px;
   
  }
 
`;
const Column = () => {
  const dispatch = useDispatch();

  const addColumnHAndler = () => {
    dispatch(uiColumnActions.isShow());
  };

  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <div>
        <input placeholder="+Add another column" onClick={addColumnHAndler} />
      </div>
    </Container>
  );
};
export default Column;
