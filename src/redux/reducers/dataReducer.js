import {
  SET_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  LOADING_DATA,
  DELETE_POST,
  POST_POST,
  SET_POST,
  SET_CAMPAIGNS,
  LIKE_CAMPAIGN,
  UNLIKE_CAMPAIGN,
  DELETE_CAMPAIGN,
  POST_CAMPAIGN,
  SET_CAMPAIGN,
  SUBMIT_COMMENT
} from '../types';

const initialState = {
  posts: [],
  post: {},
  campaigns: [],
  campaign: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case SET_POST:
      return {
        ...state,
        post: action.payload
      };
    case LIKE_POST:
    case UNLIKE_POST:
      let index = state.posts.findIndex(
        (post) => post.postId === action.payload.postId
      );
      state.posts[index] = action.payload;
      if (state.post.postId === action.payload.postId) {
        state.post = action.payload;
      }
      return {
        ...state
      };
    case DELETE_POST:
      index = state.posts.findIndex(
        (post) => post.postId === action.payload
      );
      state.posts.splice(index, 1);
      return {
        ...state
      };
    case POST_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
      case SET_CAMPAIGNS:
      return {
        ...state,
        campaigns: action.payload,
        loading: false
      };
    case SET_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload
      };
    case LIKE_CAMPAIGN:
    case UNLIKE_CAMPAIGN:
      let Index = state.campaigns.findIndex(
        (campaign) => campaign.campaignId === action.payload.campaignId
      );
      state.campaigns[Index] = action.payload;
      if (state.campaign.campaignId === action.payload.campaignId) {
        state.campaign = action.payload;
      }
      return {
        ...state
      };
    case DELETE_CAMPAIGN:
      Index = state.campaigns.findIndex(
        (campaign) => campaign.campaignId === action.payload
      );
      state.campaigns.splice(index, 1);
      return {
        ...state
      };
    case POST_CAMPAIGN:
      return {
        ...state,
        campaigns: [action.payload, ...state.campaigns]
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: [action.payload, ...state.post.comments]
        },
        campaign: {
          ...state.campaign,
          comments: [action.payload, ...state.campaign.comments]
        }
      };
    default:
      return state;
  }
}
