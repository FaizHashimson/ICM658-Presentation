"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BellRing,
  BookOpenCheck,
  Boxes,
  Check,
  CircleDollarSign,
  Database,
  Eye,
  FileText,
  Hexagon,
  LayoutDashboard,
  Mail,
  Maximize2,
  MousePointer2,
  Minimize2,
  PackageCheck,
  Pause,
  Play,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
} from "lucide-react";

type SlideProps = {
  index: number;
  openImage: (src: string, alt: string) => void;
};

type LightboxImage = { src: string; alt: string } | null;

const siteImage = "/assets/sitetarik-website.png";
const liveHeroImage = "/assets/sitetarik-hero-live.png";
const hatiwajaAuditBeforeImage = "/assets/hatiwaja-audit-before.png";
const hatiwajaAuditAfterImage = "/assets/hatiwaja-audit-after.png";
const cmsImage = "/assets/sitetarik-cms.png";
const dashboardImage = "/assets/sitetarik-dashboard.png";
const blogImage = "/assets/blog-preview.png";
const mobileImage = "/assets/mobile-view.png";
const gmailNotificationImage = "/assets/gmail-order-notification.png";
const hatiwajaPilotImage = "/assets/hatiwaja-pilot-home.png";
const storageMapImage = "/assets/sitetarik-storage-map.png";
const mobileDemoVideo = "/assets/icm658-mobile-demo.mp4";

function WhatsAppIcon({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 448 512" aria-label="WhatsApp" role="img" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.6-138c-5.6-2.8-33.2-16.4-38.3-18.3-5.1-1.9-8.8-2.8-12.5 2.8s-14.4 18.3-17.6 22.1c-3.2 3.7-6.5 4.2-12.1 1.4-33.2-16.6-55-29.6-76.9-67.2-5.8-10 5.8-9.3 16.6-31 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 33.2-13.6 37.9-26.8 4.6-13.2 4.6-24.5 3.2-26.8-1.4-2.5-5.1-4-10.6-6.7z" />
    </svg>
  );
}

function Motif() {
  return (
    <>
      <Hexagon className="motif motif-one" aria-hidden="true" />
      <Hexagon className="motif motif-two" aria-hidden="true" />
      <Hexagon className="motif motif-three" aria-hidden="true" />
      <Hexagon className="motif motif-four" aria-hidden="true" />
    </>
  );
}

function Header({ index, eyebrow = "ICM658 DIGITAL CONTENT MANAGEMENT PROJECT" }: { index: number; eyebrow?: string }) {
  return (
    <header className="slide-header">
      <div className="brand-lockup">
        <img className="brand-mark" src="/assets/sitetarik-logo.png" alt="SiteTarik" />
        <strong>SiteTarik</strong>
      </div>
      <span className="eyebrow">{eyebrow}</span>
    </header>
  );
}

function FeatureRow({ icon: Icon, children, accent = false }: { icon: React.ElementType; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className="feature-row">
      <span className={`hex-icon ${accent ? "black" : "red"}`}><Hexagon fill="currentColor" /><Icon className="hex-symbol" /></span>
      <div>{children}</div>
    </div>
  );
}

function ClickableImage({ src, alt, openImage, className = "" }: { src: string; alt: string; openImage: SlideProps["openImage"]; className?: string }) {
  return (
    <button className={`image-card ${className}`} onClick={() => openImage(src, alt)} aria-label={`Enlarge: ${alt}`}>
      <img src={src} alt={alt} />
      <span className="image-zoom"><Eye size={18} /> Click to enlarge</span>
    </button>
  );
}

