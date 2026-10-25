/**
 * MAIN STREAM DIGITAL (MSD) — CORE APPLICATION LOGIC
 * Indian Market & Mobile-First Architecture
 * Portfolio Filtering, Case Study Modals, INR Scope Calculator & WhatsApp Flow
 */

// --- 1. LOCALIZED INDIAN PORTFOLIO DATA ---
const caseStudiesData = [
  {
    id: 'sajan-batman-visualiser',
    title: 'Sajan Sajan × Batman — 4K Director Cut Visualizer',
    category: 'commercials',
    categoryLabel: 'Cinematic Visualizer & VFX',
    categoryLabelShort: '4K Visualizer',
    client: 'Hashmi Edits × Warner Music Collab',
    clientLocation: 'Mumbai Studio',
    duration: '4K 60FPS Visualizer Cut',
    shortDuration: '4K 60FPS',
    accentType: 'gold',
    year: '2026',
    heroMetric: { value: '4K HDR', label: '60 FPS Master' },
    subMetric: '28.4M Views',
    posterUrl: 'video/batman_poster.jpg',
    videoUrl: 'video/sajan-batman-4k.mp4',
    summary: 'A dark, brooding cinematic visualizer fusing iconic Indian synth melodies with neo-noir Gotham aesthetic. Color-graded in DaVinci Resolve Studio with anamorphic 2.39:1 framing and uncompressed spatial audio.',
    metrics: [
      { label: 'Master Fidelity', value: '4K 60FPS Ultra HD' },
      { label: 'Color Grading', value: 'DaVinci Wide Gamut' },
      { label: 'Aspect Ratio', value: '2.39:1 Anamorphic' },
      { label: 'Global Video Reach', value: '28.4M+ Impressions' }
    ],
    challenge: 'Reinventing classic cultural nostalgia into high-concept modern cinema with intense pacing, flawless dark-room shadows, and seamless audio-visual sync.',
    creativeStrategy: 'Rendered at native 4K with deep obsidian blacks, gold rim highlights, cinematic film grain emulation, and spatial surround audio balancing.',
    growthStrategy: 'Targeted launch across high-resolution creator platforms, audio reels repurposing, and cinema-grade preview loops for brand partnerships.',
    quote: '"MSD treats visual rhythm like architecture. The sheer fidelity, frame timing, and dark-room texture created an instant cult phenomenon."',
    quoteAuthor: 'Hashmi Edits — Director & Lead VFX Artist'
  },
  {
    id: 'udaivilas-wedding',
    title: 'The Palace Wedding — Kabir & Ananya',
    category: 'weddings',
    categoryLabel: 'Royal Wedding Film',
    categoryLabelShort: 'Royal Wedding',
    client: 'Kabir & Ananya Singhania (Private Commission)',
    clientLocation: 'Udaipur Heritage',
    duration: '14-min Heirloom Film + 60s Reel',
    shortDuration: '14-min Film',
    accentType: 'gold',
    year: '2025',
    heroMetric: { value: '4.8M', label: 'Reach' },
    subMetric: '920+ Leads',
    posterUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
    summary: 'A 35mm-inspired heirloom royal wedding film captured across the majestic courtyards and lakeside ghats of The Oberoi Udaivilas in Udaipur.',
    metrics: [
      { label: 'WedMeGood Feature', value: 'Top Wedding of Year' },
      { label: 'Master Resolution', value: '4K HDR Master' },
      { label: 'Custom Score', value: 'Live Sitar & Strings' },
      { label: 'Heirloom Delivery', value: 'Custom Wooden USB Box' }
    ],
    challenge: 'The couple wanted to avoid cliché Indian wedding videography. They requested an emotional, timeless documentary with pure natural audio vows and zero intrusive staging.',
    creativeStrategy: 'Our discreet two-person cinema unit used custom-rigged Sony FX6 cinema cameras and vintage prime glass. We recorded crystal-clear pheras and vows, paired with sunset lake drone cinematography.',
    growthStrategy: 'A curated 60-second teaser reel was formatted for the family to share on Instagram, generating over 1.2M organic views across luxury Indian wedding circuits.',
    quote: '"Watching our wedding film made our entire family cry happy tears. It feels like a Sanjay Leela Bhansali film made just for us."',
    quoteAuthor: 'Ananya & Kabir Singhania — Udaipur, Rajasthan'
  },
  {
    id: 'rupeeflow-fintech',
    title: 'RupeeFlow — Frictionless B2B Payments',
    category: 'seo',
    categoryLabel: '3D Film & SEO Domination',
    categoryLabelShort: 'Fintech D2C',
    client: 'RupeeFlow Technologies (Bengaluru)',
    clientLocation: 'Bengaluru Tech',
    duration: '90s 3D Product Film + 12-Month SEO Engine',
    shortDuration: '90s 3D Film',
    accentType: 'steel',
    year: '2026',
    heroMetric: { value: '1.2M', label: 'Downloads' },
    subMetric: '₹42 CPA',
    posterUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    summary: 'A sleek 3D product showcase commercial combined with programmatic B2B SEO that ranked RupeeFlow on Page #1 for 38 high-intent fintech search terms across India.',
    metrics: [
      { label: 'Top 3 Google Ranks', value: '38 Keywords' },
      { label: 'Qualified Enterprise Leads', value: '+340% MoM' },
      { label: 'Video Completion Rate', value: '81.4%' },
      { label: 'Organic Monthly Traffic', value: '210k/Month' }
    ],
    challenge: 'Fintech CPCs in India are fiercely expensive. RupeeFlow needed organic search dominance and enterprise authority without spending ₹25 Lakhs a month on Google search ads.',
    creativeStrategy: 'Produced a photorealistic 3D product film demonstrating their UPI autopay and enterprise treasury settlement with crisp kinetic typography.',
    growthStrategy: 'Constructed an authoritative topical SEO cluster targeting Indian CFO and finance director queries, automated schema markup, and video-rich SERP snippets.',
    quote: '"MSD gave us the creative edge and search engine dominance that directly accelerated our Series A funding round."',
    quoteAuthor: 'Vikramaditya Rao — Co-Founder & CEO, RupeeFlow'
  },
  {
    id: 'veloce-electric',
    title: 'Veloce EV — The Electric Superbike',
    category: 'commercials',
    categoryLabel: 'Commercial Video',
    categoryLabelShort: 'EV Commercial',
    client: 'Veloce Mobility (Pune / Bengaluru)',
    clientLocation: 'Pune / Bengaluru',
    duration: '60s Launch Commercial + YouTube Campaign',
    shortDuration: '60s Commercial',
    accentType: 'gold',
    year: '2025',
    heroMetric: { value: '14.2K', label: 'Pre-Orders' },
    subMetric: '18.5M Views',
    posterUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    summary: 'A high-octane commercial film featuring pursuit-arm camera tracking across the Western Ghats, driving 14,000+ pre-orders in 30 days.',
    metrics: [
      { label: 'Pre-Orders Generated', value: '14,200+ Units' },
      { label: 'YouTube Ad VTR', value: '64.8%' },
      { label: 'Campaign Reach', value: '18.5M Views' },
      { label: 'Industry Recognition', value: 'Auto Expo Top Pick' }
    ],
    challenge: 'Convincing Indian superbike enthusiasts that an electric motorcycle possesses raw mechanical soul, performance, and exhilaration.',
    creativeStrategy: 'Russian-arm camera tracking vehicles on closed ghat passes with RED 8K cameras, high-frame-rate cornering, and binaural electric sound design.',
    growthStrategy: 'Geo-targeted YouTube Pre-Roll and Instagram Reels campaign across Tier 1 & 2 cities targeting motorcycle and tech early adopters.',
    quote: '"The visuals blew our launch targets out of the water. Our entire year-one production allocation was sold out in 3 weeks."',
    quoteAuthor: 'Arjun Deshmukh — Head of Brand, Veloce EV'
  },
  {
    id: 'goa-wedding',
    title: 'Sunset at Alila Diwa — Rohan & Tara',
    category: 'weddings',
    categoryLabel: 'Luxury Wedding Film',
    categoryLabelShort: 'Goa Wedding',
    client: 'Rohan & Tara Mehta (Goa)',
    clientLocation: 'South Goa Coast',
    duration: '10-min Feature + 90s Instagram Reel',
    shortDuration: '10-min Film',
    accentType: 'gold',
    year: '2026',
    heroMetric: { value: '820K', label: 'Reel Reach' },
    subMetric: '5.0 / 5.0 Rating',
    posterUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    summary: 'A sun-drenched South Goa beach wedding film capturing a joyful 3-day coastal celebration with live acoustic guitars and golden-hour portraits.',
    metrics: [
      { label: 'Client Satisfaction', value: '5.0 / 5.0' },
      { label: 'Film Stock Grade', value: 'Kodak 5207 Look' },
      { label: 'Audio Purity', value: '32-Bit Float Sound' },
      { label: 'Family Reel Reach', value: '820k Views' }
    ],
    challenge: 'Capturing dynamic sangeet dance performances and beach pheras in harsh coastal sunlight without washed-out skin tones or chaotic audio.',
    creativeStrategy: 'Full-frame cinema sensors with specialized diffusion filters for flattering skin tones, drone ocean sweeps, and multi-track live audio recording.',
    growthStrategy: 'Supplied the wedding planner and luxury resort with co-branded reels, generating 8 direct high-budget wedding inquiries within 48 hours.',
    quote: '"MSD blended into our celebration like family while producing a film that looks like an international cinema release."',
    quoteAuthor: 'Tara & Rohan Mehta — South Goa'
  },
  {
    id: 'veda-botanics',
    title: 'Veda Botanics — Ayurvedic Clean Beauty',
    category: 'smm',
    categoryLabel: 'Social-First Content & SMM',
    categoryLabelShort: 'Viral Reels',
    client: 'Veda Botanics (Mumbai)',
    clientLocation: 'Mumbai D2C',
    duration: '60 Monthly Reels + Community Management',
    shortDuration: '60 Reels/Mo',
    accentType: 'steel',
    year: '2026',
    heroMetric: { value: '42.8M', label: 'Organic Views' },
    subMetric: '+₹2.8 Cr Sales',
    posterUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://vjs.zencdn.net/v/oceans.mp4',
    summary: 'A viral content engine producing 60 monthly high-aesthetic Instagram Reels, scaling the brand from zero to 310,000 active community members in 90 days.',
    metrics: [
      { label: 'Follower Growth', value: '0 → 310K' },
      { label: 'Viral Organic Reach', value: '42.8M Views' },
      { label: 'Attributed Sales', value: '+₹2.8 Cr' },
      { label: 'Engagement Rate', value: '8.4% (Industry: 1.5%)' }
    ],
    challenge: 'Breaking through the crowded Indian D2C beauty landscape without using cheap smartphone videos or clinical corporate imagery.',
    creativeStrategy: 'Built an internal agile studio setup with dynamic macro-lenses capturing herbal ingredient textures, Ayurvedic ritual storytelling, and relatable creator hooks.',
    growthStrategy: 'Daily dual-post cadence, automated trend hijacking within 3 hours of trending audio breakout, and founder-led live interaction sessions.',
    quote: '"MSD did not just manage our social media; they built a devoted community that sells out our product drops within hours."',
    quoteAuthor: 'Pooja Narang — Founder, Veda Botanics'
  },
  {
    id: 'vaya-residences',
    title: 'Vaya Residences — Coastal Architecture',
    category: 'commercials',
    categoryLabel: 'Brand Film & Real Estate',
    categoryLabelShort: 'Architecture',
    client: 'Vaya Luxury Estates (Alibaug & Mumbai)',
    clientLocation: 'Alibaug Villas',
    duration: '4-min Architectural Short Film',
    shortDuration: '4-min Film',
    accentType: 'gold',
    year: '2025',
    heroMetric: { value: '₹18 Cr', label: 'Pipeline' },
    subMetric: 'AD India Feature',
    posterUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
    summary: 'A poetic film capturing tropical brutalist residential villas in Alibaug that positioned Vaya for ₹18 Cr in private HNI acquisitions.',
    metrics: [
      { label: 'Media Feature', value: 'AD India' },
      { label: 'HNI Pipeline', value: '₹18 Cr Inquiries' },
      { label: 'Direct HNI Deals', value: '4 Villas Sold' },
      { label: 'Closing Rate', value: '91%' }
    ],
    challenge: 'Still architectural photos failed to capture the sea breeze, shifting shadows, and spatial luxury of these ₹12 Cr+ private villas.',
    creativeStrategy: 'Motorized slider systems, dawn-to-dusk timelapse transitions, drone coastline passes, and meditative sound design.',
    growthStrategy: 'Targeted private LinkedIn executive outreach and high-definition WhatsApp video brochures distributed to pre-qualified luxury buyers.',
    quote: '"This film became our ultimate deal closer. When HNI clients watch this film on their iPads, price is no longer an objection."',
    quoteAuthor: 'Devendra Kothari — Managing Director, Vaya Estates'
  },
  {
    id: 'fitpulse-india',
    title: 'FitPulse India — Pan-India Local SEO & Reels',
    category: 'seo',
    categoryLabel: 'Local SEO & SMM Engine',
    categoryLabelShort: 'Local SEO',
    client: 'FitPulse Clubs Network (18 Gyms across Metros)',
    clientLocation: '18 Gyms Metros',
    duration: 'Comprehensive Local SEO & Reels Revamp',
    shortDuration: 'Pan-India SEO',
    accentType: 'steel',
    year: '2026',
    heroMetric: { value: '#1 Rank', label: '16 Cities' },
    subMetric: '+4,120 Leads',
    posterUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    summary: 'Tripled membership registrations across 18 fitness locations in Mumbai, Delhi, and Bengaluru through Google Map Pack SEO dominance and member transformation reels.',
    metrics: [
      { label: 'Local Traffic', value: '+480% MoM' },
      { label: 'New Members', value: '+4,120 Leads' },
      { label: 'Google 3-Pack', value: '#1 in 16 Cities' },
      { label: 'CPA Reduction', value: '-42% CAC' }
    ],
    challenge: 'Intense competition from national gym chains and poor local map visibility causing high customer acquisition costs.',
    creativeStrategy: 'Produced high-energy workout transformation reels and member spotlight videos with punchy Indian music edits.',
    growthStrategy: 'Executed Google Business Profile optimizations, localized city-page schema, citation syndication, and geo-targeted Instagram ad boosts.',
    quote: '"Our reception desks in every city are flooded with trial workout bookings. MSD completely transformed our local visibility."',
    quoteAuthor: 'Sameer Sen — Head of Operations, FitPulse India'
  },
  {
    id: 'kaizen-streetwear',
    title: 'Kaizen Streetwear — Drop Culture & Reels',
    category: 'smm',
    categoryLabel: 'Viral Reels & Community Engine',
    categoryLabelShort: 'Viral Reels',
    client: 'Kaizen Streetwear (Mumbai & Bengaluru)',
    clientLocation: 'Mumbai D2C',
    duration: '48 Monthly Reels + Community Funnel',
    shortDuration: '48 Reels/Mo',
    accentType: 'gold',
    year: '2026',
    heroMetric: { value: '₹6.8 Cr', label: 'Drop Sales' },
    subMetric: '34M Views',
    posterUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'video/sajan-batman-4k.mp4',
    summary: 'Engineered viral drop anticipation reels and creator seeding that sold out entire limited collections in 9 minutes across India.',
    metrics: [
      { label: 'Sellout Velocity', value: '9 Minutes' },
      { label: 'Viral Reel Reach', value: '34.2M Views' },
      { label: 'Drop Revenue', value: '+₹6.8 Cr' },
      { label: 'Community', value: '+240K Follows' }
    ],
    challenge: 'Streetwear drops require intense organic hype and instantaneous checkout velocity without inflating paid ad costs.',
    creativeStrategy: 'Grungy 90s camcorder aesthetic blended with 4K anamorphic macro closeups of denim weaves, silkscreen textures, and underground Mumbai nightlife.',
    growthStrategy: 'Timed micro-teasers, broadcast channel waitlists, and creator seeding blitz across Mumbai, Delhi NCR, and Bengaluru.',
    quote: '"MSD knows how to trigger cultural hype in India. Our last three drops broke our server and sold out in under 10 minutes."',
    quoteAuthor: 'Rohan Sawant — Creative Director, Kaizen Streetwear'
  }
];

