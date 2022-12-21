import React from "react";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import CourseVideo from "../../images/video.mp4";

export const PlayCourseVideo = () => {
  return (
    <div>
      <div className="row">
        <div className="order-1 order-md-0 col-md-8">
          <div className="video bg-2">
            <video
              controls={true}
              src={CourseVideo}
              className="img-fluid h-[400px]"
            ></video>
          </div>
          <div className="title d-flex justify-content-between align-items-center">
            <h4 className="fw-600 text-dark">Market intelligence</h4>
            <div className="text-muted">
              <i className="fa fa-eye text-dark"></i> 2.3K
            </div>
          </div>
          <div className="d-flex my-3">
            <img
              src={AvatarImg}
              className="h-[40px] w-[40px]"
              alt=""
            />
            <div className="ms-2">
              <h6 className="mb-0 text-dark">Kitani Studio</h6>
              <p className="mb-0">BizTweak</p>
            </div>
          </div>
          <h5 className="text-dark fw-600">About Course</h5>
          <p>
            The Lorem ipum filling text is used by graphic designers,
            programmers and printers with the aim of occupying the spaces of a
            website, an advertising product or.he Lorem ipum filling text is
            used by graphic designers, programmers and printers with the aim of
            occupying the spaces of a website, an advertising product or. he
            Lorem ipum filling text is used by graphic designers, programmers
            and printers with the aim of occupying the spaces of a website, an
            advertising product or .
          </p>
          <h5 className="text-dark fw-600">Related to this Course</h5>
          <div className="flex">
            <div className="mt-3">
              <small className="text-dark">Ex_Files_Figma_EssT.zip</small>
              <br></br>
              <small className="text-muted">(308.76MB)</small>
            </div>
            <button className=" ml-3 pt-0 btn bg-[#00c2cb] btn-sm text-[white]">Download</button>
          </div>
        </div>
        <div className="order-0 mb-3 mb-md-0 order-md-1 col-md-4 bg-light">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <div>
                    <h6 className="mb-0 fw-600">Accordion Item #1</h6>
                    <small style={{ fontSize: "11px" }} className="text-muted">
                      1/12 Videos = 28m
                    </small>
                  </div>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-main fw-600 list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div>
                    <h6 className="mb-0 fw-600">Accordion Item #2</h6>
                    <small style={{ fontSize: "11px" }} className="text-muted">
                      1/12 Videos = 28m
                    </small>
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-main fw-600 list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div>
                    <h6 className="mb-0 fw-600">Accordion Item #3</h6>
                    <small style={{ fontSize: "11px" }} className="text-muted">
                      1/12 Videos = 28m
                    </small>
                  </div>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group">
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="text-main fw-600 list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="list-group-item-action d-flex justify-content-between py-2 px-3"
                    >
                      <div>
                        <p className="mb-0 small">Market intelligence</p>
                        <small>
                          <i className="fa fa-play-circle"></i> 10m
                        </small>
                      </div>
                      <div>
                        <small className="text-muted">Playing...</small>
                      </div>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};