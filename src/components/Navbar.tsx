export function Navbar() {
  return (
    <div 
      className="flex flex-row items-center justify-between backdrop-blur-[50px] border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
      style={{
        width: '100%',
        height: '32px',
        backgroundColor: 'rgba(28, 28, 30, 0.29)',
        WebkitBackdropFilter: 'blur(50px)',
        paddingLeft: '13.79px',
        paddingRight: '13.79px',
        margin: 0,
        top: 0
      }}
    >
      {/* Left side - Evie Ngo */}
      <div 
        className="flex-none"
        style={{
          height: '19px',
          fontFamily: "'SF Pro Text', sans-serif",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '15.5181px',
          lineHeight: '19px',
          color: '#FFFFFF'
        }}
      >
        Evie Ngo
      </div>

      {/* Right side - Navigation links */}
      <div 
        className="flex flex-row items-center"
        style={{
          gap: '24.14px',
          height: '18.97px'
        }}
      >
        <a 
          href="#projects"
          className="flex-none hover:opacity-80 transition-opacity"
          style={{
            width: '60px',
            height: '19px',
            fontFamily: "'SF Pro Text', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15.5181px',
            lineHeight: '19px',
            color: '#FFFFFF',
            textDecoration: 'none'
          }}
        >
          Projects
        </a>
        <a 
          href="#about"
          className="flex-none hover:opacity-80 transition-opacity"
          style={{
            width: '45px',
            height: '19px',
            fontFamily: "'SF Pro Text', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15.5181px',
            lineHeight: '19px',
            color: '#FFFFFF',
            textDecoration: 'none'
          }}
        >
          About
        </a>
        <a 
          href="#contact"
          className="flex-none hover:opacity-80 transition-opacity"
          style={{
            width: '59px',
            height: '19px',
            fontFamily: "'SF Pro Text', sans-serif",
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '15.5181px',
            lineHeight: '19px',
            color: '#FFFFFF',
            textDecoration: 'none'
          }}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