// --- 2. ENHANCED SOUND & HAPTIC FEEDBACK ENGINE (WEB AUDIO API) ---
class HapticFeedback {
  static trigger(type = 'light') {
    if (typeof window === 'undefined' || !('vibrate' in navigator)) return;
    try {
      switch (type) {
        case 'tick':
        case 'light':
          navigator.vibrate(8);
          break;
        case 'medium':
        case 'card':
          navigator.vibrate(14);
          break;
        case 'double':
        case 'modal':
          navigator.vibrate([12, 35, 18]);
          break;
        case 'success':
          navigator.vibrate([15, 45, 25]);
          break;
      }
    } catch (e) {}
  }
}

class EnhancedSoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.compressor = null;
    this.sfxGain = null;
    
    // Ambient soundscape state
    this.isPlayingAmbient = false;
    this.ambientOscillators = [];
    this.ambientGainNode = null;
    this.ambientFilterNode = null;
    this.unlocked = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtxClass();

      // Master Dynamics Compressor to prevent clipping
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-14, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(30, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(10, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.9, this.ctx.currentTime);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(0.85, this.ctx.currentTime);

      this.sfxGain.connect(this.compressor);
      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  unlockMobileAudio() {
    if (this.unlocked) return;
    this.init();

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().then(() => {
        const buffer = this.ctx.createBuffer(1, 1, 22050);
        const source = this.ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(this.ctx.destination);
        source.start(0);
        this.unlocked = true;
      }).catch(() => {});
    } else {
      this.unlocked = true;
    }
  }

  toggle() {
    return this.toggleAmbient();
  }

  toggleAmbient() {
    this.unlockMobileAudio();
    if (this.isPlayingAmbient) {
      this.stopAmbient();
      return false;
    } else {
      this.playAmbient();
      return true;
    }
  }

  playAmbient() {
    this.init();
    if (this.isPlayingAmbient) return;
    if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});

    this.ambientGainNode = this.ctx.createGain();
    this.ambientGainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.ambientGainNode.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3.0);

    this.ambientFilterNode = this.ctx.createBiquadFilter();
    this.ambientFilterNode.type = 'lowpass';
    this.ambientFilterNode.frequency.setValueAtTime(360, this.ctx.currentTime);

    const freqs = [65.41, 98.0, 146.83, 246.94, 329.63];
    this.ambientOscillators = freqs.map((f, i) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.12 + (i * 0.04);
      lfoGain.gain.value = 0.03;
      lfo.connect(oscGain.gain);
      lfo.start();

      oscGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.ambientFilterNode);
      osc.start();
      return osc;
    });

    this.ambientFilterNode.connect(this.ambientGainNode);
    this.ambientGainNode.connect(this.masterGain);
    this.isPlayingAmbient = true;
  }

  stopAmbient() {
    if (!this.isPlayingAmbient || !this.ambientGainNode) return;
    const now = this.ctx.currentTime;
    this.ambientGainNode.gain.cancelScheduledValues(now);
    this.ambientGainNode.gain.setValueAtTime(this.ambientGainNode.gain.value, now);
    this.ambientGainNode.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    setTimeout(() => {
      this.ambientOscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      this.ambientOscillators = [];
      this.isPlayingAmbient = false;
    }, 1300);
  }

  // --- CRISP UI MICRO-FEEDBACK CHIMES ---
  playCardTap() {
    this.unlockMobileAudio();
    HapticFeedback.trigger('card');
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1318.51, now); // E6
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.08); // C6

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.038, now + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.10);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch (e) {}
  }

  playFilterTab() {
    this.unlockMobileAudio();
    HapticFeedback.trigger('light');
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, now); // A5
      osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.035); // D5

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.026, now + 0.001);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  playModalOpen() {
    this.unlockMobileAudio();
    HapticFeedback.trigger('modal');
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;

      // Note 1: F#5 (739.99 Hz)
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(739.99, now);
      gain1.gain.setValueAtTime(0.0001, now);
      gain1.gain.exponentialRampToValueAtTime(0.032, now + 0.006);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
      osc1.connect(gain1);
      gain1.connect(this.sfxGain);
      osc1.start(now);
      osc1.stop(now + 0.29);

      // Note 2: C#6 (1108.73 Hz) staggered
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1108.73, now + 0.025);
      gain2.gain.setValueAtTime(0.0001, now + 0.025);
      gain2.gain.exponentialRampToValueAtTime(0.024, now + 0.032);
      gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);
      osc2.connect(gain2);
      gain2.connect(this.sfxGain);
      osc2.start(now + 0.025);
      osc2.stop(now + 0.33);
    } catch (e) {}
  }

  playModalClose() {
    this.unlockMobileAudio();
    HapticFeedback.trigger('light');
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.exponentialRampToValueAtTime(440.0, now + 0.09); // A4

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.022, now + 0.003);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.10);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch (e) {}
  }

  // Alias for backward compatibility
  playChime(type = 'card') {
    if (type === 'modal') {
      this.playModalOpen();
    } else {
      this.playCardTap();
    }
  }
}

