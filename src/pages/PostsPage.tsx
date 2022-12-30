import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import PostList from '../components/PostList';
import { fetchAllPost } from '../redux/posts';

const PostsPage = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAllPost());
  }, [dispatch]);

  return (
    <div>
      <Header>Posts</Header>
      <PostList />
    </div>
  );
};

export default PostsPage;
