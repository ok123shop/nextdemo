import Image from 'next/image';
import bordert2 from "../../public/border_t2.svg"

export default function Home() {
  return (
    <main>
        <div className='h-80 bg-red-500 flex flex-col items-center'>
          <p className='text-lg py-5 text-white sm:text-3xl mt-5'>在 GamsGo 上以更低价格共享高级订阅服务</p>
          <p className='text-sm text-inherit sm:text-xl'>连续 5 年提供高质量、价格合理的流媒体服务</p>
          <div className="flex gap-3 mt-5" >
            <img src='https://static.gamsgocdn.com/gg2/images/index/video.webp' className='w-8 h-8 sm:w-12 sm:h-12' />
            <img src='https://static.gamsgocdn.com/gg2/images/index/movie.webp' className='w-8 h-8 sm:w-12 sm:h-12'/>
            <img src='https://static.gamsgocdn.com/gg2/images/index/music.webp' className='w-8 h-8 sm:w-12 sm:h-12'/>
            <img src='https://static.gamsgocdn.com/gg2/images/index/study.webp' className='w-8 h-8 sm:w-12 sm:h-12'/>
            <img src='https://static.gamsgocdn.com/gg2/images/index/work.webp'  className='w-8 h-8 sm:w-12 sm:h-12'/>
          </div>
        </div>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 1920 30"  preserveAspectRatio="none">
          <g>
            <path
              d="M0,0C0,0,1920,0,1920,0C1920,0,1920,30,1920,30C1920,30,1496.5,-1.66533e-15,961.5,0C426.5,1.66533e-15,0,30,0,30C0,30,0,0,0,0Z"
              fillRule="evenodd"
              fill="#EF534F"
              fillOpacity="1"
            />
          </g>
        </svg>
        <div className='relative p-8' style={{ top: '-124px' }}>
          <div className="card bg-base-100 w-full shadow-xl sm:w-80">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>


          
        </div>
    </main>
  );
}

