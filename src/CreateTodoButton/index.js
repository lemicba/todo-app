import './CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal, openModal}) => {
  const onClickButton = (msg) => {
    setOpenModal(prevState => !prevState);
    // alert(msg);
  } 
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  )
}

export default CreateTodoButton;