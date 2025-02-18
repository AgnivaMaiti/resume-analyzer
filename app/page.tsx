"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaEnvelope, FaBriefcase, FaUserGraduate, FaChalkboardTeacher, FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#1a202c', color: 'white' }}>
      <div style={{ position: 'relative', minHeight: '100vh', padding: '4rem 0' }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          zIndex: 1 
        }}>
          <Image 
            src="/images/kiit1.png" 
            alt="KIIT Campus" 
            fill
            style={{ 
              objectFit: 'cover', 
              opacity: 0.3,
              mixBlendMode: 'multiply' 
            }}
            priority
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }} />
        </div>

        {/* Content Container */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 1rem'
        }}>
          <div style={{ marginLeft: '10%', maxWidth: '85%', marginBottom: '4rem' }}>
            <Image 
              src="/images/pngwing.com1.png" 
              alt="Logo" 
              width={120} 
              height={48} 
              style={{ marginBottom: '1.5rem', display: 'block' }}
            />
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Welcome to <span style={{ color: '#38a169' }}>KIIT</span>Start
            </h1>
            <p style={{ fontSize: '1.25rem' }}>Connect. Collaborate. Earn.</p>
          </div>

          {/* Login Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '1.5rem', 
            maxWidth: '900px', 
            margin: '0 auto' 
          }}>
            {[
              {
                role: 'Student',
                description: 'Showcase your projects and connect with potential recruiters',
                icon: <FaUserGraduate style={{ color: 'white', fontSize: '1.5rem' }} />
              },
              {
                role: 'Recruiter',
                description: 'Discover talent and engage with promising candidates',
                icon: <FaBriefcase style={{ color: 'white', fontSize: '1.5rem' }} />
              },
              {
                role: 'Faculty',
                description: 'Guide students and collaborate on research projects',
                icon: <FaChalkboardTeacher style={{ color: 'white', fontSize: '1.5rem' }} />
              }
            ].map((item) => (
              <div key={item.role} style={{ backgroundColor: 'white', borderRadius: '0.5rem', padding: '2rem', color: '#2d3748' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#38a169', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', textAlign: 'center', marginBottom: '0.5rem' }}>
                  {item.role}
                </h3>
                <p style={{ fontSize: '0.875rem', textAlign: 'center', color: '#718096', marginBottom: '1rem' }}>
                  {item.description}
                </p>
                <button 
                  style={{ 
                    width: '100%', 
                    backgroundColor: '#38a169', 
                    color: 'white', 
                    padding: '0.75rem', 
                    borderRadius: '0.375rem', 
                    border: 'none', 
                    cursor: 'pointer', 
                    marginBottom: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2f855a'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#38a169'}
                >
                  Sign Up
                </button>
                <Link href="/login">
                  <button 
                    style={{ 
                      width: '100%', 
                      color: '#38a169', 
                      padding: '0.75rem', 
                      borderRadius: '0.375rem', 
                      border: '1px solid transparent', 
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.border = '1px solid #38a169';
                      e.currentTarget.style.backgroundColor = '#f0fff4';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.border = '1px solid transparent';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    Log In
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ backgroundColor: 'white', padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', color: '#2d3748' }}>
            {[
              {
                title: 'Quick Start',
                description: 'Easy onboarding with our 3-step process tailored for each user type',
                icon: <FaRocket style={{ color: 'white', fontSize: '1.5rem' }} />
              },
              {
                title: 'Direct Connections',
                description: 'Connect directly with students, faculty, and recruiters',
                icon: <FaUsers style={{ color: 'white', fontSize: '1.5rem' }} />
              },
              {
                title: 'Track Progress',
                description: 'Monitor projects and opportunities in real-time',
                icon: <FaChartLine style={{ color: 'white', fontSize: '1.5rem' }} />
              }
            ].map((feature) => (
              <div key={feature.title} style={{ textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <div style={{ width: '3rem', height: '3rem', backgroundColor: '#38a169', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#4a5568' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <FaUserGraduate style={{ color: '#38a169', fontSize: '1.25rem' }} />
                <h4 style={{ fontWeight: '600', marginRight: '0.5rem' }}>KIITStart</h4>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e0' }}>
                Empowering connections in the KIIT ecosystem
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Quick Links</h4>
              <ul style={{ fontSize: '0.875rem', color: '#cbd5e0', listStyleType: 'none', padding: 0 }}>
                <li>
                  <a href="#" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.3s' }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.3s' }}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: '#cbd5e0', textDecoration: 'none', transition: 'color 0.3s' }}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Connect</h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <FaTwitter style={{ width: '1.25rem', height: '1.25rem', color: '#cbd5e0', cursor: 'pointer', transition: 'color 0.3s' }} />
                <FaInstagram style={{ width: '1.25rem', height: '1.25rem', color: '#cbd5e0', cursor: 'pointer', transition: 'color 0.3s' }} />
                <FaEnvelope style={{ width: '1.25rem', height: '1.25rem', color: '#cbd5e0', cursor: 'pointer', transition: 'color 0.3s' }} />
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>Contact</h4>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e0' }}>
                KIIT University Bhubaneswar, Odisha - 751024<br />India
              </p>
            </div>
          </div>
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #4a5568', textAlign: 'center', fontSize: '0.875rem', color: '#cbd5e0' }}>
            © 2025 KIITStart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}