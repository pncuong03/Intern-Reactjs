import { useColorScheme } from '@mui/material'

const Contacts = () => {
  const { mode } = useColorScheme()
  return (
    <ul>
      {/* {friendsData.map((_, idx) => (
        <li
          key={idx}
          className={`justify-content mb-2 flex h-12 cursor-pointer items-center space-x-2 rounded-md p-2   ${mode === 'light' ? 'hover:bg-gray-200' : 'hover:bg-neutral-800'}`}
        >
          <div>
            <img className='h-10 w-10 rounded-full' src={`https://random.imagecdn.app/200/${200 + idx}`} alt='user' />
          </div>
          <div>
            <p className='text-sm font-medium '>Saiful Islam Shihab</p>
          </div>
        </li>
      ))} */}
      Data
    </ul>
  )
}

export default Contacts
