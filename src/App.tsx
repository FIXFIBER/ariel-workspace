import { useState } from 'react'
import { colors, fonts } from './styles/tokens'

const stats = [
  { title: "Today's Money", value: '$53,000', change: '+55%', up: true, icon: '💰' },
  { title: "Today's Users", value: '2,300', change: '+3%', up: true, icon: '👥' },
  { title: 'New Clients', value: '+3,462', change: '-2%', up: false, icon: '👤' },
  { title: 'Sales', value: '$103,430', change: '+5%', up: true, icon: '🛒' },
]

const sales = [
  { country: 'USA', flag: '🇺🇸', sales: '2500', percent: '80%', value: '$24,000' },
  { country: 'Germany', flag: '🇩🇪', sales: '1800', percent: '60%', value: '$18,000' },
  { country: 'UK', flag: '🇬🇧', sales: '1200', percent: '40%', value: '$12,000' },
  { country: 'Nigeria', flag: '🇳🇬', sales: '900', percent: '30%', value: '$9,000' },
  { country: 'Canada', flag: '🇨🇦', sales: '750', percent: '25%', value: '$7,500' },
]

const navItems = [
  { label: 'Dashboard', icon: '📊', active: true },
  { label: 'Tables', icon: '📋', active: false },
  { label: 'Billing', icon: '💳', active: false },
  { label: 'Profile', icon: '👤', active: false },
  { label: 'Settings', icon: '⚙️', active: false },
]

export default function App() {
  const [activeNav, setActiveNav] = useState(0)

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: colors.paper }}>
      {/* Sidebar */}
      <aside style={{
        width: 256,
        background: colors.white,
        borderRight: `2px solid ${colors.ink}`,
        boxShadow: `3px 3px 0 ${colors.ink}`,
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{
            width: 40, height: 40, background: colors.ink, display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: colors.white, fontWeight: 700, fontSize: 18,
          }}>
            A
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, fontFamily: fonts.display }}>Ariel</div>
            <div style={{ fontSize: 12, color: 'rgba(20,20,20,0.6)' }}>Workspace</div>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem', border: 'none', borderRadius: 0,
                background: activeNav === i ? colors.ink : 'transparent',
                color: activeNav === i ? colors.white : colors.ink,
                fontWeight: 600, fontSize: 14, cursor: 'pointer',
                fontFamily: fonts.body, transition: 'all 150ms ease',
                boxShadow: activeNav === i ? `3px 3px 0 ${colors.primary}` : 'none',
              }}
            >
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{
          padding: '1rem', background: colors.paper, border: `2px solid ${colors.ink}`,
          boxShadow: `3px 3px 0 ${colors.ink}`,
        }}>
          <div style={{ fontSize: 12, fontWeight: 600, marginBottom: '0.5rem' }}>Need help?</div>
          <div style={{ fontSize: 11, color: 'rgba(20,20,20,0.6)', marginBottom: '0.75rem' }}>
            Check our docs
          </div>
          <button className="brutalist-btn" style={{ width: '100%', fontSize: 12 }}>
            Documentation
          </button>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{
          height: 64, background: colors.white, borderBottom: `2px solid ${colors.ink}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 1.5rem',
        }}>
          <div>
            <div style={{ fontSize: 12, color: 'rgba(20,20,20,0.5)' }}>Pages / Dashboard</div>
            <div style={{ fontWeight: 700, fontSize: 16, fontFamily: fonts.display }}>Dashboard</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <input
              className="brutalist-input"
              placeholder="Search..."
              style={{ width: 200, height: 36, fontSize: 13 }}
            />
            <button className="brutalist-btn" style={{ height: 36, fontSize: 12, padding: '0 1rem' }}>
              Sign In
            </button>
          </div>
        </header>

        {/* Content */}
        <div style={{ padding: '1.5rem', flex: 1, overflow: 'auto' }}>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {stats.map((stat) => (
              <div key={stat.title} className="brutalist-card" style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(20,20,20,0.6)', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>
                      {stat.title}
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 700, fontFamily: fonts.display }}>{stat.value}</div>
                  </div>
                  <div style={{
                    width: 48, height: 48, background: colors.paper, border: `2px solid ${colors.ink}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  }}>
                    {stat.icon}
                  </div>
                </div>
                <div style={{ marginTop: '0.75rem', fontSize: 13 }}>
                  <span style={{ color: stat.up ? colors.primary : colors.alert, fontWeight: 700 }}>
                    {stat.change}
                  </span>
                  <span style={{ color: 'rgba(20,20,20,0.5)' }}> since yesterday</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts + Table */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
            {/* Chart placeholder */}
            <div className="brutalist-card" style={{ padding: '1.25rem', minHeight: 300 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ fontWeight: 700, fontSize: 16, fontFamily: fonts.display }}>Sales Overview</div>
                <div style={{ fontSize: 13, color: colors.primary, fontWeight: 600 }}>📈 4% more in 2024</div>
              </div>
              <div style={{
                height: 220, background: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(20,20,20,0.05) 40px, rgba(20,20,20,0.05) 41px)`,
                border: `1px solid rgba(20,20,20,0.1)`, display: 'flex', alignItems: 'flex-end', padding: '1rem', gap: '0.5rem',
              }}>
                {[60, 80, 45, 90, 70, 85, 55, 75, 95, 65, 80, 70].map((h, i) => (
                  <div key={i} style={{
                    flex: 1, height: `${h}%`, background: i === 8 ? colors.primary : colors.ink,
                    transition: 'all 150ms ease',
                  }} />
                ))}
              </div>
            </div>

            {/* Sales Table */}
            <div className="brutalist-card" style={{ padding: '1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: 16, fontFamily: fonts.display, marginBottom: '1rem' }}>Sales by Country</div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${colors.ink}` }}>
                    <th style={{ textAlign: 'left', padding: '0.5rem 0', fontSize: 11, textTransform: 'uppercase', fontWeight: 700 }}>Country</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem 0', fontSize: 11, textTransform: 'uppercase', fontWeight: 700 }}>Sales</th>
                    <th style={{ textAlign: 'right', padding: '0.5rem 0', fontSize: 11, textTransform: 'uppercase', fontWeight: 700 }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((row) => (
                    <tr key={row.country} style={{ borderBottom: '1px solid rgba(20,20,20,0.1)' }}>
                      <td style={{ padding: '0.625rem 0', fontSize: 13, fontWeight: 500 }}>
                        <span style={{ marginRight: '0.5rem' }}>{row.flag}</span>
                        {row.country}
                      </td>
                      <td style={{ padding: '0.625rem 0', fontSize: 13, textAlign: 'right', fontWeight: 600 }}>{row.sales}</td>
                      <td style={{ padding: '0.625rem 0', fontSize: 13, textAlign: 'right', color: colors.primary, fontWeight: 700 }}>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