function SlideOne({ index, openImage }: SlideProps) {
  return (
    <section className="slide hero-slide">
      <Motif />
      <Header index={index} eyebrow="ICM658 DIGITAL INFORMATION CONTENT MANAGEMENT PROJECT" />
      <div className="hero-copy">
        <p className="red-kicker">SiteTarik</p>
        <h1>Making Website<br /><span>Improvement</span> Simple</h1>
        <div className="red-rule" />
        <p className="hero-subtitle">A digital content management prototype for Malaysian SMEs.</p>
        <div className="title-meta">
          <span>Muhammad Faiz Bin Hashim</span>
          <span>2024228802</span>
        </div>
      </div>
      <a className="image-card hero-image hero-live-link" href="https://sitetarik.com" target="_blank" rel="noreferrer" aria-label="Open the live SiteTarik website">
        <img src={liveHeroImage} alt="SiteTarik live website preview" />
        <span className="image-zoom"><MousePointer2 size={18} /> Open sitetarik.com</span>
      </a>
      <p className="speaker-line">Can a small business manage website updates, SEO, blogs, payments and customer details without everything becoming scattered?</p>
    </section>
  );
}

function SlideTwo({ index, openImage }: SlideProps) {
  return (
    <section className="slide split-slide">
      <Motif />
      <Header index={index} />
      <div className="split-copy">
        <h2>Website Information<br /><span>Is Scattered</span></h2>
        <p className="lead">Website updates should not require a digital team.</p>
        <div className="feature-stack">
          <FeatureRow icon={WhatsAppIcon}><strong>Website details are scattered</strong><p>WhatsApp, email, notes and payment records.</p></FeatureRow>
          <FeatureRow icon={FileText} accent><strong>Updates, SEO and blogs are difficult</strong><p>Each item needs regular attention and clear information.</p></FeatureRow>
          <FeatureRow icon={SearchCheck}><strong>Many SMEs have no digital team</strong><p>Small businesses may lack time and technical support.</p></FeatureRow>
        </div>
      </div>
      <div className="scatter-visual" aria-label="Scattered information comparison">
        <div className="scatter-sources"><span><WhatsAppIcon /> WhatsApp</span><span><Mail /> Email</span><span><FileText /> Notes</span><span><CircleDollarSign /> Payment records</span></div>
        <ArrowDown className="scatter-arrow" />
        <div className="scatter-result"><X /> <strong>Scattered information</strong><small>Missing details · repeated communication</small></div>
        <p className="scatter-caption">Figure 1. Sources of scattered website information.</p>
      </div>
      <p className="speaker-line">Before SiteTarik, customer details can be split across WhatsApp, email, notes and payment records. This can cause missing information, repeated communication and difficulty managing website improvement work.</p>
    </section>
  );
}

function SlideThree({ index }: SlideProps) {
  const steps = [
    [PackageCheck, "Choose", "a package"],
    [Upload, "Submit", "business details"],
    [CircleDollarSign, "Pay", "securely"],
    [Boxes, "Prepare", "content"],
    [WhatsAppIcon, "Deliver", "on WhatsApp"],
  ] as const;
  return (
    <section className="slide flow-slide">
      <Motif />
      <Header index={index} />
      <h2>The <span>Solution:</span> SiteTarik</h2>
      <p className="lead">One simple journey, from request to final delivery.</p>
      <div className="journey-flow">
        {steps.map(([Icon, title, text], stepIndex) => (
          <div className="journey-step" key={title}>
            <div className="number-hex"><Hexagon fill="currentColor" /><span>{stepIndex + 1}</span></div>
            <div className="step-icon"><Icon size={42} strokeWidth={1.8} /></div>
            <strong>{title}</strong>
            <small>{text}</small>
            {stepIndex < steps.length - 1 ? <ArrowRight className="step-arrow" /> : null}
          </div>
        ))}
      </div>
        <p className="figure-caption flow-caption">Figure 2. SiteTarik customer workflow.</p>
      <p className="speaker-line">SiteTarik replaces a scattered manual process with one simple workflow. The customer submits information once, and the administrator can manage the request in an organised way.</p>
    </section>
  );
}

