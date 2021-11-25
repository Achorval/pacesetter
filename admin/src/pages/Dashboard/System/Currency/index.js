import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { toast, Zoom } from 'react-toastify';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import * as actions from '../../../../redux/actions/SystemActions';
import { Avatar } from '../../../../core/layouts/components';
import avatar3 from '../../../../core/assets/images/avatar3.jpeg';
import {Card,CardBody,CardHeader,Table,Pagination,PaginationItem,PaginationLink} from 'reactstrap';

export default function CurrencyPage() {
  const [modalConfirmDelete, setConfirmDelete] = useState(false);
  const toggleConfirmDelete = () => setConfirmDelete(!modalConfirmDelete);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [defaultPerPage, setDefaultPerPage] = useState(10);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchCurrencies());
  }, [dispatch]);

  const currencies = useSelector(({
    SystemReducer
  }) => SystemReducer.currencies, 
  shallowEqual);

  const handleDelete = (id) => {
    toggleConfirmDelete();
    if (window.confirm("Are you sure you want to delete this?")) {
      actions.deleteCurrency(id).then(({data: response}) => {
        if (response.status == 'success') {
          dispatch(actions.fetchCurrencies());
          toast.success(response.message, { 
            containerId: 'B', transition: Zoom 
          });
        }
      });
    }
  };

  let sn = 0;

  return (<>
    <div className="card card-box">
      <CardHeader>
        <div className="d-flex align-items-center justify-content-between card-header-alt">
          <h1 className="font-weight-bold text-dark mb-0">
            Currency
          </h1>
          <Link to="/system/currency/create" className="btn btn-primary btn-sm">
            Add Currency
          </Link>
        </div>
      </CardHeader>
      <div className="divider my-3" />
      <CardBody>
      {currencies.length !== 0 ? <>
        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>ISO</th>
                <th>Symbol</th>
                <th>Country</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {currencies.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(n => {
              return (
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>)})} 
            </tbody>
          </Table>
        </div>
        </> : 
        <div className="text-center p-4 p-lg-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130">
              <Avatar image={avatar3} size="lg" />
            </div>
          </div>
          <h4 className="font-weight-bold text-warning line-height-sm px-4 mt-5">
            You have not save any currency yet!
          </h4>
        </div>}
      </CardBody>
    </div>
  </>);
}
