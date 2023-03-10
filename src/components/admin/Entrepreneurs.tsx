import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICompany } from "../../model/company.model";
import { IUser } from "../../model/user.model";
import "./Entrepreneurs.css";

export const Entrepreneurs = (props: any) => {
  const [companies, setCompanies] = useState(props.companies);
  const navigate = useNavigate();

  const onViewReport = (business: ICompany) => {
    const isNewCompany = false;
    navigate("/business/manage-business/report-summary", { state: { business, isNewCompany }});
  }

  return (
    <div className="card shadow">
      <div className="card-header bg-white border-0 d-flex justify-content-between">
        <h5 className="mb-0 text-2xl font-medium text-dark">Companies</h5>
        <form action="#">
          <div className="row">
            <div className="col-4">
              <select name="" className="form-select">
                <option value="">Industry</option>
              </select>
            </div>
            <div className="col-4">
              <select name="" className="form-select">
                <option value="">Stage</option>
              </select>
            </div>
            <div className="col-4">
              <select name="" className="form-select">
                <option value="">Employee</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="card-body border-0 overflow-y-scroll h-[400px]">
        <table className="table table-borderless table-striped">
          <thead>
            <tr className="text-sm text-muted">
              <th>Biz Name</th>
              <th>Location</th>
              <th>Turnover</th>
              <th>Score</th>
              <th>Course Progress</th>
              <th>Course Point</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company: ICompany, index: number) => {
              return (
                <tr key={index}>
                  <td>
                    <span className="badge bg-white text-dark">
                      Guide App
                    </span>
                  </td>
                  <td>{company.location}</td>
                  <td>{company.annualTurnover}</td>
                  <td>{company.score ? company.score : 0}%</td>
                  <td>0%</td>
                  <td>0%</td>
                  <td>
                    <button className="text-[#00c2cb]" onClick={() => onViewReport(company)}>
                      View Report
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
