

const Counter = (props) => {
    
    const [count , setCount] = useState(0)
    const [list  , setList] = useState({})

    const handleClick = () => {
        let sum = count
        sum = sum + 1
        setCount(sum)
    }

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                setList(res.data)
            })
            .catch((err)=>{
                console.log(err.message)
            })
        }
    )

    return (
        <div>
            count : {count}
            <button onClick={handleClick}>+</button>
            <ul>{
                list.map((ele)=>{
                    return (<li>{ele.username}</li>

                    )
                })
            }</ul>
        </div>
    )
}