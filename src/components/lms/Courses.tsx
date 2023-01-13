import React, { useEffect, useState } from "react";
import { LMSMenu } from "./LMSMenu";
import CourseImg from "../../images/course.png";
import AvatarImg from "../../images/avatar.png";
import { useNavigate } from "react-router-dom";
import "./Course.css";
import { getLocalStorageValue, LOCALSTORAGE_KEYS } from "../../config";
import { getAllcourses } from "../../services/cmp/course.service";
import { ICourse } from "../../model/course.model";

export const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (courses.length === 0) {
      getCourses();
      setIsLoading(false);
    }
  });

  const onStartCourse = () => {
    navigate("/lms/course");
  };

  const getCourses = async () => {
    const storageUser = getLocalStorageValue(LOCALSTORAGE_KEYS.user);
    if (storageUser) {
      const coursesResult = await getAllcourses();
      if (coursesResult.data) {
        const myCourses = coursesResult.data.package.data;
        setCourses(myCourses);
        console.log(myCourses);
      }
    }
  };

  const onClickInstructor = () => {
    navigate("/lms/instructor-profile");
  };

  return (
    <div className="w-full">
      <div className="row">
        <div className="col-md-2 min-h-[100vh]">
          <LMSMenu />
        </div>
        <div className="col-md-10 text-left bg-light border-start">
          <div className="row mt-3">
            <div className="card bg-transparent border-0 mb-3">
              <div className="card-header bg-transparent border-0">
                <h5 className="mb-0 text-2xl font-medium text-dark">Courses</h5>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center text-4xl h-[100vh]">Loading...</div>
            ) : (
              <>
                {courses.map((course: ICourse, index: number) => {
                  return (
                    <div className="col-lg-3 col-md-4 mb-3" key={index}>
                      <div className="card">
                        <div className="card-body text-dark">
                          <img
                            src={CourseImg}
                            className="img-fluid card-img-top"
                            alt=""
                          />
                          <h5 className="my-2">{course.title}</h5>
                          <div className="d-flex justify-content-between align-items-center cursor-pointer">
                            <div
                              className="w-100 me-3 d-flex align-items-center"
                              onClick={onClickInstructor}
                            >
                              <img
                                src={AvatarImg}
                                className="rounded-circle me-2 w-[30px] h-[30px]"
                                alt=""
                              />
                              <div>
                                <div>BizTweak</div>
                                <div className="small">40 Lessons</div>
                              </div>
                            </div>
                            <div className="w-100 text-end">
                              <button
                                className="btn btn-main hover:bg-[#16f0fb] bg-[#00c2cb] mt-2 text-[white]"
                                onClick={onStartCourse}
                              >
                                Start Course
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            <div className="line-pagination">
              <div className="d-flex justify-content-between">
                <button className="arrow-btn">
                  <i className="fa fa-arrow-left"></i>
                </button>
                <button className="arrow-btn">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
