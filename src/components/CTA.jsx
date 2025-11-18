import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

const CTA = () => {
  const { t } = useLanguage();

  return (
    <section className='cta'>
      <p className='cta-text'>
        {t('cta.text1')} <br className='sm:block hidden' />
        {t('cta.text2')}
      </p>
      <Link to='/contact' className='btn'>
        {t('cta.button')}
      </Link>
    </section>
  );
};

export default CTA;
