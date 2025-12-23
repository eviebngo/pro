export function Navbar() {
  return (
    <div 
      className="flex flex-row items-center justify-between"
      style={{
        width: '100%',
        height: '32px',
        backgroundColor: 'rgba(0, 0, 0, 0.001)',
        backdropFilter: 'blur(71.56px)',
        WebkitBackdropFilter: 'blur(71.56px)',
        paddingLeft: '13.793924331665039px',
        paddingRight: '13.793924331665039px',
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
          gap: '24.139331817626953px',
          height: '18.966617584228516px'
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
          href="#archive"
          className="flex-none hover:opacity-80 transition-opacity"
          style={{
            width: '55px',
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
          Archive
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
