import React from "react";
import "../../css/Talenthub.css";

export default function Beranda({ kategoriList, job, karirList, karirWrapperRef, active, setActive }) {
    return (
        <>
            <div className="halaman-utama-container">
                <div className="halaman-utama-container-kanan">
                    <div className="judul-halaman">
                        <h1>Mulai Langkah Karier</h1>
                        <h1>Anda Bersama</h1>
                        <span className="talent">Talent </span>
                        <span className="hub">Hub</span>
                    </div>
                    <div className="deskripsi-judul">
                        <p>Pelatihan, peluang kerja, dan mentoring</p>
                        <p>untuk meningkatkan kompetensi di dunia</p>
                        <p>digital dan industri kreatif</p>
                    </div>
                </div>

                <div className="halaman-utama-container-kiri">
                    <div className="gambar">
                        <img
                            className="img-berandatalent"
                            src="img-berandatalent.png"
                            alt="berandatalent"
                        />
                    </div>
                </div>

                <div className="section-baru1">
                    <div className="judul-section-baru1">
                        <p>Satu platform, banyak peluang karir🚀</p>
                    </div>

                    <div className="container-kategori">
                        {kategoriList.map((kategori, index) => (
                            <div
                                key={kategori.id}
                                className={`kategori-card kategori-card-${index + 1}`}
                            >
                                <div className="kategori-box-left">
                                    <div className="icon-kategori-card">
                                        {/* ✅ feather pakai data-feather, bukan className */}
                                        <i data-feather={kategori.icon}></i>
                                    </div>
                                </div>

                                <div className={`kategori-teks${index + 1}`}>
                                    <div className="kategori-box-right">
                                        <a
                                            href={`#${kategori.id}`}
                                            className={active === kategori.id ? "active" : ""}
                                            onClick={() => setActive(kategori.id)}
                                        >
                                            <h3>{kategori.nama}</h3>
                                        </a>
                                    </div>
                                    <div className="kategori-posisi">
                                        {kategori.jumlah} Posisi tersedia
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section-cara-kerja">
                    <div className="judul-cara-kerja">
                        <h1> Cara Kerja Talent Hub </h1>
                        <p>
                            Hubungkan talenta terbaik dengan peluang kerja dalam tiga langkah mudah, cepat, dan efisien.
                        </p>
                    </div>
                    <div className="steps">
                        <div className="step">
                            <span className="step-num">01</span>
                            <div className="hex">
                                <i data-feather="file-text"></i>
                            </div>
                            <h3>Daftar & Buat Profil</h3>
                            <p>
                                Buat akun sebagai pencari kerja atau perusahaan, lalu lengkapi profil dengan informasi dan keahlian.
                            </p>
                        </div>
                        <div className="step">
                            <div className="step-num">02</div>
                            <div className="hex">
                                <i data-feather="users"></i>
                            </div>
                            <h3>Jelajahi & Pilih Peluang</h3>
                            <p>
                                Cari lowongan atau kandidat sesuai kebutuhan menggunakan filter cerdas.
                            </p>
                        </div>

                        <div className="step">
                            <span className="step-num">03</span>
                            <div className="hex">
                                <i data-feather="check-square"></i>
                            </div>
                            <h3>Terhubung & Rekrut</h3>
                            <p>
                                Kirim lamaran atau undangan, lanjutkan ke proses seleksi hingga penawaran kerja.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="section-rekomendasi-pekerjaan">
                    <div className="judul-section-rekomendasi-pekerjaan">
                        Rekomendasi Pekerjaan Terkini
                    </div>

                    <div className="job-list">
                        {job.slice(0, 9).map((job) => (
                            <div key={job.id} className="job-card">
                                <div className="job-header">
                                    <div className="job-logo">
                                        {job.logoUrl ? (
                                            <img src={job.logoUrl} alt={job.perusahaan} />
                                        ) : (
                                            <div className="job-logo-placeholder"
                                                style={{ backgroundColor: job.logoColor }}

                                            ></div>
                                        )}
                                    </div>
                                    <div>
                                        <h3>{job.posisi}</h3>
                                        <p>
                                            {job.perusahaan}{" "}
                                            {job.companyVerified && (
                                                <span className="verified">
                                                    <i data-feather="check-circle"></i>
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                {/* info badge joblist */}

                                <div className="job-info">
                                    <span><i data-feather="briefcase"></i> {job.status_kepegawaian}</span>
                                    <span><i data-feather="map-pin"></i> {job.lokasi}</span>
                                    <span><i data-feather="layers"></i> {job.minimal_pendidikan}</span>
                                    <span><i data-feather="dollar-sign"></i> {job.gaji}</span>
                                </div>

                                {/* footer */}
                                <div className="job-footer">
                                    <div className="job-footer-left">
                                        <small>Rekruter aktif {job.recruiterLastAccess}</small>
                                        <strong>Lamar sebelum {job.deadline}</strong>
                                    </div>
                                    <button className="lamar-btn">Lamar Cepat</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="button-selengkapnya">
                        <button
                            className="btn-selengkapnya"
                            onClick={() => setActive("caripekerjaan")}
                        > Lihat selengkapnya
                        </button>
                    </div>
                </div>


                <div className="section-karir">
                    <div className="section-karir-header">
                        <div className="section-karir-text">
                            <h2>5.000+ Karir Tercapai Melalui Talent Hub</h2>
                            <p>Kalau ribuan talenta bisa temukan kerja lewat Talent Hub, kamu juga bisa!</p>
                        </div>
                    </div>

                    <div className="karir-wrapper" ref={karirWrapperRef}>
                        <div className="karir-list">
                            {karirList.map((talent) => (
                                <div key={talent.id} className="karir-card">
                                    <img src={talent.foto} alt={talent.nama} className="karir-foto" />
                                    <div className="karir-info">
                                        <h3>{talent.nama} | {talent.posisi}</h3>
                                        <p>{talent.deskripsi}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="section-mitra fade-in-up">
                    <h2>Bangun Karir Bersama <br />Mitra Unggulan & Terpercaya</h2>
                    <p>
                        Temukan pekerjaan dari perusahaan yang berkomitmen membentuk talenta berdaya saing global.
                    </p>

                    <div className="mitra-logo-wrapper">
                        <div className="mitra-card">
                            <img src="logo-stp.png" alt="Solo Technopark" />
                        </div>
                        <div className="mitra-card">
                            <img src="logo-pemkot-surakarta.png" alt="Pemkot Surakarta" />
                        </div>
                        <div className="mitra-card">
                            <img src="logo-livin.jpg" alt="Livin Mandiri" />
                        </div>
                    </div>

                    <button className="btn-mitra">
                        Jelajahi Peluangmu Sekarang <i data-feather="arrow-up-right"></i>
                    </button>
                </div>

            </div>
        </>
    );
}