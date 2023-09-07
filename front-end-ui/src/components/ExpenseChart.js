import React from "react"
import { useSelector } from "react-redux"
import { Chart } from "react-google-charts"

const ExpenseChart = (props) => {

    const expense = useSelector((state)=>{
        return state.expense.expense
    })
    console.log("Expense" , expense)

    const budget = useSelector((state)=>{
        return state.budget.budget
    })
    console.log("Budget" , budget)

    const amount = expense.map((ele)=>{
        return ele.amount
    })
    console.log("Amount" , amount)

    const sum = amount.reduce((a , b)=>{
        return a + b
    } , 0)
    console.log(sum)

    const category = useSelector((state)=>{
        return state.category.category
    })

    let result = [
        ["category name" , "sum"] 
    ]

    category.forEach((ele)=>{
        let sum1 = 0
        expense.forEach((category)=>{
            if(ele._id === category.categoryId){
                sum1 = sum1 + category.amount
            }
        })
        console.log(sum1 , ele.name)
        result = [...result , [ele.name , sum1]]
    })
    console.log(result)

    const data = 
    [
        ["Amount", "Data"],
        ["Total Budget" , budget.amount - sum],
        ["Amount Spent" ,sum]
    ]

    const data1 = result  

    console.log(data1)

    const options = {
        title: "Budget Overview",
        pieHole: 0.4,
        is3D: false,
    }

    const options1 = {
        title: "Expense Overview",
        pieHole: 0.4,
        is3D: false,
    }
    
    return(
        <div>
            {
                expense.length > 0 &&
                <div>
                    <Chart className="expense"
                        chartType="PieChart"
                        width={"30%"}
                        height={"200px"}
                        data={data}
                        options={options}
                    />
                    <Chart className="chart"
                        chartType="PieChart"
                        width={"30%"}
                        height={"200px"}
                        data={data1}
                        options={options1}
                    />
                </div>
            }
            
        </div>
    )
}

export default ExpenseChart