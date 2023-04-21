import { Input } from "antd"

export default function Header ({ setItemList, setLoading }){
    const handleAdd = async (value) => {

        if(value.length < 3) return 

        setLoading(true)

        const newItem = {
            done: false,
            userIde: 'me',
            item: value,
        }

        const response = await fetch("https://much-todo-api-bp.web.app/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem),
        })
        const data = await response.json()
        setItemList(data)
        setLoading(false)
    }

    return (
        <header>
            <Input.Search 
            allowClear
            enterButton="Add"
            size="large"
            onSearch={handleAdd}
            placeholder="Add New ToDo Item"/>
        </header>
    )
}