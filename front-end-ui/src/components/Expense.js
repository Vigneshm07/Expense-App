import React, { useState } from "react"
import { Modal } from 'antd'
import AddExpense from "./AddExpense"
import ExpenseDataList from "./ExpenseDataList"
import ExpenseChart from "./ExpenseChart"

const Expense = (props) => {

    const [modal , setModal] = useState(false)

    const showModal = () => {
        setModal(!modal)
    }

    const handleOk = () => {
        setModal(false)
    }

    const handleCancel = () => {
        setModal(false)
    }

    return(
        <div><ExpenseChart />
            <Modal 
                visible = {modal}
                isOpen = {modal}
                onOk = {handleOk}
                handleOk = {handleCancel}
            >
                <AddExpense />
            </Modal>
            <h3>Add Expense : <button
                onClick={showModal}
            >Add</button>
            </h3>
            
            <ExpenseDataList />
        </div>
    )
}

export default Expense