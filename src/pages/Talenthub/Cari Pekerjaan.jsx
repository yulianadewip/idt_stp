import React from "react";
import "../../css/Talenthub.css";

export default function CariPekerjaan({ job, setActive }) {
    return (
        <>
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
                </div>
            </div>
        </>
    );
}