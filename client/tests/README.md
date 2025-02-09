├── tests/             # 📌 Your test directory
│   ├── e2e/           # 🧪 End-to-End tests (Cypress, Playwright)
│   ├── unit/          # ✅ Unit tests (Jest, React Testing Library)
│   ├── integration/   # 🔗 Integration tests (Component + API + State)
│   ├── a11y/          # ♿ Accessibility tests (jest-axe, axe-core)


tests/
├── e2e/               # 🧪 End-to-End tests (Cypress, Playwright)
│   ├── login.test.ts
│   ├── signup.test.ts
│   ├── dashboard.test.ts
│
├── unit/              # ✅ Unit tests (Jest, Testing Library)
│   ├── button.test.tsx
│   ├── navbar.test.tsx
│
├── integration/       # 🔗 Integration tests (API + UI)
│   ├── auth.test.ts
│   ├── user-flow.test.ts
│
├── a11y/              # ♿ Accessibility tests (Axe, Jest-Axe)
│   ├── a11y-homepage.test.ts
│   ├── a11y-forms.test.ts
│
├── mocks/             # 📌 Mock API responses (MSW)
│   ├── handlers.ts
│   ├── mockData.ts
│   ├── server.ts
│
├── coverage/          # 📊 Test coverage reports
│   ├── lcov-report/
│   ├── coverage.json
│
├── performance/       # 🚀 Performance tests (Lighthouse, Render Time)
│   ├── renderTime.test.ts
│   ├── lighthouse.test.js
│
├── security/          # 🔒 Security tests (XSS, SQL Injection)
│   ├── xss.test.ts
│   ├── sql.test.ts
│
├── setupTests.ts      # 🔧 Global test setup (Mocks, Jest Config)
