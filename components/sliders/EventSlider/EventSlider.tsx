import { FC } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

//const [like, setLike] = useState(false);

interface IEventSlider {
  title?: string;
  subtitle?: string;
  events: Publication[]|undefined;
  like?: boolean;
}

export const EventSlider: FC<IEventSlider> = ({ title, subtitle, events }) => {
  return (
    <div className="pt-10 pb-10">
      <div className="pb-6">
        <h2 className="app-title-2 pb-1">{title}</h2>
        <p className="app-subtitle-2 text-app-grayDark text-sm">{subtitle}</p>
      </div>
      <div className="relative">
        <Swiper
          style={{ position: 'unset' }}
          slidesPerView={'auto'}
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            330: {
              slidesPerView: 1.2,
              spaceBetween: 40,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
        >
          {events?.map((e) => (
            <SwiperSlide
              key={e.id}
              className={
                'bg-white max-w-[300px] min-w-[300px] h-[450px] ml-1 rounded-3xl shadow-app-card relative'
              }
            >
                <Link href={`/events/${e.id.toString()}`}>
                  
              <img
                className="rounded-t-3xl h-[201px] w-full"
                src={e.images[0]? e.images[0].image_url : 'data:image/jpeg;base64,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'}
                alt={e.title}
                />
                  </Link>
              <div>
                <h3 className="app-title-3 text-center p-4 ">{e.title}</h3>

                <span className="absolute top-[180px] right-3">
                  <LikeButton />
                </span>
                <Link href={`/events/${e.id.toString()}`}>

                
                <p className="text-xs text-app-grayDark text-justify pl-9">
                  {e.description}
                </p>
                <a
                  href={e.reference_link}
                  className="text-app-blue app-texto-2 pt-1 pb-1 pl-9 "
                  >
                  {e.reference_link}
                </a>

                <div className="flex p-3 pb-9 justify-center">
                  <User_icon />
                  <p className="app-texto-2 pl-2 pr-2">{e.votes_count} votes</p>
                </div>
                </Link>
              </div>
              
            </SwiperSlide>
          ))}
          <div className="hidden sm:flex items-center absolute top-0 bottom-0 -right-20 left-auto cursor-pointer">
            <SlideNextButton />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

// some-inner-component.jsx
import { useSwiper } from 'swiper/react';
import LikeButton from '../../assets/svg/LikeButton';
import User_icon from '../../assets/svg/User_icon';
import Link from 'next/link';
import { Publication } from '../../../lib/interfaces/publications.interface';

interface ISlideNextButton {
  className?: string;
}
const SlideNextButton = ({ className }: ISlideNextButton) => {
  const swiper = useSwiper();

  return (
    <button className={className} onClick={() => swiper.slideNext()}>
      <BsArrowRightCircle
        className="text-app-blue bg-white rounded-full"
        size={50}
      />
    </button>
  );
};
