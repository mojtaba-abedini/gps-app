import BottomNavigation from "@/components/bottomNavigation";

 
export default function Layout({ children }) {
  return (
    <>
 
      <main>{children}</main>
  <BottomNavigation active={4}/>
    </>
  )
}