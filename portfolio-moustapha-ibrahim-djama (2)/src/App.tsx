import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowUp, Menu, X, Zap, Network, BatteryCharging, ChartNoAxesCombined, Github, Linkedin, Copy, Check } from 'lucide-react';
import { PROJECTS, PROFILE_DATA, TECHNICAL_SOFTWARE, type Project } from './data/portfolioData';

const mail = `mailto:${PROFILE_DATA.email}?subject=Prise%20de%20contact%20%E2%80%94%20Portfolio%20ISE`;
const selection = [
  { project: PROJECTS[0], art: 'network', tag: 'Distribution', category: 'bt', title: 'Réseau électrique industriel', summary: 'Du bilan de puissance au choix des protections : concevoir une distribution cohérente.' },
  { project: PROJECTS[2], art: 'storage', tag: 'Stockage', category: 'energy', title: 'Simulation du stockage ENR', summary: 'Explorer l’équilibre entre production solaire, batterie et demande énergétique.' },
  { project: PROJECTS[3], art: 'building', tag: 'Bâtiment', category: 'energy', title: 'Audit énergétique d’un bâtiment', summary: 'Comprendre les consommations pour identifier et comparer les pistes d’amélioration.' },
  { project: PROJECTS[1], art: 'cables', tag: 'Dimensionnement', category: 'bt', title: 'Dimensionnement des câbles BT', summary: 'Relier sections, chute de tension et protections dans une méthode de calcul.' },
];
const expertise = [
  { Icon: Network, title: 'Concevoir & dimensionner', text: 'Bilans de puissance, réseaux HTA/BT, schémas unifilaires et coordination des protections.', note: 'Du besoin au schéma électrique.' },
  { Icon: BatteryCharging, title: 'Modéliser & simuler', text: 'Production renouvelable, stockage et analyse des flux dans les systèmes énergétiques hybrides.', note: 'Comprendre avant de décider.' },
  { Icon: ChartNoAxesCombined, title: 'Analyser & automatiser', text: 'Calculs avec Python, traitement de données et tableaux de bord pour éclairer les choix techniques.', note: 'Transformer les données en décisions.' },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState('');
  const [energized, setEnergized] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const scene = useRef<HTMLImageElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const sync = () => {
      const slug = location.hash.replace('#projet-', '');
      setProject(location.hash.startsWith('#projet-') ? PROJECTS.find(p => p.slug.toLowerCase() === slug.toLowerCase()) ?? null : null);
      setMenuOpen(false);
    };
    sync();
    window.addEventListener('hashchange', sync);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-20% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('hashchange', sync); observer.disconnect(); clearTimeout(copyTimer.current); };
  }, []);

  useEffect(() => {
    if (!project) { dialog.current?.close(); return; }
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [project]);

  function openProject(p: Project) {
    trigger.current = document.activeElement as HTMLElement;
    setProject(p);
    history.pushState(null, '', `#projet-${p.slug}`);
  }
  function closeProject() {
    setProject(null);
    if (location.hash.startsWith('#projet-')) history.replaceState(null, '', '#projets');
    trigger.current?.focus();
  }
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true); setCopyError(false);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch { setCopyError(true); }
  }

  return <>
    <a className="skip" href="#contenu">Aller au contenu</a>
    <header className="top"><div className="shell header">
      <a className="brand" href="#accueil" aria-label="Moustapha — Accueil"><span className="brand-mark"><svg viewBox="0 0 45 45" fill="none" aria-hidden="true"><path d="M9 33 19 12l7 13 10-17" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg></span><span><span className="brand-name">MOUSTAPHA.</span><span className="brand-kicker">INGÉNIERIE / ISE</span></span></a>
      <nav className={`nav ${menuOpen ? 'open' : ''}`} id="navigation" aria-label="Navigation principale">
        { [['projets', 'Projets'], ['expertises', 'Expertise'], ['parcours', 'À propos'], ['contact', 'Contact']].map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>) }
      </nav>
      <a className="top-contact" href={mail}>Me contacter <ArrowUpRight size={16} /></a>
      <button className="menu-button" aria-expanded={menuOpen} aria-controls="navigation" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setMenuOpen(!menuOpen)} onKeyDown={e => { if (e.key === 'Escape') setMenuOpen(false); }}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    </div></header>
    <main id="contenu">
      <section className="shell hero" id="accueil" aria-labelledby="hero-title">
        <div><span className="pill"><span className="dot" />STAGE DE 6 MOIS · FÉVRIER 2027</span><h1 id="hero-title">L’énergie,<br />pensée comme<br />un <span>système.</span></h1><div className="hero-type"><strong>Élève-ingénieur en Systèmes Électriques</strong><p>Réseaux BT · Dimensionnement · ENR · Data</p></div><p className="hero-text">Je suis Moustapha. J’explore les systèmes électriques par le calcul, la simulation et des études concrètes. Voici les projets qui donnent forme à ma façon de penser.</p><div className="actions"><a className="btn btn-primary" href="#projets">Explorer mes projets <ArrowUpRight size={19} /></a><a className="btn btn-outline" href="#contact">Échangeons <ArrowUpRight size={19} /></a></div></div>
        <div className={`hero-art ${energized ? 'energized' : ''}`} onPointerMove={e => { if (e.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return; const r = e.currentTarget.getBoundingClientRect(); if (scene.current) scene.current.style.transform = `perspective(1400px) rotateY(${((e.clientX-r.left)/r.width-.5)*5}deg) rotateX(${((e.clientY-r.top)/r.height-.5)*-4}deg)`; }} onPointerLeave={() => { if (scene.current) scene.current.style.transform = ''; }}>
          <img ref={scene} src="/design/energy-system.svg" alt="Système électrique illustré : production solaire, transformateur, batterie et réseau de distribution" width="900" height="700" fetchPriority="high" />
          <div className="energy-orbit" aria-hidden="true" /><button className="hero-switch" aria-pressed={energized} onClick={() => setEnergized(!energized)}><Zap size={14} />{energized ? 'Mettre en pause' : 'Activer les flux'}</button><span className="hero-tip">PRODUCTION → STOCKAGE → DISTRIBUTION</span>
        </div>
      </section>
      <div className="shell"><div className="stats"><div className="stat"><strong>04</strong><span>PROJETS À EXPLORER</span></div><div className="stat"><strong>01</strong><span>EXPÉRIENCE CHEZ EDD</span></div><div className="stat"><strong>ECAM–EPMI</strong><span>FORMATION INGÉNIEUR · 2027</span></div></div></div>
      <section className="shell section" id="projets"><div className="section-heading"><div><div className="eyebrow">01 / SÉLECTION DE PROJETS</div><h2>Des idées.<br className="mobile-break" /> <span>Des études concrètes.</span></h2></div><span className="section-index">01—04</span></div><p className="section-description">Quatre explorations de l’électricité et de l’énergie. Pour chacune, un problème à comprendre, une démarche à construire et des choix à expliquer.</p>
        <div className="filters" role="group" aria-label="Filtrer les projets">{[['all','Tout voir'],['bt','Réseaux électriques'],['energy','Énergie & ENR']].map(([key,label]) => <button key={key} className="filter" aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}<span className="filter-count">{key === 'all' ? '04' : '02'}</span></button>)}</div>
        <p className="sro" aria-live="polite">{filter === 'all' ? 4 : 2} projets affichés</p>
        <div className="projects-grid">{selection.filter(p => filter === 'all' || p.category === filter).map(p => <article className="project-card" key={p.project.id}><div className="project-info"><div><span className="proj-number">0{selection.indexOf(p)+1}</span><span className="proj-tag">{p.tag}</span></div><h3>{p.title}</h3><p>{p.summary}</p><button className="project-link" onClick={() => openProject(p.project)} aria-label={`Explorer l’étude : ${p.title}`}>EXPLORER L’ÉTUDE <ArrowUpRight size={17} /></button></div><div className="project-art"><img src={`/design/${p.art}.svg`} alt={`Illustration — ${p.title}`} loading="lazy" width="480" height="360" /></div></article>)}</div>
      </section>
      <section className="shell section case" id="etude"><div className="case-grid"><div><div className="eyebrow">EN DÉTAIL / DISTRIBUTION BT</div><h2>Dimensionner.<br />Protéger.<br /><span>Justifier.</span></h2><p className="case-description">Comment passer d’un besoin en puissance à une distribution électrique cohérente ? Une étude de réseau industriel, du transformateur aux départs.</p><div className="case-box"><div className="case-box-title">PARAMÈTRES DU CAS ÉTUDIÉ</div><div className="case-metrics"><div><strong>630 kVA</strong><small>Transformateur</small></div><div><strong>22,7 kA</strong><small>Court-circuit amont</small></div><div><strong>400 V</strong><small>Réseau triphasé</small></div></div></div><p className="case-note">Le schéma de principe rend le raisonnement visible : bilan de puissance, choix des protections et vérification des contraintes.</p><button className="btn btn-primary" onClick={() => openProject(PROJECTS[0])}>Découvrir la démarche <ArrowUpRight size={18} /></button></div><figure className="case-visual"><img src="/design/network-detail.svg" alt="Schéma de principe du réseau : transformateur 630 kVA, tableau général et départs électriques" loading="lazy" width="900" height="700" /><figcaption>Distribution HTA / BT · Schéma de principe de l’étude</figcaption></figure></div><div className="steps">{['Bilan de puissance','Schéma unifilaire','Protections & Ik','Vérifications ΔU'].map((step,i) => <div key={step}><strong>0{i+1}</strong>{step}</div>)}</div></section>
      <section className="expertise-band" id="expertises"><div className="shell section"><div className="eyebrow">02 / MA BOÎTE À OUTILS</div><h2>Comprendre. Concevoir.<br /><span>Faire le lien.</span></h2><p className="section-description">L’électrotechnique comme terrain d’étude. La simulation et les données comme moyens d’aller plus loin.</p><div className="expertise-grid">{expertise.map(({Icon,title,text,note}) => <article className="expertise-card" key={title}><span className="glyph"><Icon size={25} strokeWidth={1.5} /></span><h3>{title}</h3><p>{text}</p><span className="expertise-note">{note}</span></article>)}</div><div className="software"><span>OUTILS MOBILISÉS DANS MES ÉTUDES</span><div>{TECHNICAL_SOFTWARE.map(tool => <span title={tool.desc} key={tool.name}>{tool.name}</span>)}</div></div></div></section>
      <section className="shell section" id="parcours"><div className="about-panel"><div><div className="eyebrow">03 / DERRIÈRE LES PROJETS</div><h2>Un regard d’ingénieur.<br />Une curiosité de développeur.</h2><p>Je m’appelle Moustapha Ibrahim Djama. Après une prépa MP à Djibouti, j’ai rejoint l’ECAM-EPMI à Cergy pour me former aux systèmes électriques.</p><p>Chez Électricité de Djibouti, j’ai travaillé sur l’analyse de données énergétiques. Cette expérience nourrit mon envie de relier les modèles, les données et les réalités du terrain.</p><a className="text-link" href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer">Retrouvons-nous sur LinkedIn <ArrowUpRight size={17} /></a></div><div className="about-note"><strong>ECAM–EPMI</strong><small>Systèmes électriques<br />Promotion 2027</small><hr /><strong>EDD</strong><small>Analyse de données énergétiques<br />2025–2026</small><hr /><span className="location">Val-d’Oise · Mobilité France</span></div></div></section>
      <section className="shell contact" id="contact"><div className="contact-panel"><div><div className="eyebrow">04 / ET SI ON ÉCHANGEAIT ?</div><h2>Construisons<br />la suite. <span>↗</span></h2><p>Je recherche un stage de fin d’études de 6 mois à partir de février 2027. Un projet en systèmes électriques, bureau d’études ou énergie ? Parlons-en.</p><a className="email-link" href={mail}>{PROFILE_DATA.email}</a><div className="contact-links"><a href={PROFILE_DATA.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a><a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a><button onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Adresse copiée' : 'Copier l’adresse'}</button></div><span className="copy-status" role="status">{copyError ? 'Vous pouvez sélectionner l’adresse ci-dessus ou cliquer pour m’écrire.' : copied ? 'Adresse e-mail copiée.' : ''}</span></div><a className="btn btn-primary" href={mail}>Écrivez-moi <ArrowUpRight size={20} /></a></div></section>
    </main>
    <footer className="footer"><div className="shell"><span>© {new Date().getFullYear()} Moustapha Ibrahim Djama · Ingénierie & énergie</span><a href="#accueil" className="back-top">Retour en haut <ArrowUp size={16} /></a></div></footer>
    <dialog ref={dialog} aria-labelledby="dialog-title" onCancel={e => { e.preventDefault(); closeProject(); }} onClick={e => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeProject(); } }}>
      {project && <div className="modal-content"><div className="modal-top"><span className="modal-tag">ÉTUDE / {project.domain}</span><button className="modal-close" onClick={closeProject} aria-label="Fermer l’étude" autoFocus><X size={20} /></button></div><h2 id="dialog-title">{project.title}</h2><p>{project.shortDescription}</p><div className="tool-tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><h3>Le point de départ</h3><p>{project.context}</p><h3>La question à résoudre</h3><p>{project.problem}</p><h3>La démarche</h3><ol>{project.methodology.map(step => <li key={step}>{step}</li>)}</ol><h3>Ce que j’en retiens</h3><ul>{project.learnings.map(item => <li key={item}>{item}</li>)}</ul><div className="modal-actions"><a className="btn btn-primary" href={project.githubUrl} target="_blank" rel="noreferrer">Consulter le projet sur GitHub <ArrowUpRight size={17} /></a><a className="text-link" href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(`Question — ${project.title}`)}`}>Parlons de cette étude <ArrowUpRight size={17} /></a></div></div>}
    </dialog>
  </>;
}
