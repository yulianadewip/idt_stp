import { Link } from "react-router-dom";
import "../css/Registrasi.css";

export default function Registrasi() {
    
    return(
        <div className="registrasi-container">
            <div className="registrasi-container-kanan">
                <div className="kotak-form">
                    <h1 className="judul-form-registrasi">Register</h1>
                    <p className="deskripsi-registrasi">
                        Daftarkan dirimu, dan jadi bagian dari kemajuan digital Nusantara
                    </p>
                    <span>Nama Lengkap</span>
                    <input type="text" namalengkap="" id="" placeholder="Masukkan nama lengkap anda" className="input-registrasi"/>
                    <span>Email</span>
                    <input type="text" email="" id="" placeholder="Masukkan email anda" className="input-registrasi"/>
                    <span>Password</span>
                    <input type="text" password="" id="" placeholder="Masukkan password anda" className="input-registrasi"/>
                    <button className="button-registrasi">Sign Up</button>
                    <div className="divider">Or</div>
                    <div className="social-registrasi">
                        <div className="google">
                            <img className="img-google" src="google-icon.png" alt="Google" />
                            <a href="">Sign up with Google</a>
                        </div>
                        <div className="apple">
                            <img className="img-apple" src="apple-icon.png" alt="Apple" />
                            <a href="">Sign up with Apple</a>
                        </div>
                    </div>
                    <div className="masuk">
                        <p>Sudah punya akun?</p>
                        <a href="">Masuk disini</a>
                    </div>
                </div>
                
            </div>
            <div className="registrasi-container-kiri">
                <div className="kotak-biru">
                    <h1>Menuju kawasan Solo Technopark yang inovatif dan berdaya saing internasional.</h1>
                    <img src="./img-daftar.png" alt="" />
                </div>
                



            </div>
        </div>
    )
}