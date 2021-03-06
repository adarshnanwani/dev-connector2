import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  auth: { user: authUser, loading },
  deletePost,
  post,
  removeLike,
  showActions,
}) => {
  const {
    _id,
    text,
    name,
    avatar,
    user: postUser,
    likes,
    comments,
    date,
  } = post;
  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${postUser}`}>
          <img className='round-img' src={avatar} alt='users avatar' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {showActions && (
          <>
            {' '}
            <button
              type='button'
              className='btn btn-light'
              onClick={() => addLike(_id)}
            >
              <i className='fas fa-thumbs-up'></i>{' '}
              {likes.length > 0 && <span>{likes.length}</span>}
            </button>
            <button
              type='button'
              className='btn btn-light'
              onClick={() => removeLike(_id)}
            >
              <i className='fas fa-thumbs-down'></i>
            </button>
            <Link to={`/post/${_id}`} className='btn btn-primary'>
              Discussion{' '}
              {comments.length > 0 && (
                <span className='comment-count'>{comments.length}</span>
              )}
            </Link>
            {!loading && postUser === authUser._id && (
              <button
                type='button'
                className='btn btn-danger'
                onClick={() => deletePost(_id)}
              >
                <i className='fas fa-times'></i>
              </button>
            )}{' '}
          </>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  addLike: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  removeLike: PropTypes.func.isRequired,
  showActions: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
