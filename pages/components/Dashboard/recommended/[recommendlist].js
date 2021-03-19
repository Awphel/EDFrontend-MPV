
import { useRouter } from "next/router";
import Link from 'next/link';

const RecommendedList = () => {
  const cityList = [
    {
      module: "Flame sensor",
      description: "760nm~1100nm @ 60 degrees, 15mA driver",
    },
    {
      module: "Temperature sensor(B23Y)",
      description: "0.1*C accuracy, 5V@ 135mA",
    },
    {
      module: "Motion sensor(IS215T)",
      description: "120 degrees detection range @ 7 meters",
    },
    {
      module: "light sensor(GL5528)",
      description: "5V working voltage, analog and Digita outpu(0 or 1)",
    },
  ];
  return (
    <>
    <ul>
      {cityList.map((item, index) => (
        <li className="recommended-list" key={index}>
          <b>{item.module}</b> - {item.description}
          <Link href="/app">
          <button type="button" className="btn btn-primary tertiary">TRY THIS</button>
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
};

export default RecommendedList;
