import {connect, ConnectedProps} from 'react-redux'import {follow, setCurrentPage, toggleFollowingProgress, unfollow} from '../../redux/users-reducer'import {AppStateType} from '../../redux/redux-store'import React from 'react'import {Users} from './Users'import {Preloader} from '../../common/Preloader/Preloader'import {compose} from 'redux'import {   getCurrentPage,   getFollowingInProgress,   getIsFetching,   getPageSize,   getTotalUsersCount,   getUsersSelector} from '../../redux/users-selectors'import {requestUsers} from '../../redux/users-reducer'class UsersContainer extends React.Component<TProps, AppStateType> {   componentDidMount() {      const {currentPage, pageSize} = this.props;      this.props.requestUsers(currentPage, pageSize)   }   onPageChanged = (pageNumber: number) => {      const {pageSize} = this.props;      this.props.requestUsers(pageNumber, pageSize)   }   render() {      return (         <>            {this.props.isFetching ? <Preloader/> : null}            <Users               totalUsersCount={this.props.totalUsersCount}               pageSize={this.props.pageSize}               currentPage={this.props.currentPage}               onPageChanged={this.onPageChanged}               users={this.props.users}               follow={this.props.follow}               unfollow={this.props.unfollow}               followingInProgress={this.props.followingInProgress}            />         </>      )   }}//// export const mapStateToProps = (state: AppStateType) => ({//    users: state.usersPage.users,//    pageSize: state.usersPage.pageSize,//    totalUsersCount: state.usersPage.totalUsersCount,//    currentPage: state.usersPage.currentPage,//    isFetching: state.usersPage.isFetching,//    followingInProgress: state.usersPage.followingInProgress// })export const mapStateToProps = (state: AppStateType) => ({   users: getUsersSelector(state),   pageSize: getPageSize(state),   totalUsersCount: getTotalUsersCount(state),   currentPage: getCurrentPage(state),   isFetching: getIsFetching(state),   followingInProgress: getFollowingInProgress(state)})const connector = connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})export default compose<React.ComponentType>(   // withAuthRedirect,   connector,)(UsersContainer)type TProps = ConnectedProps<typeof connector>