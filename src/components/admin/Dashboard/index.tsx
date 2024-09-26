import { LuUser } from "react-icons/lu";
import Donutchart from "./DoughnutChart";
import BarChart from "./BarChart";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BiMessageEdit } from "react-icons/bi";

const DashboardScreen = () => {
  // BAR Charts
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const datasets1 = [
    {
      label: "Scholars",
      backgroundColor: "#0F7BEF",
      borderWidth: 1,
      data: [2, 4, 6, 8, 10, 5, 7, 3, 9, 11, 8, 5],
      borderRadius: {
        topLeft: 4,
        topRight: 4,
      },
      barThickness: 20,
    },
    {
      label: "Consultants",
      backgroundColor: "#000",
      borderWidth: 1,
      data: [2, 4, 6, 8, 10, 5, 7, 3, 9, 11, 8, 5],
      borderRadius: {
        topLeft: 4,
        topRight: 4,
      },
      barThickness: 20,
    },
  ];

  const datasets2 = [
    {
      label: "Pay-ins",
      backgroundColor: "#0F7BEF",
      borderWidth: 1,
      data: [2, 4, 6, 8, 10, 5, 7, 3, 9, 11, 8, 5],
      borderRadius: {
        topLeft: 4,
        topRight: 4,
      },
      barThickness: 10,
    },
    {
      label: "Pay-outs",
      backgroundColor: "#000",
      borderWidth: 1,
      data: [1, 4, 6, 8, 10, 3, 7, 3, 9, 11, 8, 5],
      borderRadius: {
        topLeft: 4,
        topRight: 4,
      },
      barThickness: 10,
    },
  ];

  // Doughtnut Charts
  const COLORS = [
    "rgb(51,53,77)",
    "gray",
    "rgb(34,197,94)",
    "#0F7BEF",
    "rgb(255,186,8)",
    "rgb(239,68,68)",
  ];
  const COLORS2 = ["rgb(255,186,8)", "0F7BEF"];
  const COLORS3 = ["rgb(255,186,8)", "#0F7BEF"];

  const data = [
    { label: "Admission", value: 50 },
    { label: "Loan", value: 45 },
    { label: "Scholarship", value: 60 },
    { label: "Travel", value: 50 },
    { label: "Immigration", value: 35 },
    { label: "Visa", value: 40 },
  ];

  const data2 = [
    { label: "Admission", value: 10 },
    { label: "Loan", value: 90 },
  ];

  const data3 = [
    { label: "Travel", value: 80 },
    { label: "Immigration", value: 25 },
  ];

  const getData = () => ({
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => Math.round(item.value)),
        backgroundColor: COLORS,
        borderColor: COLORS,
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  });

  const getData2 = () => ({
    labels: data2.map((item) => item.label),
    datasets: [
      {
        data: data2.map((item) => Math.round(item.value)),
        backgroundColor: COLORS2,
        borderColor: COLORS2,
        borderWidth: 1,
        dataVisibility: new Array(data2.length).fill(true),
      },
    ],
  });

  const getData3 = () => ({
    labels: data3.map((item) => item.label),
    datasets: [
      {
        data: data3.map((item) => Math.round(item.value)),
        backgroundColor: COLORS3,
        borderColor: COLORS3,
        borderWidth: 1,
        dataVisibility: new Array(data3.length).fill(true),
      },
    ],
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-col sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.6rem] w-full">
        <div className="flex items-center gap-[0.8rem] h-[8rem] lg:h-[13rem] justify-center bg-[#fff] rounded-xl shadow-sm">
          <div className="p-3 rounded-full bg-[rgb(243,248,254)]">
            <LuUser className="text-BrandPrimary text-[2rem] lg:text-[2.4rem]" />
          </div>
          <div>
            <p className="text-[1.8rem] lg:text-[2.8rem] font-bold">200,000</p>
            <p className="text-[1rem] lg:text-[1.4rem]">
              Total No. of Scholars
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[0.8rem] h-[8rem] lg:h-[13rem] justify-center bg-[#fff] rounded-xl shadow-sm">
          <div className="p-3 rounded-full bg-[rgb(243,248,254)]">
            <FaRegMoneyBillAlt className="text-BrandPrimary text-[2rem] lg:text-[2.4rem]" />
          </div>
          <div>
            <p className="text-[1.8rem] lg:text-[2.8rem] font-bold">
              $1,235,789
            </p>
            <p className="text-[1rem] lg:text-[1.4rem]">Total Revenue</p>
          </div>
        </div>

        <div className="flex items-center gap-[0.8rem] h-[8rem] lg:h-[13rem] justify-center bg-[#fff] rounded-xl shadow-sm">
          <div className="p-3 rounded-full bg-[rgb(243,248,254)]">
            <BiMessageEdit className="text-BrandPrimary text-[2rem] lg:text-[2.4rem]" />
          </div>
          <div>
            <p className="text-[1.8rem] lg:text-[2.8rem] font-bold">6,000</p>
            <p className="text-[1rem] lg:text-[1.4rem]">Total No. of Posts</p>
          </div>
        </div>

        <div className="flex items-center gap-[0.8rem] h-[8rem] lg:h-[13rem] justify-center bg-[#fff] rounded-xl shadow-sm">
          <div className="p-3 rounded-full bg-[rgb(243,248,254)]">
            <LuUser className="text-BrandPrimary text-[2rem] lg:text-[2.4rem]" />
          </div>
          <div>
            <p className="text-[1.8rem] lg:text-[2.8rem] font-bold">258,560</p>
            <p className="text-[1rem] lg:text-[1.4rem]">
              Total No. of Active Users
            </p>
          </div>
        </div>
      </div>

      {/* DOUGHNUT Charts */}
      <div className="grid grid-cols-col sm:grid-cols-2 lg:grid-cols-3 mt-[2.4rem] gap-[1.6rem]">
        <div className="h-[30rem] bg-[#fff]   flex flex-col justify-center p-[2.4rem] rounded-xl shadow-sm">
          <p className="text-[1.6rem] font-bold">Posted Opportunities</p>
          <div className=" flex items-center  justify-center flex-col ">
            <Donutchart data={getData()} />
          </div>
        </div>
        <div className="h-[30rem] bg-[#fff]   flex flex-col justify-center p-[2.4rem] rounded-xl shadow-sm">
          <p className="text-[1.6rem] font-bold">
            Total Number of Booked Users
          </p>
          <div className=" flex items-center  justify-center flex-col ">
            <Donutchart data={getData2()} />
          </div>
        </div>
        <div className="h-[30rem] bg-[#fff] flex flex-col justify-center p-[2.4rem] rounded-xl shadow-sm">
          <p className="text-[1.6rem] font-bold">Total No. of Complaints</p>
          <div className=" flex items-center  justify-center flex-col ">
            <Donutchart data={getData3()} />
          </div>
        </div>
      </div>

      {/* BAR Charts */}
      <div className="grid grid-cols-col md:grid-cols-2 my-[2.4rem] gap-[1.6rem]">
        <div className="bg-[#fff] p-[2.5rem] h-[35rem] rounded-xl shadow-sm">
          <BarChart
            labels={labels}
            datasets={datasets1}
            chartTitle="User Engagement"
          />
        </div>

        <div className="bg-[#fff] p-[2.5rem] h-[35rem] rounded-xl shadow-sm">
          <BarChart labels={labels} datasets={datasets2} chartTitle="Revenue" />
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
