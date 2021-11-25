import React, {useRef, useEffect, useState} from 'react';
import {shallowEqual, useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../redux/actions/AdminActions';
import {Loader} from '../../../core/layouts/components';

const AuthInit = (props) => {
  const didRequest = useRef(false)
  const dispatch = useDispatch()
  const [showSplashScreen, setShowSplashScreen] = useState(true)
  const token = useSelector(({AdminReducer}) => AdminReducer.token != null, shallowEqual);
  
  // We should request admin by authToken before rendering the application
  useEffect(() => {
    const requestAdmin = async () => {
      try {
        if (!didRequest.current) {
          const {data: admin} = await actions.getAdminByToken();
          dispatch(actions.fulfillAdmin(admin.data));
        }
      } catch (error) {
        if (!didRequest.current) {
          dispatch(actions.logout());
        }
      } finally {
        setShowSplashScreen(false);
      }

      return () => (didRequest.current = true);
    }
    
    if (token) {
      requestAdmin()
    } else {
      dispatch(actions.logout());
      setShowSplashScreen(false);
    }
  }, [token])

  return showSplashScreen ? <Loader /> : <>{props.children}</>
}

export default AuthInit;
