import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify"
import { CreatePesan } from "../../Services/Api";

export default function RsvpForm({PropfetchData}) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    pesan: "",
    kehadiran: "",
  });
      const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
      const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!form.nama.trim()) {
        return toast.error("Nama wajib diisi");
      }
  
      if (!form.pesan.trim()) {
        return toast.error("Ucapan wajib diisi");
      }
  
      if (!form.kehadiran) {
        return toast.error("Pilih konfirmasi kehadiran");
      }
  
      try {
        setLoading(true);
  
        await CreatePesan(form);
        await PropfetchData()
  
        toast.success("Ucapan berhasil dikirim");
  
        setForm({
          nama: "",
          pesan: "",
          kehadiran: "",
        });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
   

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-14 max-w-3xl space-y-6"
    >
      {/* Nama */}

      <div>
        <label className="mb-2 block font-space text-white">
          Nama
        </label>

        <input
          type="text"
          name="nama"
          required
          value={form.nama}
          onChange={handleChange}
          placeholder="Nama"
          className="
            w-full
            rounded-2xl
            border
            border-white/20
            bg-white/10
            px-5
            py-4
            text-white
            placeholder:text-white/40
            outline-none

            backdrop-blur-md

            transition
            font-space
            focus:border-white
          "
        />
      </div>

      {/* Ucapan */}

      <div>
        <label className="mb-2 block font-space text-white">
          Ucapan & Doa
        </label>

        <textarea
          rows={4}
            id="pesan"
        name="pesan"
          required
          value={form.pesan}
          onChange={handleChange}
          placeholder="Tuliskan ucapan terbaik.."
          className="
            w-full
            resize-none
            rounded-2xl
            border
            border-white/20
            bg-white/10
            px-5
            py-4
            text-white
            placeholder:text-white/40
            outline-none
            backdrop-blur-md
            font-space
            focus:border-white
          "
        />
      </div>

      {/* Radio */}

      <div>

        <label className="mb-4 block font-space text-white">
          Konfirmasi Kehadiran
        </label>

      

        <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2  text-white font-space">
                <input
                  type="radio"
                  name="kehadiran"
                  value="Ya"
                  checked={form.kehadiran === "Ya"}
                  onChange={handleChange}
                 
                />
                <span>Ya</span>
              </label>

              <label className="flex items-center gap-2  text-white font-space">
                <input
                  type="radio"
                  name="kehadiran"
                  value="Mungkin"
                  checked={form.kehadiran === "Mungkin"}
                  onChange={handleChange}
                 
                />
                <span>Mungkin</span>
              </label>

              <label className="flex items-center gap-2  text-white font-space">
                <input
                  type="radio"
                  name="kehadiran"
                  value="Tidak"
                  checked={form.kehadiran === "Tidak"}
                  onChange={handleChange}
                  
                />
                <span>Tidak</span>
              </label>
            </div>

      </div>

      {/* Button */}

      <button
        disabled={loading}
        type="submit"
        className="
          mt-4

          flex
          w-full
          items-center
          justify-center
          gap-3

          rounded-full

          bg-white

          px-6
          py-4

         font-black 
         font-serif
         text-black
         italic
          
          transition-all
          hover:scale-[1.02]
            bg-gradient-to-l
        from-[#F8E8B5]
        via-[#D9B16A]
        to-[#8A6438]
        "
      >
        <FaPaperPlane />

        {loading ? "Mengirim..." : " Kirim"}
      </button>
    </form>
  );
}