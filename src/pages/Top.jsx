import { useState } from 'react';
import InputForm from '../components/InputForm';

const Top = ({}) => {
const [taskList,setTaskList]=useState([]);
    return (
        <InputForm InputForm taskList={taskList} setTaskList={setTaskList} />)
        
}

export default Top;