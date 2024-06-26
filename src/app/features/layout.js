
import FloatDropdown from '@/components/float-dropdown'
import BottomNavigation from '@/components/bottomNavigation'
 
export default function Layout({ children }) {
  return (
    <>
         <FloatDropdown />

<BottomNavigation active={2} />
      <div>{children}</div>
    
    </>
  )
}