import { Link } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const { t } = useLanguage();

  const getProjectKey = (projectName) => {
    const keyMap = {
      'OC Dev Portfolio': 'ocDev',
      'Place Share': 'placeShare',
      'Zentry with Framer Motion': 'zentry',
      'CodeSandbox Clone': 'codesandbox'
    };
    return keyMap[projectName] || 'ocDev';
  };

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {t('projects.title')}{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          {t('projects.titleHighlight')}
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        {t('projects.description')}
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => {
          const projectKey = getProjectKey(project.name);
          return (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {t(`projects.items.${projectKey}.name`)}
                </h4>
                <p className='mt-2 text-slate-500'>{t(`projects.items.${projectKey}.description`)}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    {t('projects.liveLink')}
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