function SlideFour({ index }: SlideProps) {
  return (
    <section className="slide clo-slide">
      <Motif />
      <Header index={index} eyebrow="CLO1: CONSTRUCT A DIGITAL CONTENT MANAGEMENT PROTOTYPE" />
      <div className="clo-heading"><h2>Collect <span>→ Organise →</span> Manage → Deliver</h2></div>
      <figure className="clo-rail">
        <article className="rail-stage"><span className="rail-node">01</span><h3>Collect</h3><p>Customer request</p><p>Website URL</p><p>Blog Brief</p></article>
        <article className="rail-stage"><span className="rail-node">02</span><h3>Organise</h3><p>Stripe: payment + brief</p><p>D1: SiteTarik text</p><p>R2: SiteTarik images</p></article>
        <article className="rail-stage"><span className="rail-node">03</span><h3>Manage</h3><p>Resend: order email</p><p>CMS: SiteTarik blog</p></article>
        <article className="rail-stage rail-deliver"><span className="rail-node">04</span><h3>Deliver</h3><p>Customer link</p><p>via WhatsApp</p></article>
        <figcaption className="figure-caption">Figure 3. SiteTarik data collection, storage and delivery flow.</figcaption>
      </figure>
      <p className="tech-footer">Next.js · React · TypeScript · Tailwind CSS · Stripe · Cloudflare D1/R2 · Resend · WhatsApp</p>
      <p className="speaker-line">Stripe holds customer payment and Blog Brief data. Resend notifies the administrator; Cloudflare D1/R2 are only for SiteTarik’s own blog.</p>
    </section>
  );
}

function SlideFive({ index }: SlideProps) {
  const stages = [
    [PackageCheck, "SEO Enhancement", "Customer request"],
    [CircleDollarSign, "Stripe payment", "Payment confirmed"],
    [Database, "Stored order", "Details linked"],
    [Mail, "Gmail notification", "Admin notified"],
    [LayoutDashboard, "Admin dashboard", "Blog Brief collected"],
  ] as const;
  return (
    <section className="slide plans-slide">
      <Motif />
      <Header index={index} eyebrow="LIVE DEMONSTRATION" />
      <div className="plans-intro"><h2>Choose Your <span>Package</span></h2><p className="lead">Both refresh an existing website. SEO Enhancement adds structured content growth.</p></div>
      <div className="plan-overview">
        <article className="plan-option"><p className="plan-label">01 · Base plan</p><h3>Core Reborn</h3><p className="plan-price">RM100 <small>/ year</small></p><p>Website refresh, basic SEO, GTM and GA4, hosting, and WhatsApp delivery.</p></article>
        <article className="plan-option plan-option-selected"><p className="plan-label">02 · Live demo route</p><h3>SEO Enhancement</h3><p className="plan-price">RM220 <small>total</small></p><p>Core Reborn plus 12 SEO-friendly blog pages. The Blog Brief follows checkout.</p></article>
      </div>
      <div className="demo-route-title">Live route: SEO Enhancement</div>
      <div className="demo-progression">{stages.map(([Icon, label, detail], stageIndex) => <div key={label}><span><Icon /></span><strong>{label}</strong><small>{detail}</small>{stageIndex < stages.length - 1 ? <ArrowRight /> : null}</div>)}</div>
      <p className="speaker-line">I will show the customer journey using SEO Enhancement because it unlocks the Blog Brief process. After payment, the customer, website, package and receipt details are linked. The administrator receives an email in Gmail through the Resend service.</p>
    </section>
  );
}

