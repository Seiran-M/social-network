import {connect, ConnectedProps} from 'react-redux'import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from '../../redux/users-reducer'import {AppStateType} from '../../redux/redux-store'import React from 'react'import {Users} from './Users'import {Preloader} from '../Preloader/Preloader'import {withAuthRedirect} from '../../hoc/withAuthRedirect'import {compose} from 'redux'class UsersContainer extends React.Component<TProps> {   componentDidMount() {      this.props.getUsers(this.props.currentPage, this.props.pageSize)   }   onPageChanged = (pageNumber: number) => {      this.props.getUsers(pageNumber, this.props.pageSize)   }   render() {      return (         <>            {this.props.isFetching ? <Preloader/> : null}            <Users               totalUsersCount={this.props.totalUsersCount}               pageSize={this.props.pageSize}               currentPage={this.props.currentPage}               onPageChanged={this.onPageChanged}               users={this.props.users}               follow={this.props.follow}               unfollow={this.props.unfollow}               followingInProgress={this.props.followingInProgress}            />         </>      )   }}export const mapStateToProps = (state: AppStateType) => ({   users: state.usersPage.users,   pageSize: state.usersPage.pageSize,   totalUsersCount: state.usersPage.totalUsersCount,   currentPage: state.usersPage.currentPage,   isFetching: state.usersPage.isFetching,   followingInProgress: state.usersPage.followingInProgress})const connector = connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})type TProps = ConnectedProps<typeof connector>export default compose<React.ComponentType>(   withAuthRedirect,   connector,)(UsersContainer)