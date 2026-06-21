import Admin from "../Components/Admin/Admin"
import NavbarAdmin from "../Components/NavbarAdmin"
import Footer from "../Components/Footer"


function AdminPage() {
  return (
    <>
  
             
    <NavbarAdmin/>
       <div className="max-w-6xl mx-auto p-4">
        <Admin />
      </div>
      <Footer/>
   
      
    </>
  )
}

export default AdminPage
