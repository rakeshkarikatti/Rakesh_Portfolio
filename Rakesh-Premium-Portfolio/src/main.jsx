import React,{useEffect,useRef,useState}from"react";
import{createRoot}from"react-dom/client";
import{ArrowDown,ArrowUpRight,Download,GitFork as Github,Link2 as Linkedin,Mail,MapPin,Menu,X}from"lucide-react";
import{gsap}from"gsap";import{ScrollTrigger}from"gsap/ScrollTrigger";
import{profile,projects,skills,experience}from"./data/portfolio";import portrait from"./assets/rakesh-profile.png";import"./styles.css";
gsap.registerPlugin(ScrollTrigger);

function App(){
 const [open,setOpen]=useState(false),[project,setProject]=useState(null),hero=useRef(null);
 const go=id=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};
 useEffect(()=>{const c=gsap.context(()=>{
  gsap.from(".hero-kicker",{y:25,opacity:0,duration:.7});gsap.from(".hero-title-line",{y:90,opacity:0,duration:1,stagger:.1,ease:"power4.out"});
  gsap.from(".hero-role,.hero-copy,.hero-actions,.social-row",{y:25,opacity:0,duration:.7,stagger:.08,delay:.35});
  gsap.from(".hero-photo",{scale:.9,opacity:0,duration:1.1,delay:.25});
  gsap.utils.toArray(".reveal").forEach(e=>gsap.from(e,{y:50,opacity:0,duration:.8,scrollTrigger:{trigger:e,start:"top 84%"}}));
 },hero);return()=>c.revert()},[]);
 useEffect(()=>{const m=e=>{if(innerWidth<900)return;let x=(e.clientX/innerWidth-.5)*12,y=(e.clientY/innerHeight-.5)*12;gsap.to(".hero-photo-wrap",{x:x*.45,y:y*.45,duration:.8});gsap.to(".orb",{x:-x,y:-y,duration:1})};addEventListener("mousemove",m);return()=>removeEventListener("mousemove",m)},[]);
 return <div ref={hero} className="site">
  <header className="nav"><button className="logo" onClick={()=>go("home")}>RK<span>.</span></button>
   <nav className={open?"links open":"links"}>{["home","about","stack","projects","experience","skills","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</nav>
   <button className="talk" onClick={()=>go("contact")}>LET'S TALK <ArrowUpRight size={15}/></button><button className="men" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>
  <main>
   <section id="home" className="hero"><div className="hero-grid"><div>
    <div className="hero-kicker"><i/>AVAILABLE FOR OPPORTUNITIES</div><div className="hero-title"><div className="hero-title-line">Rakesh</div><div className="hero-title-line accent">S Karikatti<span>.</span></div></div>
    <div className="hero-role">{profile.title}</div><p className="hero-copy">{profile.intro}</p>
    <div className="actions"><button className="primary" onClick={()=>go("projects")}>VIEW PROJECTS <ArrowUpRight size={17}/></button><a className="secondary" href="/resume.pdf" download>DOWNLOAD RESUME <Download size={16}/></a></div>
    <div className="social"><a href={profile.github} target="_blank"><Github/> GitHub</a><a href={profile.linkedin} target="_blank"><Linkedin/> LinkedIn</a><a href={"mailto:"+profile.email}><Mail/> Email</a></div>
   </div><div className="hero-visual"><div className="orb oa"/><div className="orb ob"/><div className="ring"/>
    <div className="hero-photo-wrap"><div className="glow"/><img className="hero-photo" src={portrait} alt="Rakesh S Karikatti"/></div>
    <div className="badge"><b>01</b><span>FULL-STACK<br/><small>DEVELOPER</small></span></div>
   </div></div><button className="scroll" onClick={()=>go("about")}>SCROLL TO EXPLORE <ArrowDown size={14}/></button></section>

   <section id="about" className="section"><div className="label">01 / ABOUT</div><div className="about-grid">
    <div className="reveal"><p className="eyebrow">BUILDING WITH CURIOSITY.</p><h2>Designing with <em>purpose.</em></h2>
     <p className="lead">I am Rakesh S Karikatti, an MCA student and aspiring Full-Stack Developer interested in building practical, modern, and intelligent software solutions.</p>
     <p className="muted">I focus on learning by building real projects, combining clean frontend experiences with reliable backend systems and intelligent features.</p><p className="location"><MapPin size={14}/> {profile.location}</p>
    </div><div className="about-card reveal"><img src={portrait} alt="Rakesh S Karikatti"/><div className="edu"><small>EDUCATION</small><p><b>MCA</b> Chetan Business School, Hubballi · 2025–2027</p><p><b>BCA</b> Bharatesh College of Computer Applications, Belagavi · 2022–2025</p></div></div>
   </div></section>

   <section id="stack" className="section"><div className="label">02 / STACK</div><div className="head reveal"><h2>Tools I <em>build with.</em></h2><p>Technology chosen for practical, maintainable software.</p></div>
    <div className="stack-grid">{Object.entries(skills).map(([k,v],i)=><div className="stack-card reveal" key={k}><small>0{i+1}</small><h3>{k}</h3><div className="tags">{v.map(x=><span key={x}>{x}</span>)}</div></div>)}</div>
   </section>

   <section id="projects" className="section"><div className="label">03 / SELECTED WORK</div><div className="head reveal"><h2>Selected <em>work.</em></h2><p>Interactive project presentation with room to grow.</p></div>
    <div className="projects">{projects.map(p=><article className="project reveal" key={p.n} onClick={()=>setProject(p)}><small>{p.n}</small><div className="project-grid"><div className="mock"><div className="mockbar">● ● ● <span>{p.title}</span></div><div className="mockbody"><i/><i/><div/></div></div><div><span className="eyebrow">{p.sub}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button className="explore">EXPLORE PROJECT <ArrowUpRight size={16}/></button></div></div></article>)}</div>
   </section>

   <section id="experience" className="section"><div className="label">04 / EXPERIENCE</div><div className="head reveal"><h2>Experience & <em>learning.</em></h2></div>
    <div className="timeline">{experience.map((e,i)=><div className="timeline-item reveal" key={i}><i/><small>{e.period}</small><div><span>{e.type}</span><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.note}</p></div></div>)}</div>
   </section>

   <section id="skills" className="section"><div className="label">05 / SKILLS</div><div className="skill-words reveal"><span>FRONTEND</span><b>BACKEND</b><span>DATABASE</span><b>AI / ML</b><span>TOOLS</span></div><p className="muted reveal">Skills are presented through project experience rather than artificial percentage scores.</p></section>

   <section id="contact" className="section contact"><div className="contact-box reveal"><div><div className="label">06 / CONTACT</div><h2>Let's build<br/><em>something meaningful.</em></h2><p>I'm open to internships, entry-level opportunities, collaborative projects, and conversations around technology and software development.</p></div>
    <div className="contact-links"><a href={"mailto:"+profile.email}><Mail/> {profile.email}<ArrowUpRight/></a><a href={profile.github} target="_blank"><Github/> GitHub<ArrowUpRight/></a><a href={profile.linkedin} target="_blank"><Linkedin/> LinkedIn<ArrowUpRight/></a></div></div></section>
  </main>
  <footer><div><b>Rakesh S Karikatti<span>.</span></b><small>MCA Student • Full-Stack Developer</small></div><span>© 2026 Rakesh S Karikatti</span><button onClick={()=>scrollTo({top:0,behavior:"smooth"})}>BACK TO TOP ↑</button></footer>
  {project&&<div className="modal-bg" onClick={()=>setProject(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button onClick={()=>setProject(null)}><X/></button><small>{project.n} / PROJECT</small><h2>{project.title}</h2><p>{project.desc}</p><h4>KEY FEATURES</h4><div className="features">{project.features.map(f=><span key={f}>+ {f}</span>)}</div></div></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);