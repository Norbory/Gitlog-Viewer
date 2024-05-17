import { RepoInfo } from "../types/RepoInfo.interface";


export const CommitsComponent = ({commits}:{commits: RepoInfo}) => {
    return(
    <div
        className='flex flex-col md:px-12 px-4 py-4 bg-options border-2 rounded-xl border-back items-center'
    >
        <h3 
            className="text-primary md:text-2xl sm:text-lg text-md"
        >
            {commits.name} Commits History
        </h3>
        <p
            className='text-secondary md:text-lg sm:text-sm text-xs py-2'
        >
            {commits.description ? commits.description : 'No description'}
        </p>
        {
            commits.status === 'Private'
            ? <p className='text-secondary md:text-md sm:text-sm text-xs py-2 bg-red-800 px-4 rounded-lg'>
                PRIVATE
            </p>
            : <p className='text-secondary md:text-md sm:text-sm text-xs py-2 bg-green-800 px-4 rounded-lg'>
                PUBLIC
            </p>
        }
        <div className='flex flex-col items-start'>
            {
                commits.commitHistory.map((commit, index) => {
                    return (
                        <div key={index} className='flex flex-row self-baseline'>
                            <img 
                                src="https://www.svgrepo.com/show/327283/git-commit.svg" 
                                alt="separador de commits" 
                                className='md:h-8 md:w-8 h-6 w-6 my-2 mr-2'
                            />
                            <div className='flex flex-col items-start py-2 text-left'>
                                <h3 className='text-primary md:text-lg sm:text-md text-sm'>
                                    {commit.commiter}
                                </h3>
                                <p className='text-secondary md:text-sm sm:text-xs text-xs'>
                                    {commit.date.toString().slice(0,10)}
                                </p>
                                <p className='text-secondary md:text-sm sm:text-xs text-xs'>
                                    {commit.message}
                                </p>
                                <p className='text-secondary md:text-sm sm:text-xs text-xs'>
                                    {commit.sha.slice(0,7)}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}
