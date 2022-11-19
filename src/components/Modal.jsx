import Card from "../components/Card";
import Comment from "../components/Comment";
import { ModalDiv, Modals, Yorumlar } from "../styled/ModalStyled";

function Modal() {
  return (
    <ModalDiv>
      <Modals>
        <Card></Card>
        <Yorumlar>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          
          
        </Yorumlar>
      </Modals>
    </ModalDiv>
  );
}

export default Modal;