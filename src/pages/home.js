import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Post from '../components/post/Post';
import Campaign from '../components/campaign/Campaign';
import Profile from '../components/profile/Profile';
import PostSkeleton from '../util/PostSkeleton';
import CampaignSkeleton from '../util/CampaignSkeleton';

import { connect } from 'react-redux';
import { getPosts } from '../redux/actions/dataActions';
import {getCampaigns} from '../redux/actions/dataActions';

class home extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getCampaigns();
  }
  render() {
    const { posts, campaigns, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
      posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      <PostSkeleton />
    );
    let recentCampaignsMarkup = !loading ? (
      campaigns.map((campaign) => <Campaign key={campaign.campaignId} campaign={campaign} />)
    ) : (
      <CampaignSkeleton />
    );
    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
        {recentCampaignsMarkup},
          {recentPostsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  getCampaigns: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getPosts, getCampaigns}
)(home);
