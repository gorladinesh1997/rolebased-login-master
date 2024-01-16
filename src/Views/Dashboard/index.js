import React from "react";
import Hoc from "../../Components/Hoc";

const Dashboard = () => {
  const dashboardData = [
    { name: "random1", url: "https://via.placeholder.com/350x150" },
    { name: "random2", url: "https://via.placeholder.com/350x150" },
    { name: "random3", url: "https://via.placeholder.com/350x150" },
    { name: "random4", url: "https://via.placeholder.com/350x150" },
    { name: "random5", url: "https://via.placeholder.com/350x150" },
    {
      name: "random6",
      url: "https://fastly.picsum.photos/id/35/200/300.jpg?hmac=No1hMogzX_PUqgWDfLRCc4wGPYTIeviBhJbzjqskoMA",
    },
    {
      name: "random1",
      url: "https://fastly.picsum.photos/id/35/200/300.jpg?hmac=No1hMogzX_PUqgWDfLRCc4wGPYTIeviBhJbzjqskoMA",
    },
    {
      name: "random2",
      url: "https://fastly.picsum.photos/id/35/200/300.jpg?hmac=No1hMogzX_PUqgWDfLRCc4wGPYTIeviBhJbzjqskoMA",
    },
    {
      name: "random3",
      url: "https://fastly.picsum.photos/id/35/200/300.jpg?hmac=No1hMogzX_PUqgWDfLRCc4wGPYTIeviBhJbzjqskoMA",
    },
    {
      name: "random4",
      url: "https://fastly.picsum.photos/id/35/200/300.jpg?hmac=No1hMogzX_PUqgWDfLRCc4wGPYTIeviBhJbzjqskoMA",
    },
    {
      name: "random5",
      url: "https://fastly.picsum.photos/id/35/200/300.jpg?hmac=No1hMogzX_PUqgWDfLRCc4wGPYTIeviBhJbzjqskoMA",
    },
    {
      name: "random6",
      url: "https://fastly.picsum.photos/id/35/200/300.jpg?hmac=No1hMogzX_PUqgWDfLRCc4wGPYTIeviBhJbzjqskoMA",
    },
    {
      name: "random1",
      url: "https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko",
    },
    {
      name: "random2",
      url: "https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko",
    },
    {
      name: "random3",
      url: "https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko",
    },
    {
      name: "random4",
      url: "https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko",
    },
    {
      name: "random5",
      url: "https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko",
    },
    {
      name: "random6",
      url: "https://fastly.picsum.photos/id/80/200/200.jpg?hmac=uEQ6yExxeaopTOWf3oByB8KMH6Eip3-AVLN5jEMthko",
    },
  ];
  return (
    <div className="grid grid-cols-2 p-3 overflow-scroll h-[92vh] md:grid-cols-3 gap-4">
      {dashboardData.map((item) => {
        return (
          <div>
            <img src={item.url} className="w-full h-64" alt={item.name} />
            <h3 className="text-center">{item.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Hoc(Dashboard);
