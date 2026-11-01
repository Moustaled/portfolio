import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Hand, Pause, Play } from 'lucide-react';

type Props = { name: 'systeme' | 'reseau' | 'stockage' | 'cables'; title: string; className?: string; onExplore?: () => void; detailed?: boolean };

export function InteractiveScene({ name, title, className = '', onExplore, detailed = false }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [interacting, setInteracting] = useState(detailed);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const url = `/animations/${name}.html`;
  const playing = visible && !paused && pageVisible;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
      if (entry.isIntersecting) setLoaded(true);
      else if (!detailed) setInteracting(false);
    }, { threshold: 0.05 });
    if (box.current) observer.observe(box.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const onMotion = () => setPaused(motion.matches);
    motion.addEventListener('change', onMotion);
    document.addEventListener('visibilitychange', onVisibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); motion.removeEventListener('change', onMotion); };
  }, []);

  function syncPlayback() {
    frame.current?.contentWindow?.postMessage({ type: 'portfolio:playback', playing }, location.origin);
  }
  useEffect(syncPlayback, [playing, loaded]);

  return <div ref={box} className={`interactive-scene ${className} ${detailed ? 'scene-detailed' : ''} ${interacting ? 'is-interacting' : ''}`}>
    <div className="scene-viewport">
      {loaded ? <iframe ref={frame} src={detailed ? url : `${url}?embed=1`} title={`Animation 3D — ${title}`} sandbox="allow-scripts allow-same-origin" tabIndex={interacting ? 0 : -1} onLoad={syncPlayback} /> : <div className="scene-placeholder">Scène 3D · {title}</div>}
      {!detailed && <span className="scene-badge"><span className="dot" />3D INTERACTIVE</span>}
    </div>
    {!detailed && <div className="scene-toolbar">
      <button type="button" onClick={() => { setInteracting(!interacting); if (!interacting) setPaused(false); }} aria-pressed={interacting}><Hand size={14} />{interacting ? 'Terminer' : 'Manipuler'}</button>
      <button type="button" onClick={() => setPaused(!paused)} aria-label={`${paused ? 'Animer' : 'Mettre en pause'} : ${title}`}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>
      {onExplore ? <button className="scene-explore" onClick={onExplore} aria-label={`Explorer avec explications : ${title}`}>Explorer <ArrowUpRight size={15} /></button> : <a href={url} target="_blank" rel="noreferrer">Ouvrir le simulateur <ArrowUpRight size={15} /></a>}
    </div>}
    {detailed && <a className="simulation-external" href={url} target="_blank" rel="noreferrer">Agrandir le simulateur <ArrowUpRight size={15} /></a>}
    <span className="sro" aria-live="polite">{interacting ? 'Faites glisser pour tourner la scène. Le bouton Terminer permet de reprendre le défilement.' : ''}</span>
  </div>;
}
