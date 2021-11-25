import React, {useState} from 'react';
import * as Yup from 'yup';
import clsx from 'clsx';
import {useFormik} from 'formik';
import { toast, Zoom } from 'react-toastify';
import {useHistory, Link} from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import * as actions from '../../../../redux/actions/SystemActions';

export default function createCountry() {
  const [loading, setLoading] = useState(false);
  const location = useHistory();

  const initialValues = {
    name: '',
    code: '',
    iso: '',
    tariff: '',
    image: '',
    status: ''
  };

  const countrySchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    code: Yup.string().required('Code is required'),
    iso: Yup.string().required('Iso is required'),
    tariff: Yup.string().required('Tariff is required'),
    image: Yup.string().required('Image is required'),
    status: Yup.string().required('Status is required')
  });

  const formik = useFormik({
    initialValues,
    validationSchema: countrySchema,
    onSubmit: (values) => {
      setLoading(true);
      actions.createCountry({
        name: values.name,
        code: values.code,
        iso: values.iso,
        tariff: values.tariff,
        image: values.image,
        status: values.status
      })
      .then(({data: response}) => {
        if (response.status == 'success') {
          setLoading(false);
          location.push('/settings/country');
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
              Create Country
            </h1>
            <Link to="/system/country" className="font-weight-bold text-black">
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
                <div  className="col-md-6">
                  <div className="form-group">
                    <label>Code</label>
                    <input
                        type='text'
                        placeholder='Code'
                        {...formik.getFieldProps('code')}
                        className={clsx(
                          'form-control',
                          {'is-invalid': formik.touched.code && formik.errors.code}
                        )}
                    />
                    {formik.touched.code && formik.errors.code && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.code}</span>
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
                <div  className="col-md-6">
                  <div className="form-group">
                    <label>Tariff</label>
                    <input
                        type='text'
                        placeholder='Tariff'
                        {...formik.getFieldProps('tariff')}
                        className={clsx(
                          'form-control',
                          {'is-invalid': formik.touched.tariff && formik.errors.tariff}
                        )}
                    />
                    {formik.touched.tariff && formik.errors.tariff && (
                      <div className='invalid-feedback'>
                        <span role='alert'>{formik.errors.tariff}</span>
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
                  {!loading && <span>Save Country</span>}
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


