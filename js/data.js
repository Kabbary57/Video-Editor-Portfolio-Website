/* ==========================================================================
   Abdelrhman Kabbary - Video Editor Portfolio Data Store
   ========================================================================== */

const PORTFOLIO_DATA = {
    clientBrands: [
        { name: "Tech Creators", icon: "🚀" },
        { name: "Science Festivity", icon: "🔬" },
        { name: "Educate Online", icon: "🎓" },
        { name: "Digital Edge Agency", icon: "⚡" },
        { name: "Apex Media", icon: "🎬" },
        { name: "Vlog Life", icon: "📹" },
        { name: "Podcast Nation", icon: "🎙️" },
        { name: "Social Surge", icon: "🔥" }
    ],

    portfolioItems: [
        // SHORT-FORM CATEGORY (Reels / TikTok / Shorts)
        {
            id: "short-1",
            category: "short-form",
            orientation: "portrait",
            title: "TELSIP Call Recording Commercial",
            desc: "Cinematic SaaS promo showcasing crystal-clear call recording, secure cloud storage, and instant call retrieval through premium motion graphics and enterprise-focused storytelling.",
            thumbnail: "https://img.ge/i/o0Siw78.png",
            duration: "0:32",
            tags: ["Telecommunications", "Voice Generation",
                "Commercial",
                "Premiere Pro",
                "Corporate Video"
            ],
            driveUrl: "https://drive.google.com/file/d/1GhXqzMcqtqXZjafhpEwh_ydRWuBSTx3T/view?usp=sharing"
        },
        {
            id: "short-2",
            category: "short-form",
            orientation: "portrait",
            title: "Reel from long content video",
            desc: "Fast-paced educational short breaking down the key differences between a Data Analyst and a Business Intelligence Analyst using engaging motion graphics, dynamic captions, smooth transitions, and visual storytelling designed for maximum audience retention.",
            thumbnail: "https://img.ge/i/1bgLr79.png",
            duration: "1:42",
            tags: [
                "Tech Short",
                "Trend paper Hook",
                "After Effects"
            ],
            driveUrl: "https://drive.google.com/file/d/1PY81zaM3i8x7kZriwViTKJOI_dUFMhDP/view?usp=sharing"
        },
        {
            id: "short-3",
            category: "short-form",
            orientation: "portrait",
            title: "TELSIP Business Intelligence Reports",
            desc: "Corporate promotional video highlighting real-time analytics dashboards, call performance insights, and business intelligence reports with premium motion graphics and cinematic transitions.",
            thumbnail: "https://img.ge/i/xn7VD31.png",
            duration: "0:27",
            tags: [
                "AI Voice",
                "Corporate Video",
                "Motion Graphics",
                "After Effects"
            ],
            driveUrl: "https://drive.google.com/file/d/1uCyZkTDVELWGz3QGegndZAqkJ7f349_s/view?usp=sharing"
        },
        {
            id: "short-4",
            category: "short-form",
            orientation: "portrait",
            title: "Travel Highlight from RANDOM shots",
            desc: "Fix shaky video clips from the trip in Port Said with color correction and smooth transitions, to make the short highlight(project Date: 20-8-2023)",
            thumbnail: "https://img.ge/i/GnQmg79.png",
            duration: "0:25",
            tags: ["Fix Video",
                "Travel",
                "Premiere Pro",
            ],
            driveUrl: "https://drive.google.com/file/d/1DyiohsjCqL8dUqZD-cAbqgbiWk1bglBG/view?usp=sharing"
        },

        // LONG-FORM CATEGORY (YouTube Storytelling)
        {
            id: "long-1",
            category: "long-form",
            orientation: "landscape",
            title: "Data Science Roadmap 2026",
            desc: "YouTube video featuring a complete 2026 Data Science roadmap with engaging motion graphics, clean editing, and clear visual storytelling.",
            thumbnail: "https://img.ge/i/BQaWZ66.png",
            duration: "08:30",
            tags: ["YouTube Tech", "Storytelling", "Chapter Visuals", "Behance Featured"],
            driveUrl: "https://drive.google.com/file/d/1TjQxjVc-DO7EhovugIXkKQXPC1saBU3a/view?usp=sharing"
        },
        {
            id: "long-2",
            category: "long-form",
            orientation: "landscape",
            title: "Career & Tech Tips",
            desc: "A career-focused video structured into clear, interconnected chapters, allowing viewers to follow each challenge and solution in a logical, easy-to-digest progression. Enhanced with dynamic motion graphics, engaging visual storytelling, and polished editing to maximize clarity and retention.",
            thumbnail: "https://img.ge/i/bq81792.jpg",
            duration: "19:19",
            tags: ["Career Advice", "Content Structuring", "Visual Storytelling"],
            driveUrl: "https://drive.google.com/file/d/1ebtnNZaGciLauHrlGFlS74qKr_PmtTfE/view?usp=sharing"
        },

        // VIDEOGRAPHY & EVENT COVERAGE CATEGORY

        {
            id: "video-1",
            category: "videography",
            orientation: "landscape",
            title: "Videography a simple Project",
            desc: "Professional corporate event recap with clean interviews, B-roll stabilization, and uplifting background score.",
            thumbnail: "https://img.ge/i/ko5u874.png",
            duration: "01:00",
            tags: ["Corporate Event", "B-Roll Edit", "Color Matching", "Audio Polish"],
            driveUrl: "https://drive.google.com/file/d/1_UaiI_RnS01vrnv43GtER4rTyI9lK5KU/view?usp=sharing"
        },
        {
            id: "video-2",
            category: "videography",
            orientation: "landscape",
            title: "Science Festivity Event Coverage",
            desc: "Dynamic event highlight video capturing keynotes, audience engagement, fast cuts, and branded graphics.",
            thumbnail: "https://img.ge/i/vPAVb80.png",
            duration: "05:12",
            tags: ["Event Recap", "Science Festivity", "Live Videography", "Highlight Reel"],
            driveUrl: "https://drive.google.com/file/d/133PfoXtzAushyVf-6jYyglpDc1zyMqFb/view?usp=sharing"
        },

        // MOTION GRAPHICS & CHROMA KEY CATEGORY
        {
            id: "motion-1",
            category: "motion",
            orientation: "landscape",
            title: "Saas Motion Graphics",
            desc: "This project showcases my motion design workflow—from transforming a plain technical script into a premium explainer using Motion Graphics, 3D elements, modern UI animation, Liquid Glass effects, AI voice-over, and cinematic sound design for a polished SaaS product experience.",
            thumbnail: "https://img.ge/i/n9DRl34.png",
            duration: "01:36",
            tags: ["3D", "Saas Style", "Animation", "After Effects", "Liquid Glass"],
            driveUrl: "https://drive.google.com/file/d/1HXKDVhQKe-yOgLJCx2zJfxoM_WpX7UhR/view?usp=sharing"
        },
        {
            id: "motion-2",
            category: "motion",
            orientation: "landscape",
            title: "2D Infographic Explainer Video",
            desc: "Custom vector animation, motion graphics elements, diagram pop-ups, and synchronized voiceover sound design.",
            thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
            duration: "02:40",
            tags: ["Motion Graphics", "Explainer", "Vector Anim", "Audio Sync"],
            driveUrl: ""
        },

        // AI VIDEOS CATEGORY (1 Portrait 9:16 & 1 Landscape 16:9)
        {
            id: "ai-1",
            category: "ai-videos",
            orientation: "portrait",
            title: "CRM inteegration AI Commercial",
            desc: "Vertical 9:16 AI-generated cinematic short created using Midjourney v6 for keyframe art, Runway Gen-3 for motion synthesis, ElevenLabs for AI voice generation, and Premiere Pro for sound design & post-production.",
            thumbnail: "https://img.ge/i/0orfd12.png",
            duration: "0:35",
            tags: ["AI Video", "Portrait 9:16", "Midjourney", "Runway Gen-3", "ElevenLabs"],
            driveUrl: "https://drive.google.com/file/d/1dXvPkGEr0iuQs6_vUrVu5RU3qm99JFY6/view?usp=sharing",
            // aiDetails: {
            //     heroVideoUrl: "https://drive.google.com/file/d/1GhXqzMcqtqXZjafhpEwh_ydRWuBSTx3T/view?usp=sharing",
            //     overview: "An experimental vertical cyberpunk short produced entirely using generative AI tools. Explores high-contrast neon aesthetics, futuristic character design, and dramatic motion synthesis optimized for TikTok & Instagram Reels.",
            //     toolsUsed: ["Midjourney v6", "Runway Gen-3 Alpha", "ElevenLabs Voice AI", "Topaz Video AI", "Adobe Premiere Pro"],
            //     workflow: [
            //         { step: "01. Concept & Scripting", desc: "Developed narrative hooks and prompt architecture with ChatGPT." },
            //         { step: "02. Image Generation", desc: "Generated keyframes and environment concept art in Midjourney v6." },
            //         { step: "03. Motion Synthesis", desc: "Converted static keyframes into fluid video clips using Runway Gen-3 & Kling AI." },
            //         { step: "04. Post-Production & SFX", desc: "Color graded, upscaled with Topaz, and added cinematic sound design in Premiere Pro." }
            //     ],
            //     role: "AI Video Director, Prompt Engineer, Motion Designer & Sound Editor",
            //     finalResult: "Generated over 250,000 organic views across TikTok & Reels with 92% retention rate."
            // }
        },
        {
            id: "ai-2",
            category: "ai-videos",
            orientation: "landscape",
            title: "CarevAI | Cinematic Product Launch Film | AI Healthcare Commercial",
            desc: "Created a cinematic product commercial for CarevAI, showcasing my end-to-end production workflow. Responsible for creative direction, scriptwriting, storytelling, AI voice-over, product visualization, maintaining product consistency across AI-generated shots, video editing, seamless transitions, sound design, and final color polish.",
            thumbnail: "https://img.ge/i/wyCTD2.png",
            duration: "01:28",
            tags: ["AI Commercial", "AI Filmmaking", "Veo 3.1 - Lite", "Premiere Pro"],
            driveUrl: "https://drive.google.com/file/d/1GwMfgpWfT1nZGDLA4IqEMGJ-vMpwo-bn/view?usp=sharing",
            // aiDetails: {
            //     heroVideoUrl: "https://drive.google.com/file/d/1GhXqzMcqtqXZjafhpEwh_ydRWuBSTx3T/view?usp=sharing",
            //     overview: "Cinematic commercial concept for a futuristic smart city. Built completely using AI image and video generation pipelines combined with 3D text camera tracking and voice-over narrative.",
            //     toolsUsed: ["Midjourney v6", "Luma Dream Machine", "Kling AI", "ChatGPT-4o", "Adobe After Effects"],
            //     workflow: [
            //         { step: "01. Storyboarding", desc: "Prompting and camera movement planning." },
            //         { step: "02. Generative Video", desc: "High-resolution 16:9 video synthesis." },
            //         { step: "03. Motion & Compositing", desc: "Graphics overlay, visual effects and lower-thirds in After Effects." }
            //     ],
            //     role: "AI Art Director, Video Synthesizer & Compositor",
            //     finalResult: "Featured on AI Showcase galleries and brand pitch presentations."
            // }
        }
    ],
    testimonials: [
        {
            name: "David Miller",
            role: "Content Creator",
            quote: "Abdelrhman turned my raw talking-head footage into an engaging, viral-style documentary. His pacing, sound design, and retention hooks doubled our average watch time!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Sarah Jenkins",
            role: "Marketing Director at Apex Media",
            quote: "Working remotely with Abdelrhman was effortless. He delivers on time, respects brand guidelines, and brings unmatched cinematic flair to every social ad.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Kareem Hassan",
            role: "Event Director, Science Festivity",
            quote: "The event coverage and highlight video Abdelrhman produced for us was spectacular! He captured the excitement and energy flawlessly with high-quality color grading.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        },
        {
            name: "Elena Rostova",
            role: "Online Course Instructor & Coach",
            quote: "Flawless chroma key keying and clean motion graphics! My course modules look ultra-professional. Abdelrhman is my go-to video editor.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
        }
    ],

    faqs: [
        {
            question: "What types of videos do you edit?",
            answer: "I specialize in high-retention short-form videos (Reels, TikToks, YouTube Shorts), long-form YouTube documentaries, talking-head videos, corporate/event promos, commercial ads, motion graphics, and AI-assisted visual productions."
        },
        {
            question: "How long does a typical project take?",
            answer: "Turnaround depends on project complexity and length. Short-form edits (Reels/Shorts) are typically delivered within 24 to 48 hours. Long-form YouTube videos usually take 3 to 5 business days, complete with motion hooks, sound design, and color grading."
        },
        {
            question: "How many revisions are included?",
            answer: "Every project includes 2 full rounds of revisions to refine pacing, sound, color, and visual elements until the edit aligns 100% with your creative vision and brand style."
        },
        {
            question: "What files do you need from me?",
            answer: "Simply send your raw video footage, voiceover/audio tracks, brand assets (logo, font styles, color palette), and any inspiration/reference videos via Google Drive, Dropbox, or Frame.io."
        },
        {
            question: "Do you work with international clients?",
            answer: "Yes, absolutely! I collaborate with content creators, agencies, and businesses across North America, Europe, the Middle East, and worldwide with seamless remote communication regardless of time zone."
        },
        {
            question: "Can you create Motion Graphics?",
            answer: "Yes! Using Adobe After Effects, I create dynamic animated text, lower thirds, logo stings, custom graphic overlays, callouts, and chroma key (green screen) compositions."
        },
        {
            question: "Can you produce AI-generated videos?",
            answer: "Yes! I leverage cutting-edge AI generation tools (Midjourney, Runway Gen-2/Gen-3, Luma Dream Machine, ElevenLabs) to craft hyper-realistic B-roll, voiceovers, AI animation, and futuristic visuals."
        },
        {
            question: "What software and AI tools do you use?",
            answer: "My primary post-production stack includes Adobe Premiere Pro for editing & pacing, After Effects for motion graphics, Photoshop for asset prep, and AI tools like Midjourney, Runway, and ElevenLabs."
        },
        {
            question: "Can you edit videos for YouTube, Instagram, TikTok, and Ads?",
            answer: "Yes! I deliver custom aspect ratios (9:16 vertical for TikTok/Reels/Shorts, 16:9 widescreen for YouTube, 1:1 square for feed ads) engineered specifically for platform retention and audience engagement."
        },
        {
            question: "How do we communicate during the project?",
            answer: "We communicate via WhatsApp or Email for quick updates, Frame.io or Loom for timestamped video feedback, and Zoom/Calendly calls to align on major project milestones."
        }
    ]
};