const soundEngine = new EnhancedSoundEngine();

function initMobileAudioUnlock() {
  const unlockEvents = ['touchstart', 'touchend', 'pointerdown', 'click'];
  const handleUnlock = () => {
    soundEngine.unlockMobileAudio();
    unlockEvents.forEach(evt => window.removeEventListener(evt, handleUnlock, { passive: true }));
  };

  unlockEvents.forEach(evt => {
    window.addEventListener(evt, handleUnlock, { passive: true, once: true });
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (soundEngine.ctx && soundEngine.ctx.state === 'running') {
        soundEngine.ctx.suspend().catch(() => {});
      }
    } else {
      if (soundEngine.isPlayingAmbient && soundEngine.ctx && soundEngine.ctx.state === 'suspended') {
        soundEngine.ctx.resume().catch(() => {});
      }
    }
  });
}

// --- 3. DOM READY INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initMobileAudioUnlock();
  initCustomCursor();
  renderPortfolioGrid('all');
  initFilterTabs();
  initEstimator();
  initModals();
  initSoundToggle();
  initTestimonialSlider();
  initFaqAccordion();
  initContactForm();
  initMobileNavigation();
  initPortfolioVideoSystem();
  initMobileQuickDock();
});

// --- 4. CUSTOM MAGNETIC CURSOR (DESKTOP) ---
function initCustomCursor() {
  // Mobile QA Fix: Abort on touch screens to eliminate 120Hz CPU/battery drain
  if (window.matchMedia('(pointer: coarse)').matches || !('onmousemove' in window)) {
    return;
  }

  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('customCursorFollower');
  if (!cursor || !follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  function renderFollower() {
    followerX += (mouseX - followerX) * 0.18;
    followerY += (mouseY - followerY) * 0.18;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(renderFollower);
  }
  requestAnimationFrame(renderFollower);

  document.querySelectorAll('a, button, .interactive-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.6)';
      follower.style.transform = 'translate(-50%, -50%) scale(1.25)';
      follower.style.borderColor = 'rgba(255, 255, 255, 0.7)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.borderColor = 'rgba(255, 255, 255, 0.25)';
    });
  });
}

