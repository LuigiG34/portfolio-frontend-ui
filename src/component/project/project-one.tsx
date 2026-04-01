import { Link } from "react-router-dom";
import ProjectTextLine from "./project-text-line";

// type
type IProject = {
  id: number;
  cls: string;
  cls_2: string;
  img: string;
};

const project_data: IProject[] = [
  {
    id: 1,
    cls: "tp-project-mr",
    cls_2: "height-1",
    img: '/assets/img/home-01/project/project-1-1.jpg',
  },
  {
    id: 2,
    cls: "text-end",
    cls_2: "height-2 d-inline-flex justify-content-end",
    img: '/assets/img/home-01/project/project-1-2.jpg',
  },
  {
    id: 3,
    cls: "tp-project-mr",
    cls_2: "height-3",
    img: '/assets/img/home-01/project/project-1-3.jpg',
  },
  {
    id: 4,
    cls: "",
    cls_2: "height-4",
    img: '/assets/img/home-01/project/project-1-4.jpg',
  },
  {
    id: 5,
    cls: "tp-project-ml",
    cls_2: "height-5",
    img: '/assets/img/home-01/project/project-1-5.jpg',
  },
  {
    id: 6,
    cls: "",
    cls_2: "height-6",
    img: '/assets/img/home-01/project/project-1-6.jpg',
  },
];

function ProjectItem({ item }: { item: IProject }) {
  return (
    <div className={`tp-project-item ${item.cls} mb-200`}>
      <div
        className={`tp-project-img ${item.cls_2} fix not-hide-cursor`}
        data-cursor="View<br>Demo"
      >
        <Link className="cursor-hide" to="/portfolio-details-3">
          <img data-speed=".8" src={item.img} alt="project-img" />
        </Link>
      </div>
    </div>
  );
}

// prop type
type IProps = {
  style_2?: boolean;
};
const ProjectOne = ({ style_2 = false }: IProps) => {
  return (
    <>
      <div className={`${style_2 ? "tp-project-area-2" : "tp-project-area"} fix`}>
        {!style_2 && (
          <div className="container-fluid p-0">
            <div className="row g-0">
              <div className="col-xl-12">
                <ProjectTextLine />
              </div>
            </div>
          </div>
        )}
        <div className="tp-project-gallery-wrapper">
          <div className="container container-1630">
            <div className="tp-project-gallery-top pb-50">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-left-wrap">
                    {project_data.slice(0, 3).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-project-right-wrap">
                    {project_data.slice(3, 6).map((item) => (
                      <ProjectItem key={item.id} item={item} />
                    ))}

                    <div className="tp-project-btn tp-btn-trigger">
                      <div className="tp-btn-bounce">
                        <Link
                          className="tp-btn-border"
                          to="/portfolio-grid-col-3"
                        >
                          <span className="tp-btn-border-wrap">
                            <span className="text-1">View all projects</span>
                            <span className="text-2">View all projects</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!style_2 && (
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-xl-12">
                  <div className="tp-project-full-img-wrap p-relative fix">
                    <div
                      className="tp-project-full-img"
                      data-speed="auto"
                      style={{
                        backgroundImage:
                          "url(/assets/img/inner-service/hero/hero-1-2.jpg)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectOne;
