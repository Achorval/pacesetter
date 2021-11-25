import React, {useState,useEffect} from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import {useFormik} from 'formik';
import { toast, Zoom } from 'react-toastify';
import {useHistory, Link} from 'react-router-dom';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import * as actions from '../../../../redux/actions/SystemActions';
import { Col, Row } from 'reactstrap';

export default function CreateCurrency() {
  const [loading, setLoading] = useState(false);
  const location = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCountries());
  }, [dispatch]);

  const countries = useSelector(({
    SystemReducer
  }) => SystemReducer.countries, 
  shallowEqual);

  const initialValues = {
    name: '',
    iso: '',
    image: '',
    country: '',
    type: '',
    status: ''
  };

  const currencySchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    iso: Yup.string().required('Iso is required'),
    image: Yup.string().required('Image is required'),
    type: Yup.string().required('Type is required'),
    status: Yup.string().required('Status is required')
  });

  const formik = useFormik({
    initialValues,
    validationSchema: currencySchema,
    onSubmit: (values) => {
      setLoading(true);
      actions.createCurrency({
        name: values.name,
        iso: values.iso,
        image: values.image,
        country: values.country || null,
        type: values.type,
        status: values.status
      })
      .then(({data: response}) => {
        if (response.status == 'success') {
          setLoading(false);
          location.push('/settings/currency');
          toast.success(response.message, { 
            containerId: 'B', transition: Zoom 
          });
        }
      })
      .catch(() => {
        setLoading(false);
      });
    },
  });
  
  return (<>
    <Row>
      <Col md={{ size: 8, offset: 2 }}>
        <div className="card card-box mb-5">
          <div className="d-flex align-items-center justify-content-between card-header-alt p-4 card-header">
            <h1 className="font-weight-bold mb-0 text-dark">
              Create Currency
            </h1>
            <Link to="/system/currency" className="font-weight-bold text-black">
              Back
            </Link>
          </div>
          <div className="card-body p-4">
            <form onSubmit={formik.handleSubmit} noValidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input 
                      type='text' 
                      placeholder='Name' 
                      {...formik.getFieldProps('name')}
                      className={clsx(
                        'form-control',
                        {'is-invalid': formik.touched.name && formik.errors.name}
                      )}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.name}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Iso</label>
                    <input 
                      type='text' 
                      placeholder='Iso' 
                      {...formik.getFieldProps('iso')}
                      className={clsx(
                        'form-control',
                        {'is-invalid': formik.touched.iso && formik.errors.iso}
                      )}
                    />
                    {formik.touched.iso && formik.errors.iso && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.iso}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Image</label>
                    <input 
                      type='text' 
                      placeholder='Image' 
                      {...formik.getFieldProps('image')}
                      className={clsx(
                        'form-control',
                        {'is-invalid': formik.touched.image && formik.errors.image}
                      )}
                    />
                    {formik.touched.image && formik.errors.image && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.image}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div  className="col-md-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      {...formik.getFieldProps('country')}
                      className={clsx(
                        'form-control',
                        {'is-invalid': formik.touched.country && formik.errors.country}
                      )}
                    >
                      <option value=''>Select a Country...</option>
                      {countries.map(n =>
                        <option key={n.id} value={n.id}>{n.name}</option>
                      )}
                    </select>
                    {formik.touched.country && formik.errors.country && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.country}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Type</label>
                    <select
                      {...formik.getFieldProps('type')}
                      className={clsx(
                        'form-control',
                        {'is-invalid': formik.touched.type && formik.errors.type}
                      )}
                    >
                      <option value=''>Select Type...</option>
                      <option value="fiat">Fiat</option>
                      <option value="digital">Digital</option>
                    </select>
                    {formik.touched.type && formik.errors.type && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.type}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      {...formik.getFieldProps('status')}
                      className={clsx(
                        'form-control',
                        {'is-invalid': formik.touched.status && formik.errors.status}
                      )}
                    >
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                    {formik.touched.status && formik.errors.status && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="divider my-4" />
              <div className="d-flex align-items-center justify-content-end">
                <button className="font-weight-bold btn btn-warning btn-lg" disabled={formik.isSubmitting}>
                  {!loading && <span>Save Currency</span>}
                  {loading && (
                  <span style={{display: 'block'}}>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Col>
    </Row>
  </>)
}


