# ISE — Interactive Skills Enhancer

AI-powered, multilingual, age-aware life-skills simulation for ASD/ID support.  
**Loop:** See → Hear → Think → Decide → Respond → Consequence → Reflect → Grow

Live demo: `https://<username>.github.io/<repo>/` (after enabling GitHub Pages)

## Features (all 7 epics)
- **F1 Onboarding** — Language (EN/தமிழ்/हिन्दी), Age (Child/Teen/Young Adult/Adult), ASD & ID Support Mode
- **F2 Scenario Engine** — 30 trilingual scenarios across 6 skills (Safety, Boundaries, Communication, Emotional, Peer, Digital) × 4 ages
- **F3 Interaction** — Type, Voice (Speech-to-Text), or YES/NO/NOT SURE buttons
- **F4 Analysis & Consequence** — Mock AI scoring (Safety/Boundary/Communication/Decision + Overall) + consequence
- **F5 Reality Mirror** — Your Choice → What Happened → Strengths → To Improve → Better Response → Retry
- **F6 Growth Dashboard** — Skill progress (Beginning→Strong), avg score, recommendation
- **F7 Settings** — Font size, speech speed, audio, captions, readability, support mode, language (persisted in localStorage)

## Tech Stack (prototype — static, no backend)
- Static HTML/CSS/JS (no build) — `index.html`, `css/styles.css`, `js/data.js` (DB), `js/analysis.js` (mock AI), `js/app.js` (router/state/TTS/STT)
- Web Speech API for TTS/STT, `localStorage` for progress
- Spec alternative: *Single HTML + Vanilla JS to avoid build complexity* — backend (Node/Express + PostgreSQL + Redis) can be added later per §2/§3.

## Run locally
```bash
# any static server
python -m http.server 8080
# then open http://localhost:8080/
```
Or just double-click `index.html`.

## Deploy to GitHub Pages (hackathon URL)
1. Create repo on GitHub (e.g., `ise-prototype`) — **do NOT** initialize with README
2. In this folder:
```bash
git init
git add .
git commit -m "Initial commit: ISE prototype"
git branch -M main
git remote add origin https://github.com/<username>/ise-prototype.git
git push -u origin main
```
3. On GitHub: Settings → Pages → Build and deployment → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save
4. Wait 1-2 min → your URL: `https://<username>.github.io/ise-prototype/`

`.nojekyll` is included so Pages serves `js/` and `css/` correctly.

## Hackathon Pitch (90 sec)
> **Problem:** Life-skills training is quiz-based, not real-world — especially for ASD/ID learners.
> **Solution:** ISE rehearses real situations safely. Pick age/language/support, choose a skill, **listen** (AI voice), respond (type/voice/buttons), get instant **analysis + consequence**, reflect in **Reality Mirror**, track **Growth Dashboard**. Real World Mode hides the skill for transfer.
> **Demo:** Landing → Onboarding → Home → Safety scenario → Respond "I will call my mom" → Show 69% good → Mirror → Growth.

## Roadmap to production
- Replace `js/analysis.js` keyword engine with OpenAI API (`/api/scenario/evaluate`)
- Move `js/data.js` scenarios to PostgreSQL, add `POST /api/scenario/generate`
- Add Express + Redis + JWT auth, Docker Compose, as per spec §2-§9.
