import React from 'react';
import Chart from 'react-apexcharts';

const SpiderChart = () => {
  const totalDfs = 30;
  const finishedDfs = 27;
  const pecentDfs = (finishedDfs / totalDfs) * 100;

  const totalDp = 21;

  return (
    <div>
      <Chart
        type="radar"
        width={800}
        height={600}
        series={[
          {
            name: 'User1',
            data: [
              pecentDfs,
              70,
              60,
              50,
              70,
              80,
              50,
              40,
              50,
              60,
              70,
              60,
              50,
              70,
              80,
              90,
              100,
            ],
            color: '#FFB347',
          },
          //   {
          //     name: 'Time',
          //     data: [7, 9, 15, 5, 3, 12, 10],
          //     color: '#F67280',
          //   },
          //   {
          //     name: 'Data3',
          //     data: [10, 5, 10, 7, 12, 20, 10],
          //     color: '#355C7D',
          //   },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
            // stacked: true
          },
          xaxis: {
            labels: {
              style: {
                colors: '#f3f3f3',
              },
            },
            tickPlacement: 'on',
            categories: [
              'DFS',
              'DyanamicProgramming',
              'BFS',
              'Heap',
              'Backtracking',
              'Binary Search',
              'Arrays',
              'Two Pointers',
              'Fast & Slow',
              'Trie',
              'Sliding Windows',
              'Graph',
              'Greedy',
              'In-place reversal of a LL',
              'Intervals',
              'Tropological Sort',
              'Misc',
            ],
            title: {
              text: 'Skill',
              style: {
                color: '#f3f3f3',
              },
            },
          },
          legend: {
            show: true,
            position: 'top',
            labels: {
              colors: '#f3f3f3',
            },
          },
        }}
      ></Chart>
    </div>
  );
};

export default SpiderChart;

// '#F8B195',
// '#F67280',
// '#C06C84',
// '#6C5B7B',
// '#355C7D',
// '#B7D0CD',
// '#947481',

// import React from 'react';
// import Chart from 'react-apexcharts';

// const SpiderChart = () => {
//   return (
//     <div>
//       <Chart
//         type="radar"
//         width={800}
//         height={600}
//         series={[
//           {
//             name: 'Data1',
//             data: [20, 10, 15, 10, 5, 7, 10],
//             color: '#947481',
//           },
//           //   {
//           //     name: 'Data2',
//           //     data: [7, 9, 15, 5, 3, 12, 10],
//           //     color: '#F67280',
//           //   },
//           //   {
//           //     name: 'Data3',
//           //     data: [10, 5, 10, 7, 12, 20, 10],
//           //     color: '#355C7D',
//           //   },
//         ]}
//         options={{
//           chart: {
//             toolbar: {
//               show: false,
//             },
//             // stacked: true
//           },
//           xaxis: {
//             labels: {
//               style: {
//                 colors: '#f3f3f3',
//               },
//             },
//             tickPlacement: 'on',
//             categories: ['1', '2', '3', '4', '5', '6', '7'],
//             title: {
//               text: 'Skill',
//               style: {
//                 color: '#f3f3f3',
//               },
//             },
//           },
//           yaxis: {
//             labels: {
//               style: {
//                 colors: ['#f3f3f3'],
//               },
//             },
//             title: {
//               text: 'Hit/Miss',
//               style: {
//                 color: '#f3f3f3',
//               },
//             },
//           },
//           legend: {
//             show: true,
//             position: 'top',
//             labels: {
//               colors: '#f3f3f3',
//             },
//           },
//         }}
//       ></Chart>
//     </div>
//   );
// };

// export default SpiderChart;
