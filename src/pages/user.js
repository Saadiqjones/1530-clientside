import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Post from '../components/post/Post';
import Campaign from '../components/campaign/Campaign';
import StaticProfile from '../components/profile/StaticProfile';
import Grid from '@material-ui/core/Grid';

import PostSkeleton from '../util/PostSkeleton';
import CampaignSkeleton from '../util/CampaignSkeleton';
import ProfileSkeleton from '../util/ProfileSkeleton';

import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

class user extends Component {
  state = {
    profile: null,
    postIdParam: null, 
    campaignIdParam: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const postId = this.props.match.params.postId;
    const campaignId = this.props.match.params.campaignId;

    if (postId && campaignId) this.setState({ postIdParam: postId, campaignIdParam: campaignId });

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { posts, campaigns, loading } = this.props.data;
    const { postIdParam, campaignIdParam } = this.state;

    const postsMarkup = loading ? (
      <PostSkeleton />
    ) : posts === null ? (
      <p>No posts from this user</p>
    ) : !postIdParam ? (
      posts.map((post) => <Post key={post.postId} post={post} />)
    ) : (
      posts.map((post) => {
        if (post.postId !== postIdParam)
          return <Post key={post.postId} post={post} />;
        else return <Post key={post.postId} post={post} openDialog />;
      })
    );
    const campaignsMarkup = loading ? (
      <CampaignSkeleton />
    ) : campaigns === null ? (
      <p>No campaigns from this user</p>
    ) : !campaignIdParam ? (
      campaigns.map((campaign) => <Campaign key={campaign.campaignId} campaign={campaign} />)
    ) : (
      campaigns.map((campaign) => {
        if (campaign.campaignId !== campaignIdParam)
          return <Campaign key={campaign.campaignId} campaign={campaign} />;
        else return <Campaign key={campaign.campaignId} campaign={campaign} openDialog />;
      })
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {campaignsMarkup},
          {postsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserData }
)(user);
