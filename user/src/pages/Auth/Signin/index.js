import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import clsx from 'clsx';
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import {UncontrolledAlert} from 'reactstrap';
import * as actions from '../../../redux/actions/UserActions';
import Logo from '../../../core/assets/images/logo.svg';

export default function SigninPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email or Phone is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Password is required'),
  })
  
  const initialValues = {
    username: '',
    password: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true);
      console.log(values);
      actions.login(values.username, values.password)
      .then(({data: {data}}) => {
        setLoading(false);
        dispatch(actions.fulfillUser(data.user));
        dispatch(actions.fulfillToken(data.token));
      })
      .catch(() => {
        setLoading(false)
        setSubmitting(false)
        setStatus('The login detail is incorrect')
      });
    },
  });

  return (  
    <div className="d-flex flex-row align-items-center min-vh-100">
      <div className="container">
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <div style={{width:'100%'}}>
            <div className="col-md-10 col-lg-7 py-5 px-3 mx-auto">
              <div className="d-flex justify-content-center align-items-center mb-5">
                <Link to='/' className='w-50'>
                  <img alt='Logo' src={Logo} />
                </Link>
              </div>
              <div className="text-black">
                <form onSubmit={formik.handleSubmit} noValidate>
                  <span className="text-center">
                    <h2 className="mb-4 font-weight-bold">
                      Login to your account
                    </h2>
                    <p className="font-size-lg mb-4 text-black-50">
                      Fill in the fields below to login to your account.
                    </p>
                  </span>
                  {formik.status && (
                  <UncontrolledAlert color="danger">
                    {formik.status}
                  </UncontrolledAlert>)}
                  <div className="form-group">
                    <label className="font-weight-bold">Email or Phone</label>
                    <input placeholder='Email or Phone' type='text' {...formik.getFieldProps('username')}
                    className={clsx(
                      'form-control form-control-lg',
                      {'is-invalid': formik.touched.username && formik.errors.username}
                    )}
                    />
                    {formik.touched.username && formik.errors.username && (
                      <div className='invalid-feedback'>
                          <span role='alert'>{formik.errors.username}</span>
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <div className="d-flex justify-content-between">
                      <label className="font-weight-bold">
                        Password
                      </label>
                      <Link
                        to="/auth/forgot-password">
                        Forgot password?
                      </Link>
                    </div>
                    <input placeholder='Password' type='password' {...formik.getFieldProps('password')}
                    className={clsx(
                      'form-control form-control-lg',
                      {
                        'is-invalid': formik.touched.password && formik.errors.password,
                      }
                    )}/>
                    {formik.touched.password && formik.errors.password && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.password}</span>
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block text-uppercase font-weight-bold font-size-sm" disabled={formik.isSubmitting}>
                      {!loading && <span>Sign in</span>}
                      {loading && (
                        <span style={{display: 'block'}}>
                          Please wait...
                          <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                        </span>
                      )}
                  </button>
                  <div className="text-center pt-4 text-black-50">
                    Don't have an account?{` `}
                    <Link to="/auth/signup">Create an Account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}