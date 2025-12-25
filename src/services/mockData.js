/**
 * Mock data for API fallback
 * Mirrors the data structure from the backend API
 */

const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl Mock',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.25,
    keyData: {
      calorieCount: 1420,
      proteinCount: 185,
      carbohydrateCount: 220,
      lipidCount: 65
    }
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Cecilia Mock',
      lastName: 'Ratorez',
      age: 34,
    },
    score: 0.45,
    keyData: {
      calorieCount: 2100,
      proteinCount: 110,
      carbohydrateCount: 180,
      lipidCount: 95
    }
  }
]

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 78,
        calories: 300
      },
      {
        day: '2020-07-02',
        kilogram: 79,
        calories: 280
      },
      {
        day: '2020-07-03',
        kilogram: 79,
        calories: 320
      },
      {
        day: '2020-07-04',
        kilogram: 80,
        calories: 250
      },
      {
        day: '2020-07-05',
        kilogram: 81,
        calories: 200
      },
      {
        day: '2020-07-06',
        kilogram: 81,
        calories: 290
      },
      {
        day: '2020-07-07',
        kilogram: 82,
        calories: 340
      }
    ]
  },
  {
    userId: 18,
    sessions: [
      {
        day: '2020-07-01',
        kilogram: 68,
        calories: 280
      },
      {
        day: '2020-07-02',
        kilogram: 68,
        calories: 260
      },
      {
        day: '2020-07-03',
        kilogram: 69,
        calories: 300
      },
      {
        day: '2020-07-04',
        kilogram: 69,
        calories: 420
      },
      {
        day: '2020-07-05',
        kilogram: 68,
        calories: 190
      },
      {
        day: '2020-07-06',
        kilogram: 67,
        calories: 200
      },
      {
        day: '2020-07-07',
        kilogram: 67,
        calories: 350
      }
    ]
  }
]

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 40
      },
      {
        day: 2,
        sessionLength: 35
      },
      {
        day: 3,
        sessionLength: 55
      },
      {
        day: 4,
        sessionLength: 60
      },
      {
        day: 5,
        sessionLength: 45
      },
      {
        day: 6,
        sessionLength: 50
      },
      {
        day: 7,
        sessionLength: 70
      }
    ]
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 25
      },
      {
        day: 2,
        sessionLength: 35
      },
      {
        day: 3,
        sessionLength: 45
      },
      {
        day: 4,
        sessionLength: 40
      },
      {
        day: 5,
        sessionLength: 35
      },
      {
        day: 6,
        sessionLength: 55
      },
      {
        day: 7,
        sessionLength: 60
      }
    ]
  }
]

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      {
        value: 120,
        kind: 1
      },
      {
        value: 160,
        kind: 2
      },
      {
        value: 180,
        kind: 3
      },
      {
        value: 90,
        kind: 4
      },
      {
        value: 180,
        kind: 5
      },
      {
        value: 130,
        kind: 6
      }
    ]
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      {
        value: 160,
        kind: 1
      },
      {
        value: 200,
        kind: 2
      },
      {
        value: 110,
        kind: 3
      },
      {
        value: 100,
        kind: 4
      },
      {
        value: 190,
        kind: 5
      },
      {
        value: 140,
        kind: 6
      }
    ]
  }
]

export { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE }
