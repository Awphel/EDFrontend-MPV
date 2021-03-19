
import { useRouter } from "next/router";

const ActivityList = () => {
  const cityList = [
    {
      name: "Tonny Stark",
      avatar: "/members/team1.png",
      project: "Flame sensor",
      action: "locked power module",
    },
    {
      name: "Max Plank",
      avatar: "/members/team4.jpg",
      project: "Gate controller",
      action: "changed power module",
    },
    {
      name: "Wonder Woman",
      avatar: "/members/team2.jpg",
      project: "Temprature controller",
      action: "Started project",
    },
    {
      name: "Chadwick Boseman",
      avatar: "/members/team3.jpg",
      project: "Flame sensor",
      action: "locked power module",
    },
  ];
  return (
    <>
    <table className="Activity-list">
      <tr>
        <th>MEMBER</th>
        <th>PROJECT</th>
        <th>ACTION</th>
      </tr>
      {cityList.map((item, index) => (
        <tr className="activity-list" key={index}>
          <td>
            <
            img
            src = { item.avatar}
            className = "team-member-img"
            title = "edit project"
            alt = "team" / >
            <a href="#" className="team-member-name">{item.name}</a>
          </td>
          <td>{item.project}</td>
          <td>{item.action}</td>
        </tr>
      ))}
    </table>
    </>
  );
};

export default ActivityList;
