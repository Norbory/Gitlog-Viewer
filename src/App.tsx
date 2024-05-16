import './App.css'

function App() {

  return (
    <>
      <div className='flex justify-end items-center'>
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
      </div>
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

      <p className='text-secondary pt-8'>
        Welcome, Norbory
      </p>

      <input
        className='bg-options text-primary p-2 rounded-lg my-4 w-full text-sm ring-2 ring-options focus:ring-2 focus:outline-none focus:ring-primary transition-all duration-300 ease-in-out'
        type='input'
        placeholder='Enter the name of your git repository'
      />
    </>
  )
}

export default App
