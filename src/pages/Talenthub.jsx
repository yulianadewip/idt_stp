import "../css/Talenthub.css";
import feather from "feather-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";

export default function Talenthub() {
    const [active, setActive] = useState("beranda");
    const karirWrapperRef = useRef(null);
    const isPausedRef = useRef(false);

    useEffect(() => {
        feather.replace(); // render icon setelah komponen muncul
    });

    //auto scroll carousel
    useEffect(() => {
        const wrapper = karirWrapperRef.current;
        if (!wrapper) return;

            let rafId;
            let lastTs = 0;
            let dir = 1;                 // 1 = maju, -1 = mundur
            let pos = 0;                 // posisi scroll saat ini
            const speed = 100;            // px per detik (atur sesuai selera)

            const max = () => wrapper.scrollWidth - wrapper.clientWidth;

            const tick = (ts) => {
            if (!lastTs) lastTs = ts;
            const dt = (ts - lastTs) / 600;  // detik sejak frame terakhir
            lastTs = ts;

            if (!isPausedRef.current) {
                pos = wrapper.scrollLeft + dir * speed * dt;

                if (pos >= max()) { pos = max(); dir = -1; }
                if (pos <= 0)     { pos = 0;   dir =  1; }

                wrapper.scrollLeft = pos; // JANGAN pakai behavior: "smooth" di loop
            }

            rafId = requestAnimationFrame(tick);
            };

            // pause saat hover agar tidak “adu kuat” antara hover & auto-scroll
            const onEnter = () => { isPausedRef.current = true; };
            const onLeave = () => { isPausedRef.current = false; };

            wrapper.addEventListener("mouseenter", onEnter);
            wrapper.addEventListener("mouseleave", onLeave);

            rafId = requestAnimationFrame(tick);

            return () => {
            cancelAnimationFrame(rafId);
            wrapper.removeEventListener("mouseenter", onEnter);
            wrapper.removeEventListener("mouseleave", onLeave);
            };
        }, []);

        //animasi section mitra
        useEffect(() => {
        const section = document.querySelector(".fade-in-up");
        if (!section) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
            });
        }, { threshold: 0.2 });

        observer.observe(section);

        return () => observer.disconnect();
        }, []);


    // 🔹 Data kategori disimpan dalam array
    const kategoriList = [
        { id: "administrative", nama: "Administrative", jumlah: 0, icon: "circle" },
        { id: "softwareengineer", nama: "Software Engineer", jumlah: 0, icon: "cpu" },
        { id: "desaincreative", nama: "Desain Creative", jumlah: 0, icon: "pen-tool" },
        { id: "construction", nama: "Construction", jumlah: 0, icon: "tool" },
        { id: "financialeconomic", nama: "Financial & Economic", jumlah: 0, icon: "dollar-sign" },
        { id: "realestate", nama: "Real Estate", jumlah: 0, icon: "home" },
        { id: "contentwriter", nama: "Content Writer", jumlah: 0, icon: "edit-3" },
        { id: "manufacturing", nama: "Manufacturing", jumlah: 0, icon: "settings" },
    ];

    const job = [
        {
            id: "j1",
            posisi: "Sr. Product Designer",
            perusahaan: "Figma",
            companyVerified: true,
            logoUrl: "logo-figma.jpg", // placeholder logo
            status_kepegawaian: "Penuh waktu",
            tipe_kerja:"on-site",
            lokasi: "Surakarta",
            minimal_pendidikan: "Freshgrad",
            gaji: "5jt",
            deadline: "2025-04-30",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j2",
            posisi: "Fullstack Engineer",
            perusahaan: "Google Inc",
            companyVerified: true,
            logoUrl: "logo-google.jpg",
            status_kepegawaian: "Kontrak",
            tipe_kerja: "On-site",
            lokasi: "Yogyakarta",
            minimal_pendidikan: "Senior (5+ YoE)",
            gaji: "Max 24 jt",
            deadline: "2025-07-01",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j3",
            posisi: "Sr. Product Designer",
            perusahaan: "Figma",
            companyVerified: true,
            logoUrl: "logo-figma.jpg", // placeholder logo
            status_kepegawaian: "Penuh waktu",
            tipe_kerja:"on-site",
            lokasi: "Surakarta",
            minimal_pendidikan: "Freshgrad",
            gaji: "5jt",
            deadline: "2025-04-30",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j4",
            posisi: "Fullstack Engineer",
            perusahaan: "Google Inc",
            companyVerified: true,
            logoUrl: "logo-google.jpg",
            status_kepegawaian: "Kontrak",
            tipe_kerja: "On-site",
            lokasi: "Yogyakarta",
            minimal_pendidikan: "Senior (5+ YoE)",
            gaji: "Max 24 jt",
            deadline: "2025-07-01",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j5",
            posisi: "Sr. Product Designer",
            perusahaan: "Figma",
            companyVerified: true,
            logoUrl: "logo-figma.jpg", // placeholder logo
            status_kepegawaian: "Penuh waktu",
            tipe_kerja:"on-site",
            lokasi: "Surakarta",
            minimal_pendidikan: "Freshgrad",
            gaji: "5jt",
            deadline: "2025-04-30",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j6",
            posisi: "Fullstack Engineer",
            perusahaan: "Google Inc",
            companyVerified: true,
            logoUrl: "logo-google.jpg",
            status_kepegawaian: "Kontrak",
            tipe_kerja: "On-site",
            lokasi: "Yogyakarta",
            minimal_pendidikan: "Senior (5+ YoE)",
            gaji: "Max 24 jt",
            deadline: "2025-07-01",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j7",
            posisi: "Sr. Product Designer",
            perusahaan: "Figma",
            companyVerified: true,
            logoUrl: "logo-figma.jpg", // placeholder logo
            status_kepegawaian: "Penuh waktu",
            tipe_kerja:"on-site",
            lokasi: "Surakarta",
            minimal_pendidikan: "Freshgrad",
            gaji: "5jt",
            deadline: "2025-04-30",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j8",
            posisi: "Fullstack Engineer",
            perusahaan: "Google Inc",
            companyVerified: true,
            logoUrl: "logo-google.jpg",
            status_kepegawaian: "Kontrak",
            tipe_kerja: "On-site",
            lokasi: "Yogyakarta",
            minimal_pendidikan: "Senior (5+ YoE)",
            gaji: "Max 24 jt",
            deadline: "2025-07-01",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j9",
            posisi: "Sr. Product Designer",
            perusahaan: "Figma",
            companyVerified: true,
            logoUrl: "logo-figma.jpg", // placeholder logo
            status_kepegawaian: "Penuh waktu",
            tipe_kerja:"on-site",
            lokasi: "Surakarta",
            minimal_pendidikan: "Freshgrad",
            gaji: "5jt",
            deadline: "2025-04-30",
            recruiterLastAccess: "2025-08-31 10:00"
        },
        {
            id: "j10",
            posisi: "Fullstack Engineer",
            perusahaan: "Google Inc",
            companyVerified: true,
            logoUrl: "logo-google.jpg",
            status_kepegawaian: "Kontrak",
            tipe_kerja: "On-site",
            lokasi: "Yogyakarta",
            minimal_pendidikan: "Senior (5+ YoE)",
            gaji: "Max 24 jt",
            deadline: "2025-07-01",
            recruiterLastAccess: "2025-08-31 10:00"
        },
    ];

    const karirList = [
        {
            id: 1,
            nama: "Tasya R.A",
            posisi: "Graphic Design",
            foto: "tasya.jpg",
            deskripsi: "Lowongannya bener-bener relevan, nggak perlu scroll ribuan yang gak nyambung."
        },
        {
            id: 2,
            nama: "Albert Flores",
            posisi: "Cloud Engineer",
            foto: "albert.jpg",
            deskripsi: "Sebagai fresh graduate, syaa menemukan banyak lowongan relevan di Talent Hub IDT"
        },
        {
            id: 3,
            nama: "Kevin S.J",
            posisi: "Fullstack Dev",
            foto: "kevin.jpg",
            deskripsi: "Banyak lowongan yang sesuai dengan skill saya, dan semua perusahaan jelas kredibel"
        },
        {
            id: 4,
            nama: "Nathalie",
            posisi: "Data Scientist",
            foto: "natalie.jpg",
            deskripsi: "Berkat rekomendasi dari sistem Talent Hub, aku nemu kerja yang pas banget"
        },
        {
            id: 5,
            nama: "Tasya R.A",
            posisi: "Graphic Design",
            foto: "tasya.jpg",
            deskripsi: "Lowongannya bener-bener relevan, nggak perlu scroll ribuan yang gak nyambung."
        },
        {
            id: 6,
            nama: "Albert Flores",
            posisi: "Cloud Engineer",
            foto: "albert.jpg",
            deskripsi: "Sebagai fresh graduate, syaa menemukan banyak lowongan relevan di Talent Hub IDT"
        },
        {
            id: 7,
            nama: "Kevin S.J",
            posisi: "Fullstack Dev",
            foto: "kevin.jpg",
            deskripsi: "Banyak lowongan yang sesuai dengan skill saya, dan semua perusahaan jelas kredibel"
        },
        {
            id: 8,
            nama: "Nathalie",
            posisi: "Data Scientist",
            foto: "natalie.jpg",
            deskripsi: "Berkat rekomendasi dari sistem Talent Hub, aku nemu kerja yang pas banget"
        }

    ];


    return (
        <div className="talenthub">
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

            {active === "beranda" && (
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
                            {job.slice(0, 9) .map((job) => (
                                <div key={job.id} className="job-card">
                                    <div className="job-header">
                                        <div className="job-logo">
                                            {job.logoUrl ? (
                                                <img src={job.logoUrl} alt={job.perusahaan}/>
                                            ) : (
                                                <div className="job-logo-placeholder"
                                                    style={{backgroundColor: job.logoColor}}
                                                    
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
                        <h2>Bangun Karir Bersama <br/>Mitra Unggulan & Terpercaya</h2>
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
    
            )}

            {active === "caripekerjaan" && (
                <div className="halaman-caripekerjaan">
                    <div className="breadcrumb">
                        <a onClick={() => setActive()}></a>
                        
                    </div>
                    <div className="breadcrumb-semua-pekerjaan">
                            <div className="job-list">
                                {job.map((job) => (
                                    <div key={job.id} className="job-card">
                                        <div className="job-header">
                                            <div className="job-logo">
                                                {job.logoUrl ? (
                                                    <img src={job.logoUrl} alt={job.perusahaan}/>
                                                ) : (
                                                    <div className="job-logo-placeholder"
                                                        style={{backgroundColor: job.logoColor}}
                                                        
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
                    </div>
                </div>
            )}


            {active === "tentang" && (
                <div className="halaman-tentang">
                    
                </div>
            )}


            {active === "kontak" && (
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
                                <p>Kawasan Sains dan Teknologi - Solo Technopark,<br/>
                                Jl. Ki Hajar Dewantara No.19, Jebres, Kec. Jebres,<br/>
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
            )}
        </div>
    );
}
