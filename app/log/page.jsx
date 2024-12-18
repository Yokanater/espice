import React from "react";
import Navbar from "../components/Navbar";

export default function logs() {
  const eventData = [
    {
      date: "27 October, 2023",
      title: "Warp Inter ‘23",
      description:
        "On 26 October 2023, eSpice took part in Warp Inter ‘23, the annual tech fest held by DPS Mathura Road. We bagged the overall trophy, securing a podium in 5 different events.",
      events: [
        {
          event: "Hackathon",
          participants: "Pramod Singh, Kanishka Singh, Sidharth Gautam",
          position: "First",
          color: "bg-[#F1BC00]",
        },
        {
          event: "Hackathon",
          participants: "Pramod Singh, Kanishka Singh, Sidharth Gautam",
          position: "Second",
          color: "bg-[#AFAFAF]",
        },
        {
          event: "Hackathon",
          participants: "Pramod Singh, Kanishka Singh, Sidharth Gautam",
          position: "Third",
          color: "bg-[#B54100]",
        },
        {
          event: "Hackathon",
          participants: "Pramod Singh, Kanishka Singh, Sidharth Gautam",
          position: "First",
          color: "bg-[#F1BC00]",
        },
      ],
    },
    {
      date: "25 October, 2023",
      title: "Investiture 2k23",
      description:
        "On 25 October 2023, The Investiture Ceremony was held in DPS Noida, appointing new club incharges.",
    },
  ];
  return (
    <div className="bg-back bg-no-repeat bg-cover min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-[78px] px-4 sm:px-6 md:px-8 lg:px-10 mb-[30px]">
        <div className="w-full max-w-[1000px]">
          <p className="text-[24px] sm:text-[30px] font-bold text-[#303030]">
            The eSpice Log
          </p>
          <div className="min-h-screen p-6 font-sans">
            {eventData.map((eventGroup, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-gray-500 text-sm mb-2">
                  {eventGroup.date}
                </h3>
                <h1 className="text-2xl font-bold mb-4">{eventGroup.title}</h1>
                <p className="text-gray-700 mb-4">{eventGroup.description}</p>

                {eventGroup.events && (
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-blue-600 text-white">
                        <tr>
                          <th className="py-2 px-4">Event</th>
                          <th className="py-2 px-4">Participants</th>
                          <th className="py-2 px-4">Position</th>
                        </tr>
                      </thead>
                      <tbody>
                        {eventGroup.events.map((e, idx) => (
                          <tr
                            key={idx}
                            className="odd:bg-white even:bg-gray-100 text-gray-700"
                          >
                            <td className="py-2 px-4">{e.event}</td>
                            <td className="py-2 px-4">{e.participants}</td>
                            <td className="py-2 px-4 flex items-center">
                              <span
                                className={`inline-block w-3 h-3 rounded-full mr-2 ${e.color}`}
                              ></span>
                              <span className="text-black">{e.position}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
