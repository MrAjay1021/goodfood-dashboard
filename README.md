# GOODFOOD Dashboard

A restaurant management dashboard built with Next.js, React, and Tailwind CSS.

## Features

- **Dashboard Overview**: Revenue statistics, order time distribution, ratings, and most ordered food items
- **Interactive Search**: Filter the "Most Ordered Food" list in real-time
- **Responsive Sidebar**: Collapsible navigation for mobile devices
- **Charts**: Static visual representations matching the Figma design


## Tech Stack

- Next.js (latest stable)
- React
- JavaScript (no TypeScript)
- Tailwind CSS
- Jest (for testing)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd goodfood-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view the dashboard.

### Running Tests

Run the Jest test suite:

```bash
npm test
```

This will run all tests including the `twoSum` algorithm tests located in `__tests__/twoSum.test.js`.

## Project Structure


```
├── __tests__/
│   └── twoSum.test.js        # Jest tests for twoSum
├── app/
│   ├── dashboard/
│   │   └── page.jsx          # Main dashboard page
│   ├── globals.css           # Global styles
│   └── layout.jsx            # Root layout
├── components/
│   ├── icons/                # Custom SVG icon components
│   ├── sidebar.jsx           # Navigation sidebar
│   ├── header.jsx            # Top header with search
│   ├── revenue-card.jsx      # Revenue statistics card
│   ├── order-time-card.jsx   # Order time pie chart
│   ├── rating-card.jsx       # Rating bubbles display
│   ├── most-ordered-card.jsx # Most ordered food list
│   └── order-card.jsx        # Order statistics card
├── data/
│   └── mock.js               # Mock data for the dashboard
├── utils/
│   └── twoSum.js             # twoSum algorithm implementation
       
└── README.md
```

## Interactive Widget

The dashboard includes an interactive search widget in the header that filters the "Most Ordered Food" list. Type in the search bar to filter food items by name in real-time.

## DSA Implementation

The `twoSum` function in `utils/twoSum.js` implements the classic Two Sum algorithm using a hash map for O(n) time complexity. It includes 6 comprehensive test cases covering:

- Normal scenarios
- Non-adjacent number pairs
- No solution cases
- Duplicate numbers
- Empty arrays
- Negative numbers
```
Time taken to complete : approximately 14–16 hours


