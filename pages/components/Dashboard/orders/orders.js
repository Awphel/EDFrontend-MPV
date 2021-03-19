
import { useRouter } from "next/router";

const OrderList = () => {
  const cityList = [
    {
      order: "107011",
      phase: "SHIPPED",
      progress: "100%",
    },
    {
      order: "259380",
      phase: "PRODUCTION",
      progress: "70%",
    },
    {
      order: "075596",
      phase: "PRODUCTION",
      progress: "25%",
    },
  ];
  return (
    <>
    <table className="Orders-list">
      <tr>
        <th>ORDER #</th>
        <th>PHASE</th>
        <th>PROGRESS</th>
      </tr>
      {cityList.map((item, index) => (
        <tr className="activity-list" key={index}>
          <td>
            <b>{item.order}</b>
          </td>
          <td>{item.phase}</td>
          <td className = "order-progress-text">{item.progress}</td>
        </tr>
      ))}
    </table>
    <span className = "all-orders-link">
      <a href = "#" className = "dash-text-link">view all orders</a>
    </span>
    </>
  );
};

export default OrderList;
