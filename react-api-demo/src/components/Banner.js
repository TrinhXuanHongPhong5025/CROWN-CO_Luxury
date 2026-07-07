import Carousel from "react-bootstrap/Carousel";
import { BsArrowRight } from "react-icons/bs";

function Banner() {
  const slides = [
    {
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      title: "Chào buổi chiều",
      subtitle: "Không gian và Mạng công nghệ",
      action: "Tìm hiểu thêm"
    },
    {
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      title: "React Bootstrap",
      subtitle: "Demo API với React",
      action: "Bắt đầu ngay"
    },
    {
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      title: "Chào mừng",
      subtitle: "Phát triển Front End với React",
      action: "Khám phá"
    },
    {
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      title: "Công nghệ hiện đại",
      subtitle: "Sử dụng những công cụ tốt nhất",
      action: "Tìm hiểu"
    },
    {
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      title: "Đội ngũ chuyên nghiệp",
      subtitle: "Xây dựng ứng dụng tuyệt vời cùng nhau",
      action: "Liên hệ"
    },
    {
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
      title: "Học tập liên tục",
      subtitle: "Cập nhật kỹ năng mới mỗi ngày",
      action: "Bắt đầu"
    }
  ];

  return (
    <Carousel className="shadow">
      {slides.map((slide, index) => (
        <Carousel.Item interval={5000} key={index}>
          <div
            className="d-block w-100"
            style={{
              height: "400px",
              background: slide.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />

          <Carousel.Caption>
            <div className="bg-dark bg-opacity-50 p-4 rounded">
              <h2 className="fw-bold mb-2">{slide.title}</h2>
              <p className="lead">{slide.subtitle}</p>
              <button className="btn btn-light mt-2">
                {slide.action} <BsArrowRight className="ms-2" />
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;