// ==========================================================================
// 5. MOBILE BENTO PORTFOLIO GRID & VIDEO INTERACTION ENGINE
// ==========================================================================

let activeMobileCard = null;
let portfolioObserver = null;
let scrollSettleTimer = null;
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || window.matchMedia('(pointer: coarse)').matches;

/**
 * Computes exact responsive column spans and bento rhythm.
 * User requirement: One Big Box, then Two Slim Small Boxes side-by-side, then One Big Box...
 */
function getBentoLayout(index, total) {
  // 1. Explicit 9-Item Sequence (Repeating 3-Cycle: 1 Big -> 2 Slim Smalls)
  if (total === 9) {
    switch (index) {
      // Cycle 1:
      case 0: // BIG BOX #1 (Kavya Couture) - Full Width on Mobile (col-span-2)
        return { isBig: true, spanClasses: 'col-span-2 md:col-span-2 lg:col-span-2' };
      case 1: // SLIM SMALL BOX #1 (Udaivilas Wedding) - Left Col on Mobile (col-span-1)
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 2: // SLIM SMALL BOX #2 (RupeeFlow Fintech) - Right Col on Mobile (col-span-1)
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };

      // Cycle 2:
      case 3: // BIG BOX #2 (Veloce Superbike) - Full Width on Mobile (col-span-2)
        return { isBig: true, spanClasses: 'col-span-2 md:col-span-2 lg:col-span-2' };
      case 4: // SLIM SMALL BOX #3 (Goa Wedding) - Left Col on Mobile (col-span-1)
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 5: // SLIM SMALL BOX #4 (Veda Botanics) - Right Col on Mobile (col-span-1)
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };

      // Cycle 3:
      case 6: // BIG BOX #3 (Vaya Residences) - Full Width on Mobile (col-span-2)
        return { isBig: true, spanClasses: 'col-span-2 md:col-span-2 lg:col-span-2' };
      case 7: // SLIM SMALL BOX #5 (FitPulse India) - Left Col on Mobile (col-span-1)
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 8: // SLIM SMALL BOX #6 (Kaizen Streetwear) - Right Col on Mobile (col-span-1)
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };

      default:
        break;
    }
  }

  // 2. Explicit 8-Item Sequence Guard (Avoid any back-to-back Big Boxes)
  if (total === 8) {
    switch (index) {
      case 0:
        return { isBig: true, spanClasses: 'col-span-2 md:col-span-2 lg:col-span-2' };
      case 1:
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 2:
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 3:
        return { isBig: true, spanClasses: 'col-span-2 md:col-span-2 lg:col-span-2' };
      case 4:
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 5:
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 6: // Slim Small duo pair instead of stacked Big Boxes
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      case 7:
        return { isBig: false, spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1' };
      default:
        break;
    }
  }

  // 3. Filtered Subsets (Commercials: 3, Weddings: 2, SEO: 2, SMM: 2):
  if (total === 1) {
    return { isBig: true, spanClasses: 'col-span-2 lg:col-span-3' };
  }
  if (total === 2) {
    // Two slim small boxes side-by-side on mobile, balanced duo on desktop
    return {
      isBig: false,
      spanClasses: 'col-span-1 md:col-span-1 lg:col-span-1'
    };
  }
  if (total === 3) {
    // 1 Big Box, then 2 Slim Small Boxes side-by-side
    return {
      isBig: index === 0,
      spanClasses: index === 0 ? 'col-span-2 lg:col-span-2' : 'col-span-1 lg:col-span-1'
    };
  }

  // Repeating cycle formula: 1 Big (col-span-2), followed by 2 Slims (col-span-1 each)
  const remainder = index % 3;
  const isBig = remainder === 0;
  const spanClasses = isBig
    ? 'col-span-2 md:col-span-2 lg:col-span-2'
    : 'col-span-1 md:col-span-1 lg:col-span-1';

  return { isBig, spanClasses };
}

/**
 * Big Box Card Markup: Cinematic Landscape Showcase (16:10 mobile, 16:9 desktop)
 */
