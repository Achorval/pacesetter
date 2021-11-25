import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import clsx from 'clsx';
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import {UncontrolledAlert} from 'reactstrap';
import * as actions from '../../../redux/actions/UserActions';
import Logo from '../../../core/assets/images/logo.svg';

export default function SignupPage(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    acceptTerms: false,
  };
  
  const registerSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(100, 'Maximum 100 symbols')
      .required('First name is required'),
    lastname: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(100, 'Maximum 100 symbols')
      .required('Last name is required'),
    email: Yup.string()
      .email('Wrong email format')
      .min(3, 'Minimum 3 symbols')
      .max(100, 'Maximum 100 symbols')
      .required('Email is required'),
    phone: Yup.string()
      .max(20, 'Maximum 20 symbols')
      .required('Phone Number is required'),
    password: Yup.string()
      .min(3, 'Minimum 3 symbols')
      .max(70, 'Maximum 70 symbols')
      .required('Password is required'),
    acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true);
      actions.register(values.firstname, values.lastname, values.email, values.password, values.phone, values.referral)
      .then(({data: {data}}) => {
        setLoading(false);
        dispatch(actions.fulfillUser(data.user));
        dispatch(actions.fulfillToken(data.token));
      })
      .catch((error) => {
        setLoading(false);
        setSubmitting(false);
        setStatus(error.response.data.message);
      })
    }
  });

  return (  
    <div className="d-flex flex-row align-items-center min-vh-100">
      <div className="container">
        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
          <div style={{width:'100%'}}>
            <div className="col-md-10 col-lg-8 py-5 px-3 mx-auto">
              <div className="d-flex justify-content-center align-items-center mb-5">
                <Link to='/' className='w-50'>
                  <img alt='Logo' src={Logo} />
                </Link>
              </div>
              <div className="text-black">
                <form onSubmit={formik.handleSubmit} noValidate>
                  <span className="text-center">
                    <h2 className="mb-4 font-weight-bold">
                      Create your account and start trading
                    </h2>
                    <p className="font-size-lg mb-4 text-black-50">
                      Fill in the fields below to create an account.
                    </p>
                  </span>
                  {formik.status && (<UncontrolledAlert color="danger">{formik.status}</UncontrolledAlert>)}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="font-weight-bold">First Name</label>
                        <input placeholder='First Name' type='text' {...formik.getFieldProps('firstname')}
                        className={clsx(
                          'form-control form-control-lg',
                          {'is-invalid': formik.touched.firstname && formik.errors.firstname}
                        )}
                        />
                        {formik.touched.firstname && formik.errors.firstname && (
                          <div className='invalid-feedback'>
                            <span role='alert'>{formik.errors.firstname}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="font-weight-bold">Last Name</label>
                        <input placeholder='Last Name' type='text' {...formik.getFieldProps('lastname')}
                        className={clsx(
                          'form-control form-control-lg',
                          {'is-invalid': formik.touched.lastname && formik.errors.lastname}
                        )}
                        />
                        {formik.touched.lastname && formik.errors.lastname && (
                          <div className='invalid-feedback'>
                              <span role='alert'>{formik.errors.lastname}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
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
                  <div className="form-group">
                    <label className="font-weight-bold">Phone</label>
                    <input placeholder='Phone' type='text' {...formik.getFieldProps('phone')}
                    className={clsx(
                      'form-control form-control-lg',
                      {'is-invalid': formik.touched.phone && formik.errors.phone}
                    )}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className='invalid-feedback'>
                          <span role='alert'>{formik.errors.phone}</span>
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <label className="font-weight-bold">Password</label>
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
                  <div className="form-group mb-3">
                    <div className="custom-control custom-control-alternative d-flex align-items-center custom-checkbox">
                      <input className="custom-control-input" id="termsConditions" type="checkbox" {...formik.getFieldProps('acceptTerms')} />
                      <label className="custom-control-label" htmlFor="termsConditions"><span>I Agree to the terms and conditions.</span>
                      </label>
                      {formik.touched.acceptTerms && formik.errors.acceptTerms && (
                        <div className='fv-plugins-message-container'>
                          <div className='fv-help-block'>
                            <span role='alert'>{formik.errors.acceptTerms}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    color="primary"
                    className="btn btn-lg btn-block text-uppercase btn-primary font-weight-bold font-size-sm m1y-3" disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms}>
                    {!loading && <span>Create account</span>}
                    {loading && (
                    <span style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>)}
                  </button>
                  <div className="text-center pt-4 text-black-50">
                    Already have an account?{` `}<Link to="/auth/signin">Login</Link>
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