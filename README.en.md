# About 67 · 3D Personal Résumé

<p align="center"><strong>Scrolling is the camera move. Sixseven's résumé lives inside a 3D scene.</strong></p>

<p align="center">
  <a href="https://whois67.52671314.xyz/resume/">Live</a> |
  <a href="#quick-start">Quick start</a> |
  <a href="#make-it-yours">Make it yours</a> |
  <a href="#swap-the-character-model">Swap model</a> |
  <a href="#tutorials">Tutorials</a> |
  <a href="#deployment">Deploy</a> |
  <a href="#source-vs-no-code">Source vs no-code</a> |
  <a href="README.md">简体中文</a>
</p>

This is Sixseven's scroll-driven 3D résumé and long-form portfolio. The character, résumé, and camera motion establish identity first; AI DataHub, AI Team Agent, AI Craft, and Data Analysis then show what was built, how judgments were made, and what evidence supports them.

The current repository is [`bigKING67/67-3d-resume`](https://github.com/bigKING67/67-3d-resume), selectively adapted from [`dayinji/sen-3d-resume`](https://github.com/dayinji/sen-3d-resume). The upstream project supplies the React Three Fiber foundation, scroll-driven camera, Blender scene, tutorials, and static-deployment base. This fork owns its personal content, model stickers, work media, visual decisions, and release strategy. See [`UPSTREAM.md`](UPSTREAM.md) for provenance and absorption records.

> The live URL was verified as `About 67` on 2026-09-02. It is assembled by a downstream blog repository from a pinned revision. Pushing this repository alone does not update that production URL; see [Deployment](#deployment).

## Project documentation

| Document | Authority | Read it when |
| --- | --- | --- |
| [`README.md`](README.md) / [`README.en.md`](README.en.md) | Entry point, setup, customization, tutorials, and deployment map | Entering the repository |
| [`PRODUCT.md`](PRODUCT.md) | Product position, visitor questions, truthfulness, and success criteria | Changing information architecture or stories |
| [`DESIGN.md`](DESIGN.md) | Visual system, 3D, stickers, work media, and responsive contracts | Changing visuals, model, or interaction |
| [`docs/WORKS-STORYTELLING.md`](docs/WORKS-STORYTELLING.md) | Work writing, media selection, editorial layout, truth labels, and responsive rules | Building work details or imagery |
| [`docs/AI-CRAFT-CONTENT-PLAN.md`](docs/AI-CRAFT-CONTENT-PLAN.md) | Sources, claims, and media-candidate ledger for the seven AI Crafts | Changing an AI Craft detail |
| [`docs/3D-WORKFLOW.md`](docs/3D-WORKFLOW.md) | Model, sticker, eye, camera, export, and real-page validation routing | Changing 3D or the GLB |
| [`UPSTREAM.md`](UPSTREAM.md) | Upstream SHA, provenance, selective absorption, and protected boundaries | Comparing or absorbing upstream work |
| [`AGENTS.md`](AGENTS.md) | Agent implementation, verification, Git, and release boundaries | Asking Codex/AI to change the project |
| [`CLAUDE.md`](CLAUDE.md) | Upstream technical notes | Understanding the original implementation; local evidence still wins |

## Quick start

Use Node.js `^20.19.0 || >=22.12.0`.

```bash
git clone https://github.com/bigKING67/67-3d-resume.git
cd 67-3d-resume/web
npm ci
npm run dev
```

The development server defaults to [`http://localhost:5173`](http://localhost:5173). Run every npm command inside [`web/`](web):

```bash
npm run typecheck  # TypeScript
npm run lint       # ESLint
npm run render:craft-pilot-sources # rebuild SVG design sources for the two AI Craft pilots
npm run validate:works # work fields, links, and media contracts
npm run build      # type-check + Vite build → web/dist/
npm run check      # lint + work validation + build
npm run preview    # preview the build output
```

There is no standalone test suite today. Visible UI, GLB, and work-media changes still require real-browser checks at desktop and roughly 390px width; static checks cannot prove 3D rendering, cropping, or camera motion.

## Make it yours

This repository is currently Sixseven's personal version. To maintain it or turn a fork into someone else's résumé, edit the source of truth for each layer:

| What to change | Source of truth |
| --- | --- |
| Product position and visitor questions | [`PRODUCT.md`](PRODUCT.md) |
| Visual language, stickers, media, and responsive rules | [`DESIGN.md`](DESIGN.md) |
| Hero/About copy | `COPY` in `web/src/App.tsx` |
| Education, experience, clients, and social links | `web/src/ui/Resume.tsx` |
| Work sections, project names, summaries, and links | `web/src/data/works.ts` |
| One work's detail story | `web/src/content/works/<slug>.md` |
| Work frontmatter and Markdown parsing | `web/src/data/workDocs.ts` |
| Covers, heroes, and body media | `web/public/works/`; see [`docs/WORKS-STORYTELLING.md`](docs/WORKS-STORYTELLING.md) |
| 3D scene, camera, and postprocessing | `web/src/scene/Scene.tsx` |
| Editable character source / browser artifact | `blender/sen.blend` / `web/public/models/me.glb` |
| 3D changes, export, and validation | [`docs/3D-WORKFLOW.md`](docs/3D-WORKFLOW.md) |

A work is not finished by attaching one generic diagram. Mature details should make the subject, problem, personal responsibility, key decisions, implementation, proof, and boundaries clear. Body-media count follows the important claims and available evidence rather than a fixed three-image template. Section covers, project heroes, and body media have different jobs and should not be crops of the same source image.

Resolve public assets through relative build paths such as `./works/...` or `import.meta.env.BASE_URL`. Root-only `/...` paths will break when the site is mounted under `/resume/`.

## Swap the character model

`blender/sen.blend` is the editable source; `web/public/models/me.glb` is the browser artifact. A complete model change updates both. Replacing only the GLB is a temporary candidate, not a complete source delivery.

The runtime resolves these objects by name:

| GLB contract | Purpose |
| --- | --- |
| A camera and animation clip named `CameraAction` | Scroll-driven camera path |
| `focus-start` or `focus-0` | Hero focus anchor |
| Focus empties listed in `web/src/data/focusPoints.ts` | Résumé nodes and camera stops |
| `focus-works` | Works-section anchor; optional fallback to the last résumé anchor |
| A mesh with `eye` in its name | Cursor-following eyes |

Sticker planes must retain their face-conforming curved vertices. If Blender `Shrinkwrap` is used again, export with **Apply Modifiers** (`export_apply=True` in automation) or bake the result first; otherwise a flat plane can silently intersect the face. After updating `me.glb`, bump the model query parameter in `web/src/scene/Scene.tsx` to invalidate stale caches.

## Tutorials

[`tutor/`](tutor) contains upstream, user-oriented tutorials for learning the mechanisms or building a generic fork:

| Tutorial | Covers | Local boundary |
| --- | --- | --- |
| [Prepare a model with intro3d](tutor/intro3d处理模型教程/intro3d处理模型教程.md) | Browser-based model preparation and `me.glb` export | The export still has to satisfy this repo's GLB naming, camera, and source-sync contracts |
| [Cursor-following eyes](tutor/眼球教程/眼球教程.md) | Eye-follow implementation and model integration | Revalidate against the current `Scene.tsx` and real GLB |
| [AI sticker pack](tutor/贴纸教程/贴纸教程.md) | Generate transparent stickers and place them in the scene | Also follow `DESIGN.md` brand, provenance, and visibility rules |
| [Deploy to GitHub Pages](tutor/部署教程/1-部署到-GitHub-Pages.md) | Generic GitHub Pages flow for a fork | Not the real release path for the `whois67` production URL |
| [Deploy to Cloudflare Pages](tutor/部署教程/2-部署到-Cloudflare-Pages.md) | Generic Cloudflare Pages flow for a fork | Sixseven's production URL is assembled by the blog repository |

These tutorials come from the upstream foundation and are reference material. They do not override this repository's `AGENTS.md`, `DESIGN.md`, dependency versions, personal content, or deployment decisions.

## Deployment

Build the static application locally:

```bash
cd web
npm ci
npm run build
```

`web/vite.config.ts` keeps `base: './'`, so HTML, JavaScript, fonts, HDR, GLB, and work media can be mounted under a subdirectory such as `/resume/`. This repository also retains a [GitHub Pages workflow](.github/workflows/deploy.yml) for its own Pages site.

Sixseven's production entry point is [`https://whois67.52671314.xyz/resume/`](https://whois67.52671314.xyz/resume/). The actual release chain is:

```text
validate résumé
  → scoped résumé commit
  → push / verify remote parity
  → update resume.lock.json in the blog repo
  → run pnpm build:pages in the blog repo
  → scoped blog commit / push
  → verify Pages and the custom domain
```

Commit, push, lock advancement, deployment, and rollback are separate authorization boundaries. See [`AGENTS.md`](AGENTS.md) for the exact receipts and rollback contract. A successful local build is not production evidence.

## Source vs no-code

The upstream project presents [intro3d](https://intro3d.com/) as a no-code route and model-preparation tool. This project uses the source route because it needs custom content architecture, camera motion, long-form work details, evidence media, subdirectory deployment, and a cross-repository release contract. The paths can be combined: prepare or export a model visually, then return here and satisfy the GLB and content contracts.

| | This source repository | No-code / visual tool |
| --- | --- | --- |
| Best for | Full control over structure, interaction, assets, and releases | Quickly building through an interface |
| Editable scope | React, Three.js, GLB, content, styling, and build chain | Whatever the tool currently exposes |
| Maintenance | You own dependencies, source artifacts, verification, and deployment | Depends on the tool's current capabilities and terms |
| Role here | Runtime and release source of truth | Optional model-preparation or early-prototype reference |

External-tool features, pricing, data handling, and terms can change; check the current official documentation before using them.

## How it works

This is a React SPA without an application backend: `web/index.html` → `web/src/main.tsx` → `web/src/App.tsx`. A fixed React Three Fiber `<Canvas>` sits behind scrollable HTML content:

- `web/src/scene/Scene.tsx` loads `me.glb` and drives camera animation, focus, eyes, and postprocessing;
- `web/src/ui/Resume.tsx` renders the résumé;
- `web/src/ui/Works.tsx` renders work sections and the detail overlay;
- `web/src/content/works/*.md` supplies project stories;
- `web/src/store.ts` manages lightweight interaction state.

## Repository structure

```text
web/                        React 18 + TypeScript + Vite app
  src/App.tsx               hero, Canvas, and page assembly
  src/scene/                Three.js scene, environment, and camera logic
  src/ui/                   résumé, works, loading, and overlay UI
  src/data/                 works and focus-point data
  src/content/works/        work-detail Markdown
  public/works/             reviewed work media and untracked local assets
  public/models/me.glb      browser model artifact
blender/sen.blend           editable 3D source
tutor/                      generic upstream customization tutorials
docs/                       local content and media contracts
PRODUCT.md / DESIGN.md      product and visual authority
AGENTS.md / UPSTREAM.md     agent rules and upstream records
```

## License and content boundaries

- Inherited code is used under the MIT license in [`LICENSE`](LICENSE).
- Upstream personal assets, this fork's personal content, character/stickers, work media, and third-party brands do not automatically become MIT-licensed with the code. See [`NOTICE`](NOTICE) and [`UPSTREAM.md`](UPSTREAM.md).
- Forks should replace names, résumé data, social links, character model, work copy, media, and unauthorized brand assets, and verify the licenses for fonts, HDR, and other third-party resources.

## Stack

React 18 · TypeScript · React Three Fiber · Three.js · React Three Postprocessing · Framer Motion · Zustand · Vite
