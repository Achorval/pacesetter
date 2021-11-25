import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Redirect, Switch} from 'react-router-dom'
import * as actions from '../../../redux/actions/UserActions';

export default function Logout() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.logout())
    document.location.reload()
  }, [dispatch])

  return (
    <Switch>
      <Redirect to='/login' />
    </Switch>
  )
}
