import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"
import { Column } from "react-table";
import { Link } from "react-router-dom";


type DataType = {
    _id: string,
    amount: number,
    quantity: number,
    discount: number,
    status: ReactElement,
    action: ReactElement,
}

const colums: Column<DataType>[] = [{
    Header: "ID",
    accessor: "_id"
},
{
    Header: "Amount",
    accessor: "quantity"
},
{
    Header: "Discount",
    accessor: "discount"
},
{
    Header: "Amount",
    accessor: "amount"
},
{
    Header: "Status",
    accessor: "status"
},
{
    Header: "Action",
    accessor: "action"
},

]
const Orders = () => {
    const [rows] = useState<DataType[]>([{
        _id: "7863443468sd",
        amount: 87876,
        quantity: 34,
        discount: 877,
        status: <span className="red">Processing</span>,
        action: <Link to={`/order/78668sd`}>View</Link>
    }])
    const Table = TableHOC<DataType>(colums, rows, "dashboard-product-box", "Orders")();

    return (
        <div className='container'>
            <h1>My Orders</h1>
            {Table}
        </div>
    )
}

export default Orders