function createBigBoxHtml(project, spanClasses) {
  const badgeClass = project.accentType === 'gold' ? 'badge-gold' : 'badge-steel';
  const metric1 = project.metrics[0] || { label: 'Performance', value: 'High' };
  const metric2 = project.metrics[1] || { label: 'Impact', value: 'Verified' };

  return `
    <div 
      class="portfolio-card portfolio-card-big group relative rounded-2xl overflow-hidden matte-card cursor-pointer flex flex-col ${spanClasses}"
      data-category="${project.category}"
      data-id="${project.id}"
      data-muted="true"
      tabindex="0"
      role="button"
      aria-label="View case study for ${project.title}"
    >
      <!-- Media Wrap (Cinematic Landscape 16:10 / 16:9) -->
      <div class="portfolio-video-wrap relative w-full aspect-[16/10] sm:aspect-video md:h-80 lg:h-96 overflow-hidden bg-[#07080b]">
        <img 
          src="${project.posterUrl}" 
          alt="${project.title}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          loading="lazy" 
        />
        <video 
          src="${project.videoUrl}" 
          muted 
          loop 
          playsinline 
          webkit-playsinline
          preload="none" 
          class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></video>

        <!-- Video Progress Track -->
        <div class="video-progress-track">
          <div class="video-progress-fill"></div>
        </div>

        <!-- Mobile Quick Audio Toggle -->
        <button type="button" class="mobile-audio-toggle" aria-label="Toggle sound" title="Toggle audio">
          <span class="audio-toggle-icon"><svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg></span>
        </button>

        <!-- Mobile Live Playback / Equalizer Status Badge -->
        <div class="mobile-video-badge">
          <div class="badge-eq-bars">
            <span class="badge-eq-bar"></span>
            <span class="badge-eq-bar"></span>
            <span class="badge-eq-bar"></span>
          </div>
          <span class="badge-status-text">4K PREVIEW</span>
        </div>

        <!-- Subtle Gradient Scrim -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#08090c] via-black/30 to-transparent pointer-events-none"></div>

        <!-- Top Badges -->
        <div class="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 flex flex-wrap gap-2 z-10 pointer-events-none">
          <span class="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider ${badgeClass} backdrop-blur-md">
            ${project.categoryLabel}
          </span>
          <span class="px-2 py-1 rounded-full text-[10px] sm:text-xs font-mono bg-black/70 text-zinc-300 backdrop-blur-md border border-white/10">
            ${project.year}
          </span>
        </div>

        <!-- Top Right Action Pill -->
        <div class="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
          <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-lg transform group-hover:scale-110 transition-transform">
            ↗
          </span>
        </div>

        <!-- Lower Video Overlay Info (Guaranteed Right Clearance for Status Badge) -->
        <div class="absolute bottom-2.5 left-3 right-24 sm:bottom-3 sm:left-3.5 sm:right-28 z-10 pointer-events-none">
          <span class="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-300 block truncate">
            ${project.client}
          </span>
          <h3 class="card-title text-sm sm:text-lg font-bold text-white mt-0.5 group-hover:text-[#d8c39e] transition-colors truncate">
            ${project.title}
          </h3>
        </div>
      </div>

      <!-- Card Body Content Area -->
      <div class="p-3.5 sm:p-5 flex-1 flex flex-col justify-between bg-[#101218] border-t border-white/5">
        <p class="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
          ${project.summary}
        </p>

        <!-- 2 Metrics Grid (Indian Rupee / KPIs - Robust Zero-Collision Design) -->
        <div class="mt-3 pt-3 border-t border-white/10 grid grid-cols-2 gap-2.5 sm:gap-4 overflow-hidden">
          <div class="min-w-0 overflow-hidden">
            <span class="text-[9px] sm:text-[11px] font-mono uppercase text-zinc-400 block truncate">${metric1.label}</span>
            <span class="text-xs sm:text-base font-semibold font-mono text-white tracking-tight tabular-nums block truncate">${metric1.value}</span>
          </div>
          <div class="min-w-0 overflow-hidden">
            <span class="text-[9px] sm:text-[11px] font-mono uppercase text-zinc-400 block truncate">${metric2.label}</span>
            <span class="text-xs sm:text-base font-semibold font-mono text-white tracking-tight tabular-nums block truncate">${metric2.value}</span>
          </div>
        </div>

        <!-- Bottom Action Bar -->
        <div class="mt-3 flex items-center justify-between pt-2 border-t border-white/5">
          <span class="text-xs font-mono text-[#d8c39e] group-hover:underline flex items-center gap-1 font-medium">
            View Case Study <span>→</span>
          </span>
          <span class="text-[10px] sm:text-[11px] font-mono text-zinc-500 truncate max-w-[140px] text-right">${project.duration}</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Slim Small Box Card Markup: Vertical 4:5 Instagram Reel Format for Narrow Columns
 */
function createSlimSmallBoxHtml(project, spanClasses) {
  const badgeClass = project.accentType === 'gold' ? 'badge-gold' : 'badge-steel';
  const heroVal = project.heroMetric ? project.heroMetric.value : (project.metrics[0]?.value || 'Verified');
  const heroLab = project.heroMetric ? project.heroMetric.label : (project.metrics[0]?.label || 'Impact');

  return `
    <div 
      class="portfolio-card portfolio-card-slim group relative rounded-xl sm:rounded-2xl overflow-hidden matte-card cursor-pointer flex flex-col ${spanClasses}"
      data-category="${project.category}"
      data-id="${project.id}"
      data-muted="true"
      tabindex="0"
      role="button"
      aria-label="View case study for ${project.title}"
    >
      <!-- Media Wrap (Vertical Reel 4:5 Aspect Ratio) -->
      <div class="portfolio-video-wrap relative w-full aspect-[4/5] sm:aspect-[3/4] sm:h-64 overflow-hidden bg-[#07080b]">
        <img 
          src="${project.posterUrl}" 
          alt="${project.title}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" 
          loading="lazy" 
        />
        <video 
          src="${project.videoUrl}" 
          muted 
          loop 
          playsinline 
          webkit-playsinline
          preload="none" 
          class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></video>

        <!-- Video Progress Track -->
        <div class="video-progress-track">
          <div class="video-progress-fill"></div>
        </div>

        <!-- Mobile Quick Audio Toggle -->
        <button type="button" class="mobile-audio-toggle" aria-label="Toggle sound" title="Toggle audio">
          <span class="audio-toggle-icon"><svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg></span>
        </button>

        <!-- Mobile Live Playback / Equalizer Status Badge -->
        <div class="mobile-video-badge">
          <div class="badge-eq-bars">
            <span class="badge-eq-bar"></span>
            <span class="badge-eq-bar"></span>
            <span class="badge-eq-bar"></span>
          </div>
          <span class="badge-status-text">REEL</span>
        </div>

        <!-- Vertical Gradient Scrim -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#08090c] via-black/35 to-black/30 pointer-events-none"></div>

        <!-- Top Badges (Micro-sized for ~165px mobile column width) -->
        <div class="absolute top-2 left-2 right-2 flex items-center justify-between z-10 pointer-events-none">
          <span class="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium uppercase tracking-wider ${badgeClass} truncate max-w-[100px] backdrop-blur-md">
            ${project.categoryLabelShort || project.categoryLabel.split('&')[0].trim()}
          </span>
          <span class="w-5 h-5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center font-bold text-[9px] shadow group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all">
            ↗
          </span>
        </div>

        <!-- Bottom Media Overlay (Guaranteed Right Clearance for Status Badge) -->
        <div class="absolute bottom-2 left-2 right-14 sm:right-16 z-10 pointer-events-none">
          <span class="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-zinc-300 block truncate">
            ${project.clientLocation || project.client.split('(')[0].trim()}
          </span>
          <h3 class="card-title text-xs sm:text-sm font-semibold text-white mt-0.5 group-hover:text-[#d8c39e] transition-colors truncate leading-snug">
            ${project.title}
          </h3>
        </div>
      </div>

      <!-- Card Body Content Area (Streamlined for Mobile Column Width) -->
      <div class="p-2 sm:p-3 flex-1 flex flex-col justify-between bg-[#101218] border-t border-white/5">
        
        <!-- Single Highlighted Hero Metric Chip (Indian Currency / ROI) -->
        <div class="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 w-full overflow-hidden">
          <span class="w-1.5 h-1.5 rounded-full bg-[#c9a96e] shrink-0 animate-pulse"></span>
          <div class="flex items-baseline justify-between w-full min-w-0 overflow-hidden">
            <span class="text-xs sm:text-sm font-bold font-mono text-white tracking-tight truncate tabular-nums leading-tight min-w-0">
              ${heroVal}
            </span>
            <span class="text-[8px] sm:text-[9px] font-mono uppercase text-zinc-400 truncate leading-tight ml-1 shrink-0">
              ${heroLab}
            </span>
          </div>
        </div>

        <!-- Compact Bottom Action Bar -->
        <div class="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
          <span class="text-[#d8c39e] group-hover:underline font-medium flex items-center gap-1">
            Explore <span>↗</span>
          </span>
          <span class="text-[9px] text-zinc-500">
            ${project.shortDuration || project.year}
          </span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Intelligent Tap & Gesture Classifier (Zero Accidental Modal Misfires while Scrolling)
 */
function bindCardInteractions(card, project) {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;
  let isDragging = false;

  card.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
    isDragging = false;
  }, { passive: true });

  card.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - touchStartX);
    const dy = Math.abs(touch.clientY - touchStartY);
    if (dx > 10 || dy > 10) {
      isDragging = true;
    }
  }, { passive: true });

  card.addEventListener('touchend', (e) => {
    // If user tapped the audio toggle button, do not open modal
    if (e.target.closest('.mobile-audio-toggle')) return;

    const duration = Date.now() - touchStartTime;
    if (!isDragging && duration < 350) {
      soundEngine.playCardTap();
      openCaseStudyModal(project.id);
    }
  });

  // Desktop Mouse Click
  card.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-audio-toggle')) return;
    if (isTouchDevice && window.matchMedia('(pointer: coarse)').matches) return; // Prevent double trigger
    soundEngine.playCardTap();
    openCaseStudyModal(project.id);
  });

  // Mobile Audio Quick-Toggle
  const audioToggle = card.querySelector('.mobile-audio-toggle');
  if (audioToggle) {
    audioToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const video = card.querySelector('video');
      if (!video) return;

      video.muted = !video.muted;
      card.setAttribute('data-muted', video.muted ? 'true' : 'false');

      const icon = audioToggle.querySelector('.audio-toggle-icon');
      if (video.muted) {
        icon.innerHTML = '<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
        audioToggle.classList.remove('is-unmuted');
      } else {
        icon.innerHTML = '<svg class="w-3.5 h-3.5 text-[#d8c39e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>';
        audioToggle.classList.add('is-unmuted');
        HapticFeedback.trigger('tick');
      }
    });
  }

  // Keyboard accessibility
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      soundEngine.playCardTap();
      openCaseStudyModal(project.id);
    }
  });
}

