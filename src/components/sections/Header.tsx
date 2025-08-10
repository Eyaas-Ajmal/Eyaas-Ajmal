

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-14 grid grid-cols-3 items-center">
        <a href="#hero" className="font-semibold story-link justify-self-start">Eyaas</a>
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-6 text-sm justify-self-center">
          <a className="story-link" href="#about">About</a>
          <a className="story-link" href="#projects">Projects</a>
          <a className="story-link" href="#courses">Courses/Certs</a>
          <a className="story-link" href="#ml">ML Journey</a>
          <a className="story-link" href="#contact">Contact</a>
        </nav>
        <div className="justify-self-end" aria-hidden="true" />
      </div>
    </header>
  );
};

export default Header;
