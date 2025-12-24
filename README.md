```md
# GOODFOOD Dashboard

A restaurant management dashboard built with Next.js, React, and Tailwind CSS.

## Features

- Dashboard with revenue, order time, ratings, and order statistics
- Interactive search filter for "Most Ordered Food"
- Responsive sidebar navigation
- Charts powered by Recharts

## Tech Stack

- Next.js (latest stable)
- React
- JavaScript
- Tailwind CSS
- Jest (testing)

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view the dashboard.

### Run tests

```bash
npm test
```

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

## DSA Implementation

DSA Implementation
The twoSum function in utils/twoSum.js implements the classic Two Sum algorithm using a hash map for O(n) time complexity. It includes 6 comprehensive test cases covering:

Normal scenarios
Non-adjacent number pairs
No solution cases
Duplicate numbers
Empty arrays
Negative numbers
```

---

## Images

For `public/images/header-burger.png` - Use the burger image provided.

For `public/images/most-ordered-card-salad.svg` - Use the salad SVG provided.

---

## Setup Commands

```bash
# 1. Create Next.js project
npx create-next-app@latest goodfood-dashboard --js --tailwind --eslint --app --src-dir=false --import-alias="@/*"

# 2. Install dependencies
cd goodfood-dashboard


# 3. Install dev dependencies for testing
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

# 4. Run tests
npm test

# 5. Start dev server
npm run dev

Time taken to complete : approximately 15–17 hours

