import { useEffect } from "react"
import { List, Button } from "antd"

export default function ToDoList({ loading, itemList, setItemList, setLoading}) {

    useEffect(() => {
        fetch("https://much-todo-api-bp.web.app/items")
        .then(resp => resp.json())
        .then(setItemList)
        .catch(alert)
        .finally(() => setLoading(false))
    }, [])
        
    return (
        <section>
            <List 
            bordered
            dataSource={itemList}
            loading={loading}
            size="large"
             
            renderItem={(task) => (
                <List.Item className={(task.done) && 'done'}>
                    {task.item}
                </List.Item>
                
            )}
        />
   
     
   
        </section>
    )
}
// --CODING FOR DELETE BUTTON ON TODO APP--
// function DeleteItem({item, setLoading, setItemList}){

//     return (
//         <List.Item
//         actions={[
//             <Button danger key="list-delete" 
//             onClick={ () = changeItem('delete', item, setLoading,setItemList)}>
//             Delete
//             </Button>,
//         ]}>
//        </List.Item>
//     )
// }

