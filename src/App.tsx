import { Route, Routes } from 'react-router';
import DefaultTemplate from './components/DefaultTemplate';
import { NotFoundPage, PostPage, PostsPage } from './pages';

const App = () => {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="posts/:postId" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </DefaultTemplate>
  );
};

export default App;
