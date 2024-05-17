import './App.css'
import { UserComponent } from './components/user.component'
import { RepositoriesComponent } from "./components/repositories.component"
import { useState } from 'react'
import { UserGithub } from './types/User.interface'
import { Links } from './constants/string'
import axios from 'axios'
import { fastRepo } from './types/fastRepo.interface'
import { RepoInfo } from './types/RepoInfo.interface'
import { CommitsComponent } from './components/commits.component'

function App() {
  const [name, setName] = useState<string>('')
  // Variables to get the username, avatar_url, and profile
  const [username, setUsername] = useState<UserGithub>({} as UserGithub)

  // Variables to get the list of repositories
  const [repositories, setRepositories] = useState<fastRepo[]>([])
  const [message, setMessage] = useState<string>('')

  // Variables to get the list of commits
  const [commits, setCommits] = useState<RepoInfo>({} as RepoInfo)
  const [commitMessage, setCommitMessage] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)

  const getUser = async () => {
    try {
      if (name === '') return alert('Please enter a username')
      const response = await axios.get(`${Links.host}user/${name}/info`)
      setUsername(response.data.Information)
    } catch (error) {
      console.error(error)
    }
  }

  const getRepositories = async () => {
    try {
      if (name === '') return alert('Please enter a username')
      const response = await axios.get(`${Links.host}user/${name}/repos`)
      setMessage(response.data.message)
      setRepositories(response.data.Information)
      setShow(false)
    } catch (error) {
      console.error(error)
    }
  }

  const getCommits = async (repo: string) => {
    try {
      const response = await axios.get(`${Links.host}user/${name}/${repo}/info`)
      setCommitMessage(response.data.message)
      setCommits(response.data.Information)
      setShow(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {/* <div className='flex justify-end items-center'>
        <svg className='w-8 h-8 text-primary cursor-pointer hover:text-options transition-all duration-200 ease-in-out' 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z" 
            stroke='currentColor' 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div> */}
      <div className='flex flex-row justify-center'>
        <a href="https://github.com/Norbory" target='_blank'>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
            className="logo h-48 w-48"
            alt="Log Viewer Logo"
          />
        </a>
      </div>
      <h1 className='text-primary text-4xl'>
        LOG VIEWER
      </h1>
      <h3 className='text-secondary'>
        A simple log viewer for your git repository
      </h3>

      <input
        className='bg-options text-primary p-2 rounded-lg my-4 w-full text-sm ring-2 ring-options focus:ring-2 focus:outline-none focus:ring-primary transition-all duration-300 ease-in-out'
        type='input'
        placeholder='Enter Github Username'
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') getUser() }}
      />
      {
        username.name &&
        <>
          <UserComponent
            user={username.name}
            avatar_url={username.avatar_url}
            profile={username.profile}
          />
          {
            username.name === "Norbory"
            ? <button 
                className='bg-primary md:text-lg text-xs rounded-lg md:p-2 p-1 my-4 transition-all duration-200 ease-in-out hover:bg-[#af79d9] hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary ring-2 ring-primary'
                onClick={()=>{getRepositories()}}
              >
                  {
                    show === false 
                    ? 'Get Repositories'
                    : 'Get Back'
                  }
              </button>
            : null
          }
        </>
      }
      {
        show === false && message === "User's Repositories has been retrieved" && username.name === "Norbory"
        ? <RepositoriesComponent repositories={repositories} getCommits={(repo: string) => {getCommits(repo)}}/>
        : null
      }
      {
        show === true && commitMessage === "Repository Information has been received" && username.name === "Norbory"
        ? CommitsComponent({commits})
        : null
      }
    </>
  )
}

export default App
