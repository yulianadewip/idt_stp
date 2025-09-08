import { Link } from "react-router-dom";
import "../css/Login.css";



export default function Login() {
    return(
        <div className="container">
            <div className="container-kanan">
                <div className="kotak-gambar-kuning">
                    <p className="judul-kotak-kuning">
                        Menuju kawasan Solo Technopark yang inovatif dan berdaya saing internasional.
                    </p>
                    <img src="./stp-image.png" alt="" />
                </div>
            </div>
            <div className="container-kiri">
                <div className="kotak-form">
                    <h1 className="judul-login">Log In</h1>
                    <p className="deskripsi-login">Akses lebih dalam fitur - fitur IDT Point dengan masuk menggunakan akun</p>
                    <span>Email</span><br/>
                    <input type="text" name="" id="" placeholder="Masukkan email anda"/><br />
                    <span>Password</span><br />
                    <input type="text" name="" id="" placeholder="Masukkan password anda"/> 
                    <button>Sign In</button>
                    <div className="lupa-password">
                        <a>Forgot password?</a>
                    </div>
                    <div className="divider">Or </div>
                    <div className="social-login">
                        <div className="google">
                            <img className="img-google" src="google-icon.png" alt="Google" />
                            <a href="">Sign in with Google</a>
                        </div>
                        <div className="apple">
                            <img className="img-apple" src="apple-icon.png" alt="Apple" />
                            <a href="">Sign in with Apple</a>
                        </div>
                    </div>
                    <div className="daftar">
                        <p>Belum punya akun?</p>
                        <a href="">Daftar sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    );
}