/**
 * Master Portfolio Grid Renderer (Asymmetric Mobile & Desktop Bento Engine)
 */
function renderPortfolioGrid(filter = 'all') {
  const container = document.getElementById('portfolioContainer');
  if (!container) return;

  // Disconnect previous video observers
  if (portfolioObserver) {
    portfolioObserver.disconnect();
    portfolioObserver = null;
  }
  activeMobileCard = null;

  const filtered = filter === 'all' 
    ? caseStudiesData 
    : caseStudiesData.filter(item => item.category === filter);

  container.innerHTML = '';
  const total = filtered.length;

  filtered.forEach((project, index) => {
    const layout = getBentoLayout(index, total);

    // Create either Big Box or Slim Small Box HTML
    const cardHtml = layout.isBig
      ? createBigBoxHtml(project, layout.spanClasses)
      : createSlimSmallBoxHtml(project, layout.spanClasses);

    const template = document.createElement('template');
    template.innerHTML = cardHtml.trim();
    const card = template.content.firstElementChild;

    // Attach click and gesture listeners
    bindCardInteractions(card, project);

    container.appendChild(card);
  });

  // Initialize playback system for active view
  initPortfolioVideoSystem();

  // Sync count badge
  const countEl = document.getElementById('projectCountBadge');
  if (countEl) {
    countEl.textContent = `Showing ${total} of ${caseStudiesData.length} Selected Commissions`;
  }
}

/**
 * Filter Tabs Controller
 */
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  const countEl = document.getElementById('projectCountBadge');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      soundEngine.playFilterTab();

      tabs.forEach(t => {
        t.classList.remove('bg-white', 'text-black', 'border-white');
        t.classList.add('bg-white/5', 'text-zinc-400', 'border-white/10');
      });

      tab.classList.remove('bg-white/5', 'text-zinc-400', 'border-white/10');
      tab.classList.add('bg-white', 'text-black', 'border-white');

      const filterVal = tab.getAttribute('data-filter');
      renderPortfolioGrid(filterVal);

      if (countEl) {
        const count = filterVal === 'all' 
          ? caseStudiesData.length 
          : caseStudiesData.filter(i => i.category === filterVal).length;
        countEl.textContent = `Showing ${count} of ${caseStudiesData.length} Selected Commissions`;
      }
    });
  });
}

/**
 * Master Video Playback Controller (Desktop Hover + Mobile Centered Observer)
 */
function initPortfolioVideoSystem() {
  const cards = Array.from(document.querySelectorAll('.portfolio-card'));
  const cursor = document.getElementById('customCursor');

  if (!cards.length) return;

  if (isTouchDevice) {
    // --- MOBILE INTERSECTION OBSERVER SETUP ---
    portfolioObserver = new IntersectionObserver(() => {
      evaluateActiveCentralCard();
    }, {
      root: null,
      rootMargin: '-18% 0px -18% 0px', // Central sweet spot
      threshold: [0, 0.25, 0.5, 0.75, 1.0]
    });

    cards.forEach(card => portfolioObserver.observe(card));

    // Scroll Settle Listener (Prevents video churn during fast fling scrolling)
    window.addEventListener('scroll', () => {
      clearTimeout(scrollSettleTimer);
      scrollSettleTimer = setTimeout(() => {
        evaluateActiveCentralCard();
      }, 100);
    }, { passive: true });

    // Initial check
    setTimeout(evaluateActiveCentralCard, 200);

  } else {
    // --- DESKTOP HOVER INTERACTION SETUP ---
    cards.forEach(card => {
      const video = card.querySelector('video');
      if (!video) return;

      card.addEventListener('mouseenter', () => {
        card.classList.add('is-playing');
        video.play().catch(() => {});
        if (cursor) {
          cursor.classList.add('active-view');
          cursor.textContent = 'VIEW';
        }
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('is-playing');
        video.pause();
        video.currentTime = 0;
        if (cursor) {
          cursor.classList.remove('active-view');
          cursor.textContent = '';
        }
      });
    });
  }

  // Handle visibility change (pause playback when app/tab is backgrounded)
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && activeMobileCard) {
      deactivateMobileVideo(activeMobileCard);
      activeMobileCard = null;
    } else if (!document.hidden && isTouchDevice) {
      evaluateActiveCentralCard();
    }
  });
}

/**
 * Determines the single closest card to the viewport center and plays it
 */
