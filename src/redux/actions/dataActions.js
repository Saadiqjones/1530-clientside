import {
  SET_POSTS,
  LOADING_DATA,
  LIKE_POST,
  UNLIKE_POST,
  DELETE_POST,
  SET_ERRORS,
  POST_POST,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_POST,
  SET_CAMPAIGNS,
  LIKE_CAMPAIGN,
  UNLIKE_CAMPAIGN,
  DELETE_CAMPAIGN,
  POST_CAMPAIGN,
  SET_CAMPAIGN,
  STOP_LOADING_UI,
  SUBMIT_COMMENT
} from '../types';
import axios from 'axios';

// Get all posts
export const getPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/posts')
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_POSTS,
        payload: []
      });
    });
};
export const getPost = (postId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/post/${postId}`)
    .then((res) => {
      dispatch({
        type: SET_POST,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};
// Post a Post
export const postPost = (newPost) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/post', newPost)
    .then((res) => {
      dispatch({
        type: POST_POST,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
// Like a Post
export const likePost = (postId) => (dispatch) => {
  axios
    .get(`/post/${postId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_POST,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Unlike a Post
export const unlikePost = (postId) => (dispatch) => {
  axios
    .get(`/post/${postId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_POST,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Submit a comment
export const submitComment = (postId, commentData) => (dispatch) => {
  axios
    .post(`/post/${postId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deletePost = (postId) => (dispatch) => {
  axios
    .delete(`/post/${postId}`)
    .then(() => {
      dispatch({ type: DELETE_POST, payload: postId });
    })
    .catch((err) => console.log(err));
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data.posts
      });
    })
    .catch(() => {
      dispatch({
        type: SET_POSTS,
        payload: null
      });
    });
};
// Get all campaigns
export const getCampaigns = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get('/campaigns')
    .then((res) => {
      dispatch({
        type: SET_CAMPAIGNS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_CAMPAIGNS,
        payload: []
      });
    });
};
export const getCampaign = (campaignId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/campaign/${campaignId}`)
    .then((res) => {
      dispatch({
        type: SET_CAMPAIGN,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};
// Post a campaign
export const postCampaign = (newCampaign) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/campaign', newCampaign)
    .then((res) => {
      dispatch({
        type: POST_CAMPAIGN,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
// Like a campaign
export const likeCampaign = (campaignId) => (dispatch) => {
  axios
    .get(`/campaign/${campaignId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_CAMPAIGN,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Unlike a campaign
export const unlikeCampaign = (campaignId) => (dispatch) => {
  axios
    .get(`/campaign/${campaignId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_CAMPAIGN,
        payload: res.data
      });
    })
    .catch((err) => console.log(err));
};
// Submit a comment
export const submitCampaignComment = (campaignId, commentData) => (dispatch) => {
  axios
    .post(`/campaign/${campaignId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
export const deleteCampaign = (campaignId) => (dispatch) => {
  axios
    .delete(`/campaign/${campaignId}`)
    .then(() => {
      dispatch({ type: DELETE_CAMPAIGN, payload: campaignId });
    })
    .catch((err) => console.log(err));
};

export const getUserCampaignData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_CAMPAIGNS,
        payload: res.data.campaigns
      });
    })
    .catch(() => {
      dispatch({
        type: SET_CAMPAIGNS,
        payload: null
      });
    });
};
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
