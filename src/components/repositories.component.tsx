import { fastRepo } from "../types/fastRepo.interface"
import { SVG } from "../constants/svg"

export const RepositoriesComponent = ({repositories, getCommits}:{repositories: Array<fastRepo>; getCommits: (arg1: string) => void}) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-3 gap-1'>
          {
            repositories.map((repository: fastRepo, index:number) => {
            return (
                <div key={index} className='flex border-2 rounded-xl border-back py-4 md:px-4 px-1 bg-options items-start my-4 w-full'>
                    <div className="flex flex-col  items-start md:px-4 px-2 justify-between">
                        <a 
                          className='text-primary sm:text-xl text-lg hover:text-[#af79d9] transition-all duration-200 ease-in-out cursor-pointer'
                            onClick={() => {getCommits(repository.name)}}
                        >
                            {repository.name}
                        </a>
                        <h3 
                            className='text-secondary sm:text-sm text-xs text-left'
                        >
                            { repository.description 
                                ? repository.description
                                : 'No description'
                            }
                        </h3>
                        <p className='text-secondary sm:text-sm text-xs md:py-2 py-1'>
                            {repository.createdAt.toString().slice(0,10)}
                        </p>
                        <div className='flex flex-row'>
                            {
                                repository.languages.map((language, index:number) => {
                                    return (
                                        <div key={index} className='flex flex-row py-2 mr-2 items-center'>
                                            {
                                                language === 'Astro'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.Astro.logo}
                                                    alt={SVG.Astro.alt}
                                                    />
                                                : language === 'CSS'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.CSS.logo}
                                                    alt={SVG.CSS.alt}
                                                    />
                                                : language === 'HTML'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.HTML.logo}
                                                    alt={SVG.HTML.alt}
                                                    />
                                                : language === 'JavaScript'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.JavaScript.logo}
                                                    alt={SVG.JavaScript.alt}
                                                    />
                                                : language === 'TypeScript'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.TypeScript.logo}
                                                    alt={SVG.TypeScript.alt}
                                                    />
                                                : language === 'Python'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.Python.logo}
                                                    alt={SVG.Python.alt}
                                                    />
                                                : language === 'C++'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.CPP.logo}
                                                    alt={SVG.CPP.alt}
                                                    />
                                                : language === 'C#'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.CSharp.logo}
                                                    alt={SVG.CSharp.alt}
                                                    />
                                                : language === 'Ruby'
                                                ? <img
                                                    className='md:h-6 md:w-6 h-4'
                                                    src={SVG.Ruby.logo}
                                                    alt={SVG.Ruby.alt}
                                                    />
                                                : <div className='text-primary rounded-lg pr-4 pb-3 pt-1 text-xl'>
                                                    {language}
                                                </div>
                                            }
                                            
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='flex flex-row'>
                            {
                                repository.collaborators.map((collaborator, index:number) => {
                                    return (
                                        <div key={index} className="mr-1">
                                          <a href={collaborator.profile} target="_blank" className="py-2 hover:opacity-20">
                                            <img
                                                className='md:h-8 md:w-8 h-4 rounded-full'
                                              src={collaborator.avatar_url} 
                                              alt={`logo of ${collaborator.name}`}
                                            />
                                          </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )})
          }
        </div>
    )
}

export default RepositoriesComponent
