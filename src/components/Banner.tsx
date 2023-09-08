import { Carousel } from 'react-responsive-carousel';
import sliderImg_1 from "../images/slider/sliderImg_1.jpg"
import sliderImg_2 from "../images/slider/sliderImg_2.jpg"
import sliderImg_3 from "../images/slider/sliderImg_3.jpg"
import sliderImg_4 from "../images/slider/sliderImg_4.jpg"
import sliderImg_5 from "../images/slider/sliderImg_5.jpg"
import sliderImg_6 from "../images/slider/sliderImg_6.jpg"
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='relative'>
            <Carousel 
            autoPlay 
            infiniteLoop 
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={2000}
            >
                <div>
                    <Image priority src={sliderImg_1} alt='img1' />
                </div>
                <div>
                    <Image src={sliderImg_2} alt='img2' />
                </div>
                <div>
                    <Image src={sliderImg_3} alt='img3' />
                </div>
                <div>
                    <Image src={sliderImg_4} alt='img4' />
                </div>
                <div>
                    <Image src={sliderImg_5} alt='img5' />
                </div>
                <div>
                    <Image src={sliderImg_6} alt='img6' />
                </div>
            </Carousel>
            <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent
            bottom-0 z-20 absolute'></div>
        </div>
    )
}

export default Banner