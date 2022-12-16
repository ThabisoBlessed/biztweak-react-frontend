import React from "react";

export const AddCompanyModal = (props: any) => {
  return (
    <div>
      <div
        className="modal fade"
        id="addCompany"
        tabIndex={-1}
        aria-labelledby="addCompanyLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img
                  src="https://biztweak.org.za/public/new/images/add-company.png"
                  alt=""
                  className="col-md-6 img-fluid"
                />
              </div>
              <h5>Add new company</h5>
              <input type="hidden" />{" "}
              <div className="form-group my-3">
                <div className="col-auto">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="industry"
                      name="industry"
                    >
                      {props.industries.map((industry: any, index: number) => {
                        return (
                          <option
                            key={index}
                            id={`${index}`}
                            onClick={(e) => props.handleIndustryItemClick(e)}
                            value={industry.value}
                          >
                            {industry.name}
                          </option>
                        );
                      })}
                    </select>
                    <label htmlFor="industry" className="form-label">
                      Business industry
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group my-3">
                <div className="col-auto">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="biz_phase"
                      name="biz_phase"
                    >
                      {props.bizPhases.map((phase: any, index: number) => {
                        return (
                          <option
                            key={index}
                            id={`${index}`}
                            onClick={(e) => props.handleBizPhaseItemClick(e)}
                            value={phase.value}
                          >
                            {phase.name}
                          </option>
                        );
                      })}
                    </select>
                    <label htmlFor="biz_phase" className="form-label">
                      Business phase
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  className="btn bg-[#00c2cb] p-3 w-[100px]btn-info text-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={(e) => props.onSave(e)}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};