import PesanAdmin from "../Components/Admin/PesanAdmin"
import NavbarAdmin from "../Components/NavbarAdmin"
import Footer from "../Components/Footer"




function PesanAdminPage() {
  return (
    <>
    <NavbarAdmin/>
       <div className="max-w-6xl mx-auto p-4">
        <PesanAdmin />
      </div>
       <Footer/>
     
      
    </>
  )
}

export default PesanAdminPage