function SlideSix({ index }: SlideProps) {
  const items = [
    [BadgeCheck, "Payment confirmed", "Stripe confirms a completed checkout."],
    [Database, "Order details stored", "Customer, website, package and receipt stay linked."],
    [Mail, "Admin notified", "The notification arrives in Gmail via Resend."],
    [BookOpenCheck, "Blog Brief collected", "SEO Enhancement captures the content direction."],
  ] as const;
  return (
    <section className="slide request-slide">
      <Motif />
      <Header index={index} eyebrow="LIVE DEMONSTRATION: ORGANISED REQUEST" />
      <div className="request-head"><h2>A <span>Managed Record</span></h2><p className="lead">One paid request, ready for review and content planning.</p></div>
      <div className="request-grid">
        {items.map(([Icon, title, description], itemIndex) => (
          <article className="request-card" key={title}>
            <span className="request-count">0{itemIndex + 1}</span><Icon size={30} />
            <h3>{title}</h3><p>{description}</p>
          </article>
        ))}
      </div>
        <a className="notification-evidence email-evidence-link" href="https://mail.google.com/mail/u/0/#search/demo/FMfcgzQhVNXbRgqQgzlGDsjZBjHzXljx" target="_blank" rel="noreferrer" aria-label="Open the Gmail email evidence">
          <div className="email-evidence-chrome"><span><Mail size={17} /> Email evidence</span><small>Resend → Gmail</small></div>
          <div className="email-evidence-preview"><img src={gmailNotificationImage} alt="SiteTarik order notification received in Gmail" /></div>
          <p className="email-evidence-note"><span /> Open the actual notification in Gmail <MousePointer2 size={15} /></p>
        </a>
      <p className="speaker-line">The live demo continues here: show the Gmail notification, the Blog Brief and the paid order in the dashboard.</p>
    </section>
  );
}

function SlideSeven({ index }: SlideProps) {
  return (
    <section className="slide admin-slide">
      <Motif />
      <Header index={index} eyebrow="ADMIN OPERATIONS" />
      <div className="admin-copy">
        <p className="red-kicker">Internal tools</p>
        <h2><span>Admin</span> Operations</h2>
        <p className="lead">Separate protected areas for SiteTarik content and business monitoring.</p>
      </div>
      <div className="admin-tools" aria-label="SiteTarik CMS and dashboard overview">
        <article className="admin-tool cms-tool">
          <div className="admin-tool-heading"><span><BookOpenCheck size={24} /></span><div><p>Content management</p><h3>SiteTarik CMS</h3></div></div>
          <p className="admin-action-line">Create · Read · Update · Delete</p>
          <a className="image-card admin-cms-image admin-tool-link" href="https://sitetarik.com/cms" target="_blank" rel="noreferrer" aria-label="Open SiteTarik CMS in a new tab">
            <img src={cmsImage} alt="SiteTarik Blog CMS editor" />
            <span className="image-zoom"><MousePointer2 size={16} /> Open sitetarik.com/cms</span>
          </a>
          <p className="admin-tool-note">Manage SiteTarik blog posts, images, sections, publishing status and live preview.</p>
        </article>
        <article className="admin-tool dashboard-tool">
          <div className="admin-tool-heading"><span><LayoutDashboard size={24} /></span><div><p>Business monitoring</p><h3>SiteTarik Dashboard</h3></div></div>
          <a className="dashboard-preview admin-tool-link" href="https://sitetarik.com/dashboard" target="_blank" rel="noreferrer" aria-label="Open SiteTarik Dashboard in a new tab">
            <img src={dashboardImage} alt="SiteTarik paid customer dashboard" />
            <span className="image-zoom"><MousePointer2 size={16} /> Open sitetarik.com/dashboard</span>
          </a>
          <p className="admin-tool-note">Review paid customers, revenue, package and industry breakdowns, payment records and PDF reports.</p>
        </article>
      </div>
      <p className="figure-caption admin-caption">Figure 4. SiteTarik internal content and business-management tools.</p>
      <p className="speaker-line">The CMS manages SiteTarik’s own blog content through create, read, update and delete functions. The dashboard monitors paid customers, revenue, plans, industries, payment records and downloadable reports.</p>
    </section>
  );
}

