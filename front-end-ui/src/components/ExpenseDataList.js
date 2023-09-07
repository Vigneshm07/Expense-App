import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../App.css"
import { Table } from 'reactstrap'
// import { Pagination } from "antd"
import ExpenseData from "./ExpenseData"
import { Modal } from 'antd'
import { startExpenseSoftDelete, startUpdateExpense } from "../actions/expenseAction"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ExpenseDataList = (props) => {


  const [modal, setModal] = useState(false)
  const [editId, setEditId] = useState('')
  const dispatch = useDispatch()

  const expense = useSelector((state) => {
    return state.expense.expense
  })
  console.log("Expense", expense)

  const category = useSelector((state) => {
    return state.category.category
  })

  const showModal = (_id) => {
    setModal(!modal)
    setEditId(_id)
  }

  const handleOk = () => {
    setModal(false)
  }

  const handleCancel = () => {
    setModal(false)
  }

  const formSubmission = (formData, _id) => {
    dispatch(startUpdateExpense(formData, _id))
  }

  const handleSoftRemove = (id) => {
    dispatch(startExpenseSoftDelete(id))
  }

  return (
    <div className="App">
      {
        expense.length > 0 &&
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category Name</th>
              <th>Amount</th>
              <th>Expense Date</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              expense.map((ele) => {
                const categoryName = category.filter((category) => {
                  return category._id === ele.categoryId
                })
                const name = categoryName.map((ele) => {
                  return ele.name
                })
                return (
                  <tr key={ele._id}>
                    <td>{ele.name}</td>
                    <td>{name}</td>
                    <td>{ele.amount}</td>
                    <td>{ele.date}</td>
                    <td><button onClick={() => { showModal(ele._id) }} >Edit</button></td>
                    <td><button onClick={() => {
                      handleSoftRemove(ele._id)
                    }}>X</button></td>
                  </tr>
                )
              })
            }
            <Stack spacing={2}>
              <Pagination count={10} />
            </Stack>
          </tbody>
        </table>
      }
      {
        modal &&
        <div>
          <Modal
            visible={modal}
            isOpen={modal}
            onOk={handleOk}
            handleOk={handleCancel}
          >
            <ExpenseData editId={editId} formSubmission={formSubmission} />
          </Modal>
        </div>
      }

    </div>
  )
}

export default ExpenseDataList
