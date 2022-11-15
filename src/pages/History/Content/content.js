import CONTENT from './TableData';

function Content() {
    
    return (
        <div className='top-red-box padding-red-box'>
            <thead>
                <tr>
                    <th>Mã giao dịch</th>
                    <th>Số tiền</th>
                    <th>Phương thức</th>
                    <th>Trạng thái</th>
                    <th>Thời gian</th>
                </tr>
            </thead>
            {CONTENT.map(({ id, code, price, method, status, date }) => (
                <tr key={id}>
                    <td>{code}</td>
                    <td>{price}</td>
                    <td>{method}</td>
                    <td>{status}</td>
                    <td>{date}</td>
                </tr>
            ))}

        </div>       
    )
}
export default Content;