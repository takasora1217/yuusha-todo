import InputForm from '../components/InputForm';

const Top = ({ taskList, setTaskList }) => {
    return (
        <>
            <InputForm taskList={taskList} setTaskList={setTaskList} />
        </>
    );
}

export default Top;