function SlideEight({ index, openImage }: SlideProps) {
  return (
    <section className="slide refresh-slide">
      <Motif />
      <Header index={index} eyebrow="LIVE DEMONSTRATION: HATI WAJA PILOT WEBSITE" />
      <div className="refresh-copy"><p className="red-kicker">Hosted pilot result</p><h2>Hati Waja<br /><span>Website Refresh</span></h2><p className="lead">A pilot website, refreshed and deployed as a hosted result.</p>
        <ol className="capture-list"><li><span>1</span> Capture pilot pages</li><li><span>2</span> Create local routes and preserve the layout</li><li><span>3</span> Check SEO, images and tracking</li><li><span>4</span> Deploy the refreshed output</li></ol>
      </div>
        <a className="pilot-site-card" href="https://4-agensi-pekerjaan-hati-waja.pages.dev/" target="_blank" rel="noreferrer" aria-label="Open the hosted Hati Waja pilot website">
        <img src={hatiwajaPilotImage} alt="Hati Waja hosted pilot website homepage" />
        <span className="image-zoom"><MousePointer2 size={18} /> Open hosted Hati Waja pilot</span>
      </a>
      <div className="blog-brief"><strong>Blog Brief input</strong><span>Business · services · keywords · location · goal · CTA</span><ArrowRight /><strong>Output</strong><span>Blog overview + one useful blog post<br />Same brand style · factual review · Malaysian SME language</span></div>
        <div className="blog-question"><Sparkles size={22} /><span><strong>Question for the panel:</strong> On the Hatiwaja Blog page, which card is the existing company blog and which is the AI-assisted pilot draft?</span></div>
        <p className="speaker-line">I will open the hosted Hati Waja pilot website, then use its Blog page to compare the existing company articles with one AI-assisted, fact-checked pilot draft.</p>
      </section>
  );
}

function MobileDemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  };

  const setPlaybackRate = (nextSpeed: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = nextSpeed;
    setSpeed(nextSpeed);
  };

  const seek = (seconds: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      seek(event.key === "ArrowLeft" ? -5 : 5);
    }
  };

  return (
    <div className="mobile-demo-player" tabIndex={0} onPointerDown={(event) => event.currentTarget.focus()} onKeyDown={handleKeyDown} aria-label="Mobile application demonstration video">
      <video
        ref={videoRef}
        preload="metadata"
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={mobileDemoVideo} type="video/mp4" />
        Your browser does not support this video.
      </video>
      <div className="mobile-video-controls" aria-label="Video controls">
        <button className="video-play-button" type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause video" : "Play video"}>
          {isPlaying ? <Pause size={17} fill="currentColor" /> : <Play size={17} fill="currentColor" />}
        </button>
        <div className="video-speed-buttons" aria-label="Playback speed">
          {[2, 3].map((nextSpeed) => (
            <button key={nextSpeed} type="button" className={speed === nextSpeed ? "active" : ""} onClick={() => setPlaybackRate(nextSpeed)} aria-pressed={speed === nextSpeed}>
              {nextSpeed}×
            </button>
          ))}
        </div>
      </div>
      <p className="video-seek-help">Focus video · ← / → seek 5s</p>
    </div>
  );
}

function SlideNine({ index, openImage }: SlideProps) {
  return (
    <section className="slide mobile-slide">
      <Motif />
      <Header index={index} eyebrow="LIVE DEMONSTRATION: MOBILE ACCESS" />
      <div className="mobile-copy"><p className="red-kicker">Simple mobile prototype</p><h2>Mobile Access<br /><span>Without an App</span></h2><p className="lead">The same responsive SiteTarik website, ready from the phone home screen.</p>
        <div className="mobile-steps"><div><span>1</span><strong>Open</strong><small>sitetarik.com</small></div><ArrowRight /><div><span>2</span><strong>Add</strong><small>to Home Screen</small></div><ArrowRight /><div><span>3</span><strong>Use</strong><small>SiteTarik from the phone</small></div></div>
        <div className="advisor-note"><ShieldCheck size={24} /><span>Responsive mobile-browser access. No separate native application required.</span></div>
      </div>
      <div className="phone-visual"><MobileDemoVideo /></div>
      <p className="speaker-line">The mobile prototype uses the responsive website and a home-screen shortcut, so the main functions remain easy to access.</p>
    </section>
  );
}

