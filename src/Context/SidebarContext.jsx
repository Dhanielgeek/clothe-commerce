import React, {createContext,useState} from 'react'

export const SidebarContext = createContext()


const SidebarProvider = ({children}) => {
const [isopen, setisopen] = useState(false)

const handleclose = ()=>{
  setisopen(false)
}

  return (
    <SidebarContext.Provider value={{isopen, handleclose, setisopen}}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider