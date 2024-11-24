export const buildingData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [10, -80],
              [-80, -80],
              [-80, 80],
              [40, 80],
              [40, -20],
              [100, -20],
              [100, -80],
              [30, -80],
              [30, -74],
              [34, -74],
              [34, -68],
              [40, -68],
              [40, -74],
              [94, -74],
              [94, -26],
              [40, -26],
              [40, -60],
              [34, -60],
              [34, 74],
              [-74, 74],
              [-74, 30],
              [10, 30],
              [10, 24],
              [-74, 24],
              [-74, -24],
              [10, -24],
              [10, -30],
              [-74, -30],
              [-74, -74],
              [10, -74],
            ],
          ],
        },
      },
    ],
  };
  

  export const roomsData = [
    { coordinates: [[0, 0], [0, 50], [50, 50], [50, 0]], name: 'Living Room', square: 200 },
    { coordinates: [[50, 0], [50, 50], [100, 50], [100, 0]], name: 'Kitchen', square: 150 },
    { coordinates: [[0, 50], [0, 100], [50, 100], [50, 50]], name: 'Bathroom', square: 75 },
    { coordinates: [[50, 50], [50, 100], [100, 100], [100, 50]], name: 'Common Room', square: 100 },
  
    // Furniture items like tables and sofas
    { coordinates: [[10, 10], [15, 10], [15, 15], [10, 15]], name: 'Dining Table', square: 25 },
    { coordinates: [[60, 10], [70, 10], [70, 20], [60, 20]], name: 'Sofa', square: 20 },
    { coordinates: [[20, 70], [30, 70], [30, 80], [20, 80]], name: 'Kitchen Table', square: 30 },
    { coordinates: [[70, 70], [80, 70], [80, 80], [70, 80]], name: 'Coffee Table', square: 15 },
  ];
  