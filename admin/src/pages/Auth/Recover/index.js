import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import clsx from 'clsx';
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import {UncontrolledAlert} from 'reactstrap';
// import {toAbsoluteUrl} from '../../core/utils';
import Logo from '../../../core/assets/images/logo.svg';
import * as actions from '../../../redux/actions/AdminActions';

export default function RecoverPage() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(50, 'Maximum 50 symbols')
      .required('Email is required')
  })
  
  const initialValues = {
    email: '',
  }

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true);
      actions.login(values.email)
        .then(({data: {data}}) => {
          setLoading(false);
          // dispatch(actions.fulfillUser(data.user));
          // dispatch(actions.fulfillToken(data.token));
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
            <div className="col-md-10 col-lg-8 py-5 px-3 mx-auto">
              <div className="d-flex justify-content-center align-items-center mb-4">
                <Link to='/' className='w-50'>
                  <img alt='Logo' src={Logo} />
                </Link>
              </div>
              <form onSubmit={formik.handleSubmit} noValidate>
                <div className="text-center mb-3">
                  <h2 className="mb-4 font-weight-bold">Forgot Password</h2>
                  <p className="font-size-lg text-black-50">
                    Fill in the fields below to recover your password.
                  </p>
                </div>
                {formik.status && (
                <UncontrolledAlert color="danger">
                  {formik.status}
                </UncontrolledAlert>)}
                <div className="form-group mb-4">
                  <label className="font-weight-bold">Email</label>
                  <input placeholder='Email' type='text' {...formik.getFieldProps('email')}
                  className={clsx(
                    'form-control form-control-lg',
                    {'is-invalid': formik.touched.email && formik.errors.email}
                  )}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className='invalid-feedback'>
                      <span role='alert'>{formik.errors.email}</span>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block text-uppercase font-weight-bold font-size-sm" disabled={formik.isSubmitting}>
                    {!loading && <span>Reset Password</span>}
                    {loading && (
                    <span style={{display: 'block'}}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>)}
                </button>
                <div className="text-center pt-4 text-black-50">
                  Remember your account? {` `} <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}