function SlideTen({ index }: SlideProps) {
  const coreEvidence = [
    "CMS: Create · Read · Update · Delete",
    "Data storage: Stripe metadata · Cloudflare D1/R2",
    "Admin dashboard: orders · revenue · reports",
    "Mobile access: browser · Add to Home Screen",
  ];
  return (
    <section className="slide conclusion-slide">
      <Motif />
      <Header index={index} eyebrow="RESULTS AND CONCLUSION" />
      <div className="conclusion-copy"><p className="red-kicker">The result</p><h2>The Prototype<br /><span>Works.</span></h2><p className="lead">SiteTarik turns a customer request into organised digital content and a clear final delivery process.</p>
        <div className="result-row"><strong>14/14</strong><span>functional checks<br />passed</span></div>
      </div>
      <div className="result-panel"><h3>Core prototype evidence</h3>{coreEvidence.map((item) => <p key={item}><span><Check size={16} /></span>{item}</p>)}<p className="test-coverage">Also checked: payment, notification, Blog Brief, tracking and basic SEO.</p><div className="limit-note"><BellRing size={18} /><span><strong>Honest limitation:</strong> paid-client validation was not achieved.</span></div></div>
      <div className="closing-line">SiteTarik is not only a service website. It is a working prototype that collects, stores, organises and manages digital content from customer request to final delivery — <strong>therefore achieving CLO1.</strong></div>
      <p className="speaker-line">The technical prototype worked and achieved CLO1. The honest limitation is commercial validation: the target of ten paid clients was not achieved.</p>
    </section>
  );
}

