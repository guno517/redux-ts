import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { RootState } from '../redux';
import { fetchPostById } from '../redux/posts';

const PostPage = () => {
  const { postId } = useParams<{ postId: string }>(); // 흠.. 원래는 제네릭 안에 postId: string
  if (!postId) throw Error('1');
  const dispatch = useDispatch<any>(); // 안 넣으면 19번째 줄 오류
  const post = useSelector((state: RootState) => {
    return state.posts.data.find(
      (post) => post.id === parseInt(postId)
    );
  });

  useEffect(() => {
    dispatch(fetchPostById(parseInt(postId)));
  }, [dispatch, postId]);

  return (
    <div>
      {post ? (
        <Fragment>
          <Header>{post.title}</Header>
          <span>{post.body}</span>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default PostPage;
