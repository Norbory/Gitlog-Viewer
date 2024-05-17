export const UserComponent = ({user,avatar_url,profile}:{user: string, avatar_url:string, profile:string}) => {
  return (
    <>
        <div className='flex flex-row border-2 rounded-xl border-back py-4 md:px-12 px-4 bg-options items-center'>
            <a href={profile} target="_blank">
                <img 
                className='md:h-24 md:w-24 sm:h-16 sm:w-16 h-10 w-10 rounded-full'
                src={avatar_url} 
                alt={`logo of ${user}`}
                />
            </a>
            <div className="flex flex-col justify-center items-start md:px-8 px-4">
                <h1 className='text-primary md:text-4xl sm:text-xl text-lg'>
                  {user}
                </h1>
                <a 
                  className='text-secondary md:text-lg sm:text-sm text-xs hover:text-[#af79d9] transition-all duration-200 ease-in-out'
                  href={profile}
                  target='_blank'
                >
                  {profile}
                </a>
            </div>
        </div>
    </>
    
  )
}
