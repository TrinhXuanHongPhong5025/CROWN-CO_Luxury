 🎓 Các bước tiếp theo - React API Demo

Sau khi hoàn thành bài tập cơ bản, đây là các hướng dẫn nâng cao để mở rộng kiến thức.

## 📚 Level 1: Nền tảng (Beginner)

### ✅ Hoàn thành

- [x] React component basics
- [x] React Hooks (useState, useEffect)
- [x] axios API calls
- [x] React Bootstrap components
- [x] Bootstrap Icons
- [x] Responsive design

### 📖 Tiếp theo

#### 1. Hiểu sâu về React Hooks

**Bài tập**: Thêm hook `useCallback` và `useMemo`

```javascript
// src/components/Content.js
const fetchUsers = useCallback(() => {
  // Fetch logic
}, []);

const sortedUsers = useMemo(() => {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}, [users]);
```

**Tài liệu**: [React Hooks API Reference](https://react.dev/reference/react)

#### 2. Quản lý trạng thái (State Management)

Học về Context API (trước Reducer):

```javascript
// src/context/UserContext.js
import { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const useUsers = () => useContext(UserContext);
```

#### 3. Form Handling

**Bài tập**: Thêm form tạo user mới

```javascript
// src/components/UserForm.js
const [formData, setFormData] = useState({
  name: '',
  email: '',
  department: '',
});

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:3001/users', formData);
};
```

#### 4. Conditional Rendering

Thêm filter/search cho bảng:

```javascript
const [filter, setFilter] = useState('');

const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(filter.toLowerCase())
);
```

---

## 🚀 Level 2: Trung cấp (Intermediate)

### 🎯 Mục tiêu

Xây dựng một ứng dụng CRUD hoàn chỉnh.

### 📝 Bài tập 1: CRUD Operations

**Create (Tạo)**
```javascript
const addUser = (userData) => {
  return axios.post('http://localhost:3001/users', userData);
};
```

**Update (Cập nhật)**
```javascript
const updateUser = (id, userData) => {
  return axios.put(`http://localhost:3001/users/${id}`, userData);
};
```

**Delete (Xóa)**
```javascript
const deleteUser = (id) => {
  return axios.delete(`http://localhost:3001/users/${id}`);
};
```

### 📝 Bài tập 2: Client-side Routing

Cài đặt React Router:

```bash
npm install react-router-dom
```

```javascript
// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 📝 Bài tập 3: useReducer Hook

Thay thế multiple useState bằng useReducer:

```javascript
const [state, dispatch] = useReducer(reducer, initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
```

### 📝 Bài tập 4: Custom Hooks

Tạo hook tái sử dụng:

```javascript
// src/hooks/useFetch.js
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

// Sử dụng trong Component
const { data: users } = useFetch('http://localhost:3001/users');
```

### 📝 Bài tập 5: Error Handling & Validation

```javascript
// src/utils/validation.js
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateUser = (user) => {
  if (!user.name) return 'Name is required';
  if (!validateEmail(user.email)) return 'Invalid email';
  if (!user.department) return 'Department is required';
  return null;
};
```

---

## 💻 Level 3: Nâng cao (Advanced)

### 🎯 Mục tiêu

Tối ưu hóa, testing, và deployment.

### 📝 Bài tập 1: Performance Optimization

**Code Splitting**
```javascript
import { Suspense, lazy } from 'react';

const Content = lazy(() => import('./components/Content'));

<Suspense fallback={<Loading />}>
  <Content />
</Suspense>
```

**Memoization**
```javascript
import { memo } from 'react';

const UserRow = memo(({ user }) => {
  return <tr>...</tr>;
});
```

### 📝 Bài tập 2: Testing

Cài đặt Testing Library:

```javascript
// src/components/Content.test.js
import { render, screen, waitFor } from '@testing-library/react';
import Content from './Content';

test('renders users table', async () => {
  render(<Content />);
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
```

Chạy tests:
```bash
npm test
```

### 📝 Bài tập 3: TypeScript Integration

Cài đặt TypeScript:

```bash
npm install --save-dev typescript @types/react @types/node
```

