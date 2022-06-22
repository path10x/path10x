import React from 'react';
import RadarChart from 'react-svg-radar-chart';

function Profile() {
  
  const data = [
    {
      data: {
        DFS: 0.7,
        dyanamicProgramming: .8,
        BFS: 0.9,
        heap: 0.67,
        backtracking: 0.8,
        binarySearch: 0.7,
        arrays: .8,
        twoPointers: 0.9,
        fastSlowPointers: 0.67,
        trie: 0.8,
        slidingWindows: 0.1,
        graph: 0.2,
        greedy: 0.3,
        inPlaceReversalLL: 0.4,
        intervals: 0.5,
        tropoSort: 0.6,
        misc: 0.7,
      },
      meta: { color: 'blue' }
    },
    // {
    //   data: {
    //     batteryy: 0.6,
    //     designn: .85,
    //     usefull: 0.5,
    //     speedd: 0.6,
    //     weightt: 0.7
    //   },
    //   meta: { color: 'red' }
    // }
  ];

const captions = {
    DFS: 'DFS',
    dyanamicProgramming: 'Dynamic Programming',
    BFS: 'BFS',
    heap: 'Heap',
    backtracking: 'Backtracking',
    binarySearch: 'Binary Search',
    arrays: 'Arrays',
    twoPointers: 'Two Pointers',
    fastSlowPointers: 'Fast & Slow',
    trie: 'Trie',
    slidingWindows: 'Sliding Windows',
    graph: 'Graph',
    greedy: 'Greedy',
    inPlaceReversalLL: 'In-place reversal of a LL',
    intervals: 'Intervals',
    tropoSort: 'Tropological Sort',
    misc: 'Misc',
}

  return (
    <div id='profile'>
      <RadarChart
        id='radar'
        captions={captions}
        data={data}
        size={400}
      />
    </div>
  );
}

export default Profile;