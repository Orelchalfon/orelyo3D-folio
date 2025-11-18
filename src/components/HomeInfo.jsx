import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const { t } = useLanguage();

  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        {t('home.stage1.hi')}{" "}
        <span className='font-semibold mx-2 text-white'>{t('home.stage1.name')}</span>
        👋
        <br />
        {t('home.stage1.title')}
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          {t('home.stage2.text')}
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          {t('home.stage2.button')}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          {t('home.stage3.text')}
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          {t('home.stage3.button')}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        {t('home.stage4.text')}
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        {t('home.stage4.button')}
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