```typescript
// src/types/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  status: 'Active' | 'Inactive';
}

// src/components/Content.tsx
import { User } from '../types/User';

const Content: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  // ...
};
```

### 📝 Bài tập 4: State Management Library

Sử dụng Redux hoặc Zustand:

**Zustand** (Đơn giản hơn):
```bash
npm install zustand
```

```javascript
// src/store/userStore.js
import create from 'zustand';

export const useUserStore = create((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  addUser: (user) => set((state) => ({
    users: [...state.users, user]
  })),
}));
```

### 📝 Bài tập 5: Deployment

**Build ứng dụng:**
```bash
npm run build
```

**Deploy lên Netlify:**
1. Commit code lên GitHub
2. Connect repository với Netlify
3. Netlify tự động build & deploy

**Deploy lên Vercel:**
```bash
npm install -g vercel
vercel
```

---

## 🔨 Các dự án thực tế

### Project 1: Todo App
- CRUD operations
- Local storage
- Drag & drop
- Categories

### Project 2: Weather App
- Real API (OpenWeatherMap)
- Multiple locations
- Charts & graphs
- Geolocation

### Project 3: E-commerce
- Product listing
- Shopping cart
- Checkout flow
- Order history

### Project 4: Social Media Clone
- User authentication
- Post feed
- Comments & likes
- Real-time updates (WebSocket)

---

## 📚 Tài liệu tham khảo

### Official Docs
- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TypeScript](https://www.typescriptlang.org/)

### YouTube Channels
- Traversy Media
- Web Dev Simplified
- The Net Ninja
- Fireship

### Online Courses
- freeCodeCamp (YouTube)
- Codecademy
- Scrimba
- Udemy

### Websites
- [React Patterns](https://reactpatterns.com/)
- [Awesome React](https://github.com/enaqx/awesome-react)
- [DEV Community](https://dev.to)

---

## ✅ Checklist - Kỹ năng để học

- [ ] Component Lifecycle
- [ ] Hooks (useState, useEffect, useContext, useReducer, useCallback, useMemo)
- [ ] React Router
- [ ] State Management (Redux/Zustand)
- [ ] Testing (Jest, React Testing Library)
- [ ] TypeScript
- [ ] Performance Optimization
- [ ] SEO (Next.js)
- [ ] API Integration
- [ ] Authentication
- [ ] Deployment

---

## 💡 Tips & Best Practices

### Code Organization
```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── hooks/         # Custom hooks
├── services/      # API calls
├── utils/         # Helper functions
├── types/         # TypeScript types
└── App.js
```

### Naming Conventions
- Components: `PascalCase` (MyComponent.js)
- Functions: `camelCase` (myFunction)
- Constants: `UPPER_SNAKE_CASE` (API_URL)
- CSS classes: `kebab-case` (.my-class)

### Performance Tips
1. Sử dụng `React.memo` cho components không thay đổi
2. Tránh inline functions trong render
3. Sử dụng `useCallback` cho callbacks
4. Sử dụng `useMemo` cho expensive computations
5. Chia code (code splitting)
6. Lazy load images
7. Minimize bundle size

### Testing Best Practices
1. Test user behavior, không implementation
2. Viết tests trước code (TDD)
3. Coverage ≥ 80%
4. Mock external APIs
5. Test error cases

---

## 🎓 Certification & Career Path

### Junior React Developer
- Yêu cầu: HTML, CSS, JavaScript cơ bản
- Kỹ năng: React, Components, Hooks, API
- Mức lương: $50-70k/năm

### Mid-level React Developer
- Yêu cầu: 2-3 năm kinh nghiệm
- Kỹ năng: TypeScript, Testing, Performance
- Mức lương: $70-100k/năm

### Senior React Developer
- Yêu cầu: 5+ năm kinh nghiệm
- Kỹ năng: Architecture, Mentoring, DevOps
- Mức lương: $100-150k+/năm

---

## 🏁 Kết luận

React là một công nghệ mạnh mẽ và đang tăng trưởng nhanh chóng. Bắt đầu từ những kiến thức cơ bản này, bạn có thể xây dựng ứng dụng web phức tạp và chuyên nghiệp.

**Hãy tiếp tục học, thực hành, và xây dựng dự án!**

---

**Happy Learning! 🚀**
