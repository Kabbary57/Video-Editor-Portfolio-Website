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
            title: "Simple Medical Video",
            desc: "This video utilizes an engaging hook to attract viewers to learn the steps. The visual style is designed to be comfortable for the eyes and non-disruptive. It features simple storytelling to clarify the information for all age groups, facilitating easy understanding and smoothly guiding the audience through the steps within the video content.",
            thumbnail: "https://img.ge/i/b4qz089.jpg",
            duration: "00:56",
            tags: [
                "Medical", "color correction", "simple Premium animation",
                "Premiere Pro"
            ],
            driveUrl: "https://drive.google.com/file/d/17IIRsKRqaelB8M0XrD-j92oRrDXh919O/view?usp=sharing"
        },
        {
            id: "short-2",
            category: "short-form",
            orientation: "portrait",
            title: "Minimal Motion Style Video",
            desc: "This project highlights a minimal motion animation approach, focusing on clean typography, subtle transitions, and an uncluttered visual aesthetic. Optimized for short-form social media content, the precise keyframing and smooth timing ensure the core message is delivered effectively. The design relies on elegant simplicity and a seamless flow to maintain viewer engagement without visual fatigue.",
            thumbnail: "https://img.ge/i/7rA3k43.jpg",
            duration: "0:48",
            tags: ["Minimal Motion",
                "Trendy Style",
                "After Effects",
                "AI Voice",
                "3D"
            ],
            driveUrl: "https://drive.google.com/file/d/1k82NXuzln3Wv4hfaV973QAJdgzcd7orn/view?usp=sharing"
        },
        {
            id: "short-3",
            category: "short-form",
            orientation: "portrait",
            title: "Trendy style Reel from long content video",
            desc: "A trendy short-form reel created from a long-form , focusing on tips for passing your first job interview..",
            thumbnail: "https://img.ge/i/A7w2n91.jpg",
            duration: "2:11",
            tags: ["Trend Style",
                "Tech Short",
                "Trend paper Hook",
                "After Effects"
            ],
            driveUrl: "https://drive.google.com/file/d/1B8TvxSVAVRMHv9vHeQVIlNbsw_uXJlQk/view?usp=sharing"
        },
        {
            id: "short-4",
            category: "short-form",
            orientation: "portrait",
            title: "TELSIP Business Intelligence Reports",
            desc: "Corporate promotional video highlighting real-time analytics dashboards, call performance insights, and business intelligence reports with premium motion graphics and cinematic transitions.",
            thumbnail: "https://img.ge/i/QWcKF25.jpg",
            duration: "0:27",
            tags: [
                "AI Voice",
                "Corporate Video",
                "Motion Graphics",
                "After Effects"
            ],
            driveUrl: "https://drive.google.com/file/d/1uCyZkTDVELWGz3QGegndZAqkJ7f349_s/view?usp=sharing"
        },

        // LONG-FORM CATEGORY (YouTube Storytelling)
        {
            id: "long-1",
            category: "long-form",
            orientation: "landscape",
            title: "Ebla3 - Entertainment Video",
            desc: "A fast-paced entertainment video focused on storytelling and audience retention. Used dynamic cuts, reaction shots, memes, and comedic timing to keep the content engaging. A custom 4-way split-screen layout was used to present four people simultaneously while maintaining clear visual flow and supporting the story.",
            thumbnail: "https://img.ge/i/S11JK58.jpg",
            duration: "23:39",
            tags: ["Storytelling", "Fast-Paced Editing", "Comedy", "Split Screen"],
            driveUrl: "https://drive.google.com/file/d/1n0kakBmPS0dlGigMf36fJ5OhtO0Nd1tg/view?usp=sharing"
        },
        {
            id: "long-2",
            category: "long-form",
            orientation: "landscape",
            title: "Data Science Roadmap 2026",
            desc: "YouTube video featuring a complete 2026 Data Science roadmap with engaging motion graphics, clean editing, and clear visual storytelling.",
            thumbnail: "https://img.ge/i/Ucyol89.jpg",
            duration: "08:30",
            tags: ["YouTube Tech", "Storytelling", "Chapter Visuals", "Behance Featured"],
            driveUrl: "https://drive.google.com/file/d/1TjQxjVc-DO7EhovugIXkKQXPC1saBU3a/view?usp=sharing"
        },
        {
            id: "long-3",
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
            desc: "Task of film making workshop, the all entire projec(planning, videography, editing) in just 6 hours.",
            thumbnail: "https://img.ge/i/PvFm522.jpg",
            duration: "01:00",
            tags: ["Premiere Pro", "Film Making Task", "Videography", "Color Matching", "Vocal Removal"],
            driveUrl: "https://drive.google.com/file/d/1_UaiI_RnS01vrnv43GtER4rTyI9lK5KU/view?usp=sharing"
        },
        {
            id: "video-2",
            category: "videography",
            orientation: "landscape",
            title: "Science Festivity Event Coverage",
            desc: "Dynamic event highlight video capturing keynotes, audience engagement, fast cuts, and branded graphics.",
            thumbnail: "https://img.ge/i/5KyfJ48.jpg",
            duration: "05:12",
            tags: ["Premiere Pro", "Event Recap", "Videography", , "Science Festivity", "Live Videography", "Highlight Reel"],
            driveUrl: "https://drive.google.com/file/d/133PfoXtzAushyVf-6jYyglpDc1zyMqFb/view?usp=sharing"
        },

        // MOTION GRAPHICS & CHROMA KEY CATEGORY
        {
            id: "motion-1",
            category: "motion",
            orientation: "landscape",
            title: "Trendy Minimal Style (Abu Treka)",
            desc: "A minimalist motion graphics project inspired by Mohamed Aboutrika, combining custom 3D elements, animated typography, and video textures to create a premium sports-inspired visual style. The project focuses on clean composition, smooth transitions, dynamic camera movement, and subtle visual effects to highlight Aboutrika’s iconic football legacy in a modern and cinematic way.",
            thumbnail: "https://img.ge/i/8V9Yv74.jpg",
            duration: "00:14",
            tags: ["Motion Graphics", "Minimal Style", "Vector Anim", "Cinematic"],
            driveUrl: "https://drive.google.com/file/d/1dU-0N4y35DSifxebimsf7sMcycKZY1RU/view?usp=sharing"
        },
        {
            id: "motion-2",
            category: "motion",
            orientation: "landscape",
            title: "Saas Motion Graphics",
            desc: "This project showcases my motion design workflow—from transforming a plain technical script into a premium explainer using Motion Graphics, 3D elements, modern UI animation, Liquid Glass effects, AI voice-over, and cinematic sound design for a polished SaaS product experience.",
            thumbnail: "https://img.ge/i/Zag3J56.jpg",
            duration: "01:36",
            tags: ["3D", "Saas Style", "Animation", "After Effects", "Liquid Glass"],
            driveUrl: "https://drive.google.com/file/d/1HXKDVhQKe-yOgLJCx2zJfxoM_WpX7UhR/view?usp=sharing"
        },

        {
            id: "motion-3",
            category: "motion",
            orientation: "landscape",
            title: "2D Infographic Explainer Video",
            desc: "Custom vector animation, motion graphics elements, diagram pop-ups, and synchronized voiceover sound design.",
            thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
            duration: "02:40",
            tags: ["Motion Graphics", "Explainer", "Vector Anim", "Audio Sync"],
            driveUrl: ""
        },
        {
            id: "motion-4",
            category: "motion",
            orientation: "landscape",
            title: "Minimal INTRO with video TITLE (no music)",
            desc: "A clean and modern title sequence featuring smooth motion graphics, kinetic typography, and high-quality video integration—crafted to deliver a premium opening look without relying on music.",
            thumbnail: "https://img.ge/i/qHsLp69.jpg",
            duration: "00:42",
            tags: ["Motion Graphics", "Vector Anim", "Audio Sync", "After Effects"],
            driveUrl: "https://drive.google.com/file/d/1jOcf-_zEBKFXeRc-LTSrpqZBnqv9lyCZ/view?usp=sharing"
        },

        // AI VIDEOS CATEGORY (1 Portrait 9:16 & 1 Landscape 16:9)
        {
            id: "ai-1",
            category: "ai-videos",
            orientation: "portrait",
            title: "CRM inteegration AI Commercial",
            desc: "Vertical 9:16 AI-generated cinematic short created using Midjourney v6 for keyframe art, Runway Gen-3 for motion synthesis, ElevenLabs for AI voice generation, and Premiere Pro for sound design & post-production.",
            thumbnail: "https://img.ge/i/KipFQ82.jpg",
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
            thumbnail: "https://img.ge/i/BWDWd12.jpg",
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
        },
        {
            id: "ai-3",
            category: "ai-videos",
            orientation: "landscape",
            title: "Sight | صيت INTRO | AI Commercial Trailer",
            desc: "Created a cinematic product commercial for CarevAI, showcasing my end-to-end production workflow. Responsible for creative direction, scriptwriting, storytelling, AI voice-over, product visualization, maintaining product consistency across AI-generated shots, video editing, seamless transitions, sound design, and final color polish.",
            thumbnail: "https://img.ge/i/OC0Mf56.jpg",
            duration: "00:55",
            tags: ["AI Commercial", "AI Filmmaking", "Omini Flash", "Premiere Pro"],
            driveUrl: "https://drive.google.com/file/d/1McRknvtOZzcws5zVyp-YkTB9C0MLh5la/view?usp=sharing",
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
        },

        // 3D CATEGORY (3D Motion Design & Product Visuals)
        {
            id: "3d-1",
            category: "3d",
            orientation: "landscape",
            title: "3D Product Animation & CGI Motion Design",
            desc: "Cinematic 3D product commercial and motion design featuring dynamic camera choreography, photorealistic lighting, liquid materials, and sleek visual effects.",
            thumbnail: "https://img.ge/i/Zag3J56.jpg",
            duration: "01:15",
            tags: ["3D Animation", "CGI", "Product Viz", "Cinema 4D", "After Effects"],
            driveUrl: "https://drive.google.com/file/d/1HXKDVhQKe-yOgLJCx2zJfxoM_WpX7UhR/view?usp=sharing"
        }
    ],

    categories: [
        { id: "all", name: "All Projects" },
        { id: "short-form", name: "Short-Form (Reels/Shorts)" },
        { id: "motion", name: "Motion Graphics & Chroma" },
        { id: "long-form", name: "Long-Form (YouTube)" },
        { id: "videography", name: "Videography & Events" },
        { id: "ai-videos", name: "AI Videos" },
        { id: "3d", name: "3D" }
    ],
    testimonials: [
        {
            name: "Eng. Ahmed Abulkhair",
            role: "Data Scientist, 7adid Elsafina (YouTube)",
            quote: "Abdulrahman handled all the montage for my YouTube channel, 7adid Elsafina, and he did an outstanding job. Editing educational content is not easy. When you're teaching statistics and data science, the pacing has to keep people engaged without losing clarity, and he understood that balance perfectly. My lessons came out smooth, focused, and professional, and he consistently delivered on time. Easy to communicate with, open to feedback, and genuinely cares about the final result. Any creator looking for a video editor they can trust with their content should work with him.",
            rating: 5,
            avatar: "https://img.ge/i/23IyX25.png"
        },
        {
            name: "Mostafa Fathy",
            role: "Head of eLearning @ Armstrong",
            quote: "تجربتي في العمل مع عبدالرحمن في مونتاج الفيديوهات التعليمية كانت ممتازة جداً. أكثر ما يميزه هو السرعة الكبيرة في إنجاز المطلوب، والأهم من ذلك أنه يقدم جودة عالية جداً واحترافية بالرغم من سرعته في العمل. لمساته الفنية ساهمت في إيصال المحتوى التعليمي بشكل جذاب وممتع للمشاهدين. شخص ملتزم ومبدع، وأنصح بشدة بالتعامل معه.",
            rating: 5,
            avatar: "https://img.ge/i/tZRxj9.png"
        },
        {
            name: "Roaa Helaly",
            role: "Event Specialist and Science Communicator",
            quote: "The event coverage and highlight video Abdelrhman produced for us was spectacular! He captured the excitement and energy flawlessly with high-quality color grading.",
            rating: 5,
            avatar: "https://img.ge/i/um5qx40.jpg"
        }
        // ,
        // {
        //     name: "Elena Rostova",
        //     role: "Online Course Instructor & Coach",
        //     quote: "Flawless chroma key keying and clean motion graphics! My course modules look ultra-professional. Abdelrhman is my go-to video editor.",
        //     rating: 5,
        //     avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
        // }
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
            answer: "My primary post-production stack includes Adobe Premiere Pro for editing & pacing, After Effects for motion graphics, Photoshop & Illustrator for asset prep, Blender for 3D animation, and AI tools like Midjourney, Runway, and ElevenLabs."
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