const slides = [SlideOne, SlideTwo, SlideThree, SlideFour, SlideFive, SlideSix, SlideSeven, SlideEight, SlideNine, SlideTen];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<LightboxImage>(null);
  const [auditReveal, setAuditReveal] = useState(false);
  const [storageReveal, setStorageReveal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const wheelLock = useRef(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const goTo = useCallback((next: number) => setCurrent(Math.max(0, Math.min(slides.length - 1, next))), []);
  const openImage = useCallback((src: string, alt: string) => setLightbox({ src, alt }), []);
  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      // The browser may block full-screen until a direct user click; the button is that user gesture.
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented) return;
      if (lightbox) {
        if (event.key === "Escape") setLightbox(null);
        return;
      }
      if (auditReveal) {
        if (event.key.toLowerCase() === "r" || event.key === "Escape") {
          event.preventDefault();
          setAuditReveal(false);
        }
        return;
      }
      if (storageReveal) {
        if (event.key.toLowerCase() === "r" || event.key === "Escape") {
          event.preventDefault();
          setStorageReveal(false);
        }
        return;
      }
      if (current === 3 && event.key.toLowerCase() === "r") {
        event.preventDefault();
        setStorageReveal(true);
        return;
      }
      if (current === 7 && event.key.toLowerCase() === "r") {
        event.preventDefault();
        setAuditReveal(true);
        return;
      }
      if (["ArrowRight", "PageDown", "ArrowDown"].includes(event.key)) { event.preventDefault(); goTo(current + 1); }
      if (["ArrowLeft", "PageUp", "ArrowUp"].includes(event.key)) { event.preventDefault(); goTo(current - 1); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [auditReveal, current, goTo, lightbox, storageReveal]);

  useEffect(() => {
    const updateFullscreenState = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", updateFullscreenState);
    return () => document.removeEventListener("fullscreenchange", updateFullscreenState);
  }, []);

  useEffect(() => {
    stageRef.current?.scrollTo({ top: 0, behavior: "auto" });
    setAuditReveal(false);
    setStorageReveal(false);
  }, [current]);

  const onWheel = (event: React.WheelEvent) => {
    if (window.matchMedia("(max-width: 800px)").matches) return;
    if (lightbox || auditReveal || storageReveal || wheelLock.current || Math.abs(event.deltaY) < 15) return;
    wheelLock.current = true;
    goTo(current + (event.deltaY > 0 ? 1 : -1));
    window.setTimeout(() => { wheelLock.current = false; }, 560);
  };

  const ActiveSlide = slides[current];
  return (
    <main className="presentation-shell" onWheel={onWheel}>
      <div className="slide-stage" ref={stageRef}><ActiveSlide index={current} openImage={openImage} /></div>
        <div className="slide-progress" aria-label={`Slide ${current + 1} of ${slides.length}`}>
          <span className="progress-track"><span className="progress-fill" style={{ width: `${((current + 1) / slides.length) * 100}%` }} /></span>
          <span className="progress-label">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        </div>
        <button className="fullscreen-toggle" onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"} title={isFullscreen ? "Exit full screen" : "Full screen"}>{isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}</button>
      {lightbox ? <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.alt} onClick={() => setLightbox(null)}><button className="lightbox-close" aria-label="Close image" onClick={() => setLightbox(null)}><X /></button><img src={lightbox.src} alt={lightbox.alt} onClick={(event) => event.stopPropagation()} /></div> : null}
      {auditReveal ? <div className="audit-reveal" role="dialog" aria-modal="true" aria-label="Hati Waja website audit comparison" onClick={() => setAuditReveal(false)}>
        <section className="audit-reveal-panel" onClick={(event) => event.stopPropagation()}>
          <button className="audit-reveal-close" onClick={() => setAuditReveal(false)} aria-label="Close audit comparison"><X size={20} /></button>
          <p className="audit-reveal-kicker">Optional audit story</p>
          <h2>Why Hati Waja?</h2>
          <p className="audit-reveal-intro">Before contacting the business, I used an audit to identify visible SEO and maintenance gaps. The pilot refresh was then reviewed again.</p>
          <div className="audit-reveal-comparison">
            <article><div className="audit-reveal-label"><span>Before</span><small>Initial website audit</small></div><img src={hatiwajaAuditBeforeImage} alt="Hati Waja website audit before the refresh" /><p>SEO Grade B · Best Practices Grade C</p></article>
            <ArrowRight className="audit-reveal-arrow" />
            <article><div className="audit-reveal-label"><span>After</span><small>Website strengths review</small></div><img src={hatiwajaAuditAfterImage} alt="Hati Waja website review after the refresh" /><p>SEO Grade A · Best Practices Grade A</p></article>
          </div>
        </section>
      </div> : null}
      {storageReveal ? <div className="storage-reveal" role="dialog" aria-modal="true" aria-label="SiteTarik data storage map" onClick={() => setStorageReveal(false)}>
        <section className="storage-reveal-panel" onClick={(event) => event.stopPropagation()}>
          <button className="storage-reveal-close" onClick={() => setStorageReveal(false)} aria-label="Close storage map"><X size={20} /></button>
          <p className="storage-reveal-kicker">Optional storage map</p>
          <h2>Two separate content areas</h2>
          <p className="storage-reveal-intro">Customer order information stays in Stripe. Cloudflare is used only for SiteTarik’s own blog content.</p>
          <img className="storage-reveal-image" src={storageMapImage} alt="Diagram showing separate Stripe customer-order and Cloudflare CMS-content storage flows" />
          <div className="storage-reveal-summary">
            <article><strong>Stripe customer record</strong><span>Payment, receipt, customer, package and Blog Brief details. Resend sends the order email for manual handling.</span></article>
            <article><strong>Cloudflare CMS content</strong><span>D1 stores SiteTarik blog text. R2 stores SiteTarik blog images. This is separate from the RM220 customer blog draft.</span></article>
          </div>
        </section>
      </div> : null}
    </main>
  );
}
