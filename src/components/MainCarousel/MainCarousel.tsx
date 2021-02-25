import { Carousel } from 'antd';
import './MainCarousel.less';

const MainCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src="/images/carousel-demo-images/Image01.png" />
      </div>
    </Carousel>
  );
};

export default MainCarousel;
