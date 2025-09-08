import React from "react";

export default function Navbar({ active, setActive}) {
    return (
        <div className="navbar">
                <div className="nav-logo">
                    <img src="logo-stp.png" alt="Logo" />
                </div>

                <div className="nav-link">
                    <a
                        href="#beranda"
                        className={active === "beranda" ? "active" : ""}
                        onClick={() => setActive("beranda")}
                    >
                        Beranda
                    </a>
                    <a
                        href="#caripekerjaan"
                        className={active === "caripekerjaan" ? "active" : ""}
                        onClick={() => setActive("caripekerjaan")}
                    >
                        Cari pekerjaan
                    </a>
                    <a
                        href="#tentang"
                        className={active === "tentang" ? "active" : ""}
                        onClick={() => setActive("tentang")}
                    >
                        Tentang
                    </a>
                    <a
                        href="#kontak"
                        className={active === "kontak" ? "active" : ""}
                        onClick={() => setActive("kontak")}
                    >
                        Kontak
                    </a>
                </div>

                <div className="nav-button">
                    <a
                        href="#profil"
                        className={active === "profil" ? "active" : ""}
                        onClick={() => setActive("profil")}
                    >
                        Profil
                    </a>
                </div>
            </div>
    )
}