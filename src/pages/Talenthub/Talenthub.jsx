import "../../css/Talenthub.css";
import * as feather from "feather-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import Beranda from "./Beranda";
import CariPekerjaan from "./Cari Pekerjaan";
import Tentang from "./Tentang";
import Kontak from "./Kontak";


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
                if (pos <= 0) { pos = 0; dir = 1; }

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

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (
            hash !== "beranda" &&
            hash !== "caripekerjaan" &&
            hash !== "tentang" &&
            hash !== "kontak" &&
            hash !== "profil"
        ) {
            setActive("beranda");
            window.location.hash = "#beranda";
        } else if (hash) {
            setActive(hash);
        }
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
            tipe_kerja: "on-site",
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
            tipe_kerja: "on-site",
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
            tipe_kerja: "on-site",
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
            tipe_kerja: "on-site",
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
            tipe_kerja: "on-site",
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
                <Beranda
                    kategoriList={kategoriList}
                    job={job}
                    karirList={karirList}
                    karirWrapperRef={karirWrapperRef}
                    active={active}
                    setActive={setActive}
                />
            )}
            {active === "caripekerjaan" && (
                <CariPekerjaan job={job} setActive={setActive} />
            )}
            {active === "tentang" && <Tentang />}
            {active === "kontak" && <Kontak />}
        </div>
    );
}