function evaluateActiveCentralCard() {
  const cards = Array.from(document.querySelectorAll('.portfolio-card'));
  if (!cards.length) return;

  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const viewportCenter = viewportHeight / 2;

  let closestCard = null;
  let minDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.bottom > viewportHeight * 0.25 && rect.top < viewportHeight * 0.75) {
      const cardCenter = rect.top + (rect.height / 2);
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }
    }
  });

  // Concurrency Limiter: Exactly 1 card playing at a time on mobile
  if (activeMobileCard !== closestCard) {
    if (activeMobileCard) {
      deactivateMobileVideo(activeMobileCard);
    }
    if (closestCard) {
      activateMobileVideo(closestCard);
    }
    activeMobileCard = closestCard;
  }
}

/**
 * Smoothly activates and streams a mobile card video
 */
function activateMobileVideo(card) {
  const video = card.querySelector('video');
  const badgeText = card.querySelector('.badge-status-text');
  const progressFill = card.querySelector('.video-progress-fill');
  if (!video) return;

  card.classList.add('is-playing');
  if (badgeText) badgeText.textContent = 'PLAYING';

  video.muted = card.getAttribute('data-muted') !== 'false';
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }

  // Attach progress scrubber update
  const handleProgress = () => {
    if (video.duration && progressFill) {
      const pct = (video.currentTime / video.duration) * 100;
      progressFill.style.width = `${pct}%`;
    }
  };
  video._progressHandler = handleProgress;
  video.addEventListener('timeupdate', handleProgress);
}

/**
 * Smoothly crossfades and pauses the outgoing video
 */
function deactivateMobileVideo(card) {
  const video = card.querySelector('video');
  const badgeText = card.querySelector('.badge-status-text');
  const progressFill = card.querySelector('.video-progress-fill');
  if (!video) return;

  card.classList.remove('is-playing');
  if (badgeText) badgeText.textContent = card.classList.contains('portfolio-card-slim') ? 'REEL' : '4K PREVIEW';

  if (video._progressHandler) {
    video.removeEventListener('timeupdate', video._progressHandler);
    video._progressHandler = null;
  }
  if (progressFill) progressFill.style.width = '0%';

  setTimeout(() => {
    if (!card.classList.contains('is-playing')) {
      video.pause();
      video.currentTime = 0;
    }
  }, 200);
}

// Backward compatible alias
function initVideoHoverPlay() {
  initPortfolioVideoSystem();
}

// ==========================================================================
// 6. CASE STUDY MODAL & MOBILE BOTTOM SHEET
// ==========================================================================
function initModals() {
  const showreelModal = document.getElementById('showreelModal');
  const closeBtns = document.querySelectorAll('[data-close-modal]');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Showreel Modal Trigger
  const showreelTrigger = document.getElementById('openShowreelBtn');
  if (showreelTrigger && showreelModal) {
    showreelTrigger.addEventListener('click', () => {
      showreelModal.classList.add('active');
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      const reelVideo = document.getElementById('showreelModalVideo') || showreelModal.querySelector('video');
      if (reelVideo) {
        if (!reelVideo.src) {
          reelVideo.src = 'video/sajan-batman-4k.mp4';
        }
        reelVideo.play().catch(() => {});
      }
      soundEngine.playModalOpen();
    });
  }

  // Mobile Bottom Sheet Drag-down dismiss support
  const handle = document.getElementById('modalDragHandle');
  const sheetBox = document.querySelector('#caseStudyModal .modal-content-box');
  if (handle && sheetBox) {
    let startY = 0;
    let currentY = 0;

    handle.addEventListener('click', closeAllModals);

    handle.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    }, { passive: true });

    handle.addEventListener('touchmove', (e) => {
      currentY = e.touches[0].clientY;
      const diffY = currentY - startY;
      if (diffY > 0) {
        sheetBox.style.transform = `translateY(${diffY}px)`;
      }
    }, { passive: true });

    handle.addEventListener('touchend', () => {
      const diffY = currentY - startY;
      if (diffY > 70) {
        closeAllModals();
      }
      sheetBox.style.transform = '';
      startY = 0;
      currentY = 0;
    });
  }
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal-overlay');
  const anyActive = document.querySelector('.modal-overlay.active');
  if (anyActive) {
    soundEngine.playModalClose();
  }

  modals.forEach(modal => {
    modal.classList.remove('active');
    const v = modal.querySelector('video');
    if (v) {
      v.pause();
      v.currentTime = 0;
      // Free hardware decoders on mobile Safari / Chrome
      if (modal.id === 'showreelModal') {
        v.removeAttribute('src');
        v.load();
      }
    }
  });

  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
}

function openCaseStudyModal(projectId) {
  const project = caseStudiesData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;

  const titleEl = document.getElementById('modalTitle');
  const clientEl = document.getElementById('modalClient');
  const categoryEl = document.getElementById('modalCategory');
  const videoEl = document.getElementById('modalVideo');
  const challengeEl = document.getElementById('modalChallenge');
  const creativeEl = document.getElementById('modalCreative');
  const growthEl = document.getElementById('modalGrowth');
  const quoteEl = document.getElementById('modalQuote');
  const quoteAuthorEl = document.getElementById('modalQuoteAuthor');
  const metricsGrid = document.getElementById('modalMetricsGrid');
  const similarBtn = document.getElementById('modalSimilarProjectBtn');
  const whatsappBtn = document.getElementById('modalWhatsAppBtn');

  if (titleEl) titleEl.textContent = project.title;
  if (clientEl) clientEl.textContent = `${project.client} • ${project.year}`;
  if (categoryEl) categoryEl.textContent = project.categoryLabel;
  
  if (videoEl) {
    videoEl.src = project.videoUrl;
    videoEl.poster = project.posterUrl;
    videoEl.load();
    videoEl.play().catch(() => {});
  }

  if (challengeEl) challengeEl.textContent = project.challenge;
  if (creativeEl) creativeEl.textContent = project.creativeStrategy;
  if (growthEl) growthEl.textContent = project.growthStrategy;
  if (quoteEl) quoteEl.textContent = project.quote;
  if (quoteAuthorEl) quoteAuthorEl.textContent = project.quoteAuthor;

  if (metricsGrid) {
    metricsGrid.innerHTML = project.metrics.map(m => `
      <div class="metric-tile p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
        <span class="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 block leading-tight mb-2">${m.label}</span>
        <span class="metric-value-inr text-base sm:text-xl font-bold tracking-tight text-white block">${m.value}</span>
      </div>
    `).join('');
  }

  if (whatsappBtn) {
    const textMsg = encodeURIComponent(`Hi MSD team, I was reviewing the "${project.title}" case study on your website and would like to discuss a similar production.`);
    whatsappBtn.href = `https://wa.me/919820012345?text=${textMsg}`;
  }

  if (similarBtn) {
    similarBtn.onclick = () => {
      closeAllModals();
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      const notes = document.getElementById('projectNotes');
      if (notes) {
        notes.value = `Interested in building a project with comparable scale to "${project.title}".`;
      }
    };
  }

  modal.classList.add('active');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  soundEngine.playModalOpen();
}

