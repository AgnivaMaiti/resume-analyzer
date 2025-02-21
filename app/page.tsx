"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaEnvelope, FaBriefcase, FaUserGraduate, FaChalkboardTeacher, FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';

export default function Home() {
  const [showCards, setShowCards] = useState(false);
  const roles = ["Student", "Recruiter", "Faculty"];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (showCards && !(e.target as Element).closest('.cards-container')) {
        setShowCards(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showCards]);

  return (
    <div style={{ backgroundColor: "#1a202c", color: "white" }}>
      {/* Navigation Bar */}
      <nav style={{ backgroundColor: "rgba(26, 32, 44, 0.9)", padding: "1rem 0", position: "fixed", width: "100%", zIndex: 40, backdropFilter: "blur(10px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Image 
              src="/images/pngwing.com1.png" 
              alt="Logo" 
              width={50} 
              height={28} 
              priority
              style={{ objectFit: "contain" }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
              <span style={{ color: "#38a169" }}>KIIT</span>Start
            </span>
          </div>
          <div>
            <button style={{ backgroundColor: "#38a169", color: "white", padding: "0.5rem 1rem", borderRadius: "0.375rem", border: "none", cursor: "pointer", transition: "all 0.3s ease" }} onClick={() => setShowCards(!showCards)}>
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay and Cards */}
      {showCards && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(5px)", zIndex: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div className="cards-container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", maxWidth: "900px", margin: "0 auto", padding: "2rem", zIndex: 50 }}>
            {roles.map((itemRole) => (
              <div 
                key={itemRole}
                style={{ 
                  backgroundColor: "white", 
                  borderRadius: "0.5rem", 
                  padding: "2rem", 
                  color: "#2d3748", 
                  transition: "all 0.3s ease", 
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                  display: "flex", 
                  flexDirection: "column",
                  minHeight: "400px"
                }}
              >
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                  <div style={{ width: "3rem", height: "3rem", backgroundColor: "#38a169", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {itemRole === "Student" && <FaUserGraduate style={{ color: "white" }} />}
                    {itemRole === "Recruiter" && <FaBriefcase style={{ color: "white" }} />}
                    {itemRole === "Faculty" && <FaChalkboardTeacher style={{ color: "white" }} />}
                  </div>
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", textAlign: "center", marginBottom: "0.5rem" }}>
                  {itemRole}
                </h3>
                <p style={{ fontSize: "0.875rem", textAlign: "center", color: "#718096", marginBottom: "1rem", flexGrow: 1 }}>
                  {itemRole === "Student" && "Showcase your projects and connect with potential recruiters"}
                  {itemRole === "Recruiter" && "Discover talent and engage with promising candidates"}
                  {itemRole === "Faculty" && "Guide students and collaborate on research projects"}
                </p>
                <div style={{ marginTop: "auto" }}>
                  <Link href={`/register?role=${itemRole.toLowerCase()}`}>
                    <button style={{ width: "100%", backgroundColor: "#38a169", color: "white", padding: "0.75rem", borderRadius: "0.375rem", border: "none", cursor: "pointer", marginBottom: "0.5rem", transition: "all 0.3s ease" }}>
                      Sign Up
                    </button>
                  </Link>
                  <Link href={`/login?role=${itemRole.toLowerCase()}`}>
                    <button style={{ width: "100%", color: "#38a169", padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #38a169", backgroundColor: "transparent", cursor: "pointer", transition: "all 0.3s ease" }}>
                      Log In
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={{ position: "relative", minHeight: "100vh", padding: "8rem 0 4rem" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1
          }}
        >
          <Image
            src="/images/kiit1.png"
            alt="KIIT Campus"
            fill
            style={{
              objectFit: "cover",
              opacity: 0.3,
              mixBlendMode: "multiply"
            }}
            priority
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem"
          }}
        >
          <div style={{ marginLeft: "10%", maxWidth: "85%", marginBottom: "4rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              Welcome to <span style={{ color: "#38a169" }}>KIIT</span>Start
            </h1>
            <p style={{ fontSize: "1.25rem" }}>Connect. Collaborate. Earn.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ backgroundColor: "white", padding: "4rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              color: "#2d3748"
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#38a169",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaRocket style={{ color: "white", fontSize: "1.5rem" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                Quick Start
              </h3>
              <p style={{ color: "#4a5568" }}>
                Easy onboarding with our 3-step process tailored for each user type
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#38a169",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaUsers style={{ color: "white", fontSize: "1.5rem" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                Direct Connections
              </h3>
              <p style={{ color: "#4a5568" }}>
                Connect directly with students, faculty, and recruiters
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#38a169",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <FaChartLine style={{ color: "white", fontSize: "1.5rem" }} />
                </div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                Track Progress
              </h3>
              <p style={{ color: "#4a5568" }}>Monitor projects and opportunities in real-time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1a202c", color: "white", padding: "3rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                <FaUserGraduate style={{ color: "#38a169", fontSize: "1.25rem" }} />
                <h4 style={{ fontWeight: "600", marginLeft: "0.5rem" }}>KIITStart</h4>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#cbd5e0" }}>
                Empowering connections in the KIIT ecosystem
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Quick Links</h4>
              <ul style={{ fontSize: "0.875rem", color: "#cbd5e0", listStyleType: "none", padding: 0 }}>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#cbd5e0", textDecoration: "none", transition: "color 0.3s" }}>
                    About Us
                  </a>
                </li>
                <li style={{ marginBottom: "0.5rem" }}>
                  <a href="#" style={{ color: "#cbd5e0", textDecoration: "none", transition: "color 0.3s" }}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#cbd5e0", textDecoration: "none", transition: "color 0.3s" }}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Connect</h4>
              <div style={{ display: "flex", gap: "1rem" }}>
                <FaTwitter
                  style={{ width: "1.25rem", height: "1.25rem", color: "#cbd5e0", cursor: "pointer", transition: "color 0.3s" }}
                />
                <FaInstagram
                  style={{ width: "1.25rem", height: "1.25rem", color: "#cbd5e0", cursor: "pointer", transition: "color 0.3s" }}
                />
                <FaEnvelope
                  style={{ width: "1.25rem", height: "1.25rem", color: "#cbd5e0", cursor: "pointer", transition: "color 0.3s" }}
                />
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Contact</h4>
              <p style={{ fontSize: "0.875rem", color: "#cbd5e0" }}>
                KIIT University Bhubaneswar, Odisha - 751024<br />
                India
              </p>
            </div>
          </div>
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop: "1px solid #4a5568",
              textAlign: "center",
              fontSize: "0.875rem",
              color: "#cbd5e0"
            }}
          >
            © 2025 KIITStart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}