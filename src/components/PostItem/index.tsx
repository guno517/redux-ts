import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePostById, Post } from '../../redux/posts';
import Header from '../Header';
import Spinner from '../Spinner';

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<any>();

  const handleDeletePost = useCallback(
    async (id: number) => {
      setLoading(true);
      await dispatch(deletePostById(id));
      setLoading(false);
    },
    [dispatch]
  );

  return (
    <li>
      <Header>{post.title}</Header>
      <Link to={`/posts/${post.id}`}>Details</Link>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <button onClick={() => handleDeletePost(post.id)}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default PostItem;