// --- 7. INDIAN SCOPE & COST ESTIMATOR (RUPEES) ---
function initEstimator() {
  const checkboxes = document.querySelectorAll('.estimator-service-check');
  const tierRadios = document.querySelectorAll('input[name="estimatorTier"]');
  const timelineRadios = document.querySelectorAll('input[name="estimatorTimeline"]');
  const priceDisplay = document.getElementById('estimatorPriceRange');
  const summaryList = document.getElementById('estimatorSummaryList');
  const sendToFormBtn = document.getElementById('sendEstimateToFormBtn');
  const estimatorWhatsAppBtn = document.getElementById('estimatorWhatsAppBtn');

  function calculateEstimate() {
    let baseMin = 0;
    let baseMax = 0;
    let selectedNames = [];
    let isRetainer = false;

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const min = parseInt(cb.getAttribute('data-min') || '0', 10);
        const max = parseInt(cb.getAttribute('data-max') || '0', 10);
        const name = cb.getAttribute('data-name');
        baseMin += min;
        baseMax += max;
        selectedNames.push(name);
        if (cb.getAttribute('data-retainer') === 'true') {
          isRetainer = true;
        }
      }
    });

    if (selectedNames.length === 0) {
      if (priceDisplay) priceDisplay.textContent = '₹0 — Select Services';
      if (summaryList) summaryList.innerHTML = '<li class="text-zinc-500 text-xs">Pick one or more services above to calculate scope.</li>';
      return;
    }

    let tierMultiplier = 1.0;
    tierRadios.forEach(r => {
      if (r.checked) {
        tierMultiplier = parseFloat(r.value);
      }
    });

    let timelineMultiplier = 1.0;
    timelineRadios.forEach(r => {
      if (r.checked) {
        timelineMultiplier = parseFloat(r.value);
      }
    });

    const finalMin = Math.round(baseMin * tierMultiplier * timelineMultiplier);
    const finalMax = Math.round(baseMax * tierMultiplier * timelineMultiplier);

    const suffix = isRetainer ? ' (Monthly Engine + Production)' : ' (All-Inclusive)';
    if (priceDisplay) {
      priceDisplay.innerHTML = `<span class="text-[#d8c39e] font-semibold tracking-tight">₹${finalMin.toLocaleString('en-IN')} – ₹${finalMax.toLocaleString('en-IN')}</span> <span class="text-[11px] sm:text-xs text-zinc-400 font-normal font-sans">${suffix}</span>`;
    }

    if (summaryList) {
      summaryList.innerHTML = selectedNames.map(s => `
        <li class="flex items-center gap-2 text-zinc-200 text-xs sm:text-sm">
          <span class="text-[#c9a96e] text-xs">✓</span> ${s}
        </li>
      `).join('');
    }

    if (estimatorWhatsAppBtn) {
      const waText = encodeURIComponent(`Hi MSD team, I generated an estimate on your website:\nServices: ${selectedNames.join(', ')}\nEstimated Scope: ₹${finalMin.toLocaleString('en-IN')} – ₹${finalMax.toLocaleString('en-IN')}\nI would like to discuss next steps.`);
      estimatorWhatsAppBtn.href = `https://wa.me/919820012345?text=${waText}`;
    }
  }

  checkboxes.forEach(cb => cb.addEventListener('change', calculateEstimate));
  tierRadios.forEach(r => r.addEventListener('change', calculateEstimate));
  timelineRadios.forEach(r => r.addEventListener('change', calculateEstimate));

  calculateEstimate();

  if (sendToFormBtn) {
    sendToFormBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      const selectedServices = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.getAttribute('data-name'));
      const notes = document.getElementById('projectNotes');
      if (notes) {
        notes.value = `[Estimator Pre-Configuration]\nServices: ${selectedServices.join(', ')}\nEstimated Scope: ${priceDisplay ? priceDisplay.textContent : 'Custom'}`;
      }
      showToast('Estimator configuration synced to Project Intake Form');
    });
  }
}

// --- 8. SOUND ENGINE UI TOGGLE ---
function initSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    const isPlaying = soundEngine.toggle();
    if (isPlaying) {
      soundBtn.classList.add('sound-playing', 'border-[#c9a96e]/40', 'bg-[#c9a96e]/10');
      soundBtn.setAttribute('title', 'Mute Ambient Soundscape');
      showToast('Ambient Soundscape Activated');
    } else {
      soundBtn.classList.remove('sound-playing', 'border-[#c9a96e]/40', 'bg-[#c9a96e]/10');
      soundBtn.setAttribute('title', 'Play Ambient Soundscape');
      showToast('Sound Muted');
    }
  });
}

// --- 9. TESTIMONIAL SLIDER ---
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('testPrevBtn');
  const nextBtn = document.getElementById('testNextBtn');
  const dotsContainer = document.getElementById('testDots');
  if (!slides.length) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('hidden', i !== index);
    });
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.test-dot').forEach((dot, i) => {
        dot.classList.toggle('bg-[#c9a96e]', i === index);
        dot.classList.toggle('bg-white/20', i !== index);
      });
    }
    current = index;
  }

  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `test-dot w-2.5 h-2.5 rounded-full transition-all ${i === 0 ? 'bg-[#c9a96e]' : 'bg-white/20'}`;
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prev = (current - 1 + slides.length) % slides.length;
      showSlide(prev);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const next = (current + 1) % slides.length;
      showSlide(next);
    });
  }

  setInterval(() => {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }, 8000);
}

// --- 10. FAQ ACCORDION ---
function initFaqAccordion() {
  const triggers = document.querySelectorAll('.faq-trigger');
  triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector('.faq-icon');
      const isExpanded = !content.classList.contains('hidden');

      document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.faq-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');

      if (!isExpanded) {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(45deg)';
      }
    });
  });
}

// --- 11. CONTACT FORM & LEAD INTAKE (INDIAN PHONE & WHATSAPP) ---
function initContactForm() {
  const form = document.getElementById('projectInquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `Transmitting Project Brief...`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `✓ Brief Received — Team MSD Will Call in < 2 Hours`;
      submitBtn.classList.add('bg-zinc-200');

      showToast('Thank you! Team MSD has received your inquiry.');

      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('bg-zinc-200');
      }, 5000);
    }, 1000);
  });
}

// --- 12. MOBILE NAVIGATION DRAWER ---
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const menuDrawer = document.getElementById('mobileMenuDrawer');
  const closeBtn = document.getElementById('closeMobileMenu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && menuDrawer) {
    toggleBtn.addEventListener('click', () => {
      menuDrawer.classList.toggle('hidden');
    });
  }

  if (closeBtn && menuDrawer) {
    closeBtn.addEventListener('click', () => {
      menuDrawer.classList.add('hidden');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (menuDrawer) menuDrawer.classList.add('hidden');
    });
  });
}

// --- 13. MOBILE FLOATING QUICK DOCK ---
function initMobileQuickDock() {
  const dock = document.getElementById('mobileGlassDock') || document.getElementById('mobileQuickDock');
  if (!dock) return;

  // Discreetly hide on fast scroll down, reappear on scroll up with rAF throttling
  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const current = window.pageYOffset;
        if (current > lastScroll && current > 260) {
          dock.style.transform = 'translate(-50%, 140%)';
        } else {
          dock.style.transform = 'translate(-50%, 0)';
        }
        lastScroll = current;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// --- 14. TOAST NOTIFICATION UTILITY ---
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[99999] px-4 py-3 rounded-xl bg-[#101218] text-white text-xs sm:text-sm font-medium border border-[#c9a96e]/30 shadow-2xl backdrop-blur-xl flex items-center gap-2.5 transition-all duration-300 transform translate-y-12 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse"></span>
    <span>${message}</span>
  `;

  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 3500);
}