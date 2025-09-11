import React from "react";
import "../../css/Talenthub.css";

export default function Kontak() {
    return (
        <div className="section-kontak">
            <div className="kontak-header">
                <h2>Kontak</h2>
                <p>Butuh bantuan? Kunjungi kami</p>
            </div>

            <div className="kontak-box-wrapper">
                <div className="kontak-box active">
                    <div className="icon">
                        <i data-feather="map-pin"></i>
                    </div>
                    <div className="kontak-info">
                        <h3>Lokasi</h3>
                        <p>Kawasan Sains dan Teknologi - Solo Technopark,<br />
                            Jl. Ki Hajar Dewantara No.19, Jebres, Kec. Jebres,<br />
                            Kota Surakarta, Jawa Tengah 57126
                        </p>
                    </div>
                </div>

                <div className="kontak-box">
                    <div className="icon">
                        <i data-feather="phone"></i>
                    </div>
                    <div className="kontak-info">
                        <h3>Telepon</h3>
                        <p>(+62) 271 666662</p>
                    </div>
                </div>

                <div className="kontak-box">
                    <div className="icon">
                        <i data-feather="mail"></i>
                    </div>
                    <div className="kontak-info">
                        <h3>Email</h3>
                        <p>info.solotechnopark@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
}