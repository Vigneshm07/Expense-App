const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const usersCltr = require('../app/controllers/usersCltr')
const budgetCltr = require('../app/controllers/budgetCltr')
const categoriesCltr = require('../app/controllers/categoryCltr')
const expenseCltr = require('../app/controllers/expenseCltr')
const profileCltr = require('../app/controllers/profileCltr')
const upload = require('../app/middlewares/upload')
const deleteCltr = require('../app/controllers/deleteCltr')

// users
router.post('/users/register' , usersCltr.register)
router.post('/users/login' , usersCltr.login)
router.get('/users/account' , authenticateUser , usersCltr.account)

// budget
router.get('/users/budget' , authenticateUser , budgetCltr.budget)
router.put('/users/update/:id' , authenticateUser , budgetCltr.update)

// categories
router.post("/users/categories" , authenticateUser , categoriesCltr.create)
router.get("/users/list" , authenticateUser , categoriesCltr.list)
router.delete("/users/categories/delete/:id" , authenticateUser , categoriesCltr.delete)

// expenses
router.post("/users/expense" , authenticateUser , expenseCltr.create)
router.get("/users/expense" , authenticateUser , expenseCltr.list)
router.put("/users/expense/:id" , authenticateUser , expenseCltr.update)
// router.delete("/users/expenseDelete/:id" , authenticateUser , expenseCltr.destroy)  
router.delete("/users/expenseSoftDelete/:id" , authenticateUser , expenseCltr.delete) 
router.get("/users/expenseSoftList" , authenticateUser , expenseCltr.soft) 
router.get("/users/expense/:id" , authenticateUser , expenseCltr.softrestore) 

// profile
router.get("/users/profileList" , authenticateUser , profileCltr.list)
//router.delete("/users/profiledelete/:id" , authenticateUser , profileCltr.delete)
router.put("/users/profileUpdate/:id" , authenticateUser , upload.single("avatar") , profileCltr.update)
router.put("/users/profilePicUpdate/:id" , authenticateUser , upload.single("avatar") , profileCltr.profile)

// deleteAccount
router.delete("/users/deleteAccount" , authenticateUser , deleteCltr.account)
router.delete("/users/deleteProfile" , authenticateUser , deleteCltr.profile)
router.delete("/users/deleteExpense" , authenticateUser , deleteCltr.expense)
router.delete("/users/deleteCategory" , authenticateUser , deleteCltr.category)
//router.delete("/users/deleteBudget" , authenticateUser , deleteCltr.budget)

module